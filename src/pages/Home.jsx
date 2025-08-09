import React from "react";
import Banner from "../components/Banner";

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

  return (
    <div>
      {/* Banner */}
      <section>
        <Banner />
      </section>

      {/* Display */}
      <section>
        <div className="columns-2 md:columns-3 lg:columns-5 gap-4 p-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-blue-300 mb-4 rounded shadow border-2 break-inside-avoid"
            >
              <img src={image.image} alt={image.title} />
              <h1 className="p-2">{image.title}</h1>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
