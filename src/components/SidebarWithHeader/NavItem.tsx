import { FlexProps, Flex, Link, Icon } from "@chakra-ui/react";
import { ReactText } from "react";
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
    icon: IconType;
    link: string;
    children: ReactText;
  }

const NavItem = ({ icon, link, children, ...rest }: NavItemProps) => {
    return (
        <Link href={link} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="md"
            role="group"
            cursor="pointer"
            _hover={{
            bg: 'black',
            color: 'white',
            }}
            {...rest}>
            {icon && (
            <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                color: 'white',
                }}
                as={icon}
            />
            )}
            {children}
        </Flex>
        </Link>
    );
};

export default NavItem;