import "./App.css";
import React from "react";
import Navigation from "./views/Navigation.tsx";
import Articles from "./views/Articles.tsx";
import { Container } from "react-bootstrap";
export default function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Container style={{ marginTop: "15px" }}>
          <Articles />
        </Container>
      </main>
    </>
  );
}
