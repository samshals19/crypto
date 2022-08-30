import "./App.css";
import Cards from "./Components/Cards";
import Glob from "./Components/Glob";
import Navbar from "./Components/Navbar";
import Sec_fir from "./Components/Sec_fir";
import Sec_sen from "./Components/Sec_sen";
import Sec_thid from "./Components/Sec_thid";
import Footer from "./Components/Footer";
import Page_2 from "./Components/Page_2";
import Pages_3 from "./Components/Pages_3";

function App() {
  return (
    <>
      <Navbar />
      <Sec_fir />
      <Sec_sen />
      {/* <Sec_thid /> */}
      <Cards />
      <Glob />
      <Footer />
      <Page_2 />
      {/* <Pages_3 /> */}
    </>
  );
}

export default App;
