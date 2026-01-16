import { LucideIcon } from "lucide-react-native";
import { ReactNode } from "react";

// eslint-disable-next-line import/no-named-as-default
import styled from "styled-components/native";


interface CardProps {
  title: string,
  data: number | string | null,
  icon?: LucideIcon,
  chart?: ReactNode,
  color: string | null,
}

interface CustomTextProps {
  isNumber: boolean;
}

export function Card ({ title, data, icon: IconComponent, chart, color }: CardProps) {
  
  return (
    <CardContainer data={data}>
      <CardInfoContainer>
        <CardTitle isNumber={false}>{title}</CardTitle>
        { typeof (data) === 'object' ? null : <CardTitle isNumber>{data}</CardTitle>}
      </CardInfoContainer>
      <ChartOrIconContainer>
        {chart ? (
          <ChartWrapper>{chart}</ChartWrapper>
        ) : (
          IconComponent && (
            <IconComponent color={color} size={30} style={{ margin: 10 }} />
          )
        )}
      </ChartOrIconContainer>
    </CardContainer>
  )
}

const CardInfoContainer = styled.View`
  flex-direction: column;
`

const CardContainer = styled.View<{data :  number | null}>`
  flex-direction: ${(props) => typeof (props.data) === 'object' ? 'column' : 'row' };
  align-items: center;
  width: 92%;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${(props) => props.theme.buttons.background_grey};
  padding: 15px;
  shadow-color: ${(props) => props.theme.text};
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  
  /* Android Shadow */
  elevation: 6;
  margin: 10px;
`

const CardTitle = styled.Text<CustomTextProps>`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.isNumber ? '20px' : '15px'};
  font-weight: ${(props) => props.isNumber ? 'bold' : 'none'};
  padding: 5px;
`

const ChartOrIconContainer = styled.View`
  justify-content: center;
  align-items: center;
  /* Si es un chart, queremos que ocupe espacio, si es icono, menos */
  min-width: 50px; 
`;

const ChartWrapper = styled.View`
  height: 180px;
  margin: 15px;
  width: 300px;
`;