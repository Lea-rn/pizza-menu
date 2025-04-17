import ReactDOM from "react-dom/client";
import React from "react";
import "./style.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
/// parent componenet
const App = () => {
  return (
    <div>
      <Header />

      <Menu />
      <Footer />
    </div>
  );
};

function Header() {
  // const x = {
  //   color: "red",
  //   fontSize: "80px",
  //   backgroundColor: "green",
  //   border: "solid",
  // };
  // return <h1 style={x}>Fast React Pizza Co.</h1>;
  return (
    <header>
      <h1 className="title">Fast React Pizza Co.</h1>
    </header>
  );
}


/// 0 , false , undefined , NAN , null 
function Menu() {
  const pizzas = pizzaData
  const numPizza = pizzas.length  /// === 0  ; 6
  
  return (
    <div>
      <h2 className="menu-title">Our menu</h2>
 
   

        {/* {pizzaData.map((pizza) => (
          <Pizza
            photoName={pizza.photoName}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
          />
        ))} */}  


    {numPizza && <div  className="card-container">
      {pizzas.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </div>}
     
      
    </div>
  );
  
}
function Pizza(props) {
  return (

    <div className="card">
      <img src={props.pizzaObj.photoName} alt="we will fix that" />
      <div className="info">
        <h2>{props.pizzaObj.name}</h2>
        <p> {props.pizzaObj.ingredients} </p>
        <strong>{props.pizzaObj.price + 3}</strong>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours(); /// 21
  const openHour = 10;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //  if (hour >= openHour && hour<=closeHour) alert ("We're currently open")
  //   else alert ("We're currently closed")

  return (
    <footer>
    
      {isOpen && (
        <p>We're open until {closeHour}:00 . Come visit us or order online</p>
      )}
      <button> Order</button>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
