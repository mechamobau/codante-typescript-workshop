import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import { TodoProvider } from './context/useTodoContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <TodoProvider>
        <App />
      </TodoProvider>
    </MantineProvider>
  </React.StrictMode>
);