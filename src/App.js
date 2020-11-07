import logo from './logo.svg';
import './App.scss';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import Body from './components/body/body';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Body />
    </div>
  );
}

export default App;
