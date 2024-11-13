'use client'
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from '../../theme';
import { Provider } from "react-redux";
import { store } from "../../store/store";
import QuizStateInitializer from "../state_initializer/QuizStateInitializer";
import ClientOnly from "../client/ClientOnly";

const Providers = ({ children }: { children: React.ReactNode }) => {

    return (
        <Provider store={store}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider theme={theme}>
                <QuizStateInitializer>
                    <ClientOnly>
                        {children}
                    </ClientOnly>
                </QuizStateInitializer>
            </ChakraProvider>
        </Provider>
    )
}

export default Providers





