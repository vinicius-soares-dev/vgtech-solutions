import frutaqui from "../../assets/img/frutaqui.png";
import osorio from "../../assets/img/osorio.png";
import bpo from "../../assets/img/bpo.png";
import jilogo from "../../assets/img/jisystem.png";

import "./Projects.css";

const Projects = () => {
  return (
    <>
      <h2 className="title-projects">Projetos Recentes</h2>
      <section className="projects-new">

          <section className="marketplace">

            <img src={frutaqui} alt="FrutAqui" className="logo-frutaqui" />

            <h2 className="title-marketplace"> MarketPlace FrutAqui</h2>
            <p className="description">
                Criação de um marketplace que conecta compradores e fornecedores de frutas de forma simples e eficiente. A plataforma permite anúncios de produtos, negociações diretas e integrações de pagamento, promovendo praticidade, confiança e dinamismo no setor.
                </p>
            <button className="btn-project" onClick={() => window.location.href= "/projects/frutaqui"}>Estudo de Caso</button>
      
          </section>
          <section className="portal-empregos">

            <img src={osorio} alt="osorio empregos" className="logo-osorio" />

            <h2 className="title-portal">Portal Osório Empregos</h2>
            <p className="description">
              Criação de um portal de empregos moderno e completo, onde empresas divulgam vagas e candidatos personalizam currículos. Com interface intuitiva, o administrador gerencia banners, cores, logotipo e cadastros, em um sistema seguro e funcional.
                </p>
            <button className="btn-project" onClick={() => window.location.href= "/projects/portal-osorio"}>Estudo de Caso</button>
      
        </section>

        <section className="bpo-financeiro">

            <img src={bpo} alt="bpo financeiro tela" className="logo-bpo" />

            <h2 className="title-bpo">Site para Além da Contabilidade</h2>
            <p className="description">
              Criação de um site rápido e funcional para uma empresa de serviços financeiros e contábeis, com home page, página de serviços e plano. O site foi otimizado para SEO, responsividade e desempenho, garantindo uma navegação fluída e profissional.
                </p>
            <button className="btn-project" onClick={() => window.location.href= "/projects/alemdacontabilidade"}>Estudo de Caso</button>

        </section>

        <section className="control-system">

          <img src={jilogo} alt="control system tela" className="logo-control" />

          <h2 className="title-control">Sistema ERP para JI Ar Condicionado</h2>
          <p className="description">
            Desenvolvimento de um sistema ERP completo utilizando Node.js, TypeScript, MongoDB, ReactJS e Jest. A solução, baseada nos padrões MVC e TDD, reduziu o tempo de gerenciamento de demandas de 20 minutos para 3, otimizando o controle de serviços e aumentando a eficiência operacional da empresa.
          </p>
          <button className="btn-project" onClick={() => window.location.href= "/projects/control-system"}>Estudo de Caso</button>

        </section>
      </section>

  
    </>
  );
};

export default Projects;
