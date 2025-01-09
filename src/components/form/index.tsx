import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
  Grow,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const services = [
  "Criação de Sites",
  "Desenvolvimento de Sistemas",
  "Consultoria em TI",
  "Manutenção de Sites",
  "Otimização para SEO",
  "Design de Interfaces",
  "Desenvolvimento de Aplicativos",
];

const ContactForm = () => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");

  const handleSendMessage = () => {
    const message = `Oi, sou ${name}. Quero fazer um orçamento para ${service} com as seguintes funcionalidades: ${details}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/5521999989550?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <Box
      sx={{
        backgroundColor: "var(--color-background-secondary)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Grow in={true} timeout={1000}>
        <Container maxWidth="sm">
          <Paper
            elevation={6}
            sx={{
              padding: "32px",
              borderRadius: "16px",
              backgroundColor: "var(--color-background)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontFamily: "var(--font-title)",
                fontWeight: 700,
                marginBottom: "24px",
                color: "var(--color-text-secondary)",
              }}
            >
              Solicite um Orçamento
            </Typography>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* Nome Completo */}
              <TextField
                label="Nome Completo"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  fontFamily: "var(--font-body)",
                  "& .MuiInputLabel-root": { fontFamily: "var(--font-body)" },
                }}
              />

              {/* Serviços */}
              <TextField
                select
                label="Serviço Desejado"
                value={service}
                onChange={(e) => setService(e.target.value)}
                variant="outlined"
                fullWidth
                sx={{
                  fontFamily: "var(--font-body)",
                  "& .MuiInputLabel-root": { fontFamily: "var(--font-body)" },
                }}
              >
                {services.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

              {/* Detalhes do Serviço */}
              <TextField
                label="Detalhes do Serviço"
                placeholder="Descreva as funcionalidades ou especificações desejadas"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                sx={{
                  fontFamily: "var(--font-body)",
                  "& .MuiInputLabel-root": { fontFamily: "var(--font-body)" },
                }}
              />

              {/* Botão de Enviar */}
              <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                sx={{
                  backgroundColor: "var(--color-button)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-body)",
                  padding: "12px",
                  fontSize: "16px",
                  textTransform: "none",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "var(--color-button-secondary)",
                  },
                }}
                onClick={handleSendMessage}
                disabled={!name || !service || !details}
              >
                Enviar pelo WhatsApp
              </Button>
            </Box>
          </Paper>
        </Container>
      </Grow>
    </Box>
  );
};

export default ContactForm;
