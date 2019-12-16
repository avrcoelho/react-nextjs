import React from "react";
import Link from "next/link";
import Head from "next/head";
// import { Container } from './styles';

export default function pages() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Hello world</h1>
      <Link href="/users">
        <a>Usuários</a>
      </Link>
    </div>
  );
}
