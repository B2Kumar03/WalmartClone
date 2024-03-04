import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./components/Navbar";
import "./style/App.css";
import { Box, Text } from "@chakra-ui/react";
import { Pannel } from "./components/Pannel";
import { Main } from "./pages/Main";
import Headroom from "react-headroom";
import Heading1 from "./pages/Heading1";
import Products1 from "./pages/Products1";
import { CustomScrollBar } from "react-custom-scrollbar";
import { LineHorizontal } from "./components/LineHorizontal";
import Product2 from "./components/Product2";
import Product3 from "./components/Product3";
import Heading2 from "./pages/Heading2";
import Product4 from "./components/Product4";
import { BiTachometer } from "react-icons/bi";
import Product5 from "./components/Product5";
import { Product6 } from "./components/Product6";
import Heading3 from "./pages/Heading3";
import Heading4 from "./pages/Heading4";
import Product7 from "./pages/Product7";
import { Footer } from "./components/Footer";
import { Allroutes } from "./components/Allroutes";
import { useContext } from "react";
import { AuthContext } from "./AuthContext/AuthProvider";

function App() {
  const { signin } = useContext(AuthContext);
  const { cart } = useContext(AuthContext);
  return (
    <>
      {signin ? null : (
        <div className="headroom">
          <Navbar />
          {cart?null:<Pannel />}
        </div>
      )}
      <Allroutes />

      <Footer />
    </>
  );
}

export default App;
