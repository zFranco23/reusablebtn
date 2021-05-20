import { makeStyles } from '@material-ui/core';
import React from 'react'


import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

const useStyles=makeStyles((theme)=>({
    root:{
        textAlign:"center",
        width:"70px",
        padding:"0.5rem 1rem",
        cursor:"pointer",
        backgroundColor:"#E0E0E0",
        transition:"0.3s ease-in-out",
        borderRadius:"6px",
        "& p ":{
            margin:0,
            padding:0,
        }
    },
    hoverDefault:{
        backgroundColor:"#AEAEAE"
    }
    ,
    outline:{
        color:"#3D5AFE",
        backgroundColor:"white",
        border: "2px solid #3D5AFE",
        
    },
    hoverOutline:{
        background:"rgba(41, 98, 255, 0.1)",
    },
    text:{
        backgroundColor:"white!important",
        color:"#3D5AFE",
        "&:hover":{
            background:"rgba(41, 98, 255, 0.1)",
        },
    },
    hoverText:{
        background:"rgba(41, 98, 255, 0.1)",
    },
    disableShadow:{
        color:"#FFFFFF",
        backgroundColor:"#3D5AFE",
    },
    disabled:{
        color:"#9E9E9E",
        pointerEvents:"none",
        backgroundColor:"#E0E0E0",
    },
    endIcon:{
        width:"85px",
        display:"flex",
        color:"#FFFFFF",
        backgroundColor:"#3D5AFE",
        "& p":{
            margin:"0 0.2rem",
        }
    },
    startIcon:{
        width:"85px",
        color:"#FFFFFF",
        display:"flex",
        backgroundColor:"#3D5AFE", 
        "& p":{
            margin:"0 0.5rem",
        }
    },
    sm:{
        backgroundColor:"#3D5AFE",
        color:"#FFFFFF",
        width:"55px",
        padding:"0.3rem 1rem",
    },
    md:{
        color:"#FFFFFF",
        backgroundColor:"#3D5AFE",
        width:"70px",
    },
    lg:{
        color:"#FFFFFF",
        backgroundColor:"#3D5AFE",
        width:"80px",
        padding:"0.7rem 1.2rem",
    },
    primary:{
        backgroundColor:"#2962FF",
        color:"#FFFFFF",
    },
    secondary:{
        backgroundColor:"#455A64",
        color:"#FFFFFF", 
    },
    danger:{
        backgroundColor:"#D32F2F",
        color:"#FFFFFF",  
    },
    hoverPrimary:{
        backgroundColor:"#0039CB",
    },
    hoverSecondary:{
        backgroundColor:"#1C313A",
    },
    hoverDanger:{
        backgroundColor:"#9A0007",
    }
}))
function Button({
    hoverDefault,
    hoverText,
    hoverOutline,
    hoverPrimary,
    hoverSecondary,
    hoverDanger,
    variant,
    disableShadow,
    disabled,
    startIcon,
    endIcon,
    size,
    color
}) {

    const classes=useStyles();

    return (

            <div className={`${classes.root} 
                ${hoverDefault && classes.hoverDefault}
                ${hoverText && classes.hoverText}
                ${hoverOutline && classes.hoverOutline}
                ${hoverPrimary && classes.hoverPrimary}
                ${hoverSecondary && classes.hoverSecondary}
                ${hoverDanger && classes.hoverDanger}
                ${variant==="outline" && classes.outline}
                ${variant==="text" && classes.text}
                ${disableShadow && classes.disableShadow}
                ${disabled && classes.disabled}
                ${startIcon && classes.startIcon}
                ${endIcon && classes.endIcon}
                ${size==="sm" && classes.sm}
                ${size==="md" && classes.md}
                ${size==="lg" && classes.lg}
                ${color==="default" && classes.default}
                ${color==="primary" && classes.primary}
                ${color==="secondary" && classes.secondary}
                ${color==="danger" && classes.danger}
            `}>
            {startIcon && <LocalGroceryStoreIcon />}  {disabled ? <p>Disabled</p> : <p>Default</p>} {endIcon && <LocalGroceryStoreIcon />}
            </div>
    )
}

export default Button
