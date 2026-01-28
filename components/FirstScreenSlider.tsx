// eslint-disable-next-line import/no-named-as-default
import styled from "styled-components/native";

import { router } from "expo-router";
import { useRef, useState } from 'react';
import { Animated } from "react-native";
import slides from '../assets/SliderInfo';
import { NextButton } from "./NextButton";
import { OnboardingItem } from "./OnboardingItem";
import { Paginator } from "./Paginator";

export function ScreenSlider(){

  const [currentIndex, setCurrentIndex] = useState(0)

  
  const slidesRef = useRef(null);
  
  const scrollX = useRef(new Animated.Value(0)).current;
  
  const scrollToRight = () => {
    
    if(currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else if(currentIndex === slides.length - 1){
      router.replace('/login');
    }

  }

  const scrollToLeft = () => {
    
    if(currentIndex !== 0) {
      slidesRef.current.scrollToIndex({ index: currentIndex - 1 });
    }

  }
  const viewableItemsChanged = useRef(({ viewableItems } : {viewableItems: any}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return(
    <SliderContainer>
      <StyledFlatList horizontal showsHorizontalScrollIndicator={false} pagingEnabled bounces={false}
       data={slides} keyExtractor={(item) => item.id} 
       renderItem={({ item }) => <OnboardingItem item={item}/>}
       onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX }}}], {
        useNativeDriver: false,

       })}
       scrollEventThrottle={32}
       ref={slidesRef}
       onViewableItemsChanged={viewableItemsChanged}
       viewabilityConfig={viewConfig}
       />
       <Paginator data={slides} scrollX={scrollX}/>
       <NextButton scrollToRight={scrollToRight} scrollToLeft={scrollToLeft} index={currentIndex}/>
    </SliderContainer>
  )
}

const SliderContainer = styled.View`
  align-items: center;
  justify-content: center;
`

const StyledFlatList = styled.FlatList`
  flex: 1;
  max-height: 70%;
`