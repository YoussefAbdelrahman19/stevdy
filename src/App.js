import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Rectangle from "./components/rectangle/Rectangle";
import Report from "./components/report/Report";
import PlatformOverview from "./components/platformOverview/PlatformOverview";
import ReportDetails from "./components/reportDetails/ReportDatails";
import GrowBusiness from "./components/growBusiness/GrowBusiness";
import Testmonials from "./components/Testmonials/Testimonial";

function App() {
  return (
    <>
      <div className="">
        <Home />
        <Services />
        <Report />
        <PlatformOverview />
        <ReportDetails />
        <GrowBusiness />
        <Testmonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
