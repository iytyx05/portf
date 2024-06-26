import React from 'react';
import './Service.scss';
import icon from '../../../assets/icons/icon.png';
import icon1 from '../../../assets/icons/icon1.png';
import icon2 from '../../../assets/icons/icon2.png';
import icon4 from '../../../assets/icons/icon4.png';
import icon3 from '../../../assets/icons/icon3.png';
import icon6 from '../../../assets/icons/icon6.png';
import icon5 from '../../../assets/icons/icon5.png';

const Service = () => {
    return (
        <section className="service">
            <div className="container">
                <h2 className="service-title">Услуги</h2>
                <p className="service-text">Откройте для себя мир фотографии, где каждый кадр становится вечностью. Предлагаю широкий спектр услуг, включая фотосессии на природе,<br /> свадебную фотографию, корпоративные мероприятия и съемку искусства и культуры. <br /> Мои фотографии запечатляют эмоции, красоту и особую атмосферу каждого момента.</p>
                <div className="service-container">
                    <div className="service-container-card">
                        <span>
                            <img src={icon} width="30" height="30" alt='svadba' />
                        </span>
                        <h2 className="service-container-card-title">Свадебная Фотография</h2>
                        <p className="service-container-card-text">
                            Свадебную фотографию часто называют хлебом с маслом для фотографов, но это не значит, что она должна быть скучной. Наоборот!
                        </p>
                    </div>
                    <div className="service-container-card">
                        <span>
                            <img src={icon5} width="35" height="35" alt='sport' />
                        </span>
                        <h2 className="service-container-card-title">Спортивная Фотография</h2>
                        <p className="service-container-card-text">
                            Спортивная фотография — это круто. Сидя в стороне с массивным телеобъективом, я могу сразу же погрузиться в действие — я люблю снимать спортивные состязания, где есть много взрывных движений.
                        </p>
                    </div>
                    <div className="service-container-card">
                        <span>
                            <img src={icon1} width="30" height="30" alt='portret' />
                        </span>
                        <h2 className="service-container-card-title">Портретная Фотография</h2>
                        <p className="service-container-card-text">
                            Кто не любит портретную фотографию? Мне нравится улавливать это выражение, причуду, улыбку или что-то еще, что определяет человека.
                        </p>
                    </div>
                    <div className="service-container-card">
                        <span>
                            <img src={icon2} width="30" height="30" alt='arhit' />
                        </span>
                        <h2 className="service-container-card-title">Архитектурная Фотография</h2>
                        <p className="service-container-card-text">
                            Хорошая вещь в съемке архитектуры (на мой взгляд) заключается в том, что это очень легко сделать. Серьезно, просто бери камеру и уходи.
                        </p>
                    </div>
                    <div className="service-container-card">
                        <span>
                            <img src={icon4} width="30" height="30" alt='animals' />
                        </span>
                        <h2 className="service-container-card-title">Съемка животных</h2>
                        <p className="service-container-card-text">
                            Всякий раз, когда я путешествую, я всегда беру с собой снаряжение, которое позволяет мне запечатлеть местную дикую природу. Орел, летящий на этой картине, пожалуй, самый ценный для меня образ.
                        </p>
                    </div>
                    <div className="service-container-card">
                        <span>
                            <img src={icon6} width="30" height="30" alt='food' />
                        </span>
                        <h2 className="service-container-card-title">Фотография еды</h2>
                        <p className="service-container-card-text">
                            Я делаю фуд-фотографию для блогов, ресторанов, инфлюенсеров, YouTube-каналов — но самое главное (если мне удается приготовить что-то красивое) — фуд-фотографию делаю для себя.
                        </p>
                    </div>
                    <div className="service-container-card">
                        <span>
                            <img src={icon3} width="30" height="30" alt='priroda' />
                        </span>
                        <h2 className="service-container-card-title">Фотография Природы</h2>
                        <p className="service-container-card-text">
                            Пейзажная фотография никогда не устареет. Кто-то сказал мне, что это те фотографии, которые вы никогда не смотрите. Ну, я не согласен.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
