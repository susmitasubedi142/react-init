import React from 'react';
import { ThemeProvider } from './Theme';
import ThemedButton from './ThemedButton';

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Theme Toggle Example</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
};

export default App;
