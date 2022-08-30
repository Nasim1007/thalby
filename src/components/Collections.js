import React from "react";

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Thalby Guide to French Culture and Heritage",
      price: "6.99",
      image: "img/image 2.png",
    },
    {
      id: 2,
      title: "Thalby Guide to French People and Society",
      price: "6.99",
      image: "img/image 3.png",
    },
    {
      id: 3,
      title: "Thalby Guide to German Culture and Heritage",
      price: "6.99",
      image: "img/image 4.png",
    },
  ];
  return (
    <div className="collection">
      <h1>Our guides explain countries and cultures.</h1>
      <p>
        Are you curious about the world around you? Our guides are for smart
        global citizens, world travelers and engaged residents who want to gain
        a deeper understanding of the cultures and societies they care about.
      </p>
      <p>Available as ebooks here and on Amazon.</p>
      <h1>Our best sellers</h1>
      <ul className="cart">
        {collections.map((collection) => (
          <li key={collection.id}>
            <img src={collection.image} />
            <h3>{collection.title}</h3>
            <p>USD {collection.price}</p>
            <button>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collections;
