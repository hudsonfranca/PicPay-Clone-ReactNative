import React from "react";

import img8 from "../../assets/images/08.png";
import img9 from "../../assets/images/09.png";
import img10 from "../../assets/images/10.png";
import img11 from "../../assets/images/11.png";
import img12 from "../../assets/images/12.png";
import { Container, Opition, Title, Img } from "./styles";

interface TipsProps {}

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#172c4a",
  },
  {
    key: String(Math.random()),
    img: img9,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#6a0159",
  },
  {
    key: String(Math.random()),
    img: img10,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#4139c8",
  },
  {
    key: String(Math.random()),
    img: img11,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#00ab4b",
  },
  {
    key: String(Math.random()),
    img: img12,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#ba2f76",
  },
];

const Tips: React.FC<TipsProps> = (props) => {
  return (
    <Container>
      {items.map(({ bgColor, img, key, title }) => (
        <Opition key={key} bgColor={bgColor}>
          <Title>{title}</Title>
          <Img source={img} />
        </Opition>
      ))}
    </Container>
  );
};

export default Tips;
