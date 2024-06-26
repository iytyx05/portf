import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import './Register.scss';

const Register = () => {
  const [show] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
    // Выполнить логику регистрации здесь
  };

  return (
    <section className="login">
      <div className="login-block">
        <form noValidate className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="form-title">Регистрация</h2>
          <div className="login-form-block">
            <input
              {...register('email', {
                required: {
                  message: 'Email обязателен к заполнению',
                  value: true
                }
              })}
              type="email"
              className="login-form-input"
              placeholder="Введите email"
            />
            <p className='register-form-error'>
              {errors.email && errors.email.message}
            </p>
          </div>
          <div className="login-form-block">
            <input
              {...register('login', {
                required: {
                  message: 'Логин обязателен к заполнению',
                  value: true
                }
              })}
              type="text"
              className="login-form-input"
              placeholder="Введите логин"
            />
            <p className='register-form-error'>
              {errors.login && errors.login.message}
            </p>
          </div>
          <div className="login-form-block">
            <InputMask
              mask={`+\\9\\96(999)99-99-99`}
              type='tel'
              {...register('phone', {
                required: {
                  value: true,
                  message: 'Введите номер телефона'
                }
              })}
              className={`login-form-input`}
              placeholder='Номер телефона'
            />
            <p className='register-form-error'>
              {errors.phone && errors.phone.message}
            </p>
          </div>
          <div className="login-form-block">
            <input
              {...register('password', {
                required: {
                  message: "Пароль обязателен к заполнению",
                  value: true
                }
              })}
              type={show ? 'text' : 'password'}
              className="login-form-input"
              placeholder="Введите пароль"
            />
            <p className='register-form-error'>
              {errors.password && errors.password.message}
            </p>
          </div>
          <div className="login-form-block">
            <button className="login-form-btn" type="submit">
              Зарегистрироваться
            </button>
          </div>
          <p className="login-reg">
            Уже есть профиль?
            <Link className="login-reg-link" to='/login'>
              Войти
            </Link>
          </p>
          <Link className="login-route-link" to='/'>
            Вернуться на главную страницу<BiHomeSmile className="login-route-icon" />
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Register;
