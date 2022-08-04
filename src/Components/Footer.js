import { Button, Flex, Image, Input, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.svg'
import wave2 from '../assets/waves2.svg'
import linkedin from '../assets/linkedin.svg'
import upwork from '../assets/upwork.svg'
import msg from '../assets/message.svg'

const Footer = () => {
    return (

        <>
            <Flex mb="3rem" mt="3rem">
                <Image src={wave2} />
            </Flex>
            <Flex>
                <Flex w="40%" justifyContent={"center"}>
                    <Image src={logo} />
                </Flex>
                <Flex w="30%" flexDir={"column"}>
                    <Text fontSize={25} fontWeight="semibold" color="blue" >Services</Text>
                    <Text fontSize={20} fontWeight="normal" color="grey" mt={3}>Website Development</Text>
                    <Text fontSize={20} fontWeight="normal" color="grey" mt={3}>Mobile Development</Text>
                    <Text fontSize={20} fontWeight="normal" opacity="0.9" color="grey" mt={3} >Backend Development</Text>
                    <Text fontSize={20} fontWeight="normal" opacity="0.9" color="grey" mt={3} >UX/UI Designing</Text>
                </Flex>

                <Flex flexDirection={"column"} justifyContent={"center"}>
                    <Flex direction={"row"} fyContent={"center"}>
                        <Input
                            w={"60%"}
                            type={'text'}
                            placeholder={'Email'}
                            color={useColorModeValue('gray.800', 'gray.200')}
                            bg={useColorModeValue('gray.100', 'gray.600')}
                            h="3rem"
                            borderBottomRightRadius={"0px"}
                            borderTopRightRadius={"0px"}
                            borderBottomLeftRadius={"20px"}
                            borderTopLeftRadius={"20px"}
                            _focus={{
                                bg: useColorModeValue('gray.200', 'gray.800'),
                                outline: 'none',
                            }}
                        />
                        <Button
                            style={{ marginInlineStart: "0" }}
                            marginInlineStart={0}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{ bg: 'blue.500' }}
                            h="3rem"
                            borderBottomRightRadius={"20px"}
                            borderTopRightRadius={"20px"}
                            borderBottomLeftRadius={"0px"}
                            borderTopLeftRadius={"0px"}
                            _focus={{ bg: 'blue.500' }}>
                            Subscribe
                        </Button>
                    </Flex>

                    <Flex flexDir={"row"} mt="5%" justifyContent="center">
                        <Image w="21%" src={msg} mr="2%"/>
                        <Image w="12%" src={linkedin} m="4%"/>
                        <Image w="17%" src={upwork}   m="4%"/>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Footer