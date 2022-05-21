import React from 'react';


const Footer = () => {
    return ( 
        <footer>
            <div className="content-wrap">
            <h2>Let's Keep in Touch!</h2>

            {/* <!-- Social media and contact links. Add or remove any networks. --> */}
            <ul className="contact-list">
                <li><a href="mailto:xrevollo96@gmail.com">xrevollo96@gmail.com</a></li>
                <li><a href="https://medium.com/@ale.ortga0">Medium - Blogs</a></li>
                <li><a href="https://www.linkedin.com/in/xrevollo/">LinkedIn</a></li>
            </ul>
            </div>
        </footer>
    );
}
 
export default Footer;