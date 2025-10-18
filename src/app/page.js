"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Head from "next/head";
import Navegation from "@/components/navegation/navegation";
import Hero from "@/components/hero/hero";
import Terreno from "@/components/terreno/terreno";
import Beneficios from "@/components/beneficios/beneficios";
import Ubicacion from "@/components/ubicacion/ubicacion";
import Compra from "@/components/compra/compra";
import Loading from "@/components/loading/loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Valle de Quilca Club House - Terreno listo para la compra en Arequipa, Perú
        </title>
        <meta
          name="description"
          content="Soluciones corporativas y jurídicas de la más alta calidad. Nos dedicamos a comprender a fondo los desafíos de su negocio para brindar un asesoramiento estratégico y proactivo que no solo resuelve problemas, sino que también previene riesgos y optimiza el crecimiento."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="asesoría legal, estudio de abogados, abogados, consultoría legal, derecho administrativo, protección al consumidor, derecho municipal, derecho penal, derecho laboral, derecho corporativo, derecho civil, derecho de familia, derecho registral"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="SB - Consultores Corporativos - Asesoría y Consultoría Corporativa legal"
        />
        <meta
          property="og:description"
          content="asesoría legal, estudio de abogados, abogados, consultoría legal, derecho administrativo, protección al consumidor, derecho municipal, derecho penal, derecho laboral, derecho corporativo, derecho civil, derecho de familia, derecho registral."
        />
        <meta
          property="og:url"
          content="https://www.sbconsultorescorporativos.com.pe"
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://www.sbconsultorescorporativos.com.pe"
        />
      </Head>
      <main className={styles.main}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Navegation />
            <Hero id="hero" />
            <Terreno id="terreno" />
            <Beneficios id="beneficios" />
            <Ubicacion id="ubicacion" />
            <Compra id="compra" />
          </>
        )}
      </main>
    </>
  );
}
