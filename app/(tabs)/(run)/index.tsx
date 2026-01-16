// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components/native';

import { Body } from '@/components/Body';
import { Card } from '@/components/Card';
import { Title } from '@/components/Title';
import { useUserStore } from '@/hooks/useUserStore';
import { Platform } from 'react-native';

export default function RunScreen() {
  
  const role = useUserStore((state) => state.role);
  
  return (
    <Body scrollable>
      <Title>Página de Carreras</Title>
      {(() => {
        if(role === 'manager'){
          return(
            <CardsContainer>
              <DetailsTitle>Equipos Disponibles</DetailsTitle>
              <Card title='Equipo Alpha' data={"3 corredores"} color={null}/>
            </CardsContainer>
          )
        }
      })()}
    </Body>
  );
}

const CardsContainer = styled.View`
  flex-direction: ${Platform.OS === 'web' ? 'row': 'column'};
  flex-wrap: no-wrap;
  align-items: center;
`

const DetailsTitle = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 15px;
  font-weight: bold;
  margin: 20px;
`