import React from "react";
import { ReactComponent as Smartphone } from "../img/smartphone.svg";
import { ReactComponent as Whatsapp } from "../img/whatsapp.svg";
import { ReactComponent as Maps } from "../img/map.svg";
import { ReactComponent as Email } from "../img/email.svg";
import { HashLink as Link } from 'react-router-hash-link';
import "../styles/header.scss"


export default function HeaderComponent() {
  return (
    <header className="div-center">
      <div className="max-width-content">
        <p><Maps className="svgimg" /><a href="https://goo.gl/maps/QWVyguKJs6yMuUs56" target="_blank" rel="noopener noreferrer"> г. Каменск-Уральский, ул. Кунавина, 2, оф. 216 (бизнес-центр Петровский)</a></p>
        <div>
          <p>
            <Smartphone className="svgimg" />
            <a href="tel:+79045449623"> +7 (904) 544-96-23</a>
            <Whatsapp className="svgimg" />
          </p>
          <p>
            <Email className="svgimg" /><a href="mailto:advbykovigor@bk.ru"> advbykovigor@bk.ru</a>
          </p>
        </div>
        <p>
          <Link to="/#consultation-link" className="a-button">
            Записаться на консультацию
          </Link>
        </p>
      </div>
    </header>
  );
}