import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
import Header from "./header";
import Footer from "./footer";
import Pizza from "./pizza";
import './index.css';

function App() {
    return (
        <>
            <Header />
            <Menu />
            <Footer />
        </>
    )
}

function Menu() {
    const pizzas = pizzaData;
    const pizzaNumb = pizzas.length;
    return <div className="menu">
        <h2>Today's Menu</h2>
        {pizzaNumb > 0 ? (
            <div className="menu-list">
                {pizzas.map((pizza) => (
                    <Pizza pizzaObj={pizza} key={pizza.name} />
                ))}
            </div>
        ) : <p>Oops no items available, check back later :)</p>}
    </div>
}

// function Pizza({ pizzaObj }) {
//     const { name, ingredients, price, photoName, soldOut } = pizzaObj;
//     return (
//         <div className={`item ${soldOut ? 'sold-out' : ''}`}>
//             <div className="item-photo">
//                 <img src={photoName} alt={name} />
//             </div>
//             <div className="item-details">
//                 <h3>{name}</h3>
//                 <p>{ingredients}</p>
//                 {soldOut ? (<span>SOLD OUT</span>) : (<span>{curINR} {price}</span>)}
//             </div>
//         </div>
//     )
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);