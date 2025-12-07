import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Programs from "../../components/Programs/Programs";
import Member from "../../components/Member/Member";
import Donate from "../../components/Donate/Donate";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="container-home">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Member />
      <Donate/>
      <Footer/>

    </div>
  );
}
