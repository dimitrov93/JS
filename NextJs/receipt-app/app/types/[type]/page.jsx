import React from 'react'
const getRecepies = async (type) => {
    const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`
      );
    const response = await res.json()
    return response
}

const Page = async ({params}) => {
    const recipes = await getRecepies(params.type)
    console.log(recipes);
  return (
    <div>Page</div>
  )
}

export default Page