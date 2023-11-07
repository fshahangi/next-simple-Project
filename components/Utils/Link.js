import React from "react";
import NextLink from "next/link";

export default function Link({ prefetch = true, ...props }) {
  return <NextLink prefetch={prefetch} {...props} />;
}
