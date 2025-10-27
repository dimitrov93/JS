import fs from "fs/promises"; // will throw an error if not applied in getStaticProps
import path from "path";

const ProductDetailsPega = (props) => {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>Title: {loadedProduct.title}</h1>
      <p>Description: {loadedProduct.description}</p>
    </>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((p) => p.id === productId);

  if (!product) {
    return { notFound: true };
  }
  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((p) => p.id);
  const params = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: params,
    // paths: [
    //   { params: { pid: "p1" } },
    //     { params: { pid: "p2" } },
    //     { params: { pid: "p3" } },
    // ],
    fallback: true,
  };
}

export default ProductDetailsPega;
