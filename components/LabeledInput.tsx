import styled from "styled-components/native";

interface LabeledInputProps {
  label: string,
  placeholder: string
  keyboardType: string | null;
  textContent: string | null;
}

export function LabeledInput({ label, placeholder, keyboardType, textContent }: LabeledInputProps){
  return (
    <InputContainer>
      <LabelText>{label}</LabelText>
      <StyledTextInput placeholder={placeholder} keyboardType={keyboardType} textContentType={textContent}>
      </StyledTextInput>
    </InputContainer>
  )
}

const InputContainer = styled.View`
  width: 100%;
  justify-content: flex-start;
`

const StyledTextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.buttons.color,
}))`
  width: 92%;
  height: 70px;
  border-radius: 15px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.buttons.background_grey};
  margin: 8px;
  padding: 15px;
  font-size: ${(props) => props.theme.buttons.fontSize}px;
`

const LabelText = styled.Text` 
  font-size: ${(props) => props.theme.buttons.fontSize}px;
  color: ${(props) => props.theme.text};
  padding: 8px 12px;
`