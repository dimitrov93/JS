import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipeList = ({ recipes, type }) => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
      {recipes.map((item, i) => {
        return (
          <div className="rounded bg-slate-300" key={i}>
            <Image
              src={item.strMealThumb}
              width={500}
              height={500}
              alt="Recipe Image"
            ></Image>
            <div className=" p-5">
              <h2 className=" text-2xl font-bold">{item.strMeal}</h2>
              <Link
                className=" bg-blue-500 rounded text-center py-1 px-5 text-white block mt-5"
                href={`/types/${type}/${item.idMeal}`}
              >
                Get recipe details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
