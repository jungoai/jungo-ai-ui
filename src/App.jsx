import "./App.css";
import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Feature from "./components/Features/Feature";
// import Philosophy from "./components/Philosophy/Philosophy";
import UseCases from "./components/UseCases/UseCases";

function App() {
  return (
    <div id="root" className="w-full m-0 p-0">
      <Hero />
      {/* <About /> */}
      {/* <Philosophy /> */}
      <Feature />
      <UseCases />
      <News />
      <Footer />
    </div>
  );
}

export default App;
