import Image from "next/image";
import React from "react";

export default function Header() {
  const color = "gray";
  return (
    <div>
      <header>
        <div className="header">
          <Image src="/47500058.png" width={100} height={100} />

          <h2>My Header</h2>
        </div>
        <style jsx>{`
          .header {
            color: ${color};
            margin: 1em;
            display: flex;
          }
        `}</style>
      </header>
    </div>
  );
}
