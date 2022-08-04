import { Box, Button, Flex, Grid, GridItem, Image, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import contact from '../assets/contact.svg'

const Footer = () => {
    return (
        <>
            <Flex alignItems="center" justifyContent="center" mt={20} flexDir="column"  >
                <Text opacity={0.7} fontSize={25} fontWeight="semibold" color="blue"> Book An Appoinment</Text>
            </Flex>
            <Flex m="5%" h="30rem" border=" 1px solid #29ADFC" borderRadius="25px" boxShadow="#29ADFC 0px 10px 27px -9px">
                <Image src={contact} w={"50%"} p={"2rem"}></Image>
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
                    <Button h="3rem" w="90%"  colorScheme='blue'>Send</Button>
                    </GridItem>
                </Grid>

            </Flex>
        </>

    )
}
export default Footer
