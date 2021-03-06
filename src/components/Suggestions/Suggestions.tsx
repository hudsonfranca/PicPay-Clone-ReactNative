import React from "react";

import img1 from "../../assets/images/01.png";
import img2 from "../../assets/images/02.png";
import img3 from "../../assets/images/03.png";
import img4 from "../../assets/images/04.png";
import img5 from "../../assets/images/05.png";
import img6 from "../../assets/images/06.png";
import img7 from "../../assets/images/07.png";
import { Container, Option, Img, Label } from "./styles";

interface Props {}

const items = [
  {
    key: String(Math.random()),
    img: img1,
    label: "Recarga",
  },
  {
    key: String(Math.random()),
    img: img2,
    label: "Uber",
  },
  {
    key: String(Math.random()),
    img: img3,
    label: "Ônibus",
  },
  {
    key: String(Math.random()),
    img: img4,
    label: "Tv",
  },
  {
    key: String(Math.random()),
    img: img5,
    label: "Doações",
  },
  {
    key: String(Math.random()),
    img: img6,
    label: "Cod. Barras",
  },
  {
    key: String(Math.random()),
    img: img7,
    label: "FAQ",
  },
];

const Suggestions: React.FC<Props> = ({}) => {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key}>
          <Img source={item.img} />
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  );
};

export default Suggestions;
