import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox, Alert } from 'react-native';
//notification
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app'; // Import Firebase App

// screens
import GetStarted from './pages/GetStarted';
import SignUp from './pages/SignUp';
import SignUpOTP from './pages/SignUpOTP';
import Login from './pages/Login';
import SignUpPhone from './pages/signupPhone';
import StudentDashboard from './pages/studentDashboard';
import FoodDashboard from './pages/foodDashboard';
import PrintDashboard from './pages/printDashboard';
import FoodShopPage from './pages/FoodShopPage';
import StationaryPage from './pages/StationaryPage';
import BillingPage from './pages/BillingPage';
import YourOrders from './pages/YourOrders';
import Profile from './pages/Profile';
import PlacesNearYou from './pages/PlacesNearYou';
import Canteen from './pages/Canteen';
import FoodCourt from './pages/FoodCourt';
import MarketComplex from './pages/MarketComplex';
import Khoka from './pages/khoka';
import ColorPrint from './pages/ColorPrint';
import BwPrint from './pages/BwPrint';
import Lamination from './pages/Lamination';
import SpiralBinding from './pages/SpiralBinding';
import firebaseconfig from './components/firebase';
import BannerPrint from './pages/BannerPrint';
import IdCard from './pages/IdCard';
import ExploreAll from './pages/Explore';
import ExploreFood from './pages/ExploreFood';
import ExploreStationary from './pages/ExploreStationary';
import SearchPlaces from './pages/SearchPlaces';
import SearchFood from './pages/SearchFood';
import SearchStationary from './pages/SearchStationary';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './store';
// icons


const firebaseConfig = {
  apiKey: "AIzaSyBV_5hoyumEDZ2fiACNFXZb8VckBEvQwjk",
  authDomain: "campuscart-b74ad.firebaseapp.com",
  projectId: "campuscart-b74ad",
  databaseURL: "https://campuscart-b74ad.firebaseio.com",
  storageBucket: "campuscart-b74ad.firebasestorage.app",
  messagingSenderId: "878432534243",
  appId: "1:878432534243:android:1f8c339e1f1c455b098fd6",
};

export default function App() {
  const Stack = createNativeStackNavigator();

  // Initialize Firebase on startup
  useEffect(() => {

    firebase.initializeApp(firebaseConfig)
    getToken();
  }, []);

  // async function requestUserPermission() {
  //   // const granted = await AsyncStorage.getItem('notificationPermission');
  //   // if (granted === 'true') {
  //   //   console.log('Permission already granted');
  //   //   return;
  //   // }

  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //     // await AsyncStorage.setItem('notificationPermission', 'true');
  //   } else {
  //     console.log('Notification permission denied.');
  //   }
  // }

  async function getToken() {
    try {
      const token = await messaging().getToken();
      console.log('📲 FCM Token:', token);

      // Send token to your backend
      // await axios.post('https://your-backend.com/save-fcm-token', {
      //   email: userEmail, // Replace with actual user email
      //   fcmToken: token
      // });
    } catch (error) {
      console.error('❌ Error getting FCM token:', error);
    }
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="BillingPage"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={StudentDashboard} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Food" component={FoodDashboard} />
          <Stack.Screen name="Print" component={PrintDashboard} />
          <Stack.Screen name="FoodShop" component={FoodShopPage} />
          <Stack.Screen name="StationaryPage" component={StationaryPage} />
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignUpOTP" component={SignUpOTP} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUpPhone" component={SignUpPhone} />
          <Stack.Screen name="BillingPage" component={BillingPage} />
          <Stack.Screen name="Order" component={YourOrders} />
          <Stack.Screen name="PlacesNearYou" component={PlacesNearYou} />
          <Stack.Screen name="ColorPrint" component={ColorPrint} />
          <Stack.Screen name="BwPrint" component={BwPrint} />
          <Stack.Screen name="IdCard" component={IdCard} />
          <Stack.Screen name="Banner" component={BannerPrint} />
          <Stack.Screen name="SpiralBinding" component={SpiralBinding} />
          <Stack.Screen name="Lamination" component={Lamination} />
          <Stack.Screen name="Canteen" component={Canteen} />
          <Stack.Screen name="FoodCourt" component={FoodCourt} />
          <Stack.Screen name="MarketComplex" component={MarketComplex} />
          <Stack.Screen name="Khoka" component={Khoka} />
          <Stack.Screen name="Explore" component={ExploreAll} />
          <Stack.Screen name="ExploreFood" component={ExploreFood} />
          <Stack.Screen
            name="ExploreStationary"
            component={ExploreStationary}
          />
          <Stack.Screen name="SearchPlaces" component={SearchPlaces} />
          <Stack.Screen name="SearchFood" component={SearchFood} />
          <Stack.Screen name="SearchStationary" component={SearchStationary} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
