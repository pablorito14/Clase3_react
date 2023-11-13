
import './App.css';
import { About } from './Components/About/About';

function App() {

  const nombre = 'Pepe';

  const user = {
    name:'pepe',
    lastname: 'lopes',
    age: 32,
    img: '',
    likeCss: false
  }

  function hizoClick(){
    console.log('usted hizo click');
  }
  return (
    // comentario jsx
    <div className='container'>

      <main>
        <h2>Bienvenido a mi web, tu nombre es {nombre}</h2>
        <button className='btn btn-success' onClick={hizoClick}>bloque de codigo</button>
        <button className='btn btn-danger' onClick={() => console.log('click2')}>una sola linea de codigo</button>
        <About user={user} />
      </main>
    </div>
  );
}

export default App;
