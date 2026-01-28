// app/(tabs)/(home)/_layout.tsx
import { Stack } from 'expo-router';

export default function ProfileStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false,
      animation: 'slide_from_right', 
        
        // Habilita el gesto de deslizar el dedo desde el borde para volver atrás
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        // Esto ayuda en iOS a que el swipe sea más indulgente
        fullScreenGestureEnabled: true,
        animationDuration: 100,
     }}>
      <Stack.Screen name="index" options={{ title: 'Inicio' }} />
      <Stack.Screen name="profile" options={{ title: 'Perfil' }} />
    </Stack>
  );
}