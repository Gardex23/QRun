// app/(tabs)/(home)/_layout.tsx
import { Stack } from 'expo-router';

export default function RunStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Inicio' }} />
    </Stack>
  );
}