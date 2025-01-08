import { Button, Container, Typography, Box, Card, CardMedia } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import osorio from "../../assets/img/osorio.png";


const OsorioCase = () => {
  const handleVisitSite = () => {
    window.open("https://osorioempregos.vercel.app", "_blank"); // Substituir com o link real do site
  };

  return (
    <>
 
      <Box sx={{ backgroundColor: "#FFFFFF", padding: "40px 0" }}>
        <Container maxWidth="md">
          {/* Botão Ver o Site */}
          <Box textAlign="center" mb={4}>
            <Button
              variant="contained"
              size="large"
              startIcon={<LaunchIcon />}
              onClick={handleVisitSite}
              sx={{
                backgroundColor: "#F28627",
                color: "#FFFFFF",
                fontFamily: "Poppins, serif",
                fontWeight: "bold",
                textTransform: "none",
                padding: "10px 20px",
                ":hover": {
                  backgroundColor: "#D37422",
                },
                marginTop: "3rem",
              }}
            >
              Ver o Site
            </Button>
          </Box>

          {/* Card com a Imagem */}
          <Card
            sx={{
              mb: 4,
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              image={osorio}
              alt="Portal Osório Empregos"
              sx={{
                width: "400px",
                margin: "0 auto",
                display: "block",
              }}
            />
          </Card>

          {/* Título */}
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              color: "#542eae",
              fontFamily: "Poppins, serif",
              fontWeight: 600,
              marginBottom: "24px",
              overflow: "hidden"
            }}
          >
            Estudo de Caso: Portal Osório Empregos
          </Typography>

          {/* Descrição do Projeto */}
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontFamily: "Montserrat, sans-serif",
              color: "#000000",
              lineHeight: 1.8,
              marginBottom: "16px",
            }}
          >
            O <strong>Portal Osório Empregos</strong> é uma plataforma moderna e completa, criada para conectar empresas e candidatos de maneira eficiente. Empresas podem divulgar vagas, e candidatos têm a liberdade de personalizar seus currículos, promovendo uma experiência interativa e segura para ambos os lados.
          </Typography>

          {/* Seções Detalhadas */}
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Poppins, serif",
                fontWeight: 500,
                color: "#0D2CD9",
                marginBottom: "8px",
              }}
            >
              Desafios
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "#000000",
                lineHeight: 1.6,
                marginBottom: "16px",
              }}
            >
              - Desenvolver um sistema de fácil uso tanto para empresas quanto para candidatos. <br />
              - Implementar um painel administrativo para personalização de banners, logotipos e cores. <br />
              - Garantir segurança no armazenamento e gerenciamento de dados.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Poppins, serif",
                fontWeight: 500,
                color: "#0D2CD9",
                marginBottom: "8px",
              }}
            >
              Soluções Implementadas
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "#000000",
                lineHeight: 1.6,
                marginBottom: "16px",
              }}
            >
              - Interface intuitiva para navegação fácil e eficiente. <br />
              - Painel administrativo para gerenciar banners, cores, logotipos e cadastros. <br />
              - Sistema seguro e funcional, garantindo a integridade dos dados armazenados.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Poppins, serif",
                fontWeight: 500,
                color: "#0D2CD9",
                marginBottom: "8px",
              }}
            >
              Impacto
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "#000000",
                lineHeight: 1.6,
              }}
            >
              O Portal Osório Empregos simplificou o processo de recrutamento e seleção para empresas, enquanto
              proporcionou aos candidatos uma ferramenta prática para se destacarem no mercado de trabalho. A segurança e a personalização oferecidas pela plataforma aumentaram a eficiência e a confiança de seus usuários.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OsorioCase;
