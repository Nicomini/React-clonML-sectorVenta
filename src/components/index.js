import React from "react";
import { Header } from "../Header";
import { Hero } from "../Hero";
import { Producto } from "../Producto"

export const Layout = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Producto />
        </div>
    )
}

