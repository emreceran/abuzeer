import React, { Component, useState, useRef } from 'react';
import { View , SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { createStackNavigator, HeaderBackButton, } from '@react-navigation/stack';


const run = `
    document.querySelector(".header-minicart").style.display = "none";    
    document.querySelector("a.mobile-toggle").addEventListener("click", function() {
      document.getElementById("side-nav-panel").style.width = "100%";});
      document.querySelector("a.side-nav-panel-close").addEventListener("click", function() {
        document.getElementById("side-nav-panel").style.width = "260px";
    });
      true;
    `;



export default class Myaccount extends Component {
  constructor(){
    super();
    this.webviewRef = React.createRef();
    this.state = {
      canGoBack: false,
      canGoForward: false,
      currentUrl: ''
      
  
    
    
    
    }
    
    
  }

  

  
  
  
  render() {
    

  
    
    

    setTimeout(() => {
      this.webviewRef.injectJavaScript(run);
    }, 100);

    
  
  
    return (
      <SafeAreaView style={{ flex: 1,paddingTop: Platform.OS === 'android' ? 25 : 0 }}>
        <WebView
          ref={(r) => (this.webviewRef = r)}
          
          source={{
            uri:
              'https://abuzeer.com/my-account/',
          }}
          
          javaScriptEnabledAndroid={true}
          injectedJavaScriptForMainFrameOnly={false}
          javaScriptEnabled={true}
          injectJavaScript={run}
          onNavigationStateChange={  navState => {
            this.setState({canGoForward: navState.canGoForward})
            this.setState({currentUrl:navState.url})
            this.setState({canGoBack :navState.canGoBack})
            
          }}
        />
      </SafeAreaView>
    );
  }

}
