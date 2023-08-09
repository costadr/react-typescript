import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toogleTheme } = useAppThemeContext();
  const { toogleDrawerOpen } = useDrawerContext();

  return (
    <Routes>
      <Route path="/pagina-inicial" element={
        <>
          <Button variant='contained' color='primary' onClick={toogleTheme}>Toogle Theme</Button>
          <Button variant='contained' color='primary' onClick={toogleDrawerOpen}>Toogle DrawerOpen</Button>
        </>
      } />
      <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
    </Routes>
  );
};
