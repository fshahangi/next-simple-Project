import React from "react";
import Main from "@/layouts/Main";
import style from "@/styles/contact.module.css";

export default function contact() {
  return (
    <Main>
      <h2 className={style.header}> Contact Us</h2>
      <p className={style.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi ab
        ipsa? Esse maxime modi exercitationem dignissimos voluptatibus delectus
        unde eveniet beatae debitis optio dicta, perspiciatis, dolor omnis,
        officia aut?
      </p>
    </Main>
  );
}
