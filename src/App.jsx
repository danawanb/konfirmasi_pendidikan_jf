import React from 'react';

import Table from './table'

import {
  ChakraProvider,
  Box, Grid, theme, Center, Card, Stack, CardBody, Heading, Text, CardFooter, Button, VStack, Flex, Divider, Badge, Highlight, Kbd, Tabs, Tab, TabPanel, TabPanels, TabList

} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

//import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={2}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack
          spacing ={3}
          align='stretch'
          >
            {/*<Center>*/}
            {/*  <Card*/}
            {/*      w={800}*/}
            {/*      //justifyItems='center'*/}
            {/*      //direction={{ base: 'column', sm: 'row' }}*/}
            {/*      overflow='hidden'*/}
            {/*      variant='outline'*/}
            {/*  >*/}
            {/*    <Stack>*/}
            {/*      <CardBody >*/}
            {/*        <Heading size='md' marginBottom ='2%'>The perfect latte</Heading>*/}
            {/*        <Text fontSize='sm'>*/}
            {/*          <Highlight query='cita rasa' styles={{ px: '1', py: '1', bg: 'orange.100' }}>*/}
            {/*            Nasi Goreng merupakan sajian nasi yang digoreng dalam sebuah wajan atau penggorengan yang menghasilkan cita rasa*/}
            {/*            berbeda karena dicampur dengan bumbu-bumbu seperti garam, bawang putih, bawang merah, merica, rempah-rempah tertentu dan kecap manis.*/}
            {/*          </Highlight>*/}

            {/*        </Text>*/}
            {/*      </CardBody>*/}
            {/*        <CardFooter>*/}
            {/*          <Button variant='solid' colorScheme='blue' marginRight='5%'>*/}
            {/*            Rekam Pendaftaran*/}
            {/*          </Button>*/}
            {/*          <Button variant='solid' colorScheme='orange'>*/}
            {/*            Edit Pendaftaran*/}
            {/*          </Button>*/}
            {/*        </CardFooter>*/}
            {/*    </Stack>*/}
            {/*  </Card>*/}
            {/*</Center>*/}
            {/*<Flex align="center">*/}
            {/*    <Divider marginLeft='25%' marginRight='25%'/>*/}
            {/*</Flex>*/}
            {/*<Center>*/}
            {/*  <Card*/}
            {/*      w={800}*/}
            {/*      //justifyItems='center'*/}
            {/*      direction={{ base: 'column', sm: 'row' }}*/}
            {/*      overflow='hidden'*/}
            {/*      variant='outline'*/}
            {/*  >*/}
            {/*    <Stack>*/}
            {/*      <CardBody >*/}
            {/*        <Stack direction='row'>*/}
            {/*          <Badge colorScheme='red'>PENDAFTARAN DITUTUP</Badge>*/}
            {/*        </Stack>*/}
            {/*        <Heading size='md' marginBottom ='2%'>Nasi Goreng</Heading>*/}
            {/*        <Text fontSize='sm'>*/}
            {/*          Nasi Goreng merupakan sajian nasi yang digoreng dalam sebuah wajan atau penggorengan yang menghasilkan cita rasa*/}
            {/*          berbeda karena dicampur dengan bumbu-bumbu seperti garam, bawang putih, bawang merah, merica, rempah-rempah tertentu dan kecap manis.*/}
            {/*        </Text>*/}
            {/*      </CardBody>*/}
            {/*    </Stack>*/}
            {/*  </Card>*/}
            {/*</Center>*/}
            <Center>
              <Tabs>
                <TabList>
                  <Tab>Link Pengisian</Tab>
                  <Tab>Batas Waktu</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Center>
                      <Table/>
                    </Center>
                  </TabPanel>
                  <TabPanel w={1200}>
                    <p>Ahahahaa</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Center>

            {/*<Center>*/}
            {/*  <Table/>*/}
            {/*</Center>*/}
            </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
