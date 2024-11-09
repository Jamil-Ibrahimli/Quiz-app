'use client'
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from '../theme';
import { Provider } from "react-redux";
import { store } from "../store";

const Providers = ({ children }: { children: React.ReactNode }) => {

    return (
        <Provider store={store}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </Provider>
    )
}

export default Providers





