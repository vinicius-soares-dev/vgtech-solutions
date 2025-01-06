import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { Fade, Slide } from "react-awesome-reveal";
import { PeopleAlt, Lightbulb, Public } from "@mui/icons-material";

function AboutUs() {
  return (
    <section
      className="about-us"
      id="about-us"
      style={{
        background: "linear-gradient(135deg, #f9f9f9, #e3f2fd)",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
        width: '100vw'
      }}
    >
      {/* Elementos decorativos */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "200px",
          height: "200px",
          background: "rgba(13, 44, 217, 0.1)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "300px",
          height: "300px",
          background: "rgba(53, 154, 242, 0.1)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Texto e Ícones à Esquerda */}
          <Grid item xs={12} md={6}>
            <Fade direction="left" triggerOnce>
              <Box>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "#0D2CD9",
                    marginBottom: 2,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Sobre Nós
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "#555",
                    marginBottom: 3,
                  }}
                >
                 A <strong>VG Tech Solutions</strong> nasceu com o objetivo de transformar o digital em um aliado estratégico para empresas e pessoas. Seja você um profissional, empreendedor ou alguém com uma grande ideia, nossa equipe altamente capacitada é movida por inovação, tecnologia e o compromisso de gerar resultados concretos, ajudando a alcançar seus objetivos no universo digital.
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <Slide direction="left" triggerOnce>
                      <Box display="flex" alignItems="center">
                        <PeopleAlt sx={{ fontSize: 40, color: "#359AF2", marginRight: 1 }} />
                        <Typography variant="body2" sx={{ fontSize: "1rem", color: "#333" }}>
                          Equipe dedicada
                        </Typography>
                      </Box>
                    </Slide>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Slide direction="up" triggerOnce>
                      <Box display="flex" alignItems="center">
                        <Lightbulb sx={{ fontSize: 40, color: "#F28627", marginRight: 1 }} />
                        <Typography variant="body2" sx={{ fontSize: "1rem", color: "#333" }}>
                          Soluções criativas
                        </Typography>
                      </Box>
                    </Slide>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Slide direction="right" triggerOnce>
                      <Box display="flex" alignItems="center">
                        <Public sx={{ fontSize: 40, color: "#0D2CD9", marginRight: 1 }} />
                        <Typography variant="body2" sx={{ fontSize: "1rem", color: "#333" }}>
                          Impacto global
                        </Typography>
                      </Box>
                    </Slide>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: 3,
                    backgroundColor: "#359AF2",
                    color: "#fff",
                    paddingX: 4,
                    paddingY: 1.5,
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#0D2CD9" },
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Nossos Projetos
                </Button>
              </Box>
            </Fade>
          </Grid>


        </Grid>
      </Container>
    </section>
  );
}

export default AboutUs;
