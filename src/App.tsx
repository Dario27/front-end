import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { MainLayout } from './components/layout/MainLayout';
import { theme } from './theme';
import { DashboardPage } from './pages/Dashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <DashboardPage />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
