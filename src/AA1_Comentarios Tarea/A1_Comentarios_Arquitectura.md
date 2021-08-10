Tarea 1 : Escalabs React JS 
Alumno : Nicolás Allende

Patrón Arquitectura por Estados

Siguiendo buenas prácticas de Arquitectura limpia vista en clase,  (sugeridas por Uncle Bob Martin del Manifiesto Ágil) En esta carpeta guardamos todos los componentes que forman parte de las diferentes páginas. 

Partimos estruructurando desde la Carpeta ./src "Source"

1. La carpeta "components" alberga piezas que integran los componentes de páginas encontradas en la carpeta "pages". Los componentes son unidades estructurales que son englobadas por una mayor. Son los componentes que van a ser inyectados a una Página. Los 

2. Los componentes es recomendable que tengan una Carpeta con el Nombre de este. En esta carpeta podemos dejar tambien los archivos de estilos aplicados sobre ellos.

3. Los componentes estructurales reutilizables se recomienda integrarlos a esta carpeta "compnents" con las sguientes preceptos: 
a) darles una extensión  .components
b) también se recomienda darles una extensión de archivo .jsx ( a diferencia de .js)
c) Los archivos de estilo es tabien recomendable agregarles una extension .styles


4. Es bueno crear una carpeta para proveedores externos

5. Diferenciar los elementos de Javascript no asociados a un componente como archivos JS.

6. La carpeta de paginas "pages" hace alusion a la estructura de diseño del sitio por lo que el entorno de navegacion se estructura de manera similar donde cada pagina (componente global) queda identificado en orden con una carpeta que contiente un archivo ".componente" y otro ".styles" 
 
