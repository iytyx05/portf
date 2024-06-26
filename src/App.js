  import {Routes,Route} from "react-router-dom"
  import Home from "./components/Home/Home";
  import Register from "./components/Register/Register";
  import Login from "./components/Login/Login";
  import './Style.scss';
  import Contacts from "./components/Contacts/Contacts";
  import Gallery from "./components/Gallery/Gallery";
  import Header from "../src/components/Header/Header";
  import Footer from "../src/components/Footer/Footer";
  import {Outlet} from "react-router-dom"
  function App() {
    return (
      <div className="App">
        <>
            <Header/>
            <main>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/register'} element={<Register/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/contacts'} element={<Contacts/>}/>
            <Route path={'/gallery'} element={<Gallery/>}/>
        </Routes>
                <Outlet/>
            </main>
            <Footer/>
          </>
      </div>
      
    );
  }

  export default App;
