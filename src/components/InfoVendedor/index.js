import React from "react"
import {
    Container,
    Title,
    Card,
    LocationIcon,
    ClockIcon,
    PlatinumIcon,
    Reputacion,
    Caja,
    Row,
    SupporIcon,
    Link

  } from "./styled";

export const InfoVendedor = () => {
    return (
        <Container>
            <Title>
                Informacíon del vendedor
            </Title>
            <Card>
                <LocationIcon />
                <div>
                    <p>Ubicacíon</p>
                    <strong>Buenos Aires, Argentina</strong>
                </div>
            </Card>
            <Card>
                <PlatinumIcon />
                <div>
                    <p className="platinum">MercadoLider Platinum</p>
                    <strong >¡Es uno de los mejores del sitio!</strong>
                </div>
            </Card>
            <Reputacion>
                <Caja>
                    <li/>
                    <li/>
                    <li/>
                    <li/>
                    <li ClassName="active"/>
                </Caja>
            </Reputacion>
            <Row>
                <div>
                    <strong>9452</strong>
                        <span>Ventas en los últimos 60 días</span>
                </div>
                <div>
                    <strong>  <SupporIcon/>   </strong>
                        <span>Brinda buena atencion</span>
                </div>
                <div>
                    <strong>
                        <ClockIcon/>
                    </strong>
                        <span>Entrega sus productos a tiempo</span>
                </div>
            </Row>

            <Link href="#">Ver más datos de este vendedor</Link>
        </Container>
    )
}