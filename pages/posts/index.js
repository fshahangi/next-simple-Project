import Main from "@/layouts/Main";
import { GET } from "@/repository/FetchApiRepository";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Posts({ posts }) {
  return (
    <Main>
      <h2>Post List</h2>
      <div>
        <ol>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ol>
      </div>
    </Main>
  );
}

export async function getStaticProps() {
  const res = await GET("/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
