import React, { useState } from 'react';
import SplashScreen from './app/screens/SplashScreen';
import NextScreen from './app/screens/NextScreen';

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('Splash');

    const handleNavigateToNext = () => { setCurrentScreen('Next')   };

    const handleBackToSplash = () => {setCurrentScreen('Splash') };

    if (currentScreen === 'Splash') {
        return <SplashScreen onNext={handleNavigateToNext} />;
    }

    if (currentScreen === 'Next') {
        return <NextScreen onBack={handleBackToSplash} />;
    }

    return null;
}

/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './app/screens/SplashScreen';
import NextScreen from './app/screens/NextScreen';

const Stack = createStackNavigator();

export default function App() {
  
    return (
      <NavigationContainer initialRoutename="SplashScreen">
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Next" component={NextScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
      </NavigationContainer>
    );
}*/
