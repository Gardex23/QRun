import { Body } from "@/components/Body";
import { Card } from "@/components/Card";
import { Title } from "@/components/Title";
import { useFont } from "@shopify/react-native-skia";
import { Activity, TrendingUp, Trophy, Users } from "lucide-react-native";
import { Platform } from "react-native";
import { CartesianChart, Line } from "victory-native";

// eslint-disable-next-line import/no-named-as-default
import styled, { useTheme } from "styled-components/native";


const DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i,
  highTmp: 40 + 30 * Math.random(),
}));

export default function HomeScreen() {

  const interFont = useFont(require("../../assets/Inter.ttf"), 12);

  const theme = useTheme();

  return (
    <Body scrollable>
      <Title>QRun</Title>
      <CardsContainer>
        <Card title={"Total Equipos"} data={5} icon={Users} color={'rgb(79, 134, 253)'}/>
        <Card title={"Rendimiento Promedio"} data={87.6} icon={TrendingUp} color={'rgb(0, 218, 116)'}/>
        <Card title={"Eficiencia Promedio"} data={5} icon={Activity} color={'rgb(79, 134, 253)'}/>
        <Card title={"Carreras Activas"} data={12} icon={Trophy} color={'rgb(255, 238, 0)'}/>
      </CardsContainer>
      <ChartsContainer>
        <Card title='Rendimiento por equipo' color={null} data={null} chart={<CartesianChart data={DATA} xKey="day" yKeys={["highTmp"]} axisOptions={{font: interFont, labelColor: theme.text, lineColor: theme.text}}>
          {({ points }) => (
            <Line points={points.highTmp} color={`${theme.buttons.background_blue}`} strokeWidth={3} />
          )}
        </CartesianChart>}/>
        <Card title='Tendencia Semanal' color={null} data={null} chart={<CartesianChart data={DATA} xKey="day" yKeys={["highTmp"]} axisOptions={{font: interFont, labelColor: theme.text, lineColor: theme.text}}>
          {({ points }) => (
            <Line points={points.highTmp} color={`${theme.buttons.background_blue}`} strokeWidth={3} />
          )}
        </CartesianChart>}/>
      </ChartsContainer>
    </Body>
  )
}

const CardsContainer = styled.View`
  flex-direction: ${Platform.OS === 'web' ? 'row': 'column'};
  width: 100%;
  flex-wrap: no-wrap;
  align-items: center;
`

const ChartsContainer = styled.View`
  flex-direction: ${Platform.OS === 'web' ? 'row': 'column'};
  width: 100%;
  flex-wrap: no-wrap;
  align-items: center;
`