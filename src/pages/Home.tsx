import { useState, useEffect } from "react";
import "../assets/styles/index.css";
import Typewriter from "typewriter-effect";
import SystemImage from "../assets/img/sistemas.jpg";
import ConsultImage from "../assets/img/consultoria.jpg";
import EcommerceImage from "../assets/img/e-commerce.jpg";
import ButtonStyle from "../components/buttons";
import PresentationSection from "../components/presentation";
import Servicos from "../components/servicesSection";
import Projects from "../components/projectsSection";
import Footer from "../components/footer";


function Home() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projects = [
    { image: SystemImage, title: "Sistema ERP" },
    { image: ConsultImage, title: "Consultoria" },
    { image: EcommerceImage, title: "E-commerce" },
    { image: SystemImage, title: "Landing Page"},
    { image: SystemImage, title: "Manutenção" },
    { image: ConsultImage, title: "Blogs" },
    { image: EcommerceImage, title: "Aplicativos" },
    { image: SystemImage, title: "Automação"},
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Muda o projeto a cada 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [projects.length]);

  return (
    <>
      <main>
        <section className="container">
          <h1 className="title-container">VG Tech Solutions</h1>
          <p className="desc-container">
            <Typewriter
              options={{
                strings: ["Sua Porta de Entrada Para o Sucesso Online."],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </p>
          <ButtonStyle scrollToId="services-section">Serviços</ButtonStyle>
        </section>
        <section className="projects-recents">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project ${currentProjectIndex === index ? 'active' : 'fade'}`}
            >
              <img src={project.image} alt={project.title} />
              <p>{project.title}</p>
            </div>
          ))}
        </section>

        <section className="scroll-down">
          <iframe
              src="https://lottie.host/embed/56ea7796-f38c-4718-95e0-3733d59752eb/NKvkAkle6E.json" 
              style={{
              width: '100%',
              height: '60px', 
              border: 'none',
            }}
            allowFullScreen
            title="Lottie Animation"
          ></iframe> 
        </section>
        <PresentationSection />
        
        <section id="services-section">
          <Servicos />
        </section>

        <Projects />

        <Footer />
      </main>
    </>
  );
}

export default Home;
