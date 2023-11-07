import Main from "@/layouts/Main";
import React from "react";

export default function about() {
  return (
    <div>
      <Main>
        <h2> About Page</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quam fuga
          dolor unde fugit. Officia ab mollitia molestias dignissimos provident
          reiciendis totam asperiores laudantium accusamus magnam, nisi
          veritatis, nihil vero.
        </p>
        <style jsx global>
          {`
            h2 {
              color: red;
            }
            p {
              color: blue;
              padding: 5px;
            }
          `}
        </style>
      </Main>
    </div>
  );
}
