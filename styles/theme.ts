import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        gray: {
            '50': '#f5f5f5' 
        } 
    },
    fonts: {
        heading: 'Montserrat',
        body: 'Montserrat'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.900'
            }
        }
    }
});