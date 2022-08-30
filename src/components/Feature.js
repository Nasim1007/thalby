import React from "react";

const Feature = () => {
  const features = [
    "Written by locals",
    "Packed with insight",
    "Interviews with diverse voices",
    "Key facts and etiquette tips",
    "A concise 1-hour read",
    "Instant digital access",
  ];
  return (
    <div className="feature">
      <h1>
        Some of the features that <br />
        make Thalby guides unique
      </h1>
      <ul className="featureList">
        {features.map((fearture) => (
          <li>
            {" "}
            <span className="circle"></span>
            <h2>{fearture}</h2>
          </li>
        ))}
      </ul>
      <h1>
        Each Thalby guide includes interviews with <br />a range of fascinating
        voices, such as
      </h1>
      <ul className="cart">
        <li>
          <img src="img/woman.png" />
          <h3>
            "I don’t like things to be conventional. If it’s too nice, I bring
            disorder."
          </h3>
          <p>
            Camille Muller, <br />
            Landscape Designer, France
          </p>
          <button>Add to cart</button>
        </li>
        <li>
          <img src="img/woman_with_smile.png" />
          <h3>
            "Magic is not magic in the sense that I can just wish for anything."
          </h3>
          <p>
            Sonia Kowalewski, <br />
            Witch, Germany
          </p>
          <button>Discover</button>
        </li>
        <li>
          <img src="img/man.png" />
          <h3>
            "I was eight years old when I entered my first competition. I won
            it."
          </h3>
          <p>
            Lilly Stoephasius, <br />
            Skateboarder, Germany
          </p>
          <button>Discover</button>
        </li>
      </ul>
    </div>
  );
};

export default Feature;
