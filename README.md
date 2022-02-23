# core-final-project

## Motivación

Actualmente estoy desarrollando un proyecto junto con unos compañeros para la automatización del proceso de fermentación y maduración de la cerveza. Una parte de este proyecto consiste en una dashboard para gestionar todo. En este proyecto se pretende alcanzar las funcionalidades mínimas de está aplicación

## Descripción del proyecto

Cada cliente tiene unos dispositivos físicos encargados de controlar temperatura y presión en los tanques de fermentación. Estos dispositivos se conectan a un servidor tanto para poder ser controlados y monitoreados remotamente, como para ir registrando métricas que luego se graficarán.

Este proyecto abarca el dashboard de cliente para administrar y monitorear los dispositivos. En la pantalla principal de dashboard de mostrará todos los tanques con sus métricas y estado en tiempo real.

### Objetos de la aplicación
#### **Cliente**
Cada fabrica de cerveza que tiene comprados dispositivos
### **Usuario**
Cada una de las personas con acceso a la aplicación
#### **Tanques**
Deposito de facilita las condiciones para que se produzca el proceso de fermentación. Cualquier usuario podrá agregar o eliminar tantos tanques como desee. Ademas de modificar sus propiedades
#### **Dispositivo**
Artefactos encargados de controlar la temperatura y presión del tanque y que cuentan con una comunicación mqtt con el servidor. Los administradores pueden añadir, eliminar o modificar dispositivos. A cada usuario le aparecerán los dispositivos asociados y los podrás asociar a sus tanques.

## API
### Modelos
```yaml
- Client
    - name: String
    - address: String
    - city: String
    - zip: Number   
    - country: String

- User
    - user_id: String
    - client_id: String
    - state: String ['pending', 'confirm', 'deny']

- Tank
    - alias: String
    - description: String
    - client_id: ObjectId('Client')

- Device
    - name: String
    - client_id: ObjectId('Client')

- DeviceTank
    - device_id: ObjectId('Device')
    - tank_id: ObjectId('Tank')

```

### API

 - CRUD `Clients`
    - `GET /clients`: Lista de clientes
    - `GET /clients/:id`: Detalle de un clientes
    - `POST /clients`: Crea un clientes
    - `POST /clients/:id` Actualiza un clientes
    - `DELETE /clients/:id` Elimina un clientes   

 - Users
    - `GET /users`: Lista usuarios
    - `GET /users/:id`: Detalle de un usuario
    - `POST /users`: Crea un usuario
    - `POST /users/:id` Actualiza un usuario
    - `DELETE /users/:id` Elimina un usuario 
        
 - CRUD `Tanks`
    - `GET /tanks`: Lista de tanques
    - `GET /tanks/:id`: Detalle de un tanque
    - `POST /tanks`: Crea un tanque
    - `POST /tanks/:id` Actualiza un tanque
    - `DELETE /tanks/:id` Elimina un tanque  
        
 - CRUD `Devices`
    - `GET /device`: Lista de dispositivos
    - `GET /device/:id`: Detalle de un dispositivos
    - `POST /device`: Crea un dispositivos
    - `POST /device/:id` Actualiza un dispositivos
    - `DELETE /device/:id` Elimina un dispositivos

### Registration flow
[![](https://mermaid.ink/img/pako:eNqNUkFugzAQ_IrlUyuFPoBDJZv01lOSniAHgzeJJbCRbVRVIX_vmk1KC5dysFe7M7MzMlfeOA0852ev-gt731WW4ReGmhofATzbwdmE6FU0ztI8tUWZziPLstfRTwjwYWSHuhZ9X5R4MyyORBC6M7aYGFQTT4XgGqMiIDHN6l-anyZeRla0BmzcyqJ8ovL5rghWL7zSnOQZOVJ-9kxjWdKNO14ywoqVrVUcsYhzkFKWeKxTTCpypfg3jPxvGGCNB7XMIOYMKN04i2_TxDG5ErOriZksPbaKeSv7Wcs3vAPfKaPxJ7imdsXjBTqoeI6lhpMa2ljxyt4QOvQaNd-0ic7z_KTaABuuhuj2X7bhefQDPEBbozBJd0fdvgGZZtEc)]

## Front