# AppiCoder Test App

A comprehensive React Native testing application demonstrating various features and best practices.

## Features Implemented

### 1. API Fetching Test ✅
- Fetches users from https://jsonplaceholder.typicode.com/users
- Includes loading states and error handling
- Displays users in a FlatList with name and email
- Pull-to-refresh functionality
- Network-aware loading (only tries to fetch when online)

### 2. Custom Hook - useNetworkStatus ✅
- Custom hook `useNetworkStatus` returns online/offline status
- Integrates with NetInfo for real network detection
- Redux integration for global network state management
- Visual banner showing connection status

### 3. Navigation Test ✅
- React Navigation implementation with stack navigator
- Three screens: LoginScreen, HomeScreen, DetailsScreen
- Proper navigation flow and data passing between screens
- User details passed from HomeScreen to DetailsScreen

### 4. Form Handling (Login Screen) ✅
- Email and password input fields with validation
- Email validation using regex pattern
- Password minimum length validation (6 characters)
- Real-time error messages
- Successful login navigation to HomeScreen
- Loading states during authentication

### 5. State Management with Redux ✅
- Redux Toolkit implementation
- Authentication state (isAuthenticated, userEmail)
- Users list state with loading/error handling
- Network status state
- Async actions for API calls
- Global state access throughout app
- Logout functionality that resets all states

## Technical Implementation

### Architecture
- **Navigation**: React Navigation v6 with Stack Navigator
- **State Management**: Redux Toolkit with configureStore
- **Network Detection**: @react-native-community/netinfo
- **Styling**: React Native StyleSheet with modern UI patterns
- **TypeScript**: Full type safety throughout the application

### Folder Structure
```
src/
├── components/          # Reusable components
├── hooks/              # Custom hooks
├── navigation/         # Navigation configuration
├── screens/            # Screen components
├── services/           # API and external services
├── store/              # Redux store and slices
│   ├── slice/          # Redux slices
│   └── store.ts        # Store configuration
├── types/              # TypeScript type definitions
└── index.ts           # Main exports
```

### Key Components

#### Screens
- **LoginScreen**: Authentication with validation
- **HomeScreen**: Users list with search and filtering
- **DetailsScreen**: Detailed user information display

#### Custom Hooks
- **useNetworkStatus**: Real-time network connectivity detection

#### Redux Slices
- **authSlice**: Authentication state management
- **usersSlice**: Users data and API state
- **networkSlice**: Network connectivity state

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **iOS Setup** (if targeting iOS)
   ```bash
   cd ios && pod install && cd ..
   ```

3. **Run the App**
   ```bash
   # For Android
   npm run android
   
   # For iOS
   npm run ios
   ```

## Testing Features

### Login Flow
1. Enter email (must be valid format)
2. Enter password (minimum 6 characters)
3. Login button validates and authenticates
4. Successful login navigates to Home screen

### Users List
1. Automatically fetches users on Home screen load
2. Shows loading indicator while fetching
3. Displays error message if network fails
4. Pull down to refresh the list
5. Tap any user to view details

### Network Status
1. Shows "Online/Offline" banner at top of screens
2. Automatically detects network changes
3. Prevents API calls when offline

### Navigation
1. Login screen appears first for unauthenticated users
2. Home screen shows authorized content
3. Details screen shows full user information
4. Logout returns to login screen

## Dependencies

- `@react-navigation/native`: Navigation framework
- `@react-navigation/stack`: Stack navigator
- `@reduxjs/toolkit`: Modern Redux implementation
- `react-redux`: React-Redux bindings
- `@react-native-community/netinfo`: Network connectivity
- `react-native-screens`: Native screen transitions

## Architecture Benefits

✅ **Scalable**: Modular structure supports growth
✅ **Type Safe**: Full TypeScript implementation
✅ **State Management**: Centralized Redux state
✅ **Network Aware**: Handles offline scenarios gracefully
✅ **Navigation**: Clear screen flow and data passing
✅ **Form Validation**: Real-time input validation
✅ **Error Handling**: Comprehensive error handling and loading states
✅ **Modern UI**: Clean, modern React Native interface

This implementation demonstrates industry best practices for React Native development with proper state management, navigation, API integration, and user experience considerations.