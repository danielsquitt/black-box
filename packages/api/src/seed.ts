/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/dot-notation */
import mongoose from 'mongoose';
import { DB_URL, DB_NAME } from './config';
import Client from './models/client.model';
import Device from './models/device.model';
import Tank from './models/tank.model';
import DeviceTank from './models/device-tank.nodels';

(async () => {
  await mongoose.connect(`${DB_URL}/${DB_NAME}`).then(() => console.log(`Conected to ${DB_URL}/${DB_NAME}`));

  // Drop DB
  try {
    await Client.collection.drop();
    await Device.collection.drop();
    await Tank.collection.drop();
    await DeviceTank.collection.drop();
  } catch (error) {
    console.log('There are no items to drop from db');
  }

  // Create Clients
  // --------------------------------------------------------------
  const client1 = await Client.create({
    name: 'Cervezas Arriaca SL',
    address: 'Avda De La Industria 3 A - Nave 6',
    city: 'Yunquera de Henares, Guadalajara',
    zip: '19210',
    country: 'España',
    img: 'https://arriaca.es/wp-content/uploads/2021/01/Arriaca-Favicon.png',
  });

  const client2 = await Client.create({
    name: 'Maresme Brewery Sl.',
    address: 'Calle Empedrat del Marxant, 1 - P 2 PTA. 3',
    city: 'Alella, Barcelona',
    zip: '08328',
    country: 'España',
    img: 'https://cdn.shopify.com/s/files/1/0254/8852/3345/files/MB_Logo_LLetres_300x300.png',
  });

  const client3 = await Client.create({
    name: 'Cervecera Peninsula SL',
    address: 'Calle de la Granja, 5',
    city: 'Alcobendas, Madrid',
    zip: '28108',
    country: 'España',
    img: 'https://cdn.shopify.com/s/files/1/0072/8419/5401/files/Logo_Peninsula-03_300x300.png',
  });

  // Create Devices
  // --------------------------------------------------------------
  const device1 = await Device.create({
    name: 'CPCTRL_0722_0001',
    type: 'Type 1',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: client1._id,
  });

  const device2 = await Device.create({
    name: 'CPCTRL_0722_0002',
    type: 'Type 1',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: client1._id,
  });

  const device3 = await Device.create({
    name: 'CPCTRL_0722_0003',
    type: 'Type 1',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: client1.id,
  });

  const device4 = await Device.create({
    name: 'CPCTRL_0722_0004',
    type: 'Type 1',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: client1._id,
  });

  const device5 = await Device.create({
    name: 'CPCTRL_0722_0005',
    type: 'Type 1',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: client1._id,
  });

  const device6 = await Device.create({
    name: 'CPCTRL_0722_0006',
    type: 'Type 1',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: client2._id,
  });

  const device7 = await Device.create({
    name: 'CPCTRL_0722_0007',
    type: 'Type 1',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: client3._id,
  });

  const device8 = await Device.create({
    name: 'CPCTRL_0722_0008',
    type: 'Type 1',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: client3._id,
  });

  const device9 = await Device.create({
    name: 'CPCTRL_0722_0009',
    type: 'Type 1',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: client3._id,
  });

  const device10 = await Device.create({
    name: 'CPCTRL_0722_0010',
    type: 'Type 1',
    version: '1.0.0',
    sw_v: '0.1.0',
    client_id: client3._id,
  });

  // Create Tank
  // --------------------------------------------------------------
  const tank1 = await Tank.create({
    name: 'TF1',
    description: '5000L',
    client_id: client1._id,
  });

  const tank2 = await Tank.create({
    name: 'TF2',
    description: '5000L',
    client_id: client1._id,
  });

  const tank3 = await Tank.create({
    name: 'TF3',
    description: '5000L',
    client_id: client1._id,
  });

  const tank4 = await Tank.create({
    name: 'TF4',
    description: '5000L',
    client_id: client1._id,
  });

  const tank5 = await Tank.create({
    name: 'TF5',
    description: '5000L',
    client_id: client1._id,
  });

  const tank6 = await Tank.create({
    name: 'T1',
    description: '5000L',
    client_id: client2._id,
  });

  const tank7 = await Tank.create({
    name: 'T2',
    description: '5000L',
    client_id: client2._id,
  });

  const tank8 = await Tank.create({
    name: 'C1',
    description: '5000L',
    client_id: client3._id,
  });

  const tank9 = await Tank.create({
    name: 'C2',
    description: '5000L',
    client_id: client3._id,
  });

  const tank10 = await Tank.create({
    name: 'P1',
    description: '5000L',
    client_id: client3._id,
  });

  // Create DeviceTank
  // -------------------------------------------------------------
  const device_tank1 = await DeviceTank.create({
    device_id: device1._id,
    tank_id: tank1._id,
  });

  const device_tank2 = await DeviceTank.create({
    device_id: device2._id,
    tank_id: tank5._id,
  });

  const device_tank3 = await DeviceTank.create({
    device_id: device3._id,
    tank_id: tank3._id,
  });

  const device_tank4 = await DeviceTank.create({
    device_id: device4._id,
    tank_id: tank4._id,
  });
  const device_tank5 = await DeviceTank.create({
    device_id: device5._id,
    tank_id: tank5._id,
  });
  const device_tank6 = await DeviceTank.create({
    device_id: device6._id,
    tank_id: tank6._id,
  });
  const device_tank7 = await DeviceTank.create({
    device_id: device7._id,
    tank_id: tank7._id,
  });
  const device_tank8 = await DeviceTank.create({
    device_id: device8._id,
    tank_id: tank8._id,
  });
  const device_tank9 = await DeviceTank.create({
    device_id: device9._id,
    tank_id: tank9._id,
  });
  const device_tank10 = await DeviceTank.create({
    device_id: device10._id,
    tank_id: tank10._id,
  });

  await mongoose.disconnect().then(() => console.log('Disconnected from DB'));
})();
