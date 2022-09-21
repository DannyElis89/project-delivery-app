import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import CadasterContext from '../../context/CadasterContext';

function Cadaster() {
  const {
    nameCadaster,
    setNameCadaster,
    emailCadaster,
    setEmailCadaster,
    passwordCadaster,
    setPasswordCadaster,
    errorCadaster,
    setErrorCadaster,
    btnDisabledCadaster,
  } = useContext(CadasterContext);

  const clickSubmitCadaster = (event) => {
    event.preventDefault();
    // if (!validate()) return;
    apiRequestLogin({ name: nameLogin, password: passwordLogin })
      .then((e) => {
        if (e.ok) {
          navigate('/home');
        } else setErrorCadaster(e.why);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <div>
        <form>
          <div>
            <p>Nome</p>
            <input
              name="name"
              type="text"
              placeholder="Nome"
              data-testid="common_register__input-name"
              onChange={ (ele) => setNameCadaster(
                ele.target.value,
              ) }
              value={ nameCadaster }
            />
            <p>Email</p>
            <input
              name="login"
              type="text"
              placeholder="email@tryber.com.br"
              data-testid="common_register__input-email"
              onChange={ (ele) => setEmailCadaster(
                ele.target.value,
              ) }
              value={ emailCadaster }
            />
            <p>Senha</p>
            <input
              name="senha"
              type="text"
              placeholder="senha"
              data-testid="common_register__input-password"
              onChange={ (ele) => setPasswordCadaster(
                ele.target.value,
              ) }
              value={ passwordCadaster }
            />

          </div>
          <div>
            <button
              type="submit"
              data-testid="common_register__button-register"
              onClick={ clickSubmitCadaster }
              disabled={ btnDisabledCadaster }
            >
              CADASTRAR
            </button>
          </div>
          { errorCadaster
            ? (
              <p
                data-testid="common_register__element-invalid_register"
              >
                {errorCadaster}
              </p>
            )
            : <p /> }

        </form>
      </div>
    </div>
  );
}

export default Cadaster;