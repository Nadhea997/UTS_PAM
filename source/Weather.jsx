import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackWeather } from '@react-navigation/native-stack';
import Add from './views/Add.jsx';
import Home from './views/Home.jsx';
import Welcome from './views/Welcome.jsx';
import Countdown from './views/Countdown.jsx';

const Stack = createNativeStackWeather();
const options = { headerShown: false };

class Weather extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Weather initialRouteName="Home" screenOptions={options}>
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Add" component={Add} />
                    <Stack.Screen name="Countdown" component={Countdown} />
                </Stack.Weather>
            </NavigationContainer>
        );
    }
}

export default Weather;