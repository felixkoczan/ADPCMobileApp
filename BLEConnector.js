import { BleManager } from 'react-native-ble-plx';

class BLEHandler {
  constructor() {
    this.manager = new BleManager();
  }

  // Scan and connect to the device
  scanAndConnect() {
    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        // Handle error
        return;
      }

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

const bleHandler = new BLEHandler();
bleHandler.scanAndConnect();
