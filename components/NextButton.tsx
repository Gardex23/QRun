import { ArrowLeft, ArrowRight } from "lucide-react-native"
import styled, { useTheme } from "styled-components/native"

interface NextButtonProps {
  scrollToRight: () => void,
  scrollToLeft: () => void,
  index: number
}

export function NextButton({ scrollToRight, scrollToLeft, index }: NextButtonProps){

  const theme = useTheme()

  return(
    <ButtonsContainer index={index}>
      {(() => {
        if(index === 0){
          return(
            null
          )
        } else {
          return(
            <ArrowContainer activeOpacity={1} underlayColor={theme.buttons.background_grey}
            onPress={scrollToLeft}>
              <ArrowLeft color={theme.text} size={40}/>
            </ArrowContainer>
          )
        }
      })()}
      <ArrowContainer onPress={scrollToRight} activeOpacity={1} underlayColor={theme.buttons.background_grey}>
        <ArrowRight color={theme.text} size={40}/>
      </ArrowContainer>
    </ButtonsContainer>
  )
}

const ArrowContainer = styled.TouchableHighlight`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`

const ButtonsContainer = styled.View<{index : number}>`
  align-items: center;
  width: 95%;
  justify-content: ${(props) => props.index === 0 ? 'flex-end' : 'space-between'};
  flex-direction: row;
  padding: 10px;
  margin: 30px 15px;
`