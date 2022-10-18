
import React from "react";
import {Box} from "@mui/material";
import {Person} from './PersonItem'
import './components.css'


export const Layer = ({item})  =>{
    return(
        <Box className={'layerContainer'}>
            {/*<div style={{height:20, width:2, backgroundColor:'black', display:item.parents[0].parents.length> 0?'flex':'none'}}/>*/}

            <Box className={'layerCouple'} id={item.parents.slice(-1).id}>
                {
                    item.parents.map((parent, index) =>{
                        return(
                            <Person gender={parent.gender} name={parent.name} key={index}/>
                        )
                    })
                }
            </Box>
            {/*<div style={{height:20, width:2, backgroundColor:'black', display:item.children.length> 0?'flex':'none'}}/>*/}

            <Box className={'layerItem'}>
                {
                    (item.children && item.children.length > 0)?
                        item.children.map((child, index)=>{
                            return(
                                <Layer item={child} key={index}/>
                            )
                        }):null
                }
            </Box>
        </Box>
    )
}