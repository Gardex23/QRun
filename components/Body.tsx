// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components/native';

import { ReactNode } from 'react';
import { Platform, ScrollView, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  children: ReactNode;
};

export function Body({ children, scrollable }: ThemedViewProps & { scrollable?: boolean }) {
  if (scrollable) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <BodyView scrollable>
          {children}
        </BodyView>
      </ScrollView>
    );
  }

  return (
    <BodyView>
      {children}
    </BodyView>
  );
}


const BodyView = styled.SafeAreaView<{scrollable? : boolean}>`
  flex: 1;
  justify-content: ${(props) => props.scrollable ? 'flex-start' : 'center'};
  align-items: center;
  background-color: ${(props) => props.theme.background};
  padding-top: ${Platform.OS === 'ios' ? '0px' : '50px'};
`
