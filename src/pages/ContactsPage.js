import React from "react";
import { ReactComponent as Telephone } from "../img/telephone.svg";
import { ReactComponent as Smartphone } from "../img/smartphone.svg";
import { ReactComponent as Whatsapp } from "../img/whatsapp.svg";
import { ReactComponent as Maps } from "../img/map.svg";
import { ReactComponent as Email } from "../img/email.svg";
import Consultation from "../component/ConsultationComponent";
import "../styles/contactspage.scss"
import { Helmet } from "react-helmet";

export default function ContactsPage() {
  return (
    <>
      <Helmet>
        <title>Контакты</title>
        <meta property="og:title"
          content="Контакты адвоката и запись на консультацию" />
        <meta name="description"
          content="Контактные данные адвоката. Запись на консультацию. Свердловская, Челябинская, Курганская область и другие регионы России." />
        <link rel="canonical" href="/contacts" />
      </Helmet>

      <div id="contactspage" className="div-center">
        <article className="max-width-content">
          <section><Consultation header={"Обратная связь"} /></section>
          <section id="contacts">
            <h2>Контакты</h2>
            <div>
              <p id='p-tel'>
                <span><Smartphone className="svgimg" />
                  <Whatsapp className="svgimg" />
                  <a href="tel:+79045449623">+7 (904) 544-96-23</a>
                </span>
                <span>
                  <Smartphone className="svgimg" />
                  <a href="tel:+79655464580">+7 (965) 546-45-80</a>
                </span>
                <span>
                  <Telephone className="svgimg" /> 32-55-65
                </span>
                <span>
                  <Email className="svgimg" />
                  <a href="mailto:advbykovigor@bk.ru">advbykovigor@bk.ru</a>
                </span>
              </p>
              <p>
                <span>
                  <Maps className="svgimg" />
                  <a href="https://goo.gl/maps/QWVyguKJs6yMuUs56" target="_blank" rel="noopener noreferrer">г. Каменск-Уральский, ул. Кунавина, 2, оф. 216 (бизнес-центр Петровский)</a>
                </span>
              </p>
            </div>
            <iframe title="г. Каменск-Уральский, ул. Кунавина, 2, оф. 216 (бизнес-центр Петровский)"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.8883092894744!2d61.90980285162502!3d56.416486347981206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c6d9c1f6c0b9f9%3A0x23029355202f2669!2z0YPQuy4g0JrRg9C90LDQstC40L3QsCwgMiwgMjE2LCDQmtCw0LzQtdC90YHQui3Qo9GA0LDQu9GM0YHQutC40LksINCh0LLQtdGA0LTQu9C-0LLRgdC60LDRjyDQvtCx0LsuLCA2MjM0MDI!5e1!3m2!1sru!2sru!4v1659002253890!5m2!1sru!2sru"
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </section>
        </article>
      </div>
    </>
  );
}

