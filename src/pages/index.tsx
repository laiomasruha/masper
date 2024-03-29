import { Button, Flex, Heading, HStack, Link } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { BiBuildingHouse } from 'react-icons/bi';
import { FiPlusCircle } from 'react-icons/fi';
import { RiDashboardLine } from 'react-icons/ri';
import SidebarWithHeader from '../components/SidebarWithHeader';

const Home = () => {
  return(
    <SidebarWithHeader>
      <Head><title>Resumo | Masper - Gestão de Patrimônio</title></Head>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
            <HStack spacing={'5'}>
                <Heading><RiDashboardLine /></Heading>
                <Heading>Resumo</Heading>
            </HStack>
        </Flex>
    </SidebarWithHeader>
  );
}

export default Home;