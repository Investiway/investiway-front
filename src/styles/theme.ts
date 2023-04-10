import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#d1d5db',
        },
        secondary: {
            main: '#f39c12',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#282c34',
        },
    },
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

export default theme;