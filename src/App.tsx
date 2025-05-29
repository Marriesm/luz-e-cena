import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieSection from './components/MovieSection';
import Newsletter from './components/Newsletter';

const combo =  "/banner/combo_desktop.png"
const capadesk = "/banner/Banner Desktop.png";

function App() {

  return(
  <>
  <Header/>
  <Banner src={capadesk} alt="banner"/>
  <MovieSection />
  <Banner src={combo} alt="Combo"/>
  <Newsletter/>
  <Footer/>
  
  
  </>
  )
}

export default App
