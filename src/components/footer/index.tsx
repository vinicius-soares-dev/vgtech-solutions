import { Box, Typography, Link } from '@mui/material';
import { Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#1c1f23',  // Cor de fundo mais suave
        color: '#ffffff',             // Mantém o texto branco
        padding: '40px 20px',        // Mais padding para um visual mais espaçoso
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)', // Borda superior sutil
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Typography variant="h6" component="div" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
        Vinicius Galdino Soares - CEO & CTO
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: '20px' }}>
        &copy; {new Date().getFullYear()} VG Tech Solutions. Todos os direitos reservados.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Link 
          href="https://www.instagram.com/viniciussoaresdev/" 
          target="_blank" 
          color="inherit" 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            transition: 'transform 0.2s', // Efeito de transição suave
            '&:hover': {
              transform: 'scale(1.1)', // Efeito de aumento ao passar o mouse
            },
          }}
        >
          <Instagram fontSize="large" />
        </Link>
        <Link 
          href="https://www.linkedin.com/in/vinicius-gsoares/" 
          target="_blank" 
          color="inherit" 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.1)', 
            },
          }}
        >
          <LinkedIn fontSize="large" />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
