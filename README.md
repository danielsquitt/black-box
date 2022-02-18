# core-final-project

## Motivación
Actualmente estoy desarrollando un proyecto junto con unos compañeros para la automatización del proceso de fermentación y maduración de la cerveza. Una parte de este proyecto consiste en una dashboard para gestionar todo. En este proyecto se pretende alcanzar las funcionalidades mínimas de está aplicación

## Descripción del proyecto
Cada cliente tiene unos dispositivos físicos encargados de controlar temperatura y presión en los tanques de fermentación. Estos dispositivos se conectan a un servidor tanto para poder ser controlados y monitoreados remotamente, como para ir registrando métricas que luego se graficarán.

Este proyecto abarca el dashboard de cliente para administrar y monitorear los dispositivos. En la pantalla principal de dashboard de mostrará todos los tanques con sus métricas y estado en tiempo real.

### Objetos de la aplicación
#### Tanques
Deposito de facilita las condiciones para que se produzca el proceso de fermentación. Cualquier usuario podrá agregar o eliminar tantos tanques como desee. Ademas de modificar sus propiedades
#### Dispositivo
Artefactos encargados de controlar la temperatura y presión del tanque y que cuentan con una comunicación mqtt con el servidor. Los administradores pueden añadir, eliminar o modificar dispositivos. A cada usuario le aparecerán los dispositivos asociados y los podrás asociar a sus tanques.
#### Recetas
Serie de pasos para elaborar cerveza. Cada usuario podrá añadir, eliminar y modificar sus recetas.



