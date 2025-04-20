import ReactDOM from "react-dom/client";
import React from "react";
import "./style.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: true,
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
  const pizzas = pizzaData;
  const numPizza = pizzas.length; /// === 0  ; 6
  const myStyle = {
    textAlign: "center",
    marginBottom: "450px",
    marginTop: "300px",
    fontSize: "50px",
  };

  const myStyle2 = {
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    marginBottom: "100px",
    fontSize: "20px",
  };

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

      {/* ///// conditional rendering with & operator :  */}
      {/* {numPizza > 0  && <div  className="card-container">
      {pizzas.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </div>}
      */}

      {/* conditional rendering with ternary operator ::  */}

      {numPizza > 0 ? (
        <>
          <p style={myStyle2}>
            Authentic Italian cuisine . 6 creative dishes to choose from . All
            from our stone oven . all organic , all delicious
          </p>
          <div className="card-container">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </div>
        </>
      ) : (
        <p style={myStyle}>
          We 're still working on our menu . Please come back later 😊
        </p>
      )}
    </div>
  );
}
function Pizza({ pizzaObj }) {
  // early return (third conditional rendering)  :
  // if (pizzaObj.soldOut) return null;
  return (
    <div className={`card ${pizzaObj.soldOut ? "soldout" : ""}`}>
      <img src={pizzaObj.photoName} alt="we will fix that" />
      <div className="info">
        <h2>{pizzaObj.name}</h2>
        <p> {pizzaObj.ingredients} </p>
        <strong>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</strong>
        {/* {pizzaObj.soldOut ? ( <h1>soldout</h1>) : (<p>{pizzaObj.price}</p>)} */}
      </div>
    </div>
  );
}

function Footer() {
  // const hour = new Date().getHours(); /// 21
  const hour = 20;
  const openHour = 10;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p style={{ fontSize: "20px" }}>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00 😊
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div>
      <p>We're open until {closeHour}:00 . Come visit us or order online</p>
      <button> Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// fotter componenet first version ::
// <footer>
//   {isOpen && (
//     <p>We're open until {closeHour}:00 . Come visit us or order online</p>
//   )}
//   <button> Order</button>
// </footer>
