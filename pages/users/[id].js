import Main from "@/layouts/Main";
import { GET } from "@/repository/AxiosRepository";
import { useRouter } from "next/router";
import React from "react";

export default function User({ user }) {
  return (
    <Main>
      <h2>{user.name}</h2>
    </Main>
  );
}

export async function getServerSideProps({ params }) {
  const { data: user } = await GET(`/users/${params.id}`);
  return {
    props: {
      user,
    },
  };
}
