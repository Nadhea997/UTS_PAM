import React,{ Component, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Weather from './source/Weather.jsx';
import { countdownHelper } from './source/helper/index.js';
import * as ImagePicker from 'expo-image-picker'
import { Constants } from 'expo-constants';

class App extends Component {
    state = {
        fontLoaded: false,
    };

    componentDidMount() {
        this._loadFonts();
    }

    async _loadFonts() {
        const fonts = {
            'BarlowCondensed-Black': require('./sourse/assets/fonts/BarlowCondensed-Black.ttf'),
            'BarlowCondensed-Regular': require('./sourse/assets/fonts/BarlowCondensed-Regular.ttf'),
        };
        await Font.loadAsync(fonts);
        this.setState({ fontLoaded: true });
        countdownHelper.runtime();
    }

    render() {
        if (!this.state.fontLoaded) return null;
        return (
            <View style={st.container}>
                <StatusBar style="auto" />
                <Weather />
            </View>
        );
    }
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: '100%',
    },
});

export default App;