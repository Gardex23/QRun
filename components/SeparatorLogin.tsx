import styled from "styled-components/native"

interface SeparatorProps {
  separatorText: string
}

export function Separator({separatorText}: SeparatorProps){
  return(
    <SeparatorContainer>
      <Line/>
      <StyledText>{separatorText}</StyledText>
      <Line/> 
    </SeparatorContainer>
  )
}

const SeparatorContainer = styled.View`
  flex-direction: row;
  width: 92%;
  justify-content: space-around;
  align-items: center;
`

const Line = styled.View`
  background-color: ${(props) => props.theme.buttons.color};
  flex: 1.2;
  height: 2px;
`

const StyledText = styled.Text`
  color: ${(props) => props.theme.buttons.color};
  font-size: 10px;
  padding: 10px;
`