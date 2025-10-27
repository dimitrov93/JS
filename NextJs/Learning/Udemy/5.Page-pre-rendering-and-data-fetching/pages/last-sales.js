import { useEffect, useState } from "react";
import useSWR from "swr";

const LastSalesPage = (props) => {
  const [sales, setSales] = useState(props.sales);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "https://nextjs-1445a-default-rtdb.europe-west1.firebasedatabase.app/sales.json",
    fetcher
  );

  useEffect(() => {
    console.log(data);
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          value: data[key].value,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch(
  //       `https://nextjs-1445a-default-rtdb.europe-west1.firebasedatabase.app/sales.json`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const transformedSales = [];
  //         for (const key in data) {
  //           transformedSales.push({
  //             id: key,
  //             username: data[key].username,
  //             value: data[key].value,
  //           });
  //         }
  //         setSales(transformedSales);
  //         setIsLoading(false);
  //       });
  //   }, []);

  if (error) {
    return <p>Failed to load!</p>;
  }

  if (!data && !sales) {
    return <p>Loading....</p>;
  }

  return (
    <ul>
      {sales.map((s) => (
        <li key={s.username}>
          {s.username} - {s.value}
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const transformedSales = [];

  const response = await fetch(
    `https://nextjs-1445a-default-rtdb.europe-west1.firebasedatabase.app/sales.json`
  );

  const data = await response.json();

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      value: data[key].value,
    });
  }

  return {
    props: {
      sales: transformedSales,
    },
    // revalidate: 10,
  };
}
export default LastSalesPage;
