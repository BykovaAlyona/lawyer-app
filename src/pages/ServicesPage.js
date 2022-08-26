import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { services } from "../const/services";
import { ReactComponent as Ornament } from "../img/ornament.svg";
import { Helmet } from "react-helmet";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Услуги</title>
        <meta property="og:title"
          content="Услуги адвоката" />
        <meta name="description"
          content="Юридическая помощь в сферах: Банкротства физических лиц, Уголовных дел, Административных дел, Трудовых дел, Семейных дел, Наследства, Условно-досрочного освобождения, Исполнительного производства, Дорожно-транспортных происшествий, Защиты прав потребителей, Жилищным вопросам, Недвижимости, Кредитных дел, Споров в Арбитраже, Защиты чести и достоинства, Земельных дел." />
        <link rel="canonical" href="/services" />
      </Helmet>
      <div id="servicespage" className="div-center">
        <div className="max-width-content">
          <h3>Услуги</h3>
          <Ornament />
          <ul>
            {services.map((service) =>
              <li key={"service_" + service.id}>
                <Link to={"/services/" + service.id + "#"} key={'service_' + service.id}>
                  <h6>{service.value}</h6>
                </Link>
              </li>
            )}
          </ul>
          <Ornament />
        </div>
      </div>
    </>
  );
}
