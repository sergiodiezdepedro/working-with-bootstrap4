# Trabajando con Bootstrap 4

Un entorno de trabajo para desarrollar un sitio con el apoyo de [Bootstrap 4](http://getbootstrap.com/). 

Tras probar el entorno que ofrece Bootstrap para el desarrollo desde las fuentes me quedó una impresión muy clara: es pesado, farragoso, complicado, lleno de dependencias, no todas muy útiles.

Así, decidí adecuar los recursos a la necesidad de trabajar en proyectos de tamaño medio-pequeño.

Puesto que si se emplea este framework CSS en la construcción de sitios estáticos web rara vez hay que realizar grandes implementaciones JavaScript, el viejo, pero aún eficaz Gulp, es más manejable que Webpack. Por ello, todo este despliegue descansa en Gulp.

Puesto que el nuevo Bootstrap está construido con Sass, cualquier usuario avezado de este preprocesador CSS sabe cómo incluir las clases, ventajas y recursos del framework y personalizarlos a medida de las necesidades concretas del proyecto. Un simple `include` y dispones de todo el arsenal Sass de Bootstrap. Por consiguiente, este está disponible en el directorio `scss/bs-scss`.

En el pertinente `gulpfile.js` hay dos tareas:

- Por defecto: compila el scss, y refresca el navegador mediante [browsersync](https://browsersync.io/).
- `gulp cssprod` minifica y optimiza el css para producción, eliminando todas aquellas clases no utilizadas en los archivos html y/o javascript, mediante [PurifyCSS](https://github.com/purifycss/purifycss).

