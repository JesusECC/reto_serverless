# Reto técnico

### Tabla contenido
1. Descripción
3. Arquitectura
2. Tecnologías
3. Requisitos
4. Instalación
5. Uso
6. Ejecución de pruebas
7. Variables de entorno
8. Apis
9. Despliegue
10. Lista de apis desplegadas en AWS

## Descripción
***
- Crear una API en [Nodejs](https://nodejs.org) con el [framawork Serverless](https://www.serverless.com) para un despliegue en [AWS](https://aws.amazon.com).
- Adaptar y transformar los modelos de la API de prueba. Se tiene que mapear todos los nombres de atributos(modelos) del ingles al español.
- Integrar la API de prueba [StarWars API](https://swapi.py4e.com/documentation)

## Arquitectura
***
![](https://github.com/JesusECC/reto_serverless/blob/main/Doc/arquitectura.png)
## Tecnologías
***
Lista de tecnologías utilizadas:
NODEJS: v.14.17.4
* [Nodejs](https://spring.io/): Versión v14.18.2
* [Install the Serverless Framework](https://serverless.com) Versión v2.70.0
* [AWS CLI](https://aws.amazon.com/es/cli/): Versión v2
* [DynamoDB](https://aws.amazon.com/es/dynamodb/)
## Requisitos
***
- [NODEJS: v14.18.2](https://nodejs.org/download/release/v14.18.2/)
- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
  - [AWS CloudFormation](https://aws.amazon.com/es/cloudformation/)

## Instalación
***

Para crear un nuevo proyecto sin servidor.

``` bash
$ serverless install --url https://github.com/AnomalyInnovations/serverless-nodejs-starter --name my-project
```

Entrar en el nuevo directorio

``` bash
$ cd my-project
```

Instale los paquetes de Node.js

``` bash
$ npm install
```

## Uso
***
Para ejecutar una función en su local

``` bash
$ serverless invoke local --function getPersonas
```

Para simular API Gateway localmente usando [serverless-offline] (https://github.com/dherault/serverless-offline)

``` bash
$ serverless offline start
```

Implementa tu proyecto

``` bash
$ serverless deploy
```

Implementar una sola función

``` bash
$ serverless deploy function --function getPersonas
```
## Ejecución de pruebas
***
Ejecute sus pruebas usando

``` bash
$ npm test
```

Usamos Jest para ejecutar nuestras pruebas. Puede leer más sobre cómo configurar sus pruebas [aquí] (https://facebook.github.io/jest/docs/en/getting-started.html#content)

## Variables de entorno
***
Para agregar variables de entorno a su proyecto

1. Cambie el nombre de `env.example` a` .env`.
2. Agregue variables de entorno para su escenario local a `.env`.
3. Elimine el comentario de `environment:` en el bloque `serverless.yml` y haga referencia a la variable de entorno como` $ {env: MY_ENV_VAR} `. Donde se agrega `MY_ENV_VAR` a su archivo` .env`.
4. Asegúrese de no cometer su `.env`.

## Apis
***
- `Listar personas: ` obtiene el listado de personas
  - GET  | http://localhost:3000/dev/personas

- `Lista persona: ` obtener los datos de una de personas en específico, buscamos en la BD, si no la encontramos consultamos a la api [swapi](https://swapi.py4e.com/documentation#people), una vez obteniada la informacion la guardo en la DB y retorno la información.
  - GET  | http://localhost:3000/dev/persona/{id}
- `Crear una persona: `se añade un registro con los datos enviador en el cuerpo de la peticion.
  - POST | http://localhost:3000/dev/persona
    ```
    {
        "nombre": "Jesus",
        "altura": "158",
        "masa": "32",
        "color_pelo": "n/a",
        "color_piel": "white, red",
        "color_ojos": "red",
        "Año_nacimiento": "unknown",
        "genero": "n/a",
        "pais_origen": "https://swapi.py4e.com/api/planets/1/",
        "peliculas": [ "https://swapi.py4e.com/api/films/1/" ],
        "especies": [ "https://swapi.py4e.com/api/species/2/" ],
        "vehiculos": [],
        "naves_espaciales": [],
        "url": "https://swapi.py4e.com/api/people/8/"
      }
    ```
## Despliegue
***
El despliegue se realiza en los servicios de AWS, usando [AWS CloudFormation](https://aws.amazon.com/es/cloudformation/)
* para poder realizar el despliegue ejecutamos el comando:
  ``` bash
  $ serverless deploy
  ```

## Lista de apis desplegadas en AWS
- endpoints:
  - GET - https://ub36l39av8.execute-api.us-east-1.amazonaws.com/dev/personas
  - POST - https://ub36l39av8.execute-api.us-east-1.amazonaws.com/dev/persona
  - GET - https://ub36l39av8.execute-api.us-east-1.amazonaws.com/dev/persona/{id}
- functions:
  - listaPersonas: reto-serverless-dev-listaPersonas
  - crear: reto-serverless-dev-crear
  - listaPersona: reto-serverless-dev-listaPersona