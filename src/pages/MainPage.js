import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import photo from "../img/photo.jpg";
import { ReactComponent as Ornament } from '../img/ornament.svg';
import Consultation from "../component/ConsultationComponent";
import "../styles/mainpage.scss";
import AddAnimations from "../component/AddAnimations";

export default function MainPageComponent() {
    useEffect(() => { AddAnimations() });
    return (
        <>
            <Helmet>
                <title>Адвокат Быков Игорь Александрович</title>
                <meta property="og:title"
                    content="Адвокат Быков Игорь Александрович" />
                <meta name="description"
                    content="Адвокат Быков Игорь Александрович. Свердловская областная коллегия адвокатов. Обширная практика в Свердловской, Челябинской, Курганской областях и других регионах России. Юридическая помощь различных сферах. Записаться на консультацию." />
                <link rel="canonical" href="/" />
            </Helmet>
            <>
                <div id="card" className="div-center">
                    <div className="max-width-content">
                        <h2>Адвокат</h2>
                        <h1>Быков <br /> Игорь Александрович</h1>
                        <h2>
                            <Ornament /><br />
                            Адвокатская палата Свердловской области
                        </h2>
                    </div>
                </div>
                <div id="resume" className="div-center">
                    <div className="max-width-content flex-content">
                        <div>
                            <h2>У вас возникла юридическая проблема и требуется правовая помощь?</h2>
                            <h4>Тогда Вам нужен Адвокат — независимый профессиональный советник по правовым вопросам!</h4>
                            <p>Высшее юридическое образование, <br />
                                Юридический стаж - с 1996г., <br />
                                Адвокатская деятельность - с 2002г.</p>
                            <p>Награды адвокатского сообщества,<br />
                                Постоянное повышение квалификации.</p>
                            <p>Обширная практика в Свердловской, Челябинской, Курганской областях и других регионах России.</p>
                            <p>Высокий процент результативности.</p>
                            <p>Довольные клиенты.</p>
                        </div>
                        <img src={photo} alt="" />
                    </div>
                </div>
                <div id="description" className="div-center">
                    <div className="max-width-content">
                        <h2>Адвокатская деятельность не является предпринимательской.</h2>
                        <h4>Это означает, что моя главная цель - помочь Вам, а не заработать на Вас.</h4>
                        <p>Ваши интересы при обращении к адвокату защищены на законодательном уровне
                            Федеральным законом "Об адвокатской деятельности и адвокатуре в
                            Российской Федерации" от 31.05.2002 N 63-ФЗ.
                        </p>
                        <p>На моём счету множество успешно разрешенных дел в разных сферах юриспруденции:</p>
                        <ul>
                            <li>защита при привлечении к уголовной и административной ответственности,</li>
                            <li>оказание помощи гражданам при процедуре банкротства,</li>
                            <li>решение спорных ситуаций в семейных и жилищных вопросах,</li>
                            <li>помощь в спорах со страховыми и банковскими организациями,</li>
                            <li>решение вопросов дорожно-транспортных происшествий и т.д.</li>
                        </ul>
                    </div>
                </div>
                <div id="guarantees" className="div-center">
                    <div className="max-width-content">
                        <h2>Адвокат гарантирует:</h2>
                        <ul>
                            <li><h4>Внимательность</h4></li>
                            <li><h4>Порядочность</h4></li>
                            <li><h4>Профессионализм</h4></li>
                        </ul>
                    </div>
                </div>
                <div id="consultation-link" />
                <div id="consultation" name="consultation" className="brown-bg padding-block div-center">
                    <div className="max-width-content">
                        <Consultation header={"Записаться на консультацию"} />
                    </div>
                </div>
            </>
        </>
    );
}
