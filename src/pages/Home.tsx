import "../assets/styles/home.css";
import Header from "../components/header";
import Carousel from "react-material-ui-carousel";
import { Card, CardContent, Typography } from "@mui/material";
import { Business, Code, ShoppingCart, Web, Pages, Storefront } from "@mui/icons-material";

const services = [
  {
    title: "Sites Institucionais",
    icon: <Business sx={{ fontSize: 80, color: "#359AF2" }} />,
    description: "Criação de sites modernos e responsivos para destacar sua marca.",
  },
  {
    title: "Sistemas ERP",
    icon: <Code sx={{ fontSize: 80, color: "#F28627" }} />,
    description: "Gestão empresarial integrada e personalizada para seu negócio.",
  },
  {
    title: "Consultoria",
    icon: <Web sx={{ fontSize: 80, color: "#0D1273" }} />,
    description: "Estratégias digitais e soluções para alcançar seus objetivos.",
  },
  {
    title: "Landing Pages",
    icon: <Pages sx={{ fontSize: 80, color: "#F28627" }} />,
    description: "Páginas de alta conversão para campanhas de marketing eficazes.",
  },
  {
    title: "E-Commerces",
    icon: <ShoppingCart sx={{ fontSize: 80, color: "#359AF2" }} />,
    description: "Lojas online completas, otimizadas e prontas para vender.",
  },
  {
    title: "Marketplaces",
    icon: <Storefront sx={{ fontSize: 80, color: "#0D2CD9" }} />,
    description: "Desenvolvimento de plataformas para conectar vendedores e clientes.",
  },
];

function Home() {
  return (
    <>
      <section className="home-section">
        <Header />
        <section className="presentation-section">
          <h1 className="title-presentation">Sua Porta de Entrada para o Sucesso Online!</h1>
          <Carousel
            interval={4000}
            animation="slide"
            indicators={false}
            sx={{ width: "100%", maxWidth: 800, margin: "20px auto", marginTop: '5rem', overflow: 'hidden' }}
          >
            {services.map((service, index) => (
              <Card
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: 'hidden',
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                {service.icon}
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontFamily: "Poppins", fontWeight: "bold", textAlign: "center", overflow: 'hidden'  }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: "Montserrat", textAlign: "center", overflow: 'hidden'  }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </section>
      </section>
    </>
  );
}

export default Home;
