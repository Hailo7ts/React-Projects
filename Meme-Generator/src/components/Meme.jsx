import memesData from '../memesData.js'
import React, {useState} from 'react'

export default function Meme(){

    const [allMemeImages, setAllMemeImages] = useState(memesData)
    
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImg: "http://i.imgflip.com/1bij.jpg"})
    
    function getMemeImage(){
        const memeArray = allMemeImages.data.memes //assign array to var
        const randomNum = Math.floor(Math.random()*memeArray.length)// generate a random num for index
        const url = memeArray[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url 
            
        }))
        
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
            src={meme.randomImg}
            className='form-image'
            />
        </div>
    )
}

