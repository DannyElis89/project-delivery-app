import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import CadasterContext from '../../context/CadasterContext';

function Login() {
  const navigate = useNavigate();

  const noAccountBtn = () => {
    navigate('/register');
  };

  return (
    <div>
      <h1>Logotipo</h1>
      <div>
        <form>
          <div>
            <p>Login</p>
            <input
              name="login"
              type="text"
              placeholder="email@tryber.com.br"
              data-testid="common_login__input-email"
            />
            <p>Senha</p>
            <input
              name="senha"
              type="text"
              placeholder="senha"
              data-testid="common_login__input-password"
            />

          </div>
          <div>
            <button
              type="submit"
              data-testid="common_login__button-login"
            >
              LOGIN
            </button>
            <button
              type="submit"
              onClick={ noAccountBtn }
              data-testid="common_login__button-register"
            >
              Ainda não tenho conta
            </button>
          </div>
          <p data-testid="common_login__element-invalid-email">Mensagem de erro</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
