// eslint-disable-next-line import/no-named-as-default
import styled from "styled-components/native";

import { LucideIcon } from "lucide-react-native";
import { ImageSourcePropType, View } from "react-native";

interface ProfileCardProps {
  imageSource: ImageSourcePropType,
  name: string,
  role: string,
  age: number,
  teamsNumber: number,
  teamsIcon: LucideIcon
}

export function ProfileCard({ imageSource, name, role, age, teamsNumber, teamsIcon: IconComponent }: ProfileCardProps){
  return(
    <CardContainer>
      <CardInfoContainer>
        <StyledImage source={imageSource} />
      </CardInfoContainer>
      <CardInfoContainer>
        <CardTitle>
          { name }
        </CardTitle>
        <CardText>{(() => {
          if(role === 'runner'){
            return "Corredor"
          } else if(role === 'manager'){
            return "Organizador"
          } else {
            return "Entrenador"
          }
        })()} - {age} años</CardText>
        <View style={{ flexDirection: 'row', alignItems: "center", gap: 8}}>
          <IconComponent color={"#ffff00"} size={15}/>
          <CardText>Equipos: {teamsNumber}</CardText>
        </View>
      </CardInfoContainer> 
    </CardContainer>
  )
}

const CardInfoContainer = styled.View`
  flex-direction: column;
`

const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`

const CardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 92%;
  justify-content: space-around;
  gap: 30px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.buttons.background_grey};
  padding: 8px;
  shadow-color: ${(props) => props.theme.text};
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  
  /* Android Shadow */
  elevation: 6;
  margin: 10px;
`

const CardTitle = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
`

const CardText = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 15px;
  padding: 2px;
`