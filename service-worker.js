// Nombre y versión de la caché
const CACHE_NAME = 'elby-cache-v1';

// Archivos estáticos esenciales para funcionamiento offline (App Shell)
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.svg',
  './icon-512.svg',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@500;700;800;900&display=swap'
];

// 1. INSTALACIÓN: Precarga y almacenamiento de archivos críticos en caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Precargando caché estática...');
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[Service Worker] Advertencia al precargar algún recurso externo:', err);
      });
    }).then(() => self.skipWaiting()) // Forzar activación inmediata
  );
});

// 2. ACTIVACIÓN: Limpieza de versiones antiguas de caché
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[Service Worker] Eliminando caché obsoleta:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim()) // Tomar control de clientes de inmediato
  );
});

// 3. INTERCEPTACIÓN DE PETICIONES (Estrategia Cache First con fallback a red)
self.addEventListener('fetch', (event) => {
  // Solo procesar peticiones HTTP/HTTPS con método GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Si el recurso ya existe en caché, retornarlo inmediatamente (Cache First)
      if (cachedResponse) {
        // Opcional: Actualización en segundo plano (Stale-While-Revalidate en red)
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
          }
        }).catch(() => {
          // Si no hay conexión, se mantiene la versión en caché sin error
        });

        return cachedResponse;
      }

      // Si no está en caché, buscarlo en la red
      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
            return networkResponse;
          }

          // Guardar una copia en caché para futuras peticiones offline
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch(() => {
          // Si no hay red y se intenta navegar a una página, mostrar la página principal
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});
