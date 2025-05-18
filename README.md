# Sheltrade Mobile Application

## Project Overview
Sheltrade Mobile is a React Native application built with Expo, designed to provide users with seamless access to the Sheltrade financial platform on their mobile devices. The app offers core functionalities such as user authentication, wallet management, gift card transactions, notifications, and profile settings, optimized for mobile user experience.

## Features
- User authentication via email/username or phone number.
- Wallet balance viewing and transaction history.
- Buying and selling gift cards securely.
- Receiving and managing notifications.
- Profile management including username, phone number, and preferred currency.
- Role-based navigation and access control.
- Smooth and responsive UI using React Native Paper components.

## Prerequisites
- Node.js (version 14 or higher recommended)
- Expo CLI (`npm install -g expo-cli`)
- A working Sheltrade backend API instance
- Access to environment variables for API base URL and keys

## Getting Started

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd sheltradeMobile
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Create a `.env` file in the project root with the following variables:
```
APP_ENV=development
BASE_URL=https://your-backend-api-url.com
```
Replace `BASE_URL` with the actual backend API URL.

### Step 4: Run the Application
Start the Expo development server:
```bash
npm start
```
Use Expo Go on your mobile device or an emulator to run the app.

## Project Structure
- `App.js`: Entry point of the application, handles loading and navigation setup.
- `src/navigation/`: Contains navigation stack and routing logic.
- `src/screens/`: Contains all screen components organized by feature.
- `assets/`: Static assets such as images and icons.
- `babel.config.js`: Babel configuration including environment variable plugin.

## Testing
- Test on both Android and iOS devices/emulators.
- Verify navigation flows, API integrations, and UI responsiveness.
- Ensure environment variables are correctly loaded and used.

## Additional Notes
- The app uses `react-native-dotenv` for environment variable management.
- Navigation is handled using React Navigation with stack navigators.
- UI components are primarily from React Native Paper for consistent design.
- Web platform support is limited; mobile platforms (iOS and Android) are fully supported.

## Troubleshooting
- If you encounter bundling or caching issues, try clearing the Expo cache:
```bash
expo start -c
```
- Ensure all dependencies are installed and compatible with your React Native version.

## Contribution
Contributions are welcome! Please fork the repository and submit pull requests for improvements or bug fixes.

---

This README provides a comprehensive guide to set up, run, and contribute to the Sheltrade Mobile application.
