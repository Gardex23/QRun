
// eslint-disable-next-line import/no-named-as-default
import styled from "styled-components/native";


export function DataBar ({ color, data }: { color: string, data: number }) {
  
  return (
    <StyledDataBar color={color + "44"}>
      <StyledDataBarData data={data} color={color}></StyledDataBarData>
    </StyledDataBar>
  )
}

const StyledDataBar = styled.View<{ color: string }>`
  width: 200px;
  align-items: flex-start;
  height: 5px;
  background-color: ${(props) => props.color};
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
`

const StyledDataBarData = styled.View<{ data: number, color: string }>`
  width: ${(props) => props.data}%;
  flex: 1;
  height: 100%;
  background-color: ${(props) => props.color};
  border-radius: 5px;
`