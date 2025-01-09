import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

const PageUnderConstruction: React.FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        padding: 3,
      }}
    >
      <ConstructionIcon
        sx={{ fontSize: 80, color: '#F28627', marginBottom: 2 }}
      />
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontFamily: 'var(--font-title)',
          color: 'var(--color-text)',
          marginBottom: 2,
        }}
      >
        Estamos trabalhando nessa página!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'var(--font-body)',
          color: 'var(--color-text-secondary)',
          marginBottom: 3,
        }}
      >
        Em breve, novas funcionalidades estarão disponíveis. Fique atento para
        atualizações incríveis!
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'var(--color-button)',
          color: '#fff',
          fontFamily: 'var(--font-body)',
          padding: '10px 20px',
          '&:hover': {
            backgroundColor: 'var(--color-button-secondary)',
          },
        }}
        href="/"
      >
        Voltar para a Home
      </Button>
    </Container>
  );
};

export default PageUnderConstruction;
