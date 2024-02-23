import memesData from '../memesData.js'

export default function Meme(){
    
    function getImage(){
        const memesArr = memesData.data.memes //contain meme array
        const randomNum = Math.floor(Math.random() * memesArr.length) //generate random number based on length of array
        const url = memesArr[randomNum].url //grab url data from array
        console.log(url)
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