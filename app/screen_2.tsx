import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";


export default function Screen2() {
  const { nombre } = useLocalSearchParams();
  const router = useRouter();
  return (
    <View>
      <Text>Hola {nombre}, esta es la página 2</Text>
      <Button title="Ir a pantalla 1" onPress={() => router.back()}/>
    </View>
  )
}