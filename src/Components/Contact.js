import React from 'react'
import { Box, Button, Flex, Grid, GridItem, Image, Input, Text, Textarea } from '@chakra-ui/react'
import iPhone from '../assets/iPhone.svg'
import cp1 from '../assets/cp1.svg'
import wave from '../assets/waves.svg'
import Footer from './Footer'
const Contact = () => {
    return (
        <>
            <Box>
                <Flex mt="1rem" pl={20} pr={20} dir='row' justifyContent="space-between" >
                    <Flex flexDir='column' justifyContent={"center"}>
                        <Text fontSize={25} mt={3} fontWeight="semibold" color="blue" >Contact US</Text>
                    </Flex>
                    <Flex justifyContent={"end"}>
                        <Image src={cp1} w="70%" />
                    </Flex>

                </Flex>

                <Image src={wave} mb={20} mt={20} />
            </Box>

            <Flex m="8% 5%" h="30rem" border=" 1px solid #29ADFC" borderRadius="25px" boxShadow="#29ADFC 0px 10px 27px -9px">
                <Image src={iPhone} w={"50%"} mb="2%"></Image>
                <Grid templateColumns='repeat(2, 1fr)' m="5%" templateRows='repeat(4,1fr)'>
                    <GridItem >
                        <Input w="80%" variant='filled' placeholder='First Name' />
                    </GridItem>
                    <GridItem >
                        <Input w="80%" variant='filled' placeholder='Last Name' />
                    </GridItem>

                    <GridItem >
                        <Input w="80%" variant='filled' placeholder='Email' />
                    </GridItem>
                    <GridItem >
                        <Input w="80%" variant='filled' placeholder='Subject' />
                    </GridItem>

                    <GridItem colSpan={2}>
                        <Textarea w="90%" mb="2rem" variant="filled" h="6rem" placeholder='Write your message here' />

                    </GridItem>
                    <GridItem colSpan={2} >
                        <Button h="3rem" w="90%" colorScheme='blue'>Send</Button>
                    </GridItem>
                </Grid>

            </Flex>


            <Footer />
        </>
    )
}

export default Contact