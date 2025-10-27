import RecipeList from "@/components/RecipeList";
import React from "react";
import { fetchRecepiesAreas } from "../page";

const getRecepies = async (type) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`
  );
  const response = await res.json();
  return response;
};

const Page = async ({ params }) => {
  const recipes = await getRecepies(params.type);
  return <RecipeList recipes={recipes.meals} type={params.type} />;
};

export const generateStaticParams = async () => {
  const areas = await fetchRecepiesAreas();

  return areas.map((area) => {
    type: area;
  });
};

export default Page;
