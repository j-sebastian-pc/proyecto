
import { Link } from 'react-router-dom';
import './index.css'; 


const   Login = () => {
  return (
    <div className="book1">
      <h2 className="heading">Iniciar Sesión</h2>
      <form className='formL reserva-f'>
        <label htmlFor="loginUsername" className="boxUS">
          Usuario:
          <input type="text" id="loginUsername" className="box1" />
        </label>

        <label htmlFor="loginPassword" className="boxUS">
          Contraseña:
          <input type="password" id="loginPassword" className="box1" />
        </label>

        <button type="submit" className="btn">
          Iniciar Sesión
        </button>
      </form>
      <p className='registro'>
        ¿No tienes una cuenta?{' '}
        <Link to="/signup"><hr /> <u> <b>Regístrate aquí!</b></u></Link>
      </p>
    </div>
  );
};

export default Login;
