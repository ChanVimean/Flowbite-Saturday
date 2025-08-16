import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import fetchApi from "../utils/fetchApi";

const Home = () => {
  const images = [
    {
      title: "T-Shirt",
      image:
        "https://thumbs.dreamstime.com/b/green-t-shirt-flying-isolated-white-single-object-nobody-fashion-clothes-385780297.jpg",
    },
    {
      title: "Strip Shirt",
      image:
        "https://thumbs.dreamstime.com/b/blue-polo-shirt-stripes-single-isolated-object-male-white-background-boy-s-clothes-child-fashion-clothing-t-nobody-331708651.jpg",
    },
    {
      title: "Dress",
      image:
        "https://i.pinimg.com/originals/91/5a/f9/915af900a459b4973334bd825f93c33b.jpg",
    },
    {
      title: "Men Cloth",
      image:
        "https://i5.walmartimages.com/asr/ae51fcfb-17a5-4ddf-bbf0-08191dfd0b3e.824a35efec7c7033bf07f33b4c8a7ff2.jpeg",
    },
    {
      title: "Shoes",
      image: "https://m.media-amazon.com/images/I/717gfSULVCL._UY900_.jpg",
    },
    {
      title: "Sport Shoes",
      image:
        "https://i5.walmartimages.com/seo/Htcenly-Running-Shoes-Men-Fashion-Sneakers-Casual-Walking-Shoes-Sport-Athletic-Shoes-Lightweight-Breathable-Comfortable_4114141f-7d26-4dd7-933d-babc24080395.516ad145e1a1d8d82a801ac48231950d.jpeg",
    },
    {
      title: "T-Shirt",
      image:
        "https://thumbs.dreamstime.com/b/green-t-shirt-flying-isolated-white-single-object-nobody-fashion-clothes-385780297.jpg",
    },
    {
      title: "Strip Shirt",
      image:
        "https://thumbs.dreamstime.com/b/blue-polo-shirt-stripes-single-isolated-object-male-white-background-boy-s-clothes-child-fashion-clothing-t-nobody-331708651.jpg",
    },
    {
      title: "Dress",
      image:
        "https://i.pinimg.com/originals/91/5a/f9/915af900a459b4973334bd825f93c33b.jpg",
    },
    {
      title: "Men Cloth",
      image:
        "https://i5.walmartimages.com/asr/ae51fcfb-17a5-4ddf-bbf0-08191dfd0b3e.824a35efec7c7033bf07f33b4c8a7ff2.jpeg",
    },
    {
      title: "Shoes",
      image: "https://m.media-amazon.com/images/I/717gfSULVCL._UY900_.jpg",
    },
    {
      title: "Sport Shoes",
      image:
        "https://i5.walmartimages.com/seo/Htcenly-Running-Shoes-Men-Fashion-Sneakers-Casual-Walking-Shoes-Sport-Athletic-Shoes-Lightweight-Breathable-Comfortable_4114141f-7d26-4dd7-933d-babc24080395.516ad145e1a1d8d82a801ac48231950d.jpeg",
    },
    {
      title: "T-Shirt",
      image:
        "https://thumbs.dreamstime.com/b/green-t-shirt-flying-isolated-white-single-object-nobody-fashion-clothes-385780297.jpg",
    },
    {
      title: "Strip Shirt",
      image:
        "https://thumbs.dreamstime.com/b/blue-polo-shirt-stripes-single-isolated-object-male-white-background-boy-s-clothes-child-fashion-clothing-t-nobody-331708651.jpg",
    },
    {
      title: "Dress",
      image:
        "https://i.pinimg.com/originals/91/5a/f9/915af900a459b4973334bd825f93c33b.jpg",
    },
    {
      title: "Men Cloth",
      image:
        "https://i5.walmartimages.com/asr/ae51fcfb-17a5-4ddf-bbf0-08191dfd0b3e.824a35efec7c7033bf07f33b4c8a7ff2.jpeg",
    },
    {
      title: "Shoes",
      image: "https://m.media-amazon.com/images/I/717gfSULVCL._UY900_.jpg",
    },
    {
      title: "Sport Shoes",
      image:
        "https://i5.walmartimages.com/seo/Htcenly-Running-Shoes-Men-Fashion-Sneakers-Casual-Walking-Shoes-Sport-Athletic-Shoes-Lightweight-Breathable-Comfortable_4114141f-7d26-4dd7-933d-babc24080395.516ad145e1a1d8d82a801ac48231950d.jpeg",
    },
  ];

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [fetchData, setFetchData] = useState([]);
  const [axiosData, setAxiosData] = useState([]);

  // Example without dependencies
  // useEffect(() => {
  //   console.log("You trigger useEffect");
  // }, []);

  // Example with dependencies
  useEffect(() => {
    setMessage(`You have clicked ${count} times.`);
  }, [count]);

  // fetch
  useEffect(() => {
    fetch("https://clothes-json.onrender.com/products")
      .then((res) => res.json())
      .then((json) => setFetchData(json));
  }, []);

  // axios
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchApi();
      if (!data) return; // Optional
      setAxiosData(data);
    };

    loadData();
  }, []);

  return (
    <div>
      {/* Banner */}
      <section>
        <Banner title={"We are Cambodian"} />
      </section>

      {/* Temporary section */}
      <section>
        <button
          onClick={() => setCount(count + 1)}
          className="px-2 py-1 bg-red-600 rounded"
        >
          Click me
        </button>
        <p>{message}</p>
      </section>

      {/* Display */}
      <section>
        <div className="columns-2 md:columns-4 lg:columns-6 gap-4 p-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-blue-300 mb-4 rounded shadow break-inside-avoid"
            >
              <img src={image.image} alt="Image" />
              <h1 className="p-2">{image.title}</h1>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* Fetch */}
      <section>
        <h1>Fetch Data</h1>

        <ul className="columns-2 md:columns-4 lg:columns-6 gap-4 p-4">
          {fetchData.map((data, index) => (
            <li key={index}>
              <img
                src={data.image}
                alt="Image"
                className="rounded break-inside-avoid shadow"
              />
              <aside className="bg-blue-300 mb-4 p-2">
                <h1>{data.name}</h1>
                <p>{data.cateogry}</p>
                <p>{data.size}</p>
                <p>{data.color}</p>
                <h2>${data.price}</h2>
              </aside>
            </li>
          ))}
        </ul>
      </section>

      <hr />

      {/* Fetch */}
      <section>
        <h1>Axios data</h1>

        <ul className="columns-2 md:columns-4 lg:columns-6 gap-4 p-4">
          {axiosData.map((data, index) => (
            <li key={index}>
              <img
                src={data.image}
                alt="Image"
                className="rounded break-inside-avoid shadow"
              />
              <aside className="bg-blue-300 mb-4 p-2">
                <h1>{data.name}</h1>
                <p>{data.cateogry}</p>
                <p>{data.size}</p>
                <p>{data.color}</p>
                <h2>${data.price}</h2>
              </aside>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
