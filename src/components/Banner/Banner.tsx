import React from "react";

import img13 from "../../assets/images/13.png";
import { Container, Details, Img, Title, Description } from "./styles";

interface BannerProps {}

const Banner: React.FunctionComponent<BannerProps> = (props) => {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>
          Mantenha suas parcerias em dia, use o PicPay para fazer suas
          cobranças.
        </Description>
      </Details>
      <Img source={img13} />
    </Container>
  );
};

export default Banner;
