import React from 'react';
import SidebarWithHeader from '../../components/SidebarWithHeader';
import Link from 'next/link';
import Head from 'next/head';
import {
    Heading,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Flex,
    HStack,
  } from '@chakra-ui/react'
import { FiSearch, FiPlusCircle } from 'react-icons/fi';
import { GiCow } from 'react-icons/gi'

const Bois = () => {
  return(
    <SidebarWithHeader>
        <Head><title>Bois | Masper - Gestão de Patrimônio</title></Head>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
            <HStack spacing={'5'}>
                <Heading><GiCow /></Heading>
                <Heading>Bois</Heading>
            </HStack> 
            <Link href={'/imoveis/create'}>
                <Button leftIcon={<FiPlusCircle />} colorScheme='green' size={'md'}>Novo Boi</Button>
            </Link>
        </Flex>
        <TableContainer mt={5} bg={'white'} p={5} rounded={5}>
            <Table variant='simple' size={'sm'}>
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                <Tr>
                    <Th>Imóvel</Th>
                    <Th>Registro</Th>
                    <Th textAlign={'end'}>Ação</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>Ed. Pereira I</Td>
                    <Td>358415215</Td>
                    <Td textAlign={'end'}><Button leftIcon={<FiSearch />} colorScheme='blue' size={'sm'}>Visualizar</Button></Td>
                </Tr>
                <Tr>
                    <Td>Ed. Pereira I</Td>
                    <Td>358415215</Td>
                    <Td textAlign={'end'}><Button leftIcon={<FiSearch />} colorScheme='blue' size={'sm'}>Visualizar</Button></Td>
                </Tr>
                <Tr>
                    <Td>Ed. Pereira I</Td>
                    <Td>358415215</Td>
                    <Td textAlign={'end'}><Button leftIcon={<FiSearch />} colorScheme='blue' size={'sm'}>Visualizar</Button></Td>
                </Tr>
                <Tr>
                    <Td>Ed. Pereira I</Td>
                    <Td>358415215</Td>
                    <Td textAlign={'end'}><Button leftIcon={<FiSearch />} colorScheme='blue' size={'sm'}>Visualizar</Button></Td>
                </Tr>
                <Tr>
                    <Td>Ed. Pereira I</Td>
                    <Td>358415215</Td>
                    <Td textAlign={'end'}><Button leftIcon={<FiSearch />} colorScheme='blue' size={'sm'}>Visualizar</Button></Td>
                </Tr>
                </Tbody>
                {/* <Tfoot>
                <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                </Tr>
                </Tfoot> */}
            </Table>
        </TableContainer>
    </SidebarWithHeader>
  );
}

export default Bois;