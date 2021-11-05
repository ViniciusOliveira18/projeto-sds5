import Datable from "components/Datatable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div  className="container">
        <h1 className="text-primary">Olá mundo!</h1>
        <Datable />
      </div>
      <Footer />
    </>
  );
}

export default App;
