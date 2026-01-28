import { Animated, useWindowDimensions } from "react-native";
import styled from "styled-components/native";


export function Paginator({ data, scrollX }: { data: any, scrollX: any }){
  
  const { width } = useWindowDimensions()
  
  
  return(
    <DotsContainer>
      { data.map((_ : any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        
        const dotWith = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp'
        })

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp'
        })
        
        return <AnimatedComponent key={i.toString()} style={{ width: dotWith, opacity }}/>
      }) }
      </DotsContainer>
    )
}



const Dot = styled.View`
  height: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.text};
  margin: 15px 10px;
  width: 10px;
`
const AnimatedComponent =  Animated.createAnimatedComponent(Dot)

const DotsContainer = styled.View`
  flex-direction: row;
`