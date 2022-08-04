import React from 'react'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Image, useDisclosure } from '@chakra-ui/react'
import logo from "../assets/logo.svg"
import { Link, NavLink } from 'react-router-dom'
import { useMediaQuery } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const NavBar = () => {

   const [isLargerThan1280] = useMediaQuery('(min-width: 720px)')

    return (
        <>
            {/* {isLargerThan1280 ? */}
                {/* <> */}
                    <Flex pl={20} pr={20} flexDirection="row" h="10rem" bg="white" justifyContent="space-between" alignItems="" flexDir="row" w="full" >
                        <Image src={logo} />
                        <Flex whiteSpace={20} alignItems="center">
                            <NavLink to="/" >
                                Home
                            </NavLink>
                            <NavLink to="/about">
                                About
                            </NavLink>
                            <NavLink to="/contact">
                                ContactUS
                            </NavLink>
                        </Flex>
                    </Flex>
                {/* </> */}
            {/* } */}
        </>
    )
}

export default NavBar


const MobileNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Flex pl={2} pr={2} flexDirection="row" h="10rem" bg="white" justifyContent="space-between" alignItems="" flexDir="row" w="full" >
                <Image src={logo} />
                <Flex>
                    <HamburgerIcon w={7} h={7} ref={btnRef} onClick={onOpen} />
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>MyProTech</DrawerHeader>

                            <DrawerBody display="flex" flexDir="column">
                                <Link to="/" >
                                    Home
                                </Link>
                                <Link to="/about">
                                    About
                                </Link>
                                <Link to="/contact">
                                    ContactUs
                                </Link>
                            </DrawerBody>

                        </DrawerContent>
                    </Drawer>
                </Flex>
            </Flex>
        </>
    )
}