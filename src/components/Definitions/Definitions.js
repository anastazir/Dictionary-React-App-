import React from 'react'
import "./Definitions.css"

const Definitions = ({word, category, meanings}) => {
    return (
        <div className="meanings">
            {   
                word===""? (<span className="subTitle">Start by typing a word in the search box</span>):
                meanings.map((mean)=>
                    mean.meanings.map((item)=>
                        item.definitions.map((definition)=>

                            <div className="singleMeaning" style={{background: 'white', color: 'black'}} >
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

                                <hr style={{background: 'white', width: '100%'}}></hr>
                            </div>

                        )
                    )
                )
            }
        </div>
        
    )
}

export default Definitions
