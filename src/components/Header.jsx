import React from 'react';
import { Button, HStack} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
    <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
    </Button>
    <Button variant={"unstyled"} color={"red"}>
        <Link to="/exchanges" >Exchanges</Link>
    </Button>
    <Button variant={"unstyled"} color={"lightgreen"}>
        <Link to="/coin">Coins</Link>
    </Button>
    </HStack>
  )
}

export default Header