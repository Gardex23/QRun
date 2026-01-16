// eslint-disable-next-line import/no-named-as-default
import styled from "styled-components/native";

import { LucideIcon } from "lucide-react-native";

interface SignInButtonProps {
  text: string,
  icon: LucideIcon,
  colorIcon: string,
  color: string,
  onPress: () => void,
}

export default function SignInButton({ text, color, icon: IconComponent, colorIcon, onPress } : SignInButtonProps) {
  return (
    <StyledSignInButton color={color} onPress={onPress}>
      <IconComponent color={colorIcon} size={25}/>
      <CardTitle>{text}</CardTitle>
    </StyledSignInButton>
  )
}

const CardTitle = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 15px;
  font-weight: bold;
  padding: 5px;
`

const StyledSignInButton = styled.TouchableOpacity<{ color: string }>`
  flex-direction: row;
  align-items: center;
  width: 80%;
  justify-content: space-around;
  border-radius: 8px;
  background-color: ${(props) => props.color};
  padding: 15px;
  shadow-color: ${(props) => props.theme.text};
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  
  /* Android Shadow */
  elevation: 6;
  margin: 10px;
`