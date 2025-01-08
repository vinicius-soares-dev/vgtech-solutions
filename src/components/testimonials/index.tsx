
import { Container, Grid, Typography, Box, Card, CardContent, Avatar } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const Testimonials = () => {
  return (
    <section
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
        {/* Título */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#0D2CD9",
            marginBottom: 4,
            fontFamily: "Poppins, serif",
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
            overflow: "hidden"
          }}
        >
          Depoimentos de Clientes
        </Typography>

        {/* Grid de Depoimentos */}
        <Grid container spacing={4}>
          {/* Depoimento 1 */}
          <Grid item xs={12} md={4}>
            <Fade triggerOnce>
              <Card
                sx={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  background: "#FFFFFF",
                }}
              >
                <CardContent>
                  <Box textAlign="center" mb={3}>
                    <Avatar
                      alt="Cliente 1"
                      src="https://randomuser.me/api/portraits/men/7.jpg"
                      sx={{
                        width: 80,
                        height: 80,
                        margin: "0 auto",
                        border: "4px solid #F28627",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1rem",
                      color: "#333",
                      lineHeight: 1.6,
                    }}
                  >
                    “A VG Tech Solutions realizou o trabalho de forma ágil e com muita qualidade. Além disso, a equipe foi extremamente prestativa ao nos ajudar com a configuração do host no provedor. Super recomendo!”
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    sx={{
                      fontFamily: "Poppins, serif",
                      fontWeight: "bold",
                      color: "#F28627",
                      marginTop: 2,
                    }}
                  >
                    William Nogueira
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="center"
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "#666",
                    }}
                  >
                    CEO da Além da Contabilidade
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>

          {/* Depoimento 2 */}
          <Grid item xs={12} md={4}>
            <Fade triggerOnce>
              <Card
                sx={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  background: "#FFFFFF",
                }}
              >
                <CardContent>
                  <Box textAlign="center" mb={3}>
                    <Avatar
                      alt="Cliente 2"
                      src="https://randomuser.me/api/portraits/women/83.jpg"
                      sx={{
                        width: 80,
                        height: 80,
                        margin: "0 auto",
                        border: "4px solid #359AF2",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1rem",
                      color: "#333",
                      lineHeight: 1.6,
                    }}
                  >
                    “A VG Tech Solutions realizou um excelente trabalho! O site ficou incrível e atendeu perfeitamente às nossas expectativas. Parabéns pela qualidade e profissionalismo!”
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    sx={{
                      fontFamily: "Poppins, serif",
                      fontWeight: "bold",
                      color: "#359AF2",
                      marginTop: 2,
                    }}
                  >
                    Márcia S.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="center"
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "#666",
                    }}
                  >
                    Proprietária da Amazônia Motorent
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>

          {/* Depoimento 3 */}
          <Grid item xs={12} md={4}>
            <Fade triggerOnce>
              <Card
                sx={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  background: "#FFFFFF",
                }}
              >
                <CardContent>
                  <Box textAlign="center" mb={3}>
                    <Avatar
                      alt="Cliente 3"
                      src="https://randomuser.me/api/portraits/men/91.jpg"
                      sx={{
                        width: 80,
                        height: 80,
                        margin: "0 auto",
                        border: "4px solid #0D2CD9",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1rem",
                      color: "#333",
                      lineHeight: 1.6,
                    }}
                  >
                    “Nossa parceria com a VG Tech Solutions foi um divisor de águas. Conseguimos atingir nossos
                    objetivos muito mais rápido do que esperávamos.”
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    sx={{
                      fontFamily: "Poppins, serif",
                      fontWeight: "bold",
                      color: "#0D2CD9",
                      marginTop: 2,
                    }}
                  >
                    João Paulo
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="center"
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "#666",
                    }}
                  >
                    Proprietário da JI Ar Condicionado
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Testimonials;
