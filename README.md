# ADPC Mobile APP (IOS and Android)

This app demonstrates an implementation of the ADPC specification for mobile phones. It includes screens for device registration, managing consent requests, and user settings.

## Features

- Drawer navigation to switch between screens.
- Device registration with persistent storage using AsyncStorage.
- Consent management with toggleable options.

## Getting Started

To get this project running on your local machine, follow these steps.

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or above)
- npm (v7 or above) or Yarn
- React Native CLI (if not using Expo)
- Android Studio or Xcode (for emulator/simulator setup)

### Installation

Clone the repository and install the dependencies.

# Clone the repo

git clone https://github.com/felixkoczan/ADPCMobileApp.git

# Navigate to the project directory

cd your-project-directory

# Install dependencies

npm install

# If you're using Yarn, use the following command instead

yarn install

bash'''

## Running the App

### To start the Metro bundler, run

npm start

### To run the app on iOS, run

npm run ios

### To run the app on Android, run

npm run android

## Screens

HomeScreen: The landing screen of the app.
DeviceRegistrationScreen: Allows users to register new devices.
ConsentRequestScreen: Displays a list of consent requests that users can toggle.
SettingsScreen: Where users can switch themes and manage other settings.
AboutScreen: Provides information about the app.

## Data Persistence with AsyncStorage

Device registration details are stored locally using AsyncStorage, making it possible to retain registered devices even after the app restarts.

## Contributing

If you wish to contribute to this project, please fork the repository and submit a pull request.

### Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request

### License

Distributed under the MIT License. See LICENSE for more information.

## Acknowledgments

Thanks to the React Native community for the great documentation and guides.
Special thanks to anyone whose code was used as inspiration or direct help in this project.
