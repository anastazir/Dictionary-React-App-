import {createTheme, MenuItem, TextField, ThemeProvider} from "@material-ui/core"
import React from 'react'
import "./Header.css"
import categories from "../../data/category"
export default function Header({category, setCategory, word, setWord}) {
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
            <span className="title">{word? word : "Word Hunt"}</span>
            <div className="inputs">
            <ThemeProvider theme={darkTheme}>
                <TextField id="standard-basic" 
                    className="search"
                label="Standard" 
                value={word} 
                onChange={(e)=>(setWord(e.target.value))} />
                <TextField
                    select
                    label="Select"
                    value={category}
                    helperText="Please select your language"
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
