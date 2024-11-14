'use client';
import { Box, Spinner, useColorMode } from '@chakra-ui/react';

export const LoadingSpinner = () => {

    const { colorMode } = useColorMode()

    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" minH="100vh" bg={colorMode === 'dark' ? 'gray.900' : 'gray.100'} >
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='purple.600'
                    size='xl'
                />
            </Box>

        </>
    );
};