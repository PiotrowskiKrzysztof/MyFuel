import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React, { useState } from 'react';
import { ThemeContext } from './src/utils/theme.context';
import Router from './src/views/Router';

export default (): React.ReactFragment => {
  const [theme, setTheme] = useState<"dark" | "light">('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <Router />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
};
