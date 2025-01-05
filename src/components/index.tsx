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
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon, ExpandLess, ExpandMore } from "@mui/icons-material";
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
              <Box sx={{ width: 250 }} role="presentation" >
                {/* Close Button */}
                <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
                  <IconButton onClick={() => toggleDrawer(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <List>
                  {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <ListItem component='button' onClick={() => toggleSubmenu(item.label)}>
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
                                pl: 4,
                                "&:hover": { textDecoration: "none", backgroundColor: "var(--color-button-secondary)" },
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
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "100%" }}>
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
