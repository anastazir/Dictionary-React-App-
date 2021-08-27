import React from 'react'
import "./Definitions.css"

const Definitions = ({word, category, meanings, lightTheme}) => {
    return (
        <div className="meanings">
                {/* {
                    meanings[0] && word && category === "en" && (
                        <audio scr={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                            style={{background: '#fff', boderRadius: 10}}
                            controls
                        >
                            Audio is only available for the English language.    
                        </audio>
                    )
                } */}
            {   
                word===""? (<span className="subTitle">Start by typing a word in the search box</span>):
                meanings.map((mean)=>
                    mean.meanings.map((item)=>
                        item.definitions.map((definition)=>

                            <div className="singleMeaning" style={{background:  lightTheme ? '#3b5360' :"white", color: lightTheme ? 'white' :"black"}} >
                                <b>{definition.definition} &nbsp;</b>    
                                <br></br>
                                {definition.example && (
                                    <span>
                                        <b>Example : </b>
                                        {definition.example} &nbsp;
                                    </span>
                                )}
                                <br></br>
                                {definition.synonyms && (
                                    <span>
                                        <b>Synonyms : </b>
                                        {definition.synonyms.map((synonym)=> `${synonym}, `)}
                                    </span>
                                )}

                                <hr style={{background: !lightTheme ? 'white' :"black", width: '100%'}}></hr>
                            </div>

                        )
                    )
                )
            }
        </div>
        
    )
}

export default Definitions
