import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Text,
  Grid,
  Card,
  Checkbox,
  Input,
  Navbar,
  Dropdown,
  Button,
  Collapse,
  Image,
  Spacer,
  Switch,
  changeTheme,
  useTheme,
  Link,
  Popover,
} from "@nextui-org/react";
import Head from "next/head";

const Layout = ({ children }) => {
  const { type, isDark } = useTheme();

  const handleChange = () => {
    const nextTheme = isDark;
    window.localStorage.setItem("data-theme", nextTheme); // you can use any storage
    changeTheme(nextTheme);
  };
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
      </Head>
      <Navbar isBordered variant="sticky" css={{ mb: "12px" }} id="navegacion">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Jemba
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link href="#inicio" className="coloroide">Inicio</Navbar.Link>
          <Navbar.Link href="#mas-info">Mas Informacion</Navbar.Link>
          <Navbar.Link href="#matematicos">Penesaurio</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
        </Navbar.Content>
        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <Link css={{ color: "pink" }} href="#inicio">
              Inicio
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link css={{ color: "pink" }} href="#mas-info">
              Mas Informacion
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link css={{ color: "pink" }} href="#matematicos">
              Matematicos Famosos
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
      {children}

      <Grid css={{ mt: "20px" }} className="subrayado"></Grid>
      <Navbar css={{ mt: "20px" }}>
        <Grid css={{ mb: "40px" }}>
          <Popover>
            <Popover.Trigger>
              <Button auto flat className="mt-3">
                Programador
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <Text css={{ p: "$4" }}>-Benjamin Oyarzun</Text>
            </Popover.Content>
          </Popover>
        </Grid>
        <Grid>LocasLopezCo</Grid>
      </Navbar>
    </>
  );
};

export default Layout;