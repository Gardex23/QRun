import { Body } from "@/components/Body";
import SignInButton from "@/components/SignInButton";
import { Title } from "@/components/Title";
import { useUserStore } from "@/hooks/useUserStore";
import { useRouter } from "expo-router";
import { Footprints, Globe, HeartPulse } from "lucide-react-native";

export default function ProfileScreen() {
  
  const setRole = useUserStore((state) => state.setRole);

  
  const router = useRouter();
  
  const handleSignIn = (role: 'manager' | 'trainer' | 'runner', href: any) => {
    setRole(role);
    router.replace(href);
  }
  return (
   <Body>
    <Title>Inicia sesión</Title>
    <SignInButton text="Organizador" icon={Globe} color="#009900" colorIcon="#ffff00" onPress={() => handleSignIn("manager", "/profile")}/>
    <SignInButton text="Entrenador" icon={HeartPulse} color="#ff0037" colorIcon="#d00" onPress={() => handleSignIn("trainer", "/profile")}/>
    <SignInButton text="Corredor" icon={Footprints} color="#11a011" colorIcon="#00f" onPress={() => () => handleSignIn("runner", "/profile")}/>
   </Body> 
  );
}