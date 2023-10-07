// import styles from './App.module.scss';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Layout } from "./containers/Layouts/Layout";
import { Home } from "./Page/Home";
import { Menu } from "./Page/Menu";
import { About } from "./Page/About";
import { Contact } from "./Page/Contact";

function App() {
  return (
    <BrowserRouter >
      <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
