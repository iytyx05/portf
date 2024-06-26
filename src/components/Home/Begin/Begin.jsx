import React from 'react';
import { NavLink } from "react-router-dom";
import './Begin.scss';
import begin from '../../../assets/img/begin.jpg';

const Begin = () => {
    return (
        <section className="begin">
            <div className="container">
                <div className="begin-box">
                    <div className="begin-box-left">
                        <h2 className="begin-box-left-title">
                            Добро пожаловать в мир фотографии, где моменты становятся вечностью.
                        </h2>
                        <p className="begin-box-left-text">
                            Окунитесь в мир фотографии, где каждый кадр рассказывает свою историю. Я - профессиональный фотограф, страстно увлеченный искусством захватить мгновения и с
                            их на картинке. Мое портфолио представляет мою уникальную визуальную интерпретацию мира вокруг нас.
                        </p>
                        <NavLink to="/contacts">
                            <button className="begin-box-left-btn">
                                Заказать <br /> фотосессию
                            </button>
                        </NavLink>
                    </div>
                    <div className="begin-box-right">
                        <div className="begin-box-right-img">
                            <img className="begin-box-right-image" src={begin} alt="photograph" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Begin;