import  React  from 'react';
import './index.css'
import  Header  from "./conpenants/Header/Header";
import  Navbar  from "./conpenants/Navbar/Navbar";
import  Leptop  from "./conpenants/Leptop/Leptop";
import  Section  from "./conpenants/Section/Section";
import  Section1  from "./conpenants/Section1/Section1";
import  Cection3  from "./conpenants/Cection3/Cection3";
import  Leg  from "./conpenants/Leg/Leg";
import  Footer1  from "./conpenants/Footer1/Footer1";
import  Footer from "./conpenants/Footer/Footer";
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