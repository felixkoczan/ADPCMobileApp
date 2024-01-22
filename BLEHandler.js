/*
import { BleManager } from 'react-native-ble-plx';
import { EventEmitter } from 'events';

class BLEHandler {
  constructor() {
    this.manager = new BleManager();
    this.bleEventEmitter = new EventEmitter();
  }

  // Scan and connect to the device
  scanAndConnect() {
    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        // Handle error
        console.error(error);
        return;
      }

      // Emit an event when a new device is found
      this.bleEventEmitter.emit('newDevice', device);

      // Check if this is your ESP32 device
      if (device.name === 'Your_ESP32_Device_Name') {
        this.manager.stopDeviceScan();

        device.connect()
          .then((device) => {
            return device.discoverAllServicesAndCharacteristics();
          })
          .then((device) => {
            // Read or write characteristics here
            return this.writeCharacteristic(device);
          })
          .catch((error) => {
            // Handle connection error
            console.error(error);
          });
      }
    });
  }

  // Write to a characteristic
  async writeCharacteristic(device) {
    const serviceUUID = 'your-service-uuid';
    const characteristicUUID = 'your-characteristic-uuid';
    const dataToWrite = "Your message here"; // Convert your data to base64

    try {
      await device.writeCharacteristicWithResponseForService(
        serviceUUID, 
        characteristicUUID, 
        dataToWrite
      );
      console.log('Write successful');
    } catch (error) {
      console.error('Write failed', error);
    }
  }
}

export default BLEHandler;
