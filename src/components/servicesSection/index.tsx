import React, { useState } from "react";
import { Button, Modal, Typography, MenuItem, Select, FormControl, } from "@mui/material";
import { styled } from "@mui/system";

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
      name: 'Sites Institucionais',
      description: "Desenvolvemos sites institucionais que refletem a identidade da sua empresa, com uma navegação intuitiva e design responsivo. Os sites são projetados para fornecer informações sobre sua empresa, serviços e valores, fortalecendo a presença online da marca.",
      options: [
        {
          label: 'Wordpress(PHP)',
          price: 500
        },
        {
          label: 'HTML/CSS/JavaScript',
          price: 600
        },
        {
          label: 'React.js',
          price: 700
        },
        {
          label: 'Angular.js',
          price: 750
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

    {
      name: 'Tráfego Pago',
      description: "Oferecemos serviços de gestão de tráfego pago para maximizar o alcance e a conversão dos seus anúncios. Com estratégias personalizadas em plataformas como Google Ads e Facebook Ads, buscamos resultados eficientes e mensuráveis.",
      options: [
        {
          label: 'Configuração Inicial e Análise',
          price: 300
        },
        {
          label: 'Gestão Mensal',
          price: 600
        },
        {
          label: 'Consultoria de Estratégia de Tráfego',
          price: 200
        },
      ]
    },

    {
      name: 'Desenvolvimento de Aplicações Web',
      description: "Criamos aplicações web interativas e responsivas, adaptadas às necessidades do seu negócio. Essas aplicações oferecem uma experiência de usuário aprimorada e funcionalidades personalizadas, visando facilitar processos e melhorar a eficiência.",
      options: [
        {
          label: 'React.js + Node.js',
          price: 1200
        },
        {
          label: 'Angular.js',
          price: 1300
        },
        {
          label: 'Django(Python)',
          price: 1500
        }
      ]
    },

    {
      name: 'Automação de Processos',
      description: "Oferecemos serviços de automação para otimizar processos de negócios, utilizando ferramentas e técnicas que melhoram a eficiência e reduzem erros. Isso inclui a automação de tarefas repetitivas e integração de sistemas.",
      options: [
        {
          label: 'Node.js + Express',
          price: 800
        },
        {
          label: 'Python (Automação com Scripts)',
          price: 700
        }
      ]
    },

    {
      name: 'Web Scraping',
      description: "Desenvolvemos soluções de web scraping para coletar dados de sites de forma automatizada. Esse serviço é ideal para empresas que desejam reunir informações de mercado concorrência ou qualquer dado disponível online.",
      options: [
        {
          label: 'Python (Beatiful Soup/Scrapy)',
          price: 500
        },
        {
          label: 'Node.js (Cheerio)',
          price: 400
        }
      ]
    },

    {
      name: 'Otimização de SEO',
      description: "Oferecemos serviços de otimização para motores de busca (SEO) com o objetivo de melhorar a visibilidade do seu site e atrair mais visitantes. Nossas práticas incluem análise de palavras-chave, otimização de conteúdo e melhorias técnicas.",
      options: [
        {
          label: 'Análise Inicial e Relatório',
          price: 250
        },
        {
          label: 'Otimização Mensal',
          price: 600
        }
      ]
    },

    {
      name: 'Criação de APIs',
      description: "Desenvolvemos APIs RESTful personalizadas para integrar diferentes sistemas e permitir a troca de informações de maneira eficaz. Esse serviço é essencial para empresas que precisam de comunicação entre plataformas.",
      options: [
        {
          label: 'Node.js + Express',
          price: 800
        },
        {
          label: 'Laravel (PHP)',
          price: 900
        }
      ]
    },

    {
      name: 'Criação de Blogs',
      description: "Oferecemos a criação de blogs profissionais, com design responsivo e otimização para SEO. Isso inclui a configuração de sistemas de gerenciamento de conteúdo, permitindo fácil atualização e publicação de artigos.",
      options: [
        {
          label: 'Wordpress',
          price: 400
        },
        {
          label: 'React.js + Markdown',
          price: 500
        }
      ]
    },

    {
      name: 'Desenvolvimento de Aplicativos Móveis',
      description: "Criamos aplicativos móveis personalizados, otimizados para Android e IOS. Nossos aplicativos oferecem uma experiência de usuário intuitiva e funcionais, alinhados com as necessidades específicas do seu negócio.",
      options: [
        {
          label: 'React Native',
          price: 2000
        },
        {
          label: 'Flutter',
          price: 2000
        }
      ]
    },

    {
      name: 'Manutenção de Aplicativos Móveis',
      description: "Oferecemos serviços de manutenção para aplicativos móveis, garantindo atualizações regulares, correção de bugs e melhorias de desempenho, assim como suporte técnico.",
      options: [
        {
          label: 'React Native (mensal)',
          price: 500
        },
        {
          label: 'Flutter (mensal)',
          price: 500
        }
      ]
    },

    {
      name: 'Consultoria em Desenvolvimento de Aplicativos',
      description: "Fornecemos consultoria especialiazada para ajudar na definição de requisitos, escolha da tecnologia e estratégias de desenvolvimento de aplicativos móveis, garantindo que seu projeto seja bem-sucedido desde o início.",
      options: [
        {
          label: 'Consultoria Inicial (por hora)',
          price: 300
        },
        {
          label: 'Pacote de Consultoria Completa (5 horas)',
          price: 1200
        }
      ]
    },

    {
      name: 'Integração de APIs em Aplicativos Móveis',
      description: "Integramos APIs externas em aplicativos móveis para oferecer funcionalidades avançadas, como pagamentos, autenticação e comunicação com outros serviços.",
      options: [
        {
          label: 'React Native',
          price: 700
        },
        {
          label: 'Flutter',
          price: 700
        }
      ]
    }
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
              const message = `Olá! Estou interessado no serviço: ${selectedService?.name}. Escolhi a opção: ${selectedOption}. Total: R$ ${price}.`;
              const url = `https://wa.me/5532999823915?text=${encodeURIComponent(message)}`;
              window.open(url, '_blank');
            }}
            variant="contained"
            color="primary"
          >Confirmar</Button>
        </ModalContent>
      </Modal>
    </Section>
  )
}

export default Servicos;
