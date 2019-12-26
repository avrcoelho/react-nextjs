import React from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

import withAnalytics from "~/hocs/withAnalytics";

function Users({ users }) {
  return (
    <div>
      <Head>
        <title>Usuários</title>
      </Head>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">
        <a>voltar</a>
      </Link>
    </div>
  );
}

Users.getInitialProps = async () => {
  const response = await axios.get(
    "https://api.github.com/orgs/rocketseat/members"
  );

  return { users: response.data };
};

export default withAnalytics()(Users);
