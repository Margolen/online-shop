import './App.css';

import { Header } from './components/organisms/header/header';
import { Greeting } from './components/organisms/greeting/greeting';
import { Catalog } from './components/organisms/catalog/catalog';

function App() {
  return (
    <>
      <Header />
      <Greeting />
      <Catalog />
    </>
  );
}

export default App;
