import React, { useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { defaultThemeContext, ThemeContext, ThemeDispatchContext, ThemeReducer } from './contexts/theme-context';
import ThemedButton from './wrappers/Button';
import ThemeController from './theme-controller';
import Api from './utility/api';
import ThemeLink from './themelink';

function App() {
  useEffect(() => {
    const api = new Api();
    const result = api.get<string>("/api/hello");
    result.then((value: string) => {
      console.log(value);
    });

  },[]);

  const [state,dispatch] = useReducer(ThemeReducer,defaultThemeContext)


  return (
    <ThemeContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        <ThemeLink />
        <div className="App">
          <ThemeController />
          <ThemedButton>Test Button</ThemedButton>
        </div>
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
