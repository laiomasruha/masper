import { Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, Avatar, WrapItem, FormControl, FormLabel, Input, FormHelperText, Button } from "@chakra-ui/react";
import Image from 'next/image';
import { AddIcon } from '@chakra-ui/icons'

export default function Login() {
    return (
      <Flex bg={'gray.800'} justifyContent={"center"} alignItems={'center'} h={'100vh'}>
        <Flex p={5} justifyContent={"center"} alignItems={'center'} w={'300px'} flexDir={'column'}>
            <Image
                src="/masper-logo-noback.png"
                alt="Masper"
                width={100}
                height={100}
            />
            <Text color={'white'} mt={2} mb={5} fontFamily={'Dawning of a New Day'} fontSize={35}>Masper</Text>
            <FormControl>
                <FormLabel htmlFor='email' color={'white'}>Email</FormLabel>
                <Input id='email' type='email' color={'white'} size={'lg'} />
                {/* <FormHelperText color={'white'} >We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl mt={5}>
                <FormLabel htmlFor='email' color={'white'}>Senha</FormLabel>
                <Input id='password' type='password' color={'white'} size={'lg'} />
                {/* <FormHelperText color={'white'}>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <Button colorScheme='blackAlpha' mt={5} w={'100%'} size={'lg'}>Entrar</Button>
        </Flex>
      </Flex>
    )
  }