import Main from "@/layouts/Main";
import React from "react";

export default function Products({ params }) {
  return (
    <Main>
      <div>catch all routes==== {params.slug.join("/")}</div>
    </Main>
  );
}
export async function getServerSideProps({ params }) {
  return {
    props: { params },
  };
}
