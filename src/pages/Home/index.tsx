import styled from "styled-components";
import Backdrop from "../../components/Backdrop";
import Nav from "./Nav";
import Hero from "./Hero";
import Services from "./Services";
import Process from "./Process";
import About from "./About";
import Stack from "./Stack";
import Projects from "./Projects";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <Page>
      <Backdrop />
      <div className="content">
        <Nav />
        <main>
          <Hero />
          <Services />
          <Process />
          <Projects />
          <About />
          <Stack />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </Page>
  );
}

const Page = styled.div`
  position: relative;
  min-height: 100vh;

  .content {
    position: relative;
    z-index: 1;
  }
`;
