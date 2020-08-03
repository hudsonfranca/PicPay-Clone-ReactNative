import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import React from "react";

import { NavigationTabParamList } from "../../Navigation";
import { Suggestions, Activities, Tips, Banner } from "../../components";
import GlobalStyle from "../../styles/GlobalStyles";
import {
  Wrapper,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
  Container,
} from "./styles";

type HomeScreenRouteProp = RouteProp<NavigationTabParamList, "Home">;
type HomeScreenNavigationProp = BottomTabNavigationProp<
  NavigationTabParamList,
  "Home"
>;

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = (props) => {
  return (
    <Wrapper style={GlobalStyle.droidSafeArea}>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />
          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>
          <MaterialCommunityIcons name="gift" size={30} color="#10c86e" />
        </Header>
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
};

export default Home;
