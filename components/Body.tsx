// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components/native';

import { ReactNode } from 'react';
import { ScrollView, type ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export type ThemedViewProps = ViewProps & {
  children: ReactNode;
};

export function Body({ children, scrollable }: ThemedViewProps & { scrollable?: boolean }) {
  if (scrollable) {
    return (
      <MainContainer>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <BodyView scrollable>
            {children}
          </BodyView>
        </ScrollView>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <BodyView>
        {children}
      </BodyView>
    </MainContainer>
  );
}


const BodyView = styled(SafeAreaView)<{scrollable? : boolean}>`
  flex: 1;
  justify-content: ${(props) => props.scrollable ? 'flex-start' : 'center'};
  align-items: center;
`

const MainContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;
