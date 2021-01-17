import React, { Component, useState, useRef } from 'react';
import { View , SafeAreaView, TouchableOpacity, Button} from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import SvgHome from './assets/svgs/Svghome'
import SvgProfil from './assets/svgs/SvgProfil'
import SvgWish from './assets/svgs/SvgWish'
import SvgCart from './assets/svgs/SvgCart'
import Icon from 'react-native-vector-icons/FontAwesome';


import { createStackNavigator, HeaderBackButton, } from '@react-navigation/stack';
import Anasayfa from './src/screens/Home'
import Myaccount from './src/screens/myaccount'
import Wishlist from './src/screens/Wishlist'
import Cart from './src/screens/Cart'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const run = `
    document.querySelector(".header-minicart").style.display = "none";    
    document.querySelector("a.mobile-toggle").addEventListener("click", function() {
      document.getElementById("side-nav-panel").style.width = "100%";});
      document.querySelector("a.side-nav-panel-close").addEventListener("click", function() {
        document.getElementById("side-nav-panel").style.width = "260px";
    });
      true;
    `;

    


function HomeStack({props}) {
  
  
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Anasayfa}
      options={{      
        headerShown:false
      }}
      
       />
      
    </Stack.Navigator>
  );
}

function Accountstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Myaccount" component={Myaccount}
      options={{      
        headerShown:false
      }}
        />
      
    </Stack.Navigator>
  );
}

function Wishliststack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Wishlist" component={Wishlist}
      options={{      
        headerShown:false
      }}
       />
      
    </Stack.Navigator>
  );
}

function Cartstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart}
      
      options={{      
        headerShown:false
      }}
      />
      
    </Stack.Navigator>
  );
}

export default class App extends Component {

  constructor(){
    super();
    this.webviewRef = React.createRef();
    
    
    
  }
 
  
    
  


  render() {

  return (
    <NavigationContainer>
    <Tab.Navigator
    initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: "#b5bdd9",
        style : {
          backgroundColor: '#fafbff'
        }
        
      }}>
      <Tab.Screen name="Home" component={HomeStack} options={{tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <SvgHome
              name="home" color={color}     size={size}
              />),
             
        }} 
        />
      <Tab.Screen name="Myaccount" component={Accountstack}options={{tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <SvgProfil
              name="profil" color={color}     size={size}
              />),
             
        }} 
        />
      <Tab.Screen name="Wishlist" component={Wishliststack} options={{tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <SvgWish
              name="profil" color={color}     size={size}
              />),
             
        }} 
        />
      <Tab.Screen name="Cart" component={Cartstack} options={{tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <SvgCart
              name="profil" color={color}     size={size}
              />),
             
        }} 
        />
      
    </Tab.Navigator>
    </NavigationContainer>
  );
}
}


