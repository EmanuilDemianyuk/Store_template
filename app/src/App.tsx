// import styles from './App.module.scss';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Layout } from "./containers/Layouts/Layout";
import { Home } from "./Page/Home";
import { Menu } from "./Page/Menu";
import { About } from "./Page/About";
import { Contact } from "./Page/Contact";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/menu" element={<Menu/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
