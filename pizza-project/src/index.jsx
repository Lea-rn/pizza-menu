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

function Pizza() {
  return (
    <div className="card">
      <img src="pizzas/spinaci.jpg" alt="" />
  <div className="info">
        <h2>pizza spinaci</h2>
        <p> Tomato, mozarella, spinach, and ricotta cheese</p>
        <strong>10</strong>
  </div>
    </div>
  );
}

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

function Menu() {
  return (
    <div>
      <h2 className="menu-title">Our menu</h2>
 <div className="card-container">
       <Pizza />
       <Pizza />
       <Pizza />
       <Pizza />
       <Pizza />
       <Pizza />
       <Pizza />
       <Pizza />
       <Pizza />
 </div>
    </div>
  );
}



function Footer() {
  const hour = new Date().getHours(); /// 20
  const openHour = 10;
  const closeHour = 22;

  //  if (hour >= openHour && hour<=closeHour) alert ("We're currently open")
  //   else alert ("We're currently closed")

  return (
    <footer>{new Date().toLocaleTimeString()} We're currently open </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
