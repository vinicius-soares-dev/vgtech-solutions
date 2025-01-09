import {
  Box,
  Container,
  Typography,
  IconButton,
  Grid,
  Fade,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #542eae, #0d1273)",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Fade in={true} timeout={1500}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontFamily: "var(--font-title)",
              fontWeight: 700,
              marginBottom: "32px",
              color: "#F28627",
              textTransform: "uppercase",
              overflow: "hidden",
              marginTop: "1rem"
            }}
          >
            Entre em Contato
          </Typography>
          <Grid container spacing={4}>
            {/* Informações de Contato */}
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" mb={3}>
                <WhatsAppIcon sx={{ fontSize: 40, color: "#F28627", mr: 2 }} />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "var(--font-body)",
                    fontSize: "18px",
                  }}
                >
                  <a
                    href="https://wa.me/5521999989550"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "#FFFFFF",
                    }}
                  >
                    WhatsApp: (21) 99998-9550
                  </a>
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={3}>
                <EmailIcon sx={{ fontSize: 40, color: "#F28627", mr: 2 }} />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "var(--font-body)",
                    fontSize: "18px",
                  }}
                >
                  solutionsvgtech@gmail.com
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={3}>
                <LocationOnIcon
                  sx={{ fontSize: 40, color: "#F28627", mr: 2 }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "var(--font-body)",
                    fontSize: "18px",
                  }}
                >
                  Av Paulista, Bela Vista, 1106 - São Paulo, SP
                </Typography>
              </Box>
            </Grid>

            {/* Redes Sociais */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "var(--font-title)",
                  fontWeight: 600,
                  marginBottom: "16px",
                  textAlign: "center"
                }}
              >
                Nossas Redes
              </Typography>
              <Box display="flex" justifyContent="center" gap={2}>
                <IconButton
                  href="https://instagram.com/vgtech_solutions"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    backgroundColor: "#F28627",
                    "&:hover": {
                      backgroundColor: "#359AF2",
                    },
                    color: "#FFFFFF",
                    padding: 2,
                    fontSize: 24,
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  href="https://facebook.com/share/14TGFT9kbr/"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    backgroundColor: "#F28627",
                    "&:hover": {
                      backgroundColor: "#359AF2",
                    },
                    color: "#FFFFFF",
                    padding: 2,
                    fontSize: 24,
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/company/vg-tech-solutions/"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    backgroundColor: "#F28627",
                    "&:hover": {
                      backgroundColor: "#359AF2",
                    },
                    color: "#FFFFFF",
                    padding: 2,
                    fontSize: 24,
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>

          {/* Rodapé */}
          <Box
            sx={{
              textAlign: "center",
              marginTop: "40px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
              }}
            >
              Desenvolvido por <strong>Vinicius Soares</strong>, CEO da VG Tech
              Solutions
            </Typography>
          </Box>
        </Container>
      </Fade>
    </Box>
  );
};

export default ContactPage;
