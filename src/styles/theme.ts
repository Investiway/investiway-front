import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#2c3e50',
        },
        secondary: {
            main: '#f39c12',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;