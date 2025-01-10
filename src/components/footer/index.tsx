import { Box, Container, Typography, IconButton, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#542eae", // Cor secundária do background
        color: "#FFFFFF",
        padding: "40px 0",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Informação de Contato */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Poppins, serif", fontWeight: 600, marginBottom: "16px" }}
            >
              Contato
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <EmailIcon sx={{ marginRight: "10px", color: "#F28627" }} />
              <Typography
                variant="body1"
                sx={{ fontFamily: "Montserrat, sans-serif", color: "#FFFFFF" }}
              >
                contact@vgtechsolutionns.com.br
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <LocationOnIcon sx={{ marginRight: "10px", color: "#F28627" }} />
              <Typography
                variant="body1"
                sx={{ fontFamily: "Montserrat, sans-serif", color: "#FFFFFF" }}
              >
                Av Paulista, Bela Vista, 1106 - São Paulo, SP
              </Typography>
            </Box>
          </Grid>

          {/* Redes Sociais */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Poppins, serif", fontWeight: 600, marginBottom: "16px" }}
            >
              Redes Sociais
            </Typography>
            <Box>
              <IconButton
                href="https://instagram.com/vgtech_solutions"
                target="_blank"
                rel="noopener"
                sx={{ color: "#F28627" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://facebook.com/share/14TGFT9kbr/"
                target="_blank"
                rel="noopener"
                sx={{ color: "#F28627" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://linkedin.com/company/vg-tech-solutions/"
                target="_blank"
                rel="noopener"
                sx={{ color: "#F28627" }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Divisor */}
        <Box
          sx={{
            height: "1px",
            backgroundColor: "#FFFFFF",
            opacity: 0.2,
            margin: "40px 0",
          }}
        />

        {/* Informação do CEO */}
        <Box textAlign="center">
          <Typography
            variant="body1"
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500, color: "#FFFFFF" }}
          >
            Desenvolvido por <strong>Vinicius Soares</strong>, CEO da VG Tech Solutions
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
