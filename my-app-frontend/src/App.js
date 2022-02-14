import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div >
      {/* header component */}
      <Header/>
      
      
{/* main container component */}
      <body>
        <div className="main_container">

        </div>
{/* nav bar component */}
        <div className="nav_bar"> 
          NavBar
            <li>
              burger
            </li>
            <li>
              pizza
            </li>
            <li>
              ramen
            </li>
            <li>
              pastry
            </li>
        </div>
{/* collection of food cards */}
    <div className="food_cards"> 
    {/* food card  */}
      <div>
        Food Card 
        Restaurant name
        Restaurant price
        Restaurant likes
        Like / Dislike Feature
      </div>
    </div>


      </body>



    </div>
  );
}

export default App;
