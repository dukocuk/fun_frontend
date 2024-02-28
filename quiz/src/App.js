import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card } from "react-bootstrap";
import { useState } from "react";
import Quiz from "./containers/Quiz";
import GoogleMapReact from "google-map-react";

function useGeolocation() {}

function App() {
  return <Quiz />;
}

export default App;
