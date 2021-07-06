# My cute chatbot

Aplicación web que manda y recibe mensajes de un agente de Dialogflow.

## Requisitos

1. Tener un agente de Dialogflow
2. [Habilitar la API de Dialogflow en tu proyecto de Google Cloud](https://console.cloud.google.com/flows/enableapi?apiid=dialogflow.googleapis.com)
3. [Crear una cuenta de servicio](https://cloud.google.com/docs/authentication/getting-started)

## Instalación

1. Instalar las dependencias de la app web y del servidor:
```
cd front/
npm install
cd ../back/
npm install
```

## Configuración

1. Dirigete a la carpeta `back/`. Cambia el nombre del archivo `.env.sample` a `.env` y cambia los valores correspondientes:
   1. `PORT`: puerto sobre el cual se iniciará el servidor de Express
   2. `GOOGLE_PROJECTID`: el projectId de tu proyecto de google en el cual se encuentra tu agente de Dialogflow
   3. `CONNECTION_MESSAGE`: El mensaje de bienvenida que le enviará el servidor al cliente cuando éste entre a la página de inicio
2. Dirigete a la carpeta `front/`. Cambia el nombre del archivo `.env.sample` a `.env` y cambia los valores correspondientes:
   1. `VUE_APP_SERVER_PORT`: el puerto en el cual está corriendo el servidor del proyecto.
3. Agrega en la raíz del proyecto tu archivo .json que descargaste cuando creaste la cuenta de servicio en Google Cloud. Cambiale el nombre a `google-credentials.json`

## Correr el proyecto
1. Inicia la app web (proyecto de Vue):
```
cd front/
npm run serve
```
2. Inicia el servidor de la app web:
```
cd back/
npm run dev
```
Luego ingresa la url `https://localhost:8080/` en tu navegador. Verás la interfáz para comunicarte con tu chatbot.

## Demo
Ingresa a [https://datoscuriososdeanimalitos-mbwr.web.app/](https://datoscuriososdeanimalitos-mbwr.web.app/) para ver una demo de este proyecto.