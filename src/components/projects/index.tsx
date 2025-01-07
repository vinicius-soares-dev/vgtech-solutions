import frutaqui from "../../assets/img/frutaqui.png";
import osorio from "../../assets/img/osorio.png";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <h2 className="title-projects">Projetos Recentes</h2>

      <section className="marketplace">

        <img src={frutaqui} alt="FrutAqui" className="logo-frutaqui" />

        <h2 className="title-marketplace">FrutAqui</h2>
        <p className="description">
            Criei um marketplace que conecta compradores e fornecedores de frutas de forma simples e eficiente. A plataforma permite anúncios de produtos, negociações diretas e integrações de pagamento, promovendo praticidade, confiança e dinamismo no setor.
            </p>
        <button className="btn">Estudo de Caso</button>
    
      </section>
       <section className="portal-empregos">

        <img src={osorio} alt="osorio empregos" className="logo-osorio" />

        <h2 className="title-portal">Osório Empregos</h2>
        <p className="description">
           Criei um portal de empregos moderno e completo, onde empresas divulgam vagas e candidatos personalizam currículos. Com interface intuitiva, o administrador gerencia banners, cores, logotipo e cadastros, em um sistema seguro e funcional.
            </p>
        <button className="btn">Estudo de Caso</button>
    
      </section>

  
    </>
  );
};

export default Projects;
