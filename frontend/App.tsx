import React from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider, IconRegistry
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Router from './src/views/Router';

export default (): React.ReactFragment => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <Router />
    </ApplicationProvider>
  </>
);