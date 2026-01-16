// eslint-disable-next-line import/no-named-as-default
import styled, { useTheme } from 'styled-components/native';

import { Tabs } from 'expo-router';
import { Home, User, Zap } from "lucide-react-native";
import React from 'react';

export default function TabLayout() {

  const theme = useTheme();

  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: 'rgb(255, 0, 85)', tabBarStyle: {
      backgroundColor: theme.background,
      elevation: 0
    }}}>
      <Tabs.Screen name="(home)" options={{
        title: "Home",
        tabBarIcon: ({focused}) => (<HomeIcon focused={focused}/>)
      }}/>

      <Tabs.Screen name="(run)" options={{
        title: "Run",
        tabBarIcon: ({focused}) => (<ZapIcon focused={focused}/>)
      }}/>
      
      <Tabs.Screen name="(profile)" options={{
        title: "Profile",
        tabBarIcon: ({focused}) => (<UserIcon focused={focused}/>)
      }}/>

      
    </Tabs>
  )
}

const HomeIcon = styled(Home)<{ focused: boolean }>`
  color: ${props => props.focused ? "rgb(255, 0, 85)" : props.theme.text};
`

const UserIcon = styled(User)<{ focused: boolean }>`
  color: ${props => props.focused ? "rgb(255, 0, 85)" : props.theme.text};
`

const ZapIcon = styled(Zap)<{ focused: boolean }>`
  color: ${props => props.focused ? "rgb(255, 0, 85)" : props.theme.text};
`
