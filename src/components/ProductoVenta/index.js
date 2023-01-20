import React from 'react'

import {
Container,
Estado,
Row,
HeartIcon,
Price,
Card,
Color,
Cantidad,
ButtonCard,
Button,
Beneficios,
ShieldIcon,
CopaIcon,
CheckIcon
} from "./styles.js"


export const ProductoVenta = () => {
  return (
    <Container>
      <Estado> Nuevo 4 vendidos   </Estado>
      <Row>
        <h1> Auricular Gamer Redragon Themis H220 Pc Black Red Micrófono </h1>
        <HeartIcon />
        </Row>
        <Price>$ 7.000</Price>
        <Card>
            <CheckIcon />
            <div>
                <span className='title'>Llega gratis mañana!</span>
                <span className="detaller">Beneficio Mercado Puntos</span>
                <a href='#' className='more'> Ver más formas de entrega</a>
            </div>
        </Card>
        <Color>
        Color: <strong>Negro/Rojo</strong>
        </Color>
        <Cantidad>
        <p>Cantidad</p>
        <strong>1 unidad</strong>
        <input type="number" value="" />
        <span>(7 disponibles)</span>
        </Cantidad>
        <ButtonCard>
            <Button className="solid">Comprar ahora</Button>
            <Button>Agregar al carrito</Button>
        </ButtonCard>
        <Beneficios>
            <li>
                <ShieldIcon />
                <p>Compra protegida,<span> recibe el producto que esperabas o te devolvemos tu dinero.</span></p>
            </li>
            <li>
            <CopaIcon />
            <p>Mercado Puntos. <span>Sumas 47 puntos.</span></p>
            </li>
        </Beneficios>
    </Container>
  )
}
