import './App.css'
import Footer from "../src/components/Footer/Footer.jsx"
import Nav from "../src/components/Header/Header.jsx"
import Texto from "./components/Tittle/Tittles.jsx"
function App() {


  return (
      <>
          <div>
              <Nav/>
          </div>
          <div className="bg-gray-300 w-full h-screen">
              <div className="justify-center items-center text-center font-bold py-20">
              <Texto Titulo="Hello world!" Parrafo="Bienvenidos a mi Pagina Web"/>
              </div>
          </div>
          <Footer>Hola</Footer>
          </>
          )
          }
export default App
