'use client';

import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

export const theme = extendTheme({
    config,
    fonts: {
        heading: 'var(--font-rubik',
        body: 'var(--font-rubik)',
    },
    colors: {
        brand: {
            purple: {
                500: '#A729F5',
                600: '#D394FA',
            },
            green: '#26D782',
            red: '#EE5454',
            gray: {
                900: '#313E51',
                700: '#3B4D66',
                500: '#626C7F',
                100: '#ABC1E1',
            }
        }
    },
    styles: {
        global: (props: any) => ({
            body: {
                bg: props.colorMode === 'dark' ? 'brand.gray.900' : 'white'
            }
        })
    }
})