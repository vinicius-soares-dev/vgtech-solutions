import React from 'react';
import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { keyframes } from '@mui/system';

// Animação para a entrada dos cartões
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const testimonials = [
  {
    id: 1,
    name: 'Diogo Ribeiro',
    text: 'Profissional atento e dedicado. Atendeu todas as demandas e se dispôs a dar atendimento contínuo relativamente ao trabalho.',
    avatar: 'https://randomuser.me/api/portraits/men/30.jpg', 
  },
  {
    id: 2,
    name: 'Bruna Assis',
    text: 'Excelente trabalho! O site ficou incrível e atendeu perfeitamente às expectativas. Parabéns pela qualidade e profissionalismo!',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg', 
  },
  {
    id: 3,
    name: 'Carlos Montano',
    text: 'Desde o primeiro contato, se mostrou extremamente profissional e muito solicito, visando minhas exigências sobre o site e explicando com clareza a simplicidade sobre seu ponto de vista e complementando com suas ideias também. Me entregou dentro do prazo, com um resultado melhor que minha expectativa inicial Estarei o recomendando para mais pessoas e espero que muito em breve eu possa trabalhar com o Vinicius de novo.',
    avatar: 'https://randomuser.me/api/portraits/men/58.jpg', 
  },
];

const StyledCard = styled(Card)({
  borderRadius: '16px',
  padding: '24px',
  boxShadow: `0px 4px 15px rgba(0, 0, 0, 0.2)`,
  backgroundImage: 'var(--color-div)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  animation: `${fadeIn} 0.5s ease-in-out`, 
  '&:hover': {
    transform: 'scale(1.05) rotate(1deg)',
    boxShadow: `0px 8px 20px rgba(0, 0, 0, 0.3)`,
  },
});

// Estilização do Avatar
const StyledAvatar = styled(Avatar)({
  width: 64,
  height: 64,
  marginBottom: 16,
  border: '4px solid var(--color-button)',
  boxShadow: `0px 2px 10px rgba(0, 0, 0, 0.1)`,
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.1)', // Aumenta o tamanho do avatar ao passar o mouse
  },
});

const TestimonialsSection: React.FC = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: 'var(--color-background)' }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontFamily: 'var(--font-title)',
          color: 'var(--color-accent)', // Cor de destaque para o título
          textAlign: 'center',
          marginBottom: 4,
          fontWeight: 'bolder',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // Sombra no texto
        }}
      >
        Depoimentos
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 4,
          justifyContent: 'center',
        }}
      >
        {testimonials.map((testimonial) => (
          <StyledCard key={testimonial.id}>
            <CardContent>
              <StyledAvatar
                src={testimonial.avatar}
                alt={testimonial.name}
              />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-background)', // Cor principal para o texto
                  marginBottom: 2,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                "{testimonial.text}"
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: 'var(--font-title)',
                  fontWeight: 'bolder',
                  color: 'var(--color-button)', // Cor de destaque para o nome
                  textAlign: 'center',
                }}
              >
                {testimonial.name}
              </Typography>
            </CardContent>
          </StyledCard>
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
