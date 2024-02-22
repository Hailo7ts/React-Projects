import memesData from '../memesData.js'

export default function Meme(){
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
                <button className="form-button">Get a new meme image</button>
                
            </div>
        </div>
    )
}