# Proyecto Documentado con JSDoc

Este proyecto incluye la documentación del código fuente utilizando JSDoc.

## Pasos realizados

1. **Instalación de dependencias**:
   - Node.js y JSDoc fueron instalados.
   - `npm install --save-dev jsdoc`

2. **Documentación del código**:
   - Se añadieron comentarios usando la sintaxis de JSDoc.

3. **Automatización con npm**:
   - Se creó un script en `package.json` para ejecutar JSDoc: `npm run doc`.

4. **Generación de documentación**:
   - La documentación fue generada y almacenada en la carpeta `docs`.

## Nota importante

- **node_modules** y la carpeta **docs** están en el archivo `.gitignore` y no se subirán al repositorio.

## Comandos útiles

- Generar la documentación:
  ```bash
  npm run doc


# Explicación de modularización

El código se ha estructurado en diferentes módulos para mejorar su organización y facilitar su mantenimiento. La modularización se ha realizado de la siguiente manera:

1. **Módulo de Clases (clases/)**

Este directorio contiene las clases fundamentales del sistema:

 - Asignatura.js: Representa una asignatura con sus calificaciones.

 - Direccion.js: Define la estructura para la dirección de un estudiante.

 - Estudiante.js: Modelo de estudiante con nombre, edad y lista de asignaturas.

 - Lista.js: Clase genérica para manejar listas de elementos.

 - ListaAsignaturas.js: Gestiona una colección de asignaturas.

 - ListaEstudiantes.js: Gestiona una colección de estudiantes.


2. **Módulo de Gestores (gestores/)**

Este módulo contiene las funciones encargadas de gestionar los datos de los estudiantes y asignaturas:

 - gestionarAsignaturas.js: Permite agregar y eliminar asignaturas.

 - gestionarEstudiantes.js: Maneja la gestión de estudiantes en el sistema.

 - verReporteGeneral.js: Genera y muestra informes con calificaciones y promedios.


3. **Módulo de Menús (menus/)**

Aquí se encuentran los archivos encargados de la navegación dentro de la aplicación:

 - menuAsignaturas.js: Menú de opciones para gestionar asignaturas.

 - menuEstudiantes.js: Menú de opciones para gestionar estudiantes.

 - menuPrincipal.js: Punto de entrada principal para la selección de opciones.


4. **Archivo Principal (app.js)**

El archivo app.js actúa como punto de inicio del programa. Se encarga de:

 - Importar los módulos necesarios.

 - Mostrar el menú principal.

 - Coordinar las interacciones del usuario con los distintos gestores.

 - Realizar pruebas para verificar el correcto funcionamiento de las funciones del sistema.


---

# Compatibilidad con otros navegadores

Este proyecto es un sistema de gestión académica desarrollado con JavaScript, Webpack y Babel. A continuación, se detallan los pasos para configurar el entorno, desplegar el código y probar su funcionamiento.

---

## **1. Configuración del entorno**

Sigue estos pasos para configurar el entorno de desarrollo:

1. **Instalar Node.js y npm**:
   - Descarga e instala Node.js desde [nodejs.org](https://nodejs.org/).
   - Verifica la instalación ejecutando en la terminal:
     ```bash
     node -v
     npm -v
     ```

2. **Clonar el repositorio**:
   - Clona el repositorio de GitHub en tu máquina local:
     ```bash
     git clone https://github.com/LauraNC28/DWEC_Laura_Nievas_Coca_2.git
     cd ProyectoSGAEA
     ```

3. **Instalar dependencias**:
   - Instala las dependencias del proyecto con npm:
     ```bash
     npm install
     ```

4. **Compilar el proyecto**:
   - Compila el proyecto para producción:
     ```bash
     npm run build
     ```
   - Esto generará los archivos en la carpeta `dist`.

---

## **2. Desplegar el código en GitHub Pages**

Para desplegar el proyecto en GitHub Pages, sigue estos pasos:

1. **Subir el código a GitHub**:
   - Añade los archivos al área de preparación, haz commit y súbelos a GitHub:
     ```bash
     git add .
     git commit -m "Subiendo proyecto listo para producción"
     git push origin master
     ```

2. **Configurar GitHub Pages**:
   - Ve a la página de tu repositorio en GitHub.
   - Haz clic en **Settings** > **Pages**.
   - En **Source**, selecciona la rama `master` y la carpeta `dist` (o `/docs` si moviste los archivos allí).
   - Guarda los cambios y espera a que GitHub Pages genere la URL de tu sitio web.

3. **Acceder al sitio web**:
   - Una vez configurado, accede a tu sitio web en la URL proporcionada por GitHub Pages, por ejemplo:
     ```
     https://LauraNC28.github.io/DWEC_Laura_Nievas_Coca_2/
     ```
     
---

## **3. Probar el código**

Para probar el código en diferentes navegadores y entornos, sigue estos pasos:

1. **Pruebas manuales**:
   - Abre el sitio web en diferentes navegadores (Chrome, Firefox, Safari, Edge) y verifica que todo funcione correctamente.
   - Usa herramientas como **BrowserStack** o **LambdaTest** para probar en navegadores antiguos (por ejemplo, Internet Explorer 11).

2. **Pruebas automatizadas**:
   - Si has configurado pruebas automatizadas con **Cypress** o **Katalon Studio**, ejecuta las pruebas para verificar el comportamiento del sitio web.
   - Ejemplo con Cypress:
     ```bash
     npx cypress open
     ```

3. **Verificar la compatibilidad**:
   - Asegúrate de que el sitio web funcione correctamente en dispositivos móviles, tablets y diferentes resoluciones de pantalla.

---

## **4. Resultados de las pruebas**

Después de realizar las pruebas, se obtuvieron los siguientes resultados:

### **Navegadores modernos**
- **Chrome (última versión)**: El sitio web funciona correctamente. Todos los elementos se muestran como se esperaba.
- **Firefox (última versión)**: Comportamiento similar a Chrome. Sin problemas detectados.
- **Safari (última versión)**: Funciona correctamente, pero se observa un ligero retraso en la carga de imágenes.

### **Navegadores antiguos**
- **Internet Explorer 11**: El sitio web no funciona correctamente. Algunas funcionalidades modernas (como Flexbox y Grid) no son compatibles.
- **Safari 12**: Funciona correctamente, pero algunas animaciones CSS no se reproducen.

### **Dispositivos móviles**
- **Android (Chrome)**: El sitio web es responsive y se adapta correctamente a diferentes tamaños de pantalla.
- **iOS (Safari)**: Funciona correctamente, pero se observa un problema con el desplazamiento suave (smooth scrolling).

### **Accesibilidad**
- El sitio web pasa las pruebas básicas de accesibilidad, pero se recomienda mejorar el contraste de colores para cumplir con las pautas WCAG.

---

## **Conclusión**

El sitio web funciona correctamente en navegadores modernos y dispositivos móviles, pero presenta problemas de compatibilidad en navegadores antiguos como Internet Explorer 11. Se recomienda implementar polyfills o soluciones alternativas para mejorar la compatibilidad con navegadores antiguos.