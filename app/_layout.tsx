import { Body } from '@/components/Body';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { LightTheme, DarkTheme as MyDarkTheme } from '@/utils/ThemeManager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, DefaultTheme, ThemeProvider as NavThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import 'react-native-reanimated';
import { ThemeProvider } from "styled-components/native";

// Esto fuerza el color nativo antes de que renderice nada visual
SystemUI.setBackgroundColorAsync("black"); // O tu color hex exacto

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const color = useColorScheme();
    
  const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {

        if(__DEV__) {
          await AsyncStorage.removeItem('launched')
        }

        const value = await AsyncStorage.getItem('launched');
        if(value === null){
          await AsyncStorage.setItem('launched', 'true');
          setIsFirstTime(true);
        } else {
          setIsFirstTime(false)
        }
      } catch(err) {
        console.error('Error:', err);
        setIsFirstTime(false)
      }
    }

    checkFirstLaunch();
  }, [])

  useEffect(() => {
    const checkLogged = async () => {
      const logged = await AsyncStorage.getItem('logged');

      if(logged === 'null') {
        await AsyncStorage.setItem('logged', 'false');
        setIsLogged(false);
      } else {
        setIsLogged(true);
      }
    }
  }, [])

  const currentTheme = color === 'dark' ? MyDarkTheme : LightTheme;

  const navigationTheme = color === 'dark' ? DarkTheme : DefaultTheme;

  return (


    <NavThemeProvider value={navigationTheme}>
      <ThemeProvider theme={currentTheme}>
        {(() => {
          if(isFirstTime === null){
            return (
              <Body>
                <ActivityIndicator size='large'/>
              </Body>
            )
          }

          if(isFirstTime === true) {
            return (
              <Stack screenOptions={{
          contentStyle: { backgroundColor: currentTheme.background },
          animation: 'slide_from_right',
          animationDuration: 150,
          headerShown: false,

        }}>
                <Stack.Screen name='(onboarding)'/>
              </Stack>
            )
          }

          if(isFirstTime === false) {
            if(isLogged === true) {
              return (
                <Stack screenOptions={{
              contentStyle: { backgroundColor: currentTheme.background },
              animation: 'slide_from_right',
              animationDuration: 150,
              headerShown: false,
            }}>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
            </Stack>
              )
            } else {
              return (
                <Stack screenOptions={{
          contentStyle: { backgroundColor: currentTheme.background },
          animation: 'slide_from_right',
          animationDuration: 150,
          headerShown: false,

        }}>
                <Stack.Screen name='(onboarding)'/>
              </Stack>
              )
            }
          }
        })()}
        <StatusBar style="auto" translucent={true}/>
      </ThemeProvider>
    </NavThemeProvider>
  );
}
