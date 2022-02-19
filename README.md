# core-final-project

## Motivación
---
Actualmente estoy desarrollando un proyecto junto con unos compañeros para la automatización del proceso de fermentación y maduración de la cerveza. Una parte de este proyecto consiste en una dashboard para gestionar todo. En este proyecto se pretende alcanzar las funcionalidades mínimas de está aplicación

## Descripción del proyecto
---
Cada cliente tiene unos dispositivos físicos encargados de controlar temperatura y presión en los tanques de fermentación. Estos dispositivos se conectan a un servidor tanto para poder ser controlados y monitoreados remotamente, como para ir registrando métricas que luego se graficarán.

Este proyecto abarca el dashboard de cliente para administrar y monitorear los dispositivos. En la pantalla principal de dashboard de mostrará todos los tanques con sus métricas y estado en tiempo real.

### Objetos de la aplicación
#### **Cliente**
Cada fabrica de cerveza que tiene comprados dispositivos
#### **Tanques**
Deposito de facilita las condiciones para que se produzca el proceso de fermentación. Cualquier usuario podrá agregar o eliminar tantos tanques como desee. Ademas de modificar sus propiedades
#### **Dispositivo**
Artefactos encargados de controlar la temperatura y presión del tanque y que cuentan con una comunicación mqtt con el servidor. Los administradores pueden añadir, eliminar o modificar dispositivos. A cada usuario le aparecerán los dispositivos asociados y los podrás asociar a sus tanques.

## Modelos
```yaml
- Client
    - name: String
    - address: String
    - city: String
    - zip: Number   
    - country: String

- Tank
    - alias: String
    - description: String
    - client_id: ObjectId('Client')
    - device_id: ObjectId('Device')

- Device
    - name: String
    - client_id: ObjectId('Client')

```

## API
---
 - CRUD `Clients`
    - `GET /clients`: Lista de clientes
    - `GET /clients/:id`: Detalle de un clientes
    - `POST /clients`: Crea un clientes
    - `POST /clients/:id` Actualiza un clientes
    - `DELETE /clients/:id` Elimina un clientes   
        
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

