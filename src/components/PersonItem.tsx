
import React from "react";
import {Box, Typography} from "@mui/material";
import './components.css'
import PeopleIcon from '@mui/icons-material/People';

type PersonProps = {
    gender: string,
    name: string
}
export const Person = ({gender, name}:PersonProps)  =>
    <Box className={'person'} style={{backgroundColor: gender==='female'? "lightpink": 'lightblue'}}>
        <PeopleIcon style={{marginRight:20}}/>
        <Typography  variant="body1">
            {name}
        </Typography>
    </Box>
