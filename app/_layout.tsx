import { LightTheme, DarkTheme as MyDarkTheme } from '@/utils/ThemeManager';
import { DarkTheme, DefaultTheme, ThemeProvider as NavThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { ThemeProvider } from "styled-components/native";

import { useColorScheme } from '@/hooks/use-color-scheme';
import * as SystemUI from 'expo-system-ui';

// Esto fuerza el color nativo antes de que renderice nada visual
SystemUI.setBackgroundColorAsync("black"); // O tu color hex exacto

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const color = useColorScheme();
    
  const currentTheme = color === 'dark' ? MyDarkTheme : LightTheme;

  const navigationTheme = color === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <NavThemeProvider value={navigationTheme}>
      <ThemeProvider theme={currentTheme}>
        <Stack screenOptions={{
          contentStyle: { backgroundColor: currentTheme.background },
          animation: 'slide_from_right',
          animationDuration: 150
        }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </NavThemeProvider>
  );
}
