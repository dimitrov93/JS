import fs from "fs/promises"; // will throw an error if not applied in getStaticProps
import Link from "next/link";
import path from "path";

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}><Link href={`/products/${p.id}`}>{p.title}</Link></li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  console.log('Revalidate');
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);


  if (!data) {
    return {
      redirect: {
        destionation: '/no-data'
      }
    }
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
    // notFound: true
    // redirect: 
  };
}

export default HomePage;
