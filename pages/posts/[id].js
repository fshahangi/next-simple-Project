import Main from "@/layouts/Main";
import { GET } from "@/repository/AxiosRepository";
import React from "react";
import Head from "next/head";

export default function Post({ post = {} }) {
  return (
    <Main>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </Main>
  );
}

export async function getStaticPaths() {
  const { data: posts } = await GET(`/posts`);

  const paths = posts
    .slice(0, 10)
    .map((post) => ({ params: { id: `${post.id}` } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const { data: post } = await GET(`/posts/${params.id}`);
    return {
      props: {
        post,
      },
      revalidate: 5,
    };
  } catch (e) {
    if (e.response.status === 404) {
      return {
        props: {},
        notFound: true,
      };
    } else {
      throw new Error(e);
    }
  }
}
