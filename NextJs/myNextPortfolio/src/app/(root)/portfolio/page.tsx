import PortfolioCard from "@/components/Card/PortfolioCard";
import React from "react";

interface PortfolioAttrs {
  title: string;
  image: string;
  github: string;
  demo: string;
}

type PortFolio = {
  _id: string;
  title: string;
  image: string;
  github: string;
  demo: string;
  createdAt: string;
  updatedAt: string;
};

async function getPortfolioData(): Promise<PortFolio[]> {
  const res = await fetch("http://localhost:3000/api/portfolio");
  const data = await res.json();
  return data;
}

export default async function Portfolio() {
  try {
    const data = await getPortfolioData();
    return (
      <>
      <h1 className="text-center text-5xl text-slate-600">My Projects</h1>
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
      </>
    );
  } catch (error) {
    console.log(error);
  }
}
