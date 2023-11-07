import Main from "@/layouts/Main";
import { GET } from "@/repository/FetchApiRepository";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Users({ users }) {
  return (
    <Main>
      <h2>User List</h2>
      <div>
        <ol>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ol>
      </div>
    </Main>
  );
}

export async function getServerSideProps() {
  const res = await GET("/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
