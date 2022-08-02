import { Avatar, Box, Center, Flex, Heading, Icon, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

import b1 from '../assets/b-1.svg'
import b2 from '../assets/b-2.svg'
import b3 from '../assets/b-3.svg'
import b4 from '../assets/b-4.svg'
import b5 from '../assets/b5.svg'
import b6 from '../assets/b6.svg'
import p1 from '../assets/p1.svg'
import p2 from '../assets/p2.svg'
import p3 from '../assets/p3.svg'

const Profiles = () => {
    return (
        <>
            <Flex alignItems="center" justifyContent="center" mt={20} flexDir="column"  >
                <Text opacity={0.7} fontSize={25} fontWeight="semibold" color="blue"> Portfolio</Text>
            </Flex>
            <Box>
                <Center >
                    <Grid margin="3% 8%" p={5} justifyContent="center" alignItems="center" gridGap={10} templateColumns='repeat(3, 1fr)' templateRows='repeat(2,1fr)'>

                        <GridItem mt={10}     >
                            <Image src={b1} borderRadius={25} />

                        </GridItem>

                        <GridItem mt={10}     >
                            <Image src={b2} />

                        </GridItem>

                        <GridItem mt={10}     >
                            <Image src={b3} />

                        </GridItem>

                        <GridItem mt={10}     >
                            <Image src={b4} />
                        </GridItem>

                        <GridItem mt={10}     >
                            <Image src={b5} borderRadius={25} />

                        </GridItem>


                        <GridItem mt={10}     >
                            <Image src={b6} borderRadius={25} />
                        </GridItem>

                    </Grid>
                </Center>


            </Box>



            <Box>

                <Flex alignItems="center" justifyContent="center" mt={15} flexDir="column"  >
                    <Text opacity={0.7} fontSize={25} fontWeight="semibold" color="blue">Testmonials</Text>
                </Flex >


                <Flex flexDir="row" m="4%" >
                    <Box
                        mx="4%" border=" 1px solid #29ADFC"
                        borderRadius="25px"
                        boxShadow="#29ADFC 0px 10px 27px -9px"
                        maxW={'320px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.900')}
                        // boxShadow={'2xl'}
                        // rounded={'lg'}
                        p={6}
                        textAlign={'center'}>
                        <Avatar
                            size={'xl'}
                            src={
                                // 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                p1
                            }
                            alt={'Avatar Alt'}
                            mb={4}
                            pos={'relative'}
                            _after={{
                                content: '""',
                                w: 4,
                                h: 4,
                                bg: 'green.300',
                                border: '2px solid white',
                                rounded: 'full',
                                pos: 'absolute',
                                bottom: 0,
                                right: 3,
                            }}
                        />
                        <Heading fontSize={'2xl'} fontFamily={'body'}>
                            Lindsey James
                        </Heading>
                        <Text fontWeight={600} color={'gray.500'} mb={4}>
                            @lindsey_jam3s
                        </Text>
                        <Text
                            textAlign={'center'}
                            color={useColorModeValue('gray.700', 'gray.400')}
                            px={3}>
                            Actress, musician, songwriter and artist. PM for work inquires or{' '}

                            me in your posts
                        </Text>

                        <Stack mt={3} justifyContent="center" direction={'row'} spacing={4}>

                            <Text color="gold" fontSize={"2rem"}>&#9733;</Text>
                            <Text  color="gold"  fontSize={"2rem"}>&#9733;</Text>
                            <Text color="gold"  fontSize={"2rem"}>&#9733;</Text>
                            <Text fontSize={"2rem"}>&#9734;</Text>
                            <Text fontSize={"2rem"}>&#9734;</Text>

                            {/* <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        _focus={{
                            bg: 'gray.200',
                        }}>
                        Message
                    </Button>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}>
                        Follow
                    </Button> */}
                        </Stack>
                    </Box>




                    <Box
                        mx="4%" border=" 1px solid #29ADFC" borderRadius="25px" boxShadow="#29ADFC 0px 10px 27px -9px"
                        maxW={'320px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.900')}
                        // boxShadow={'2xl'}
                        // rounded={'lg'}
                        p={6}
                        textAlign={'center'}>
                        <Avatar
                            size={'xl'}
                            src={
                                // 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                p2
                            }
                            alt={'Avatar Alt'}
                            mb={4}
                            pos={'relative'}
                            _after={{
                                content: '""',
                                w: 4,
                                h: 4,
                                bg: 'green.300',
                                border: '2px solid white',
                                rounded: 'full',
                                pos: 'absolute',
                                bottom: 0,
                                right: 3,
                            }}
                        />
                        <Heading fontSize={'2xl'} fontFamily={'body'}>
                            Lindsey James
                        </Heading>
                        <Text fontWeight={600} color={'gray.500'} mb={4}>
                            @lindsey_jam3s
                        </Text>
                        <Text
                            textAlign={'center'}
                            color={useColorModeValue('gray.700', 'gray.400')}
                            px={3}>
                            Actress, musician, songwriter and artist. PM for work inquires or{' '}

                            me in your posts
                        </Text>

                        <Stack mt={3} justifyContent="center" direction={'row'} spacing={4}>

                            <Text color="gold"   fontSize={"2rem"}>&#9733;</Text>
                            <Text color="gold"  fontSize={"2rem"}>&#9733;</Text>
                            <Text fontSize={"2rem"}>&#9734;</Text>
                            <Text fontSize={"2rem"}>&#9734;</Text>
                            <Text fontSize={"2rem"}>&#9734;</Text>

                            {/* <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        _focus={{
                            bg: 'gray.200',
                        }}>
                        Message
                    </Button>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}>
                        Follow
                    </Button> */}
                        </Stack>
                    </Box>



                    <Box
                        mx="4%" border=" 1px solid #29ADFC" borderRadius="25px" boxShadow="#29ADFC 0px 10px 27px -9px"
                        maxW={'320px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.900')}
                        // boxShadow={'2xl'}
                        // rounded={'lg'}
                        p={6}
                        textAlign={'center'}
                        alignItems="center"
                    >
                        <Avatar
                            size={'xl'}
                            src={
                                // 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                p3
                            }
                            alt={'Avatar Alt'}
                            mb={4}
                            pos={'relative'}
                            _after={{
                                content: '""',
                                w: 4,
                                h: 4,
                                bg: 'green.300',
                                border: '2px solid white',
                                rounded: 'full',
                                pos: 'absolute',
                                bottom: 0,
                                right: 3,
                            }}
                        />
                        <Heading fontSize={'2xl'} fontFamily={'body'}>
                            Lindsey James
                        </Heading>
                        <Text fontWeight={600} color={'gray.500'} mb={4}>
                            @lindsey_jam3s
                        </Text>
                        <Text
                            textAlign={'center'}
                            color={useColorModeValue('gray.700', 'gray.400')}
                            px={3}>
                            Actress, musician, songwriter and artist. PM for work inquires or{' '}

                            me in your posts
                        </Text>

                        <Stack mt={3} direction={'row'} spacing={4} justifyContent={"center"} >


                            <Text fontSize={"2rem"}>&#9734;</Text>
                            <Text fontSize={"2rem"}>&#9734;</Text>
                            <Text fontSize={"2rem"}>&#9734;</Text>
                            <Text fontSize={"2rem"}>&#9734;</Text>
                            <Text fontSize={"2rem"}>&#9734;</Text>
                            {/* <Button
                       
                       flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        _focus={{
                            bg: 'gray.200',
                        }}>
                        Message
                    </Button>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}>
                        Follow
                    </Button> */}
                        </Stack>
                    </Box>



                    {/* <Image mx="8%" border=" 1px solid #29ADFC" borderRadius="25px" boxShadow="#29ADFC 0px 10px 27px -9px" />
                <Image mx="8%" src={web} border=" 1px solid #29ADFC" borderRadius="25px" boxShadow="#29ADFC 0px 10px 27px -9px" />
                <Image mx="8%" src={web} border=" 1px solid #29ADFC" borderRadius="25px" boxShadow="#29ADFC 0px 10px 27px -9px" /> */}
                </Flex>
            </Box>

        </>

    )
}

export default Profiles