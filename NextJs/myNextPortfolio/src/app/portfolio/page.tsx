import PortfolioCard from "@/components/Card/PortfolioCard";
import React from "react";

interface PortfolioAttrs {
  title: string;
  image: string;
  github: string;
  demo: string;
}

export default async function Portfolio() {
  try {
    const data = await getServerSideProps();
    return (
      <div className="grid-card">
        {data.map((x: PortfolioAttrs, index: number) => (
          <PortfolioCard
            key={index}
            title={x.title}
            image={x.image}
            github={x.github}
            demo={x.demo}
          />
        ))}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/portfolio");
  const data = await res.json();
  return data;
}
