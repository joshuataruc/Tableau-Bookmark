import { Container, Typography, Button } from '@mui/material'
import React from 'react'
import colors from '../../themes/colors'
import {useStyles} from '@material-ui/core/styles';


function Navbar() {
    // const customColors = {
    //     onsemiGrey: "#b6babf",
    //     onsemiOrange: "#ff7920",
    //   };

    const classes = useStyles();

    

    return (
        <Container>
            <Typography
                variant='h2'
                component='h2'
                color={colors.onsemiGrey}>
                Navbar
            </Typography>


            <Button variant="contained" className={classes.NavbarBtn}>Contained</Button>
        </Container>
    )
}

export default Navbar