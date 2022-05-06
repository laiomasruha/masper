import { Container, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, Avatar, WrapItem } from "@chakra-ui/react";
import Image from 'next/image';
import { AddIcon } from '@chakra-ui/icons'

export default function Header() {
    return (
      <Container maxW={"1200px"}>
        <Flex p={3} bg={'gray.800'} align={'center'} justifyContent={'space-between'}>
          <Flex align={'center'}>
          <Image
              src="/masper-logo-noback.png"
              alt="Masper"
              width={50}
              height={50}
          />
          <Text color={'white'} ml={3} fontFamily={'Dawning of a New Day'} fontSize={35}>Masper</Text>
          </Flex>
          <Flex align={'center'}>
          <Menu>
          <MenuButton
              as={Avatar} 
              name='Dan Abrahmov' 
              src='https://bit.ly/dan-abramov'
              cursor={'pointer'}
          />
          <MenuList>
              <MenuItem>Sair</MenuItem>
          </MenuList>
          </Menu>
          </Flex>
        </Flex>
      </Container>
    )
  }