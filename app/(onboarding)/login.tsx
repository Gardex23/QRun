// eslint-disable-next-line import/no-named-as-default
import styled from "styled-components/native";

import { Body } from "@/components/Body";
import { LabeledInput } from "@/components/LabeledInput";
import { Separator } from "@/components/SeparatorLogin";
import { Title } from "@/components/Title";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeRedirectUri } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import { router } from "expo-router";
import * as WebBrowser from 'expo-web-browser';
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen (){


  /* const API_URL = 'http://192.168.1.103:5000/api'

  const [techs, setTechs] = useState([])

  const fetchTech = async () => {
    try {
      const reponse = await axios.get(`${API_URL}/profile`);
      setTechs(reponse.data)
    }
    catch(err){
      console.log("Error fetching data: ", err);
    }
  }

  useEffect(() => {
    fetchTech()
  }, []) */


  const redirectUri = makeRedirectUri({
    native: 'com.sarm.qrun:/oauth2redirect/google',
    path: 'oauth2redirect/google'
  })

  const enviarToken = async (token: string) => {
    console.log(token)
  }

  console.log('uri', redirectUri)

  const [ request, response, promptAsync ] = Google.useAuthRequest({
    androidClientId: '659453822092-nvb9opkbc6hnn04arr058aohp4kbcui2.apps.googleusercontent.com',
    redirectUri: redirectUri
  })

  useEffect(() => {
    if(response){
      if(response?.type === 'success'){
        enviarToken(response.authentication?.accessToken || '');
        AsyncStorage.setItem("logged", 'true');
        router.replace('/')
      }
    }
  }, [response])

  return (
   <Body>
    <Title>Inicia sesión</Title>
      <InfoContainer>
        <LabeledInput placeholder="Correo Electrónico" label="Correo Electrónico" keyboardType={"email-address"} textContent={null}/>
        <LabeledInput placeholder="Contraseña" label="Contraseña" keyboardType={null} textContent={"password"}/>
        <Separator separatorText="o"/>
        <GoogleButton onPress={() => promptAsync().catch((e) => {
          console.error('Error al iniciar sesión', e)
        })}>
          <ForgottenPassword>Inicia sesión con Google</ForgottenPassword>
        </GoogleButton>
        <>
        {(() => {
          return(
            <>
              <TouchableOpacity>
                <ForgottenPassword isLink>¿Olvidaste tu contraseña?</ForgottenPassword>
              </TouchableOpacity>
              <TouchableOpacity>
                <ForgottenPassword isLink>Crea una cuenta aquí</ForgottenPassword>
              </TouchableOpacity> 
            </>
          )
        })()}
        </>
      </InfoContainer>
      {/* <View>
        { techs.map((item) => {
          return (
            <View key={item.id}>
              <Text style={{color: "#fff"}}>{item.nombre} ({item.tipo})</Text>
            </View>
          )
        }) }
      </View> */}
      <TouchableOpacity onPress={() => {
        AsyncStorage.setItem('launched', 'false')
        router.replace('/(tabs)/(home)')
      }}>
        <Title>Ir al home</Title>
      </TouchableOpacity>
   </Body> 
  );
}

const GoogleButton = styled.TouchableOpacity`
  width: 92%;
  border-radius: ${(props) => props.theme.buttons.borderRadius}px;
  align-items: center;
`

const ForgottenPassword = styled.Text<{isLink?: boolean}>`
  font-size: ${(props) => props.theme.buttons.fontSize}px;
  color: ${(props) => props.isLink ? '#1bd0dd' : props.theme.text};
  padding: 10px;
`

const InfoContainer = styled.View`
  width: 92%;
  justify-content: center;
  align-items: center;
`