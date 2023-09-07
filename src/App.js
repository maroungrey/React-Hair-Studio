import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/navbar';
import AppHero from './components/hero';
import AppQuote from './components/quote';
import AppGallery from './components/gallery';
import AppDescription from './components/description'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppNavbar />
      </header>
      <main>
        <AppHero />
        <AppQuote />
        <AppGallery />
        <AppDescription />
      </main>
    </div>
  );
}

export default App;
