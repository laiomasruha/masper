import { BoxProps,Box, CloseButton, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { IconType } from "react-icons";
import { FiCompass, FiSettings, FiStar } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { BiBuildingHouse } from "react-icons/bi";
import { GiCow } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import NavItem from './NavItem';

interface LinkItemProps {
  name: string;
  link: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Resumo', icon: RiDashboardLine, link: "/" },
  { name: 'Imóveis', icon: BiBuildingHouse, link: "/imoveis" },
  { name: 'Aluguéis', icon: BsCashCoin, link: "/" },
  { name: 'Bois', icon: GiCow, link: "/" },
  { name: 'Configurações', icon: FiSettings, link: "/" },
];

interface SidebarProps extends BoxProps {
    onClose: () => void;
  }
  
const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between"> 
        <Flex>
          <Image
              src="/masper-logo-noback-black.png"
              alt="Masper"
              width={50}
              height={50}
          />
          <Text color={'black'} ml={3} fontFamily={'Dawning of a New Day'} fontSize={35}>Masper</Text>
        </Flex>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} link={link.link}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;