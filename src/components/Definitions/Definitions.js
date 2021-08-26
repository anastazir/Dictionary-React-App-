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
                                <b>{definition.definition}</b>    
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
