# 👵📱 App para la Abuela (App de Elby)

> **Aplicación Web Progresiva (PWA) de alta accesibilidad diseñada para que adultos mayores puedan realizar llamadas rápidas a familiares, contactar a servicios de emergencia y portar su carnet médico digital de forma sencilla e intuitiva.**

![PWA Ready](https://img.shields.io/badge/PWA-Ready-2563eb?style=for-the-badge&logo=pwa&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Offline Support](https://img.shields.io/badge/Offline-100%25-success?style=for-the-badge)

---

## 🎯 ¿Qué es esta aplicación?

Muchos adultos mayores encuentran dificultades con las interfaces sobrecargadas de los teléfonos modernos, agendas llenas de contactos o teclados pequeños.

**App para la Abuela** resuelve esto ofreciendo una pantalla limpia, con botones táctiles gigantes, tipografía ultralegible, contrastes altos y respuesta háptica (vibración) pensada para la máxima facilidad de uso diario y situaciones de urgencia.

---

## ✨ Características Principales

### 1. 📞 Llamadas Rápidas con 1 Toque
- Botones de gran tamaño (más de 76px de altura) fáciles de presionar.
- Organizados claramente por categorías: **Hijos**, **Hermanos/as** y **Salud y Emergencias**.
- Lanza llamadas directas (`tel:`) sin pasar por menús confusos.

### 2. 💬 Acceso Directo a WhatsApp
- Cada familiar cuenta con un botón verde dedicado de WhatsApp que abre una conversación directa formateada para números de Argentina (`+54 9 ...`).

### 3. 🚨 Botón SOS: Enviar Ubicación por WhatsApp
- En caso de emergencia o desorientación, el botón **"ENVIAR MI UBICACIÓN"** obtiene las coordenadas GPS actuales del teléfono y genera un mensaje de auxilio con el enlace a Google Maps listo para enviar a la familia.

### 4. 🪪 Carnet Médico y de Obra Social Digital
- Tarjeta visual con los datos indispensables para visitas médicas o guardias:
  - **Obra Social / Prepaga**: (PAMI / OSECAC)
  - **DNI**
  - **Grupo y Factor Sanguíneo**
  - **Alergias**
  - **Información médica y medicamentos**
- Todos los datos son editables desde la propia aplicación.

### 5. ⚙️ Administración y Ajustes
- Permite añadir nuevos contactos, modificar nombres/números/iconos o eliminarlos.
- Los datos se guardan de forma permanente en el dispositivo (`localStorage`).
- Botón de restauración para volver a los valores predeterminados en cualquier momento.

### 6. 📱 PWA Instalable y Funcionamiento Offline
- Se instala como una aplicación nativa en la pantalla principal del celular (Android y iPhone) sin requerir descarga desde tiendas de apps.
- Incluye un **Service Worker** (`sw.js`) que almacena en caché la interfaz y recursos para que funcione incluso sin datos móviles ni conexión WiFi.

---

## 📂 Archivos del Proyecto

```text
app-para-la-abuela/
├── index.html       # Interfaz de usuario, componentes y lógica JavaScript
├── manifest.json    # Manifiesto de la PWA (nombre, colores, modo standalone)
├── sw.js            # Service Worker para funcionamiento offline y caché
├── icon-192.svg     # Ícono vectorial de alta definición (192x192)
├── icon-512.svg     # Ícono vectorial de alta definición (512x512)
└── README.md        # Documentación oficial del repositorio
```

---

## 🚀 Cómo Usarla e Instalarla en el Celular

### 1. Activar en GitHub Pages (Recomendado)
Al tener este repositorio en GitHub, puedes habilitar **GitHub Pages** para tener la app publicada con enlace HTTPS gratis:

1. En este repositorio, ve a la pestaña **Settings** (Configuración).
2. En el menú lateral izquierdo, haz clic en **Pages**.
3. En **Branch** (Rama), selecciona `main` y la carpeta `/ (root)`.
4. Haz clic en **Save** (Guardar).
5. En unos segundos, GitHub te proporcionará una URL pública similar a:
   ```text
   https://emigraci.github.io/app-para-la-abuela/
   ```

### 2. Instalar en el teléfono de la abuela:
- **En Android (Chrome)**: Abre el enlace anterior. Aparecerá el botón verde **"Instalar App en el Celular"** en la parte superior. Si no, pulsa los 3 puntos arriba a la derecha y selecciona **"Instalar aplicación"** o **"Agregar a la pantalla principal"**.
- **En iPhone (Safari)**: Abre el enlace, toca el botón **Compartir** (icono de cuadro con flecha hacia arriba) y elige **"Agregar al inicio"**.

¡Listo! La aplicación tendrá su propio ícono en la pantalla de inicio y se abrirá a pantalla completa.

---

## 💻 Ejecutar Localmente en PC

1. Descarga o clona este repositorio.
2. Abre el archivo `index.html` en cualquier navegador moderno (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
