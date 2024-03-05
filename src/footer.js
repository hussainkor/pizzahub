
function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closedHour = 22;
    const isOpen = hour >= openHour && hour <= closedHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <FootData closedHour={closedHour} openHour={openHour} />
            )
                : (<div><p>We're happy to welcome you between {openHour}:00 and {closedHour}:00</p></div>)}
        </footer >
    )
}

function FootData({ closedHour, openHour }) {
    return (
        <div className="footerTxt">
            <p>We're open from {openHour}:00 to {closedHour}:00. Come visit us or order online</p>
            <button className="order-btn">Order now</button>
        </div>
    )
}

export default Footer;