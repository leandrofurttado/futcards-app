import React from 'react';
import { SvgProps } from 'react-native-svg';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      register:undefined;
      signin: undefined;
      Configuracoes:undefined;
    }
  }
}

const content: React.FC<SvgProps>;
export default content;
