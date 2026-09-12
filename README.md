# 📱 App de Elby - Aplicación de Llamadas Rápidas y Salud

Una aplicación web progresiva (**PWA**) diseñada especialmente para personas mayores o con dificultades visuales/motoras (pensada con amor para la abuela Elby). Facilita la comunicación inmediata con familiares y servicios de emergencia mediante botones de llamada gigantes de un solo toque, e integra una ficha médica de emergencia siempre accesible.

---

## ✨ Características Principales

- 📞 **Llamadas Rápidas con un Solo Toque**:
  - Botones extra grandes con nombres legibles, íconos y contraste optimizado.
  - Clasificación organizada en **Hijos**, **Hermanos/as** y **Salud y Emergencias**.
  - Sin menús complicados: tocar el botón inicia la llamada telefónica inmediatamente (`tel:XXXXX`).
- 🚨 **Acceso Directo a Urgencias**:
  - Botón destacado para Emergencias Médicas (**107**).
  - Accesos directos a Hospitales o Médicos de cabecera.
- 🪪 **Carnet / Ficha de Salud Digital**:
  - Tarjeta de credencial médica visible en pantalla con:
    - **Obra Social / Prepaga** (ej: PAMI / OSECAC).
    - **DNI**.
    - **Grupo y Factor Sanguíneo** (ej: O+).
    - **Alergias Conocidas** (ej: Penicilina).
    - **Información Médica / Medicación Diaria** (ej: dosis y horarios de medicamentos).
- ⚙️ **Panel de Configuración Integrado**:
  - Permite a familiares añadir nuevos contactos, modificar nombres o teléfonos, cambiar emojis y eliminar botones desde el menú de ajustes.
  - Edición directa de la información del carnet de salud sin necesidad de modificar código.
  - Opción para restaurar los contactos y datos predeterminados en cualquier momento.
- 💾 **Persistencia de Datos Local**:
  - Toda la configuración se guarda en el dispositivo mediante `localStorage`. No requiere servidores externos ni bases de datos complejas.
- 📲 **Instalable como App (PWA)**:
  - Incluye manifiesto y Service Worker dinámico.
  - Se puede instalar en la pantalla de inicio de teléfonos Android (Chrome) o iPhone/iOS (Safari) para verse y sentirse como una app nativa, funcionando incluso sin conexión a internet.
- 👁️ **Diseño de Alta Accesibilidad**:
  - Tipografía clara (*Outfit / Inter*) con tamaños de letra grandes.
  - Alto contraste de colores (fondo claro, textos oscuros y botones coloridos bien diferenciados).
  - Indicadores visuales de foco para facilitar la navegación táctil o asistida.

---

## 🚀 Cómo Usar la Aplicación

### Opción 1: Abrir localmente en cualquier navegador
1. Descarga o clona este repositorio:
   ```bash
   git clone https://github.com/emigraci/app-para-la-abuela.git
   ```
2. Abre el archivo `index.html` (o `App_de_Elby.html`) en tu navegador favorito (Chrome, Edge, Safari, Firefox).

### Opción 2: Usar desde el celular e instalar en la pantalla de inicio
1. Abre el enlace de la aplicación en el navegador del teléfono.
2. Para instalarla como acceso directo:
   - **En Android (Google Chrome)**: Toca los tres puntos de la esquina superior derecha y selecciona **"Instalar aplicación"** o **"Agregar a la pantalla principal"**.
   - **En iPhone (Safari)**: Toca el botón de compartir (el cuadrado con la flecha hacia arriba) y selecciona **"Agregar a pantalla de inicio"**.
3. ¡Listo! La app aparecerá con su ícono en el celular para un acceso inmediato.

---

## 🛠️ Configuración y Personalización

1. Presiona el botón **⚙️ Ajustes** en la esquina superior derecha.
2. Para agregar o modificar un contacto:
   - Selecciona la categoría (*Hijos*, *Hermanos* o *Salud y Emergencias*).
   - Escribe el nombre y el número de teléfono.
   - Elige un ícono representativo y presiona **💾 Guardar Botón**.
3. Para editar la credencial médica, presiona el botón **✏️ Editar** en la sección *Mi Carnet de Salud*.

---

## 💻 Tecnologías Utilizadas

- **HTML5 Semántico**: Estructura accesible y ligera.
- **Tailwind CSS**: Estilizado moderno, responsivo y de alto contraste.
- **JavaScript (Vanilla)**: Lógica reactiva para modales, almacenamiento y renderizado sin dependencias pesadas.
- **PWA (Progressive Web App)**: Web App Manifest dinámico y Service Worker para soporte offline e instalación.
- **LocalStorage API**: Almacenamiento seguro en el propio dispositivo del usuario.

---

## 📁 Estructura del Proyecto

```text
app-para-la-abuela/
├── App_de_Elby.html   # Archivo principal de la aplicación
├── index.html         # Punto de entrada estándar para publicación web y GitHub Pages
└── README.md          # Documentación y descripción del proyecto
```

---

❤️ *Creado con cariño para cuidar y mantener siempre conectada a la abuela.*
