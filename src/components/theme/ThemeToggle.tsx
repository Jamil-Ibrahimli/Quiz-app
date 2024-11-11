'use client';
import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Flex, Switch, Icon } from '@chakra-ui/react';
import { PiMoonLight } from "react-icons/pi";
import { GoSun } from "react-icons/go";
import { useEffect, useState } from 'react'
const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isChecked, setIsChecked] = useState(colorMode === 'dark')

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
                top={8}
                right={8}
                align="center"
                gap={4}

            >
                <GoSun fontSize='1.2rem' />
                <Switch
                    isChecked={isChecked}
                    onChange={handleToggle}
                />
                <PiMoonLight fontSize='1.2rem' />

            </Flex>
        </>
    )
}

export default ThemeToggle
