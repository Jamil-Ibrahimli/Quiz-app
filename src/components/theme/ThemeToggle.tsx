'use client';
import { useColorMode, Flex, Switch, Icon, useBreakpointValue } from "@chakra-ui/react";
import { PiMoonLight } from "react-icons/pi";
import { GoSun } from "react-icons/go";
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isChecked, setIsChecked] = useState(colorMode === 'dark')
    const fontBrPoints = useBreakpointValue({ base: '1rem', md: '1.2rem', lg: '1.3rem' })

    const handleToggle = () => {
        setIsChecked(!isChecked)
        setTimeout(toggleColorMode, 150)

    }

    useEffect(() => {
        setIsChecked(colorMode === 'dark');
    }, [colorMode]);

    return (
        <>
            <Flex
                position="absolute"
                top='0'
                right={{ base: '1rem', md: '2rem', lg: '2.5rem' }}
                gap={{ base: '0.8rem', md: '1rem', lg: '1.2rem' }}
                align="center"
               
            >
                <GoSun fontSize={fontBrPoints} />
                <Switch
                    isChecked={isChecked}
                    onChange={handleToggle}
                    sx={{
                        transform: {
                            base: 'scale(0.8)',
                            md: 'scale(0.9)',
                            lg: 'scale(1)'
                        }
                    }}
                    size={{ base: 'md', md: 'md', lg: 'lg' }}
                />
                <PiMoonLight fontSize={fontBrPoints} />
            </Flex>
        </>
    )
}

export default ThemeToggle
