import React from "react";

const Guide = () => {
  const guides = [
    {
      id: 1,
      image: "img/image 3.png",
      title: "People and Society",
      description:
        "Our guides to society deliver all the social insight you need, helping you understand how people live, love and play today and why communities are the way they are.",
    },
    {
      id: 2,
      image: "img/image 5.png",
      title: "People and Society",
      description:
        "Our guides to society deliver all the social insight you need, helping you understand how people live, love and play today and why communities are the way they are.",
    },
    {
      id: 3,
      image: "img/image 4.png",
      title: "People and Society",
      description:
        "Our guides to society deliver all the social insight you need, helping you understand how people live, love and play today and why communities are the way they are.",
    },
  ];

  return (
    <div className="guide">
      {guides.map((guide) => (
        <ul className={`${guide.id % 2 === 0 && "guideLeft"} `}>
          <li>
            <img
              src={guide.image}
              style={{ width: "385px", height: "525px" }}
            />
          </li>
          <li>
            <h1>{guide.title}</h1>
            <p>{guide.description}</p>
            <a href="#">Shop Society Guides</a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Guide;
