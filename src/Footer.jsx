import React from "react";



let Footer = ()=>{
    let currentYear = new Date().getFullYear
    
    return <footer>
    <p>copyright {currentYear}</p>
    </footer>
}

export default Footer;