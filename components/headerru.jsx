import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import ButtonMenu from "./button"
import MenuListHead from "./menu"
import 
{
useMediaQuery,
useTheme 
}from "@material-ui/core"



export default function Header(){
    const theme = useTheme();
const isMatch = useMediaQuery(theme.breakpoints.down('sm'));


    
    return(

        <div className="w-100 d-flex sticky-top">

            { isMatch ? <ButtonMenu className="mt-1" />: 
            (
                <>
                <MenuListHead/>
                </>
            )
            }


        </div> 
    )

    
}