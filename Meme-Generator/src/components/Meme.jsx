import memesData from '../memesData.js'
import React, {useState} from 'react'

export default function Meme(){
    const [memeImg, setImage] = useState("")
    
    function getMemeImage(){
        const memeArray = memesData.data.memes //assign array to var
        const randomNum = Math.floor(Math.random()*memeArray.length)// generate a random num for index
        setImage(memeArray[randomNum].url)
        
    }
    
    return(
        <div className="meme-container">
            
            <div className="form">
                <div>
                    <label className="form-label" htmlFor="">Top text</label>
                    <input type="text"
                    placeholder="Shut up"
                    className="form-input"/>
                </div>
                <div>
                    <label className="form-label" htmlFor="">Bottom text</label>
                    <input type="text" 
                    placeholder="And take my money"
                    className="form-input"/>
                </div>
                <button onClick={getMemeImage} 
                className="form-button">Get a new meme image</button>
            </div>
            <img 
            src={memeImg}
            className='form-image'
            />
        </div>
    )
}

