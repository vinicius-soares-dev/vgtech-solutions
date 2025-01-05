import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  Box,
  Button,
  Link
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon, ExpandLess, ExpandMore, Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu((prev) => (prev === menu ? null : menu));
  };

  const menuItems = [
    {
      label: "Serviços",
      submenu: [
        { label: "Criação de Landing Pages", link: "#" },
        { label: "E-commerces", link: "#" },
        { label: "Sistemas ERP", link: "#" },
        { label: "Consultoria", link: "#" },
      ],
    },
    {
      label: "Projetos",
      submenu: [
        { label: "Projetos em Andamento", link: "#" },
        { label: "Projetos Concluídos", link: "#" },
      ],
    },
    {
      label: "Blog",
      submenu: [{ label: "Ver Blog", link: "#" }],
    },
    {
      label: "Área do Cliente",
      submenu: [{ label: "Login na Área do Cliente", link: "#" }],
    },
    {
      label: "Contato",
      submenu: [
        { label: "Enviar Email", link: "#" },
        { label: "WhatsApp", link: "#" },
      ],
    },
    {
      label: "Área do Administrador",
      submenu: [{ label: "Login na Área do Administrador", link: "#" }],
    },
  ];



  return (
    <AppBar position="static" sx={{ backgroundColor: "var(--color-background)", color: "var(--color-text)" }}>
      <Toolbar>
        {isMobile ? (
          <>
            {/* Mobile Menu */}
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: "var(--font-title)", textAlign: 'center' }}>
              VG Tech Solutions
            </Typography>

            <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
              <Box sx={{ width: 250,  }} role="presentation" >
                {/* Close Button */}
                <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
                  <IconButton onClick={() => toggleDrawer(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <List>
                  {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <ListItem onClick={() => toggleSubmenu(item.label)} sx={{ background: "var(--color-background)"}}>
                        <ListItemText primary={item.label} />
                        {item.submenu.length > 0 ? (
                          activeSubmenu === item.label ? <ExpandLess /> : <ExpandMore />
                        ) : null}
                      </ListItem>
                      <Collapse in={activeSubmenu === item.label} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {item.submenu.map((subItem, subIndex) => (
                            <ListItem
                              key={subIndex}
                              component="a"
                              href={subItem.link}
                              sx={{
                                color: "var(--color-text)" ,
                                pl: 4,
                                "&:hover": { textDecoration: "none", backgroundColor: "var(--color-button-secondary)", color: "var(--color-text-tertiary)", transition: '1.5s', fontWeight: 'bolder' },
                              }}
                            >
                              <ListItemText primary={subItem.label} />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                      <Divider />
                    </React.Fragment>
                  ))}
                </List>
              </Box>
              <Box
      sx={{
        position: "absolute",
        bottom: 0,
        backgroundColor: "var(--color-background)",
        color: "var(--color-text-tertiary)",
        py: 3,
        px: 2,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Logo ou Nome da Empresa */}
      <Typography
        variant="h6"
        sx={{ fontFamily: "var(--font-title)", fontWeight: "bold", mb: 1, color: "var(--color-text-secondary)" }}
      >
        VG Tech Solutions
      </Typography>

      {/* Informações de Contato */}
      <Typography variant="body2" sx={{ fontFamily: "var(--font-body)", mb: 1 }}>
        Email:{" "}
        <Link href="mailto:solutionsvgtech@gmail.com" sx={{ color: "var(--color-text-secondary)", fontWeight: "bold",textDecoration: "none" }}>
          solutionsvgtech@gmail.com
        </Link>
      </Typography>

      {/* Ícones de Redes Sociais */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          sx={{ color: "var(--color-button-secondary)" }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          href="https://linkedin.com"
          target="_blank"
          sx={{ color: "var(--color-button-secondary)" }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          sx={{ color: "var(--color-button-secondary)" }}
        >
          <Instagram />
        </IconButton>
      </Box>

      {/* Texto de Direitos Autorais */}
      <Typography
        variant="caption"
        sx={{
          fontFamily: "var(--font-body)",
          color: "var(--color-text)",
          fontSize: "0.9rem",
        }}
      >
        &copy; 2024 VG Tech Solutions. All rights reserved.
      </Typography>
    </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "100%"}}>
            {/* Desktop Menu */}
            <Typography variant="h6" sx={{ fontFamily: "var(--font-title)", mr: 2, fontSize: "2rem" }}>
              VG Tech
            </Typography>
            {menuItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  mx: 1,
                  fontFamily: "var(--font-body)",
                  "&:hover .submenu": {
                    display: "block",
                  },
                }}
              >
                <Button
                  color="inherit"
                  sx={{ textTransform: "none" }}
                  onClick={() => toggleSubmenu(item.label)}
                >
                  {item.label}
                </Button>
                <Box
                  className="submenu"
                  sx={{
                    display: activeSubmenu === item.label ? "block" : "none",
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "var(--color-background)",
                    boxShadow: 3,
                    zIndex: 10,
                    minWidth: "150px",
                  }}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <Box
                      key={subIndex}
                      component="a"
                      href={subItem.link}
                      sx={{
                        display: "block",
                        px: 2,
                        py: 1,
                        color: "var(--color-text)",
                        textAlign: "left",
                        textDecoration: "none",
                        fontFamily: "var(--font-body)",
                        "&:hover": { backgroundColor: "var(--color-button-secondary)", color: "#FFF" },
                      }}
                    >
                      {subItem.label}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
