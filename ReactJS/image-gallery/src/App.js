import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  const galleryImages = [
    {
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      img: "https://st2.depositphotos.com/1288351/12396/i/600/depositphotos_123962708-stock-photo-cherry-tree-on-mountain.jpg",
    },
    {
      img: "https://thumbs.dreamstime.com/b/leaves-blowing-off-heart-shaped-tree-28665094.jpg",
    },
    {
      img: "https://st3.depositphotos.com/8284530/17024/i/600/depositphotos_170240644-stock-photo-red-heart-shaped-tree-in.jpg",
    },
    {
      img: "https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    },
    {
      img: "https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863",
    },
  ];
  return (
    <div className="App">
      <br />
      <div>
        <strong>
          Responsive Photo Gallery (No External Library) in React Js
        </strong>
      </div>
      <br />
      <br />

      <Gallery galleryImages={galleryImages} />
      <br />
      <br />
    </div>
  );
}

export default App;
