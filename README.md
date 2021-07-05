# My cute chatbot

Cliente de chabot que manda y recibe mensajes de un agente de Dialogflow.

## Requisitos

1. Tener un agente de Dialogflow
2. [Habilitar la API de Dialogflow en tu proyecto de Google Cloud](https://console.cloud.google.com/flows/enableapi?apiid=dialogflow.googleapis.com)
3. [Crear una cuenta de servicio](https://cloud.google.com/docs/authentication/getting-started)

## Instalación

1. Instalar las dependencias de Node:
```
npm install
```

## Configuración

1. Cambia el nombre del archivo `.env.sample` a `.env` y cambia los valores correspondientes:
   1. `PORT`: puerto sobre el cual se iniciará el servidor de Express
   2. `GOOGLE_PROJECTID`: el projectId de tu proyecto de google en el cual se encuentra tu agente de Dialogflow
   3. `CONNECTION_MESSAGE`: El mensaje de bienvenida que le enviará el servidor al cliente cuando éste entre a la página de inicio
2. Agrega en la raíz del proyecto tu archivo .json que descargaste cuando creaste la cuenta de servicio en Google Cloud. Cambiale el nombre a `google-credentials.json`

## Correr el proyecto
Si te encuentras en un ambiente de desarrollo, corre el siguiente comando:
```
npm run dev
```
Luego ingresa la url `https://localhost:{PORT}/` en tu navegador (donde PORT es el puerto que elegiste para el servidor de Express). Verás la interfáz para comunicarte con tu chatbot.
Si te encuentras en un ambiente de producción, corre el siguiente comando:
```
npm start
```
NOTA: el proyecto no leerá las variables de entorno en `.env` si el proyecto se encuentra en ambiente de producción