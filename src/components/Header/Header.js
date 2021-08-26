import {createTheme, MenuItem, TextField, ThemeProvider} from "@material-ui/core"
import React from 'react'
import "./Header.css"
import categories from "../../data/category"
export default function Header({category, setCategory}) {
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
                <TextField
                    select
                    label="Select"
                    value={category}
                    helperText="Please select your currency"
                    onChange={(e)=>setCategory(e.target.value)} >
                    {categories.map((option) =>(
                        <MenuItem key={option.value} value={option.label}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
            </ThemeProvider>
            </div>
        </div>
    )
}
