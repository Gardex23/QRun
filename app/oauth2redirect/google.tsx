import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export default function GoogleRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Esta pantalla se abre brevemente cuando Google responde.
    // El hook useAuthRequest en tu Login ya debió capturar el token.
    // Aquí solo necesitamos redirigir al usuario fuera de esta pantalla blanca/negra.
    
    // Opción A: Ir al inicio
    router.replace('/'); 
    
    // Opción B: Si prefieres volver atrás (a veces funciona mejor dependiendo del flujo)
    // router.back();
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <ActivityIndicator size="large" color="#ffffff" />
      <Text style={{ color: '#fff', marginTop: 20 }}>Iniciando sesión...</Text>
    </View>
  );
}