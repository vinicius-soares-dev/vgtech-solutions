import { Button, Container, Typography, Box, Card, CardMedia } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import bpo from "../../assets/img/bpo.png";


const BpoFinanceiroCase = () => {
  const handleVisitSite = () => {
    window.open("https://alemdacontabilidade.com.br/", "_blank"); // Substituir com o link real do site
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
              image={bpo}
              alt="Site para BPO Financeiro"
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
            Estudo de Caso: Site para BPO Financeiro
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
            O <strong>Site para BPO Financeiro</strong> foi desenvolvido com foco em desempenho, responsividade e
            funcionalidade. A solução atende empresas que oferecem serviços financeiros e contábeis, com uma navegação fluida
            e uma interface profissional para atrair clientes.
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
              - Criar um site que transmitisse credibilidade para o público-alvo. <br />
              - Garantir um design responsivo para diferentes dispositivos. <br />
              - Otimizar o site para SEO, melhorando a visibilidade online.
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
              - Design limpo e profissional, alinhado com a identidade visual da empresa. <br />
              - Responsividade garantida para acesso em dispositivos móveis e desktops. <br />
              - Otimização para SEO, atraindo mais clientes potenciais por meio de buscas orgânicas.
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
              O site para Além da Contabilidade aumentou a credibilidade da empresa no mercado, atraindo novos clientes e oferecendo
              uma experiência de navegação moderna e eficiente. A otimização para SEO resultou em um maior número de
              conversões e leads qualificados.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BpoFinanceiroCase;
