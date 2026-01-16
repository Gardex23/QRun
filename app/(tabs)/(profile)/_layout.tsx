// app/(tabs)/(home)/_layout.tsx
import { Stack } from 'expo-router';

export default function ProfileStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Inicio' }} />
      <Stack.Screen name="profile" options={{ title: 'Perfil' }} />
    </Stack>
  );
}