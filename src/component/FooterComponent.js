import React from "react";
import { ReactComponent as Telephone } from "../img/telephone.svg";
import { ReactComponent as Smartphone } from "../img/smartphone.svg";
import { ReactComponent as Whatsapp } from "../img/whatsapp.svg";
import { ReactComponent as Maps } from "../img/map.svg";
import { ReactComponent as Email } from "../img/email.svg";
import "../styles/footer.scss";

export default function FooterComponent() {
  return (
    <footer className="dark-brown-bg padding-block div-center">
      <div className="max-width-content">
        <div>
          <p>
            <Smartphone className="svgimg" />
            <a href="tel:+79045449623">+7 (904) 544-96-23</a>
            <Whatsapp className="svgimg" />
          </p>
          <p>
            <a href="tel:+79655464580">+7 (965) 546-45-80</a>
          </p>
          <p>
            <Telephone className="svgimg" /> 32-55-65
          </p>
        </div>
        <p><Email className="svgimg" /> <a href="mailto:advbykovigor@bk.ru">advbykovigor@bk.ru</a></p>
        <p><Maps className="svgimg" /> <a href="https://goo.gl/maps/QWVyguKJs6yMuUs56" target="_blank" rel="noopener noreferrer">г. Каменск-Уральский, ул. Кунавина, 2, оф. 216 (бизнес-центр Петровский)</a></p>
      </div>
    </footer>
  );
}

