import styled from "styled-components/native"


export function StatePoint({ state }: { state: boolean }) {
  return (
    <StyledPoint state={state}/>
  )
}

const StyledPoint = styled.View<{state: boolean}>`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.state ? "#00ff00" : "#ff0000"};
  border-radius: 50%;
`