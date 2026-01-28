import { Image, StyleSheet, useWindowDimensions, View } from "react-native";
import styled from "styled-components/native";
import { Title } from "./Title";

export function OnboardingItem({ item } : { item:any }){
  const { width } = useWindowDimensions()

  return(
    <View style={[styles.container, {width}]}>
      <Image source={item.image} style={[styles.image , {width, resizeMode: 'contain'}]}/>

      <View style={{ flex: 0.3 }}>
        <Title>{item.title}</Title>
        <DescriptionText>{item.description}</DescriptionText>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  image: {
    flex: 0.5,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})

const DescriptionText = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.buttons.fontSize}px;
  padding: 10px 64px;
  text-align: center;
  font-weight: 600;
`