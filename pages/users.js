import React from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
// import { Container } from './styles';

function users({ users }) {
  return (
    <div>
      <Head>
        <title>Usuários</title>
      </Head>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
      <Link href="/">
        <a>voltar</a>
      </Link>
    </div>
  );
}

users.getInitialProps = async () => {
  const response = await axios.get(
    "https://api.github.com/orgs/rocketseat/members"
  );

  return { users: response.data };
};

export default users;
