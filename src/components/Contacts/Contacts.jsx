import React from 'react';
import './Contacts.scss';

const Contacts = () => {
    return (
        <section className="contacts">
            <div className="container">
                <h2 className="contacts-title">Контакты</h2>
                <div className="contacts-box">
                    <div className="contacts-block">
                        <h2 className="contacts-block-title">Телефон</h2>
                        <p className="contacts-block-text">+996 (999) 050-621</p>
                    </div>
                    <div className="contacts-block">
                        <h2 className="contacts-block-title">E-mail</h2>
                        <p className="contacts-block-text">islamchik3039@gmail.com</p>
                    </div>
                    <div className="contacts-block">
                        <h2 className="contacts-block-title">Адрес</h2>
                        <p className="contacts-block-text">
                            г.Бишкек
                            ул.Рыбинский 26
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;