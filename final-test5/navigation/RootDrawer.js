import React from 'react';
import {createDrawerNavigator,DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {NavigationContainer}from '@react-navigation/native';

// import { CustomDrawer } from '../components';
import { HomeScreen, Login, SignUp } from '../screens';


const {Navigator,Screen} =  createDrawerNavigator();
export const RootDrawer = () => {
    return(
        <NavigationContainer>
            <Navigator
            //  drawerContent={(props) =>
            //     <CustomDrawer {...props} />
            //  }
             > 
        <Screen  name={'HOMEPAGE'} component={HomeScreen}/>
             <Screen name={'LOGINPAGE'} component={Login} />
             <Screen name={'SIGNUPPAGE'} component={SignUp}/>
            
               
            </Navigator>
        </NavigationContainer>
    )
}