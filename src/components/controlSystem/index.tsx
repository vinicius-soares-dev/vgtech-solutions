import {Container, Typography, Box, Card, CardMedia } from "@mui/material";
import controlSystem from "../../assets/img/jisystem.png"; // Substituir com o caminho correto da imagem

const ControlSystemCase = () => {

  return (
    <>
      <Box sx={{ backgroundColor: "#FFFFFF", padding: "40px 0", marginTop: "5rem" }}>
        <Container maxWidth="md">
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
              image={controlSystem}
              alt="Control System ERP"
              sx={{
                width: "400px",
                margin: "0 auto",
                display: "block",
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
            Estudo de Caso: Control System ERP
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
            O <strong>Control System</strong> é um ERP desenvolvido para simplificar e otimizar o gerenciamento de demandas e
            controle de serviços. Construído com tecnologias modernas e padrões robustos de desenvolvimento, a solução reduziu
            o tempo de gestão de demandas de 20 minutos para apenas 3, aumentando significativamente a eficiência operacional.
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
              - Desenvolver um sistema robusto para gerenciar múltiplas demandas simultaneamente. <br />
              - Garantir uma estrutura escalável utilizando padrões como MVC e TDD. <br />
              - Reduzir o tempo de resposta para tarefas repetitivas e complexas.
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
              - Utilização de tecnologias modernas: Node.js, TypeScript, MongoDB, ReactJS e Jest. <br />
              - Implementação de padrões de desenvolvimento como MVC e TDD para garantir qualidade e escalabilidade. <br />
              - Interfaces intuitivas para facilitar o uso por parte da equipe operacional.
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
              O Control System revolucionou o gerenciamento de demandas da empresa, reduzindo o tempo de tarefas repetitivas
              em 85%. Com a eficiência aumentada e a segurança garantida pelo uso de TDD, o sistema proporcionou um impacto
              direto na produtividade e nos resultados financeiros da organização.
            </Typography>
          </Box>
        </Container>
      </Box>

    </>
  );
};

export default ControlSystemCase;
