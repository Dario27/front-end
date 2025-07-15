import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Button } from '../components/ui/Button/Button';
import { Checkbox } from '../components/ui/Checkbox/Checkbox';
import { Dropdown } from '../components/ui/Dropdown/Dropdown';
import { Table } from '../components/ui/Table/Table';
import { BarChartComponent } from '../components/ui/charts/BarChart';

const dropdownOptions = [
  { value: 'option1', label: 'Opción 1' },
  { value: 'option2', label: 'Opción 2' },
  { value: 'option3', label: 'Opción 3' },
];

const tableData = [
  { id: 1, name: 'Item 1', value: 100 },
  { id: 2, name: 'Item 2', value: 200 },
  { id: 3, name: 'Item 3', value: 300 },
];

const tableColumns = [
  { header: 'ID', accessorKey: 'id' },
  { header: 'Nombre', accessorKey: 'name' },
  { header: 'Valor', accessorKey: 'value' },
];

const chartData = [
  { name: 'Enero', value: 400 },
  { name: 'Febrero', value: 300 },
  { name: 'Marzo', value: 600 },
  { name: 'Abril', value: 800 },
];

export const DashboardPage: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Componentes UI
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Button variant="contained">Botón Primario</Button>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Checkbox label="Acepto los términos" />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Dropdown options={dropdownOptions} label="Selecciona una opción" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Tabla de Datos
          </Typography>
          <Table data={tableData} columns={tableColumns} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Gráficos
          </Typography>
          <BarChartComponent data={chartData} />
        </Grid>
      </Grid>
    </Box>
  );
};