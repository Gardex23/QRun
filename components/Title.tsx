import { useColorScheme } from 'react-native';

// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components/native';

import { DarkTheme, LightTheme } from '@/utils/ThemeManager';

export function Title( { children }: { children: React.ReactNode }) {
  const color = useColorScheme();

  const currentTheme = color === 'dark' ? DarkTheme : LightTheme;

  return (
      <TitleStyled theme={currentTheme}>{children}</TitleStyled>
  );
}

const TitleStyled = styled.Text`
  color: ${(props) => props.theme.text};
  margin: 20px 0px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`