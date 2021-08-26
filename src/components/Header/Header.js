import {createTheme, TextField, ThemeProvider} from "@material-ui/core"
import React from 'react'
import "./Header.css"

export default function Header() {
    const darkTheme= createTheme({
        palette: {
            primary:{
                main: '#fff'
            },
            type: 'dark',
        },
    })
    return (
        <div className="header">
            <span className="title">Word Hunt</span>
            <div className="inputs">
            <ThemeProvider theme={darkTheme}>
                <TextField id="standard-basic" label="Standard" />
            </ThemeProvider>
            </div>
        </div>
    )
}
