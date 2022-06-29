import {HeroSection} from './components/HeroSection'
import {About} from './components/About'
import {ServiceSection} from './components/ServiceSection'
import {Portfolio} from './components/Portfolio';
import {NewsSection} from './components/NewsSection';
import {Subscribe} from './components/Subscribe';
import {ClientSection} from './components/ClientSection';
import {Contacts} from './components/Contacts';
import {Info} from './components/Info';
import {Footer} from './components/Footer';

function App() {
  return (
    <div>
      <HeroSection />
      <About />
      <ServiceSection />
      <Portfolio />
      <NewsSection />
      <Subscribe />
      <ClientSection />
      <Contacts />
      <Info />
      <Footer />


    </div>
  );
}

export default App;
