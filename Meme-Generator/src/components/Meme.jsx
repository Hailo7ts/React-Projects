import memesData from '../memesData.js'

export default function Meme(){
    
    function getImage(){
        const memeArray = memesData.data.memes //assign array to var
        const randomNum = Math.floor(Math.random()*memeArray.length)// generate a random num for index
        const url = memeArray[randomNum].url
        console.log(url)//return random meme image 
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
                <button onClick={getImage} className="form-button">Get a new meme image</button>
                
            </div>
        </div>
    )
}

