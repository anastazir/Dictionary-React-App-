import {createTheme, MenuItem, TextField, ThemeProvider} from "@material-ui/core"
import React from 'react'
import "./Header.css"
import categories from "../../data/category"
export default function Header({category, setCategory, word, setWord, lightTheme}) {
    const darkTheme= createTheme({
        palette: {
            primary:{
                main: !lightTheme ? '#fff': '#000'
            },
            type: !lightTheme ?  'dark' : 'light',
        },
    });

    const handleChange= (language) => {
        setCategory(language)
        setWord("")
    }

    return (
        <div className="header">
            <span className="title">{word? word : "Word Hunt"}</span>
            <div className="inputs">
            <ThemeProvider theme={darkTheme}>
                <TextField id="standard-basic" 
                    className="search"
                label="Enter Word" 
                value={word} 
                onChange={(e)=>(setWord(e.target.value))} />
                <TextField
                    select
                    label="Select"
                    value={category}
                    helperText="Please select your language"
                    onChange={(e)=>handleChange(e.target.value)} >
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
