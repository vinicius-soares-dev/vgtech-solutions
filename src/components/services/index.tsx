
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { Web, Store, Settings, Engineering, Build, Insights } from "@mui/icons-material";
import { Fade, Zoom } from "react-awesome-reveal";

const services = [
  {
    icon: <Web style={{ fontSize: 60, color: "#F28627" }} />,
    title: "Landing Pages",
    description: "Criação de páginas otimizadas para conversão e campanhas específicas.",
  },
  {
    icon: <Store style={{ fontSize: 60, color: "#F28627" }} />,
    title: "E-commerces",
    description: "Lojas online completas, seguras e prontas para gerar vendas.",
  },
  {
    icon: <Settings style={{ fontSize: 60, color: "#F28627" }} />,
    title: "Sistemas ERP",
    description: "Automatize e centralize a gestão da sua empresa com nossos sistemas ERP.",
  },
  {
    icon: <Engineering style={{ fontSize: 60, color: "#F28627" }} />,
    title: "Consultoria",
    description: "Soluções estratégicas para o sucesso do seu negócio digital.",
  },
  {
    icon: <Build style={{ fontSize: 60, color: "#F28627" }} />,
    title: "Manutenção",
    description: "Serviços de suporte e manutenção para garantir a continuidade dos seus sistemas.",
  },
  {
    icon: <Insights style={{ fontSize: 60, color: "#F28627"}} />,
    title: "Otimização de SEO",
    description: "Melhore sua presença online e atraia mais clientes com SEO estratégico.",
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 8 }}>
      <Fade direction="down" triggerOnce>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          style={{ color: "#0D1273", fontWeight: 700, marginBottom: "40px", fontFamily: "var(--font-title)", overflow: "hidden" }}
        >
          Nossos Serviços
        </Typography>
      </Fade>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Zoom triggerOnce>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: 4,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#FFFFFF",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.2)",
                  },
                  overflow: "hidden"
                }}
              >
                <CardContent sx={{ overflow: "hidden" }}>
                  <Box mb={2}>{service.icon}</Box>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{
                      color: "#0D1273",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      fontFamily: "var(--font-title)",
                      overflow: "hidden"
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      color: "#333333",
                      lineHeight: 1.6,
                      fontFamily: "var(--font-body)",
                      overflow: "hidden"
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
