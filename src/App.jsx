import Navbar from "./components/Navbar"
import Card from "./components/Card"
import cardData from './data'

function App() {

  const cardItems = cardData.map(item => {
    return <Card key={item.id} item={item} />
  } )

  return (
    <div className="container">
      <Navbar/>
      <div className="spacer bg-white"></div>
      {cardItems}
    </div>
  )
}

export default App
