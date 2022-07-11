
import './Components/css/App.css';
import Header from './Components/Notes/Header';
import Notes from './Components/Notes/Notes';
import Footer from './Components/Notes/Footer'

function App() {


  return (
    <>
      <div className="main" >
          <Header />
          <Notes />
          <Footer />
      </div>
    </>
  );
}

export default App;
