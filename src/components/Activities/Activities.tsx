import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import React from "react";

import avatar from "../../assets/images/avatar.png";
import {
  Header,
  Contaienr,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabe,
} from "./styles";

interface Props {}

const Activities: React.FC<Props> = ({}) => {
  return (
    <Contaienr>
      <Header>
        <Title>Atividades</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@Hudsonsilvares</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Hudson França</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>
            <Divider />
            <Feather name="lock" color="#fff" size={14} />
            <Date>há 2 anos</Date>
          </Details>
          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                size={14}
                color="#fff"
              />
              <OptionLabe>0</OptionLabe>
            </Option>
            <Option>
              <AntDesign name="hearto" size={14} color="#fff" />
              <OptionLabe>0</OptionLabe>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Contaienr>
  );
};

export default Activities;
