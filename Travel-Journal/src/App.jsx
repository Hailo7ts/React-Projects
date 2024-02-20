import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from './data'



function App() {
  const cardData = data.map((card)  => {
    return <Card 
      key = {card.id}
      {...card}//spread
    />})
    
    

    return (
      <div>
        <Navbar />
        <section className="card-list">
          {cardData}
        </section>
        
    </div>
  )
}

export default App
