import { useColorMode } from '@chakra-ui/color-mode';
import { Button } from '@chakra-ui/button';
import React, { useState } from 'react'

import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';

function ToggleColorMode() {
  
const {colorMode, toggleColorMode} = useColorMode();
  
    return (
    <Button onClick={() => toggleColorMode()}>
      {colorMode === "dark" ? <LightModeIcon /> : <NightlightIcon />}
    </Button>
  )
}

export default ToggleColorMode
