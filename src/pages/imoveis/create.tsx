import { Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';
import SidebarWithHeader from '../../components/SidebarWithHeader';

const Create = () => {
  return(
    <SidebarWithHeader>
        <Head><title>Novo Imóvel | Masper - Gestão de Patrimônio</title></Head>
        <Heading>Novo imóvel</Heading>
        <VStack mt={5} spacing={'4'}>
            <FormControl>
                <FormLabel htmlFor='email'>Nome</FormLabel>
                    <Input id='nome' type='text' border={'2px'} borderColor={"#CCC"} />
                <FormHelperText color={'red'}>Este campo é obrigatório.</FormHelperText>
            </FormControl>
        </VStack>
    </SidebarWithHeader>
  );
}

export default Create;