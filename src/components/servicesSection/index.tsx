import React, { useState } from "react";
import { Button, Modal, Typography, MenuItem, Select, FormControl, } from "@mui/material";
import { styled } from "@mui/system";
import ButtonStyle from "../buttons";
import { Link } from "react-router-dom";


interface Option {
  label: string;
  price: number;
};

interface Service {
  name: string;
  description: string;
  options: Option[];
}

const Section = styled('section')({
  background: 'var(--color-background)',
  color: 'var(--color-text)',
  padding: '2rem',
  textAlign: 'center',
  fontFamily: 'var(--font-body)',
});

const ServiceContainer = styled('div')({
  background: 'var(--color-div)',
  boxShadow: '0 4px 8px var(--shadow-color)',
  borderRadius: '8px',
  padding: '1.5rem',
  margin: '1rem auto',
  maxWidth: '600px',
  color: 'var(--color-text)'
});

const ModalContent = styled('div')({
  background: 'var(--color-div)',
  color: 'var(--color-text)',
  padding: '2rem',
  borderRadius: '8px',
  maxWidth: '500px',
  margin: '5% auto',
  boxShadow: '0 4px 8px var(--shadow-color)',
  outline: 'none', 
});

const CustomButton = styled(Button)({
  background: 'var(--color-button)',
  color: 'var(--color-text)',
  fontFamily: 'var(--font-title)',
  padding: '0.8rem 1.2rem',
  marginTop: '1rem', '&:hover': {
    background: 'var(--color-accent)',
  },

});

const Servicos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [price, setPrice] = useState(0);

  const services = [
    {
      name: 'Criação de Landing Pages',
      description: "Criamos páginas de destino otimizadas para conversão, focadas em atrair leads e engajar o público-alvo. Cada landing page é projetada de acordo com as necessidades especígicas do seu negócio, utilizando elementos visuais e textos persuasivos.",
      options: [
        {
          label: 'HTML / CSS / JAVASCRIPT',
          price: 250
        },
        {
          label: 'Bootstrap',
          price: 350
        },
        {
          label: 'React.js',
          price: 350
        },
        {
          label: 'Next.js',
          price: 400
        }
      ]
    },

    {
      name: 'E-commerces',
      description: "Criamos lojas virtuais completas e funcionais, otimizadas para vendas online. Nossas soluções incluem integração de pagamento, gestão de estoque e design atraente, garantindo uma experiência de compra para seus clientes.",
      options: [
        {
          label: 'WooCommerce (Wordpress/PHP)',
          price: 1200
        },
        {
          label: 'React.js + Node.js(Express)',
          price: 1500
        },
        {
          label: 'Laravel + Vue.js',
          price: 1800
        }
      ]
    },

    {
      name: 'Sistemas ERP',
      description: "Desenvolvemos sistemas de gestão empresarial (ERP) personalizados para atender às necessidades específicas do seu negócio. Nossos sistemas integrados ajudam a otimizar processos, melhorando a eficiência e a tomada de decisões.",
      options: [
        {
          label: 'Node.js + Express',
          price: 5000
        },
        {
          label: 'PHP + Laravel',
          price: 5500
        }
      ]
    },

    {
      name: 'Manutenção',
      description: "Oferecemos serviços de manutenção para garantir que seu site ou sistema funcione sem problemas. Isso inclui atualizações regulares, monitoramento de segurança e otimização de desempenho.",
      options: [
        {
          label: 'Pacote Básico',
          price: 150
        },
        {
          label: 'Pacote Intermediário',
          price: 350
        },
        {
          label: 'Pacote Avançado',
          price: 600
        }
      ]
    },

    {
      name: 'Consultoria',
      description: "Nossos serviços de consultoria ajudam empresas a desenvolver estratégias digitais eficazes, aprimorando sua presença online e maximizando os resultados. Trabalhamos em conjunto para entender suas necessidades e propor soluções personalizadas.",
      options: [
        {
          label: 'Consultoria Inicial',
          price: 100
        },
        {
          label: 'Pacote Mensal',
          price: 350
        },
        {
          label: 'Pacote Trimestral',
          price: 1000
        }
      ]
    },
  ];

  const ServiceGrid = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 colunas
    gap: '1rem', // espaço entre os serviços
    '@media (max-width: 1199px)': {
      gridTemplateColumns: '1fr', // uma coluna para telas menores
    },
  });
  

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
    setOpenModal(true);
    setSelectedOption('');
    setPrice(0);
  };

  const handleOptionChange = (event: React.ChangeEvent<{ value: unknown}>) => {
    const optionLabel = event.target.value as string;
    const option = selectedService?.options.find(opt => opt.label === optionLabel);
    if(option) {
      setSelectedOption(option.label);
      setPrice(option.price);
    }
  };



  return (
    <Section>
      <ServiceGrid>

        {
          services.map((service, index) => (
            <ServiceContainer key={index}>
              <Typography 
                variant="h6"
                style={
                  {fontFamily: 'var(--font-title)',
                    fontSize: '1.5rem',
                    color: 'var(--color-accent)'

                  }}
              >{service.name}</Typography>
              <Typography
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-text-muted)'
                }}
              >{service.description}</Typography>
              <CustomButton onClick={() => handleOpenModal(service)}>Quero esse</CustomButton>
            </ServiceContainer>
          ))
        }
      </ServiceGrid>
      <Link to={"/servicos"}>
      <ButtonStyle children="Ver Mais Serviços" />
      </Link>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <ModalContent>
          <Typography 
            variant="h6"
            style={{
              fontFamily: 'var(--font-title)',
              color: 'var(--color-accent)'
            }}
          
          >{selectedService?.name}</Typography>
          <Typography
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-muted)',
              marginBottom: '1rem'
            }}
          >{selectedService?.description}</Typography>
          <FormControl fullWidth style={{ margin: '20px 0' }}>
            <Select 
              value={selectedOption}
              onChange={(event) => handleOptionChange(event as React.ChangeEvent<{ value: unknown }>)}
              displayEmpty
              style={{
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text)'
              }}
            >
              <MenuItem value="" disabled>
                Selecione Uma Opção
              </MenuItem>
              {selectedService?.options.map((opt, idx) => (
                <MenuItem key={idx} value={opt.label}>{opt.label} - R$ {opt.price}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '1.2rem',
              color: 'var(--color-accent)'
            }}
          >Total: R$ {price}</Typography>
          <Button 
            onClick={() => {

              // Crie o link de pagamento do PicPay com descrição
              const username = "vgtech_solutions"; // substitua pelo seu usuário PicPay
              const paymentDescription = encodeURIComponent(`Serviço: ${selectedService?.name} - Opção: ${selectedOption}`);
              const paymentUrl = `https://picpay.me/${username}/${price}?note=${paymentDescription}`;

              // Abre o link do PicPay em uma nova aba
              window.open(paymentUrl, '_blank');

            }}
            variant="contained"
            color="primary"
          >
            Confirmar
        </Button>

        </ModalContent>
      </Modal>
    </Section>
  )
}

export default Servicos;