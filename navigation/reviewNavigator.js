import React from 'react';
import {Platform,ImageBackground,Image} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import Home from "../screens/home";
import About from "../screens/about";
import ReviewDetail from "../screens/reviewDetail";

const HomeStack = createStackNavigator({
   home: {
       screen: Home
   },
    detail: {
       screen: ReviewDetail
    }
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? 'pink' : '#eee',
        },
        headerTintColor: Platform.OS === 'android' ? '#eee' : 'pink',
        headerTitleStyle: {
            fontFamily: 'nunitobold',
            fontSize: 20,
            textAlign: 'center'
        },
    }
});

const aboutNavigator = createStackNavigator({
    about: {
        screen: About
    }
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? 'pink' : '#eee',
        },
        headerTintColor: Platform.OS === 'android' ? '#eee' : 'pink',
        headerTitleStyle: {
            fontFamily: 'nunitobold',
            fontSize: 20,
            textAlign: 'center'
        },
    }
});

const mainNavigator = createDrawerNavigator({
   home: HomeStack,
   about: aboutNavigator,
},{
    contentOptions: {
        activeTintColor: 'pink',
        labelStyle: {
            fontSize: 24
        }
    }
});

export default createAppContainer(mainNavigator);