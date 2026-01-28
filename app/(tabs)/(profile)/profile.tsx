// eslint-disable-next-line import/no-named-as-default
import styled, { useTheme } from "styled-components/native";

import { Body } from "@/components/Body";
import { Card } from "@/components/Card";
import { ProfileCard } from "@/components/ProfileCard";
import { Title } from "@/components/Title";
import { useUserStore } from "@/hooks/useUserStore";
import { useFont } from "@shopify/react-native-skia";
import { Heart, TrendingUp, Trophy, Users } from "lucide-react-native";
import { Platform } from "react-native";
import { CartesianChart, Line } from "victory-native";

const DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i,
  highTmp: 40 + 30 * Math.random(),
}));

export default function ProfileScreen() {

  const interFont = useFont(require("../../../assets/Inter.ttf"), 12);
  
  const theme = useTheme();

  const role = useUserStore((state) => state.role);

  return (
    <Body scrollable>
      <Title>Página del perfil</Title>
      <ProfileCard imageSource={require('../../../assets/images/icon.png')} name="Armando" 
      role={role as string} age={18} teamsNumber={2} teamsIcon={Users}/>
      {(() => {
        if(role === 'runner') {
          return (
            <>
              <CardsContainer>
                <Card title="Ritmo Cardíaco Promedio" data={"185 bpm"} icon={Heart} color={"#ff0037"}/>
                <Card title="Total Carreras" data={12} icon={Trophy} color={"rgb(255, 238, 0)"}/>
                <Card title="Mayor Tiempo" data={"22:15"} icon={TrendingUp} color={"rgb(0, 218, 116)"}/>
                <Card title="Equipos" data={2} icon={Users} color={"rgb(79, 134, 253)"}/>
              </CardsContainer>
              <CardsContainer>
                <Card title='Ritmo Cardíaco Promedio' color={null} data={null} chart={<CartesianChart data={DATA} xKey="day" yKeys={["highTmp"]} axisOptions={{font: interFont, labelColor: theme.text, lineColor: theme.text}}>
                  {({ points }) => (
                    <Line points={points.highTmp} color={`${theme.buttons.background_blue}`} strokeWidth={3} />
                  )}
                </CartesianChart>}/>
              </CardsContainer>
            </>
          )
        }
      })()}
    </Body>
  )
}

const CardsContainer = styled.View`
  flex-direction: ${Platform.OS === 'web' ? 'row': 'column'};
  flex-wrap: no-wrap;
  align-items: center;
  width: 100%;
`