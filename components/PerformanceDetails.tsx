import React from "react";
import { DataBar } from "./DataBar";

// eslint-disable-next-line import/no-named-as-default
import styled from "styled-components/native";
import { StatePoint } from "./StatePoint";

interface DetailsProps {
  title: string
}

interface RenderedDataProps {
  id: number,
  teamName: string,
  performanceBar: number,
  efficiencyBar: number,
  state: boolean
}

export function PerformanceDetails({ title }: DetailsProps) {

  const DATA: RenderedDataProps[] = [
    {
      id: 1,
      teamName: "Equipo 1",
      performanceBar: 80,
      efficiencyBar: 80,
      state: true
    },
    {
      id: 2,
      teamName: "Equipo 2",
      performanceBar: 8,
      efficiencyBar: 76,
      state: false
    },
    {
      id: 3,
      teamName: "Equipo 3",
      performanceBar: 10,
      efficiencyBar: 0,
      state: false
    },
    {
      id: 4,
      teamName: "Equipo 4",
      performanceBar: 1,
      efficiencyBar: 40,
      state: false
    },
  ]

  const renderItem = ({ item }: { item: RenderedDataProps}) => {
    return (
      <ItemWrapper>
        <DetailsNameRow>
          <DetailsText>{item.teamName}</DetailsText>
        </DetailsNameRow>
        <DetailsPerformanceRow>
          <DataBar data={item.performanceBar} color="#00ff00"/>
          <DetailsText>{item.performanceBar}%</DetailsText>
        </DetailsPerformanceRow>
        <DetailsEfficiencyRow>
          <DataBar data={item.efficiencyBar} color="#00ff00"/>
          <DetailsText>{item.efficiencyBar}%</DetailsText>
        </DetailsEfficiencyRow>
        <DetailsStateRow>
          <DetailsText>{item.state ? <StatePoint state={true}/> : <StatePoint state={false}/> }</DetailsText>
        </DetailsStateRow>
      </ItemWrapper>
    )
  }

  return(
    <DetailsContainer>
      <DetailsTitle>{title}</DetailsTitle>
      <StyledScrollView horizontal showsHorizontalScrollIndicator={true}>
        <StyledList data={DATA} renderItem={renderItem} ListHeaderComponent={() => (
          <StyledHeaderView>
            <DetailsNameHeader>
              <DetailsHeaderText>Equipos</DetailsHeaderText>
            </DetailsNameHeader>
            <DetailsPerformanceHeader>
              <DetailsHeaderText>Rendimiento</DetailsHeaderText>
            </DetailsPerformanceHeader>
            <DetailsEfficiencyHeader>
              <DetailsHeaderText>Eficiencia</DetailsHeaderText>
            </DetailsEfficiencyHeader>
            <DetailsStateHeader>
              <DetailsHeaderText>Estado</DetailsHeaderText>
            </DetailsStateHeader>
          </StyledHeaderView>
        )}/>
      </StyledScrollView>
    </DetailsContainer>
  )
}

const StyledHeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

const StyledScrollView = styled.ScrollView`
  width: 92%;
`

const DetailsContainer = styled.View`
  width: 92%;
  align-items: flex-start;
  padding: 7px;
  margin: 10px;
`

const DetailsNameHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2px;
  margin-left: 10px;
`
  
const DetailsPerformanceHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
  
const DetailsEfficiencyHeader = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

const DetailsStateHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const DetailsStateRow = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
`
  
const DetailsEfficiencyRow = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 5px;
  align-items: center;
`
  
const DetailsPerformanceRow = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
`
const DetailsNameRow = styled.View`
  flex-direction: row;
  padding: 2px; 
  justify-content: center;
  padding: 5px;
  align-items: center;
`

const DetailsText = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 14px;
`

const DetailsHeaderText = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 14px;
  margin: 5px;
`

const DetailsTitle = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 15px;
  font-weight: bold;
  margin: 20px;
`

const StyledList = styled.FlatList`
  flex: 1;
`

const ItemWrapper = styled.View`
  min-width: 92%;
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
`;