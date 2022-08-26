import React, { useState } from 'react';
import "../styles/consultation.scss";
import InputMask from 'react-input-mask';
import emailjs from '@emailjs/browser';


export default function ConsultationComponent(props) {

    const [state, setState] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    function phoneReset(p) {
        if (p.target.value.includes('_'))
            setState({ phone: '' });
    }
    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });

        let btn = document.getElementById("btn");
        if (state.name !== '' && state.phone !== '' && state.email !== '' && state.message !== '')
            btn.disabled = 0;
        else btn.disabled = 1;
    };

    const [statusbtn, setStatusBtn] = useState("Отправить сообщение");

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatusBtn("Идёт отправка письма...");

        await emailjs.sendForm('mail', 'template_lawyer', e.target, 'sf5QhZsN2qGYvuWXM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        resetForm();
        setStatusBtn("Отправить сообщение");
    };

    function resetForm() {
        setState({ name: '', phone: '', email: '', message: '' });
    }

    return (
        <form autoComplete="on" onSubmit={sendEmail}>
            <fieldset>
                <legend><h2>{props.header}</h2></legend>
                <input type="text" id="name" name="name" placeholder="Имя *" required
                    onChange={onInputChange} value={state.name} />
                <InputMask id="phone" name="phone" type="tel" placeholder="Телефон *" required
                    onBlur={phoneReset} value={state.phone} onChange={onInputChange}
                    mask={'+7 (999) 999-99-99'} />
                <input type="email" id="email" name="email" placeholder="Email *" required
                    onChange={onInputChange} value={state.email} />
                <textarea id="message" name="message" placeholder="Сообщение *" required
                    onChange={onInputChange} value={state.message} />
                <span><input type="submit" disabled id="btn" value={statusbtn} /></span>
            </fieldset>
        </form>
    )

};