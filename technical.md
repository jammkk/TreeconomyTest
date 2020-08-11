## Ejercicio Tecnico
- Se proponé desarrollar este ejercició con un patrón de diseño de inyección de dependencias, seleccionando el entorno más apto para esta implementación (Node.js), con el fin de demostrar la simplicidad y hacer gala de las utilidades asincronas que tiene.

### Descargar repositorio:
- git clone https://github.com/jammkk/TreeconomyTest.git

### Iniciar aplicación de node:
- npm install 

### Configuración de variables de entorno
- Si bien las variables de entorno se encuentran definidas en el archivo .env, el aplicativo se encarga de cogerlas del entorno de producción en caso de estar en el y usar las variables de entorno del sistema operativo en el que se este trabajando, si se desea revisar en testing puede ejecutarse sin ningún problema.

### Ejecución del aplicativo
- Se puede correr el aplicativo de 2 formas en la raiz del proyecto (en la carpeta donde se encuentra el archivo package.json)
    - npm start
    - node index.js

### Endpoints funcionales
    - http://localhost:5000/products/ // GET: Este endpoint retorna todos los productos y el valor de la suma de los value asociados a cada producto.
    - http://localhost:5000/products/ // POST: Este endpoint crea un nuevo producto en la base de datos, retornando la información del producto creado (incluyendo el id de mongoDb).
    - http://localhost:5000/products/5f32ade1a1e25e26a43230c0 // GET este endpoint devuelve información de un producto específico
    - http://localhost:5000/products/5f32b20d31d95b282cd1f0ea //PUT este endpoint actualiza la información de un producto, enviando el id en la url
    -http://localhost:5000/products/5f32b20d31d95b282cd1f0ea //DELETE este endpoint elimina un producto en la base de datos enviando su id en la url



