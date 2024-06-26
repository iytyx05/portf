import React, { useState } from 'react';
import './Login.scss';
import { Link } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useUser } from '../context/UserContextProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: "onBlur" });

    const onSubmit = (data) => {
        // Обработка отправки формы
    };

    const {addUser} = useUser()

    const [user, setProduct] = useState("")

    const handleInput = (e) => {
        console.log(user)
    }
    const handleClick = () => {
        addUser(user)
    }

    return (
        <section className="login">
            <div className="login-block">
                <form noValidate className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="form-title">Логин</h2>
                    <div className="form-block">
                        <input
                            {...register('email', {
                                required: {
                                message: 'Email обязателен к заполнению',
                                value: true
                                }
                            })}
                            type="email" className="form-input" placeholder="Ввести email"
                        />
                        <p className='form-error'>
                            {errors.email && errors.email.message}
                        </p>
                    </div>

                    <div className="form-block">
                        <input
                            {...register('password', {
                                required: {
                                    message: "Пароль обязателен к заполнению",
                                    value: true
                                }
                                })}
                            type="password"
                            className="form-input"
                            placeholder="Ввести пароль"
                        />
                        <p className='form-error'>
                            {errors.password && errors.password.message}
                        </p>
                    </div>
                    <div className="form-block">
                        <button className="form-btn" type="submit">
                            Войти
                        </button>
                    </div>
                    <p className="register">
                        Нет профиля ?
                        <Link className="register-link" to="/register">
                            Пройти регистрацию
                        </Link>
                        <div className="route">
                    <Link className="route-link" to="/">
                        Вернуться на главную страницу 
                        <BiHomeSmile className="route-icon" />
                    </Link>
                </div>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Login;
