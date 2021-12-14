import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import firebase from "firebase";

import HomeScreen from './screens/HomeScreen'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import MessageScreen from './screens/MessageScreen'
import NotificationScreen from './screens/NotificationScreen'
import PostScreen from './screens/PostScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'

var firebaseConfig = {
  apiKey: "AIzaSyDdxi3CCC9dmNmM9yTlR9Vu4aOdN4Mw0-M",
  authDomain: "myapp-c405b.firebaseapp.com",
  projectId: "myapp-c405b",
  storageBucket: "myapp-c405b.appspot.com",
  messagingSenderId: "308774492299",
  appId: "1:308774492299:web:e53c19c6476d50537cdc8e",
  measurementId: "G-11M1SXX8YF"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Message: MessageScreen,
  Notification: NotificationScreen,
  Post: PostScreen,
  Profile: ProfileScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
      {
          Loading: LoadingScreen,
          App: AppStack,
          Auth: AuthStack
      },
      {
          initialRouteName: "Loading"
      }
  )
);