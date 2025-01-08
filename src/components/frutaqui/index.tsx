
import { Button, Container, Typography, Box, Card, CardMedia} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import frutaqui from "../../assets/img/frutaqui.png";


const FrutaquiCase = () => {
  const handleVisitSite = () => {
    window.open("https://www.seusitefrutaqui.com", "_blank"); // Substituir com o link real do site
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
                marginTop: "3rem"
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
              image={frutaqui}
              alt="FrutAqui"
              sx={{
                width: "400px",
                textAlign: "center",
                margin: "0 auto"
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
            Estudo de Caso: FrutAqui
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
            O <strong>FrutAqui</strong> é um marketplace inovador que conecta compradores e fornecedores de frutas de forma
            simples e eficiente. A plataforma permite anúncios de produtos, negociações diretas e integrações de pagamento,
            promovendo praticidade, confiança e dinamismo no setor.
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
              - Criar uma interface amigável para usuários leigos. <br />
              - Desenvolver funcionalidades de pagamento seguras e ágeis. <br />
              - Garantir performance e responsividade para diferentes dispositivos.
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
              - Interface moderna com navegação intuitiva e design responsivo. <br />
              - Sistema de anúncios e integração com gateways de pagamento. <br />
              - Otimização para SEO, melhorando a visibilidade online.
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
              O FrutAqui transformou a forma como os fornecedores e compradores interagem no setor de frutas, aumentando a
              eficiência nas negociações e oferecendo uma solução confiável para transações seguras.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FrutaquiCase;
