# udemy-nodejsbootcamp
Node.js - Bootcamp Desarrollo Web inc. MVC y REST API, repositorio de pruebas para pasar mis cursos de udemy a un repo

# Seccion 2: Introduccion al curso

- ¿Que es node.js?
    Es un entorno de Ejecucion de Javascript orientado a Eventos Asincronos, no es un lenguaje, no es un framework. 
    Utiliza un enfoque de eventos asincronos; lo que significa que puede realizar multiples tareas asincronas tales como leer y escribir en el servidor, conectarse a una base de datos o enviar Request de Formularios.
    Pueden visitar multiples usuarios, y node se encargar de realizar todos esos eventos automaticamente
    Usa Codigo de JavaScript (ES6+)
    Cada vez esta mas unificado node y javascript, ademas de que usa paquetes de npm, ademas de que sirve para apps monoliticas, micro servicios, o API's, puede el front y el back.

- ¿Que es Express?
    Es un Framework Web para node.js, muy minimalista, con una serie de opciones que son muy comunes para crear sitios web y aplicaciones moviles.
    Su principal ventaja es que puedes instalar los paquetes que vas necesitando en tu aplicacion y no tiene una gran cantidad de herramientas ya incluidas
    Incluye Routing y Redireccionamiento, Middleware, Manejo de Errores, soporta los diferentes metodos HTTP, soporte de Template Engines

- ¿Quien utiliza Node.js?
    Netflix, Uber, Groupon, Paypal, Walmart, Nasa

# Seccion 3: Bienes Raices - Comenzando el Proyecto y Primeros Pasos

- Crear Package.json

    npm init //llenamos la info

- Primeros pasos con Dependencias
    Existen las dependencias de tipo DEV o las que se requieren en produccion

    npm i express 
    npm i -D express // de desarrollo

# Ejecutando Codigo de Node desde el package.json

- Para ejecutar un archivo principal, se tiene que agregar el script en package, como:

    "start": "node ejecutar-desde-package.js"
    npm run start

- Para no estar poniendo npm run start acada rato, se puede instalar:

    npm i -D nodemon

- Para ejecutarlo se puede poner en package:

    "server": "nodemon ejecutar-desde-package.js"

# Creando un Servidor con Express

