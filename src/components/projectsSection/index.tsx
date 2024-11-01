import React from 'react';
import "../../assets/styles/projectsStyle.css";


interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Sistema ERP para JI Ar Condicionado",
    description:
      "Este projeto consistiu no desenvolvimento de um sistema ERP utilizando tecnologias como Node.js, TypeScript, MongoDB, Jest, ReactJS e Axios, com a implementação dos padrões de arquitetura MVC e TDD. O sistema resultou em uma significativa redução no tempo de gerenciamento, passando de 20 minutos para apenas 3, além de aumentar a eficiência operacional da empresa.",
  },
  {
    title: "SPA para JI Ar Condicionado",
    description:
      "Este projeto envolveu a criação de uma Single Page Application (SPA) utilizando ReactJS, com o objetivo de otimizar o controle e o acompanhamento de demandas em tempo real. A aplicação aprimorou a usabilidade e a eficiência na gestão de tarefas, proporcionando uma experiência mais ágil e intuitiva para os usuários.",
  },
  {
    title: "Site de locação de motos",
    description:
      "Foi criado um site completo para uma empresa de locação de motos, abrangendo uma homepage atraente, seções informativas sobre a empresa, um catálogo de motos disponíveis e um formulário de reserva eficiente. Essa plataforma não apenas facilita a captação de leads, mas também otimiza o processo de reservas, elevando a experiência do cliente e os resultados da empresa.",
  },
  {
    title: "Landing page para projeto na Jamaica",
    description:
      "Foi desenvolvida uma landing page otimizada para a captação de leads via Telegram, projetada com um design responsivo e estratégias eficazes de UX/UI. A implementação de uma VSL curta e persuasiva garante uma experiência envolvente, aumentando significativamente as taxas de conversão e facilitando o contato com potenciais clientes.",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projetos Realizados</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;