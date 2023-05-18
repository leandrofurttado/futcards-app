// TEMA QUE É USADO EM TODO O APLICATIVO

import { extendTheme } from "native-base";


export const THEME = extendTheme({
    colors: {
        primary: {
            700:'#996DFF'
        },
        secondary: {
            700: '#FBA94C'
        },
        green: {
            700: '#00875F',
            500: '#00837E',
            300: '#84D361',
        },
        gray: {
            700:'#121214',
            600:'#282624',
            500:'$323238',
            200:'#C4C4CC',
            100:'#E1E1E6'
        },
        yellow:{
            700: '#FFCA00',
            500: '#FFCF52'
        },
        white:'#FFFFFF'  
    },
    fonts: {
        heading: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24,
    },
    sizes: {
        14: 56
    }
})