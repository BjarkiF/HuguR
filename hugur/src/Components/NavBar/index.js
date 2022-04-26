import { Button, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const NavBar = () => {
    return(
        <Stack direction="row" spacing ={10}>
            <Box
                component="img"
                alt="RU Logo"
                src="http://www.ru.is/media/HR_logo_hringur_transparent.png"
                maxHeight={64}
            ></Box>
            <Button variant="contained">IS/EN</Button>
            <Button variant="contained">Log In</Button>
            <Button variant="contained">Register</Button>
        </Stack>
    )
}

export default NavBar;