import { LightTheme, DarkTheme as MyDarkTheme } from "@/utils/ThemeManager";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function OnBoardingScreen(){

  const color = useColorScheme();

  const currentTheme = color === 'dark' ? MyDarkTheme : LightTheme;

  return (
    <Stack screenOptions={{
          contentStyle: { backgroundColor: currentTheme.background },
          animation: 'slide_from_right',
          animationDuration: 150,
          headerShown: false,
        }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login"/>
    </Stack>
  )


}