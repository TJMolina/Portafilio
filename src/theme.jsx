import { extendTheme } from "@chakra-ui/react";

const theme = {
    config: {
        initialColorMode: "light",
        useSystemColorMode: true
    },
    styles: {
        global: {
            body: {
                "font-family": "Ubuntu, sans-serif"
            }
        }
    }
}

export default extendTheme(theme);