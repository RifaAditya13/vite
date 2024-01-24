import React from 'react'
import './App.css'
import Logo from './assets/logo.webp'
import Pict from './assets/gelato.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <>
      <h1>React Food</h1>
      <img src={Logo} alt="Gelato React Food" />
        <Card>
          <Card.Img variant="top" src={Pict}/>
          <Card.Body>
            <Card.Title>Gelato Pistachio</Card.Title>
            <Card.Text>Rp 20.000</Card.Text>
            <Button variant="primary">Beli</Button>
          </Card.Body>

        </Card>
    </>
  )
}

export default App
