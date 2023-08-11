import { Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseDePaginaProps {
  children: React.ReactNode;
  titulo: string;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, titulo }) => {
  
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { toogleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box padding={1} display="flex" alignItems="center" height={theme.spacing(12)} gap={1}>
        
        {smDown && (
          <IconButton onClick={toogleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        
        <Typography variant="h5">
          {titulo}
        </Typography>
      </Box>

      <Box>
        Barra de ferramentas
      </Box>

      <Box>
        {children}
      </Box>
    </Box>
  );
};

{/* <Button variant='contained' color='primary' onClick={toogleTheme}>Toogle Theme</Button>
<Button variant='contained' color='primary' onClick={toogleDrawerOpen}>Toogle DrawerOpen</Button> */}