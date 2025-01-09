
import { Grid, Box, Typography, Button, Card, CardContent } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import { useState, useEffect } from "react";

const OfferSection = () => {

  const [checkoutUrl, setCheckoutUrl] = useState(null);


  useEffect(() => {
    const fetchCheckout = async () => {
      try {
        const response = await fetch("https://checkout-pro-tau.vercel.app/create_checkout");
        console.log("Status da resposta:", response.status);
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        const data = await response.json();
        console.log("Dados retornados pela API:", data.init_point); // Verifique o conteúdo aqui
        if (data.init_point) {
          setCheckoutUrl(data.init_point);
          console.log("checkoutUrl atualizado para:", data.init_point);
        } else {
          console.error("init_point não encontrado na resposta da API");
        }
      } catch (error) {
        console.error("Erro ao obter o checkout:", error);
      }
    };
  
    fetchCheckout();
  }, []);
  
  
  
  const handleCheckout = () => {
    console.log("Valor atual de checkoutUrl:", checkoutUrl); // Log do valor
    if (checkoutUrl) {
      console.log("Redirecionando para:", checkoutUrl);
      window.open(checkoutUrl, "_self");
    } else {
      console.error("checkoutUrl está vazio ou indefinido!");
      alert("Erro ao carregar o checkout. Tente novamente mais tarde.");
    }
  };
  

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0D2CD9 0%, #359AF2 100%)",
        py: 10,
        px: 2,
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Slide direction="down" triggerOnce>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 6,
            color: "#FFFFFF",
            textTransform: "uppercase",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            fontFamily: "var(--font-title)",
            overflow: "hidden"

          }}
        >
          Oferta Exclusiva Para Impulsionar Suas Vendas Online!
        </Typography>
      </Slide>
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Fade direction="left" triggerOnce>
            <Card
              sx={{
                p: 3,
                backdropFilter: "blur(15px)",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: 4,
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
                color: "#FFFFFF",
                overflow: "hidden"
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, fontFamily: "var(--font-title)",  overflow: "hidden" }}>
                  Quanto Vale Isso Tudo?
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, fontSize: "1.1rem", fontFamily: "var(--font-body)",  overflow: "hidden" }}>
                  <strong>Site Otimizado para Vendas:</strong> Em outras empresas:  R$ 900,00
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, fontSize: "1.1rem", fontFamily: "var(--font-body)",  overflow: "hidden" }}>
                  <strong>Gestão de Redes Sociais:</strong> Em outras empresas:   R$ 3.500,00
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, fontSize: "1.1rem", fontFamily: "var(--font-body)",  overflow: "hidden" }}>
                  <strong>Integração com Checkout Personalizado:</strong> Em outras empresas:  R$ 2.500,00
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mt: 2,
                    color: "var(--color-text)",
                    fontSize: "1.5rem",
                    fontFamily: "var(--font-title)",
                     overflow: "hidden"
                  }}
                >
                  Na VG Tech você garante tudo isso por:
                  <br style={{ marginBottom: "1.2rem"}}/>
                  <Typography
                    variant="h3"
                    component="span"
                    sx={{
                      color: "#00FFB9",
                      fontWeight: 800,
                      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                      fontFamily: "var(--font-body)",
                      overflow: "hidden"
                    }}
                  >
                    R$ 2.874,00
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Fade>
        </Grid>
        <Grid item xs={12} md={6}>
          <Zoom triggerOnce>
            <Card
              sx={{
                p: 3,
                backdropFilter: "blur(15px)",
                background: "rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: 4,
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
                color: "#FFFFFF",
                overflow: "hidden",
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, fontFamily: "var(--font-title)", overflow: "hidden", }}>
                  Oferta Exclusiva Apenas Hoje!
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyle: "none",
                    p: 0,
                    mb: 4,
                    textAlign: "left",
                    lineHeight: 1.8,
                    fontFamily: "var(--font-body)",
                    overflow: "hidden",
                  }}
                >
                  {[
                    "1 Site Otimizado para Vendas",
                    "Consultoria Estratégica",
                    "Hospedagem Grátis por 1 Ano",
                    "Domínio Grátis",
                  ].map((item, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "1.1rem",
                      }}
                    >
                      <CheckCircle
                        sx={{ color: "#00FFB9", fontSize: 24, mr: 1 }}
                      />
                      {item}
                    </Box>
                  ))}
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    color: "#00FFB9",
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                    fontFamily: "var(--font-body)",
                     overflow: "hidden"
                  }}
                >
                  R$ 389,90
                </Typography>
                <Typography variant="body2" sx={{ mb: 4 , fontFamily: "var(--font-body)",  overflow: "hidden"}}>
                  ou 5x de R$ 77,98
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background:
                      "linear-gradient(90deg, #00FFB9, #00CC99)",
                    color: "#0D1273",
                    fontWeight: 700,
                    py: 1.5,
                    px: 5,
                    fontSize: "1.1rem",
                    boxShadow: "0px 5px 15px rgba(0, 255, 185, 0.5)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #00CC99, #00AA77)",
                      boxShadow: "0px 5px 15px rgba(0, 204, 153, 0.5)",

                    },
                     overflow: "hidden"
                  }}
                  onClick={handleCheckout}
                >
                  COMPRE AGORA
                </Button>
              </CardContent>
            </Card>
          </Zoom>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OfferSection;
