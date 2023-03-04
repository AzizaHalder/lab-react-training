import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import data from '../src/data/berlin.json';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={'1992-07-14'}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Obrien"
        firstName="Delores"
        gender="female"
        height={172}
        birth={'1988-05-11'}
        picture="https://randomuser.me/api/portraits/women/44.jpg"

        // How to render an image..
        // picture="https://randomuser.me/api/portraits/women/44.jpg"
      ></IdCard>
    </div>
  );
}

export default App;
