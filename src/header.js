
import pizzaData from "./data";

function Header() {
    const style = { color: '#F1663D', fontSize: '40px', textTransform: 'uppercase' };
    const pizzaNum = pizzaData;
    return <div className="header">
        <h1 style={style}>Fast Pizza Delivery Co.</h1>
        {pizzaNum.length > 0 && <HeaderMsg />}

    </div>
}

function HeaderMsg() {
    return (
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    )
}

export default Header