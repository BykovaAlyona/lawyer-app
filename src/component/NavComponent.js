import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { ReactComponent as Logo } from "../img/logo.svg";
import { services } from "../const/services";
import "../styles/nav.scss";

export default function NavComponent() {

    const [checkmenu, setCheckmenu] = useState(false);
    const [checksubmenu, setChecksubmenu] = useState(false);
    const menuChange = (event) => {
        if (!event.target.checked) {
            setChecksubmenu(false);
        }
        setCheckmenu(current => !current);
    };
    const submenuChange = () => {
        setChecksubmenu(current => !current);
    };

    const linkInMenu = () => {
        if (checkmenu === true) {
            setCheckmenu(false);
            setChecksubmenu(false);
        }
    };

    return (
        <nav className="div-center">
            <div className="max-width-content">
                <Link to="/#"><Logo id="logo" /></Link>
                <input type="checkbox" id="check-menu"
                    checked={checkmenu} onChange={menuChange} />
                <div id="div-menu">
                    <ul id="menu">
                        <li key="mainpage"><Link to="/#" onClick={linkInMenu}>Главная</Link></li>
                        <li id="li-services" key="services">
                            <Link to="/services#" onClick={linkInMenu}>
                                Услуги <span>▼</span>
                            </Link>
                            <input type="checkbox" id="check-submenu"
                                checked={checksubmenu} onChange={submenuChange} />
                            <label htmlFor="check-submenu" />
                            <ul id="submenu">
                                {services.map((service) =>
                                    <li key={'nav_' + service.id}>
                                        <Link to={"/services/" + service.id + "#"}
                                            onClick={linkInMenu}>
                                            {service.value}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </li>
                        <li key="practice">
                            <Link to="/practice#" onClick={linkInMenu}>Практика</Link>
                        </li>
                        <li key="contacts">
                            <Link to="/contacts#" onClick={linkInMenu}>Контакты</Link>
                        </li>
                    </ul>
                </div>
                <label htmlFor="check-menu" />
            </div>
        </nav>
    );
}
