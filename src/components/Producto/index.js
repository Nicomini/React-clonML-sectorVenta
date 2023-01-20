import React from 'react'
import { InfoVendedor } from '../InfoVendedor';
import { ProductoVenta } from '../ProductoVenta';
import {
  Container,
  Panel,
  Column,
  Galeria,
  Description,
  Section,

 } from "./styles";


export const Producto  = () => {
  return (
    <Container>
      <Panel>
        <Column>
        <Galeria>
          <img src="https://http2.mlstatic.com/D_NQ_NP_744693-MLA45452806617_042021-O.webp" alt='Producto' />
        </Galeria>
          <Info/>
        </Column>
        <Column>
          <ProductoVenta/>
           <InfoVendedor/>
           <Garantia />
        </Column>
      </Panel>
    </Container>
  )
}

const Info = () => {
  return(
    <Description>
      <h4>Descripción</h4>

      <p>
      <span>Un auricular con un sonido brillante y claro, con una estructura liviana y cómoda,
      el Themis es un auricular pensado para jugar cómodamente.</span>
      <br /><br />
      <span>SONIDO</span>
      <br /><br />
      Este auricular, posee un claro sonido estéreo con ficha Jack 3.5 mm, garantizan la mejor calidad de sonido en nuestros diafragmas de 50mm con imanes de neodimio, ideales en la construcción de periféricos de sonido.
      <br /><br />
      <span>MICROFONO</span>
      <br /><br />
      Integrado en la estructura de las copas, construido sobre un brazo rebatible y captación omnidireccional.
      <br /><br />
      <span>CONSTRUCCION</span>
      <br /><br />
      Con su estructura de plástico ABS, vincha ajustable con almohadilla de relleno suave, almohadillas de copas sintéticas con relleno suave y de recubrimiento circumaural, que recubre toda superficie de las orejas y producen un aislamiento acústico pasivo que nos aseguran la funcionalidad de nuestro periférico.
      Además posee un cable engomado de 2 metros de largo, altamente resistente, fichas de 3.5 mm bañadas en oro.
      <br /><br />
      <span>EXTRA</span>
      <br /><br />
      Incluimos un adaptador a ficha Jack de 4 vías para utilizarlo en distintas plataformas, o disfrutar de tu música en tu celular sin perder el micrófono.
      <br /><br />
      </p>
      <br /><br />
      <hr/>
      <br />
      <p>
        <br />
        <br />
      <span>ESPECIFICACIONES</span>
        <br />
        <br />
      <span>AURICULAR</span>
      <br />
      -Tipo de salida: Stereo.
      <br />
      -Tipo de copa: Circumaurales: Este tipo de auriculares se coloca rodeando completamente la oreja. Tacto suave y con aislamiento pasivo.
      <br />
      -Material Diadema: Plástica, recubierta de tela suave y duradera.
      <br />
      -Vibración: No.
      <br />
      -Frecuencia de Respuesta: 20 - 20k Hz.
      <br />
      -Impedancia: 16 Ohm.
      <br />
      -Diámetro del diafragma: 50 mm con imanes de neodimio.
      <br />
      -Sensibilidad: 117 dB.
      <br />
      -Retroiluminación: No.
      <br />
      -Tipo de cable: 2 m Engomado de alta resistencia.
      <br />
      -Conectores: Conectores 3.5 mm enchapados en oro para audio y micrófono.
      <br />
      -Peso: 275 g.
      <br />
      -Software: No.
      <br /><br />
      <span>MICROFONO</span>
      <br />
      -Impedancia: 2.2k Ohm.
      <br />
      -Sensibilidad: -38 dB+/-2 dB.
      <br />
      -Tipo de micrófono y captación: Omnidireccional de brazo rebatible.
      <br />
      -Extras: Adaptador a Jack 4 vías.
      <br /><br />
      </p>
      <p>
      <br />
      <br />
      <hr/>
      <br />
      <br />
      <span>_____ATMER PERIFERICOS______</span>
      <br />
      <br />
      Somos MERCADOLÍDER con 100% de CALIFICACIONES POSITIVAS
      Brindamos ATENCIÓN PERSONALIZADA y GARANTÍA en todos nuestros productos
      <br />
      <span>*PREGUNTAS FRECUENTES*</span>
      <br />
      · MEDIOS DE PAGO: Aceptamos todos los medios de pago que ofrece mercado libre: MercadoPago, Tarjeta de crédito, Tarjeta de débito y Efectivo.
      <br />
      · RETIRO: Coordinamos un horario y podes retirar tu compra en Monte Castro, cerca de la cancha de All Boys.
      <br />
      · ENVÍO: Ofrecemos envíos a todo el país por MERCADOENVÍOS y envíos EN EL DÍA por mensajería flex dentro de CABA y GBA.
      <br />
      · FACTURA: Podes solicitar tu factura una vez finalizada la compra. Realizamos factura A y B.
      <br />
      · GARANTÍA: Todos los productos que comercializamos son 100% originales, por eso mismo cuentan con garantía de fábrica entre 1 y 2 años.
      <br />
      Cualquier duda o problema que pueda surgir, comunicate con nosotros.<br />
       Siempre tendremos la mejor disposición para solucionarlo.
      ¡¡MUCHAS GRACIAS!!<br />
      Atmer Periféricos.
      </p>
    </Description>
  )
}
const Garantia = () =>{
  return(
    <Section>
      <h5>Garantía</h5>
      <div>
        <span>
          <p className='title'>Compra protegida con Mercado Pago</p>
          <p className='description'>Recibe el producto que esperabas o te devolvemos tu dinero</p>
        </span>
        <span>
          <p className='title'>Garantia del vendedor</p>
          <p className='description'>Garantia del vendedor : 6 meses</p>
        </span>
        <a href='#' className='Linkg'>Conocer más sobre garantía</a>
        </div>
    </Section>
  )
}
const MediosPago = () =>{
  return (
    <Section>
    <h5>Garantía</h5>
    <div>
      <span>
        <p className='title'>Compra protegida con Mercado Pago</p>
        <p className='description'>Recibe el producto que esperabas o te devolvemos tu dinero</p>
      </span>
      <span>
        <p className='title'>Garantia del vendedor</p>
        <p className='description'>Garantia del vendedor : 6 meses</p>
      </span>
      <a href='#' className='Linkg'>Conocer más sobre garantía</a>
      </div>
  </Section>
  )
}