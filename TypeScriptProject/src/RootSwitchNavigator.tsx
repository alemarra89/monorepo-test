import React from 'react';
import { createSwitchNavigator, NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./Home";
import { ActivityIndicator, View } from "react-native";
import PreloginScreen from "./PreloginScreen";
import PreloginContainer from './PreloginContainer';



class SplashScreen extends React.Component {

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
            </View>
        );
    }
}



const PublicStack = createStackNavigator(
    {
        PreloginScreen: {
            screen: PreloginContainer
        }
    }
);

const PrivateStack = createStackNavigator({
    Home: { screen: HomeScreen },
    // Profile: { screen: SecondaPagina }
});

const RootSwitchNavigator = createSwitchNavigator(
    {
        Splash: SplashScreen,
        Public: PublicStack,
        Private: PrivateStack
    },
    { initialRouteName: 'Public' }
);

export default RootSwitchNavigator;
