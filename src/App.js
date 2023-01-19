import  React  from 'react';
import './index.css'
import  Header  from "./conpenants/BHeader/Header";
import  Navbar  from "./conpenants/ANavbar/Navbar";
import  Leptop  from "./conpenants/DLeptop/Leptop";
import  Section  from "./conpenants/CSection/Section";
import  Section1  from "./conpenants/ESection1/Section1";
import  Cection3  from "./conpenants/FCection3/Cection3";
import  Leg  from "./conpenants/GLeg/Leg";
import  Footer1  from "./conpenants/HFooter1/Footer1";
import  Footer from "./conpenants/IFooter/Footer";
// const Section1 = React.lazy(()=>import('"./conpenants/Section1/Section1"'))
export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <Leptop />
      <Section1 />
      <Cection3/>
      <Leg/>
      <Footer1/>
      <Footer/>
    </div>
  )
}