import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Stack, Text, Tooltip } from "@chakra-ui/react"
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa"
import { SiLoom } from "react-icons/si"

const Project = ({ project }) => {
    const BASE_URL = import.meta.env.BASE_URL;
    return (
        <>
            <Card
                direction={{ base: 'column', lg: 'row' }}
                mb={"1rem"}
                overflow='hidden'
                variant='outline'
            // width={"md"}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '300px' }}
                    alignSelf={"center"}
                    src={BASE_URL + project.thumbnail}
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'
                            pb={"1rem"}
                            fontSize={"2xl"}>
                            {project.title} [{project.datetime}]
                        </Heading>

                        <Text lineHeight={"2.5rem"} pt={"1rem"} fontSize={"20px"}
                            align={"justify"}>
                            {(project.headline).length > 100 ? `${(project.headline).slice(0,)}...` : project.headline}
                        </Text>

                        <Text lineHeight={"2.5rem"} pt={"1rem"} fontSize={"20px"}>
                            <span style={{ fontWeight: "bolder" }}>Features: </span>
                            {project.features}
                        </Text>

                    </CardBody>

                    <CardFooter
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        fontSize="1.5rem"
                        flexWrap="wrap"
                        gap="3rem"
                        flexDirection={{ base: 'column', lg: 'row' }} // Responsive flex direction
                    >
                        <Box>
                            <Flex gap={5} alignItems={"center"}>
                                <h2 style={{ fontWeight: "bolder" }}>Tech Stack:</h2>
                                {project.stack}
                            </Flex>
                        </Box>
                        <Box>
                            <Flex gap={5} alignItems={"center"}>
                                <h2 style={{ fontWeight: "bolder" }} >Links:</h2>
                                <Button variant='ghost' colorScheme='blue'
                                    padding={"5px"}
                                >


                                    <Tooltip hasArrow arrowSize={10} label='Watch Loom Presentation' placement='top-start'>
                                        <a target="_blank" href={project.loom}>
                                            <SiLoom size={40} /></a>
                                    </Tooltip>
                                </Button>
                                <Button variant='ghost' colorScheme='blue'
                                    padding={"5px"}
                                >
                                    <Tooltip hasArrow arrowSize={10} label='Visit the web' placement='top-start'>
                                        <a target="_blank" href={project.link}>
                                            <FaExternalLinkAlt size={40} />
                                        </a>
                                    </Tooltip>
                                </Button>
                                <Button variant='ghost' colorScheme='blue'
                                    padding={"5px"}
                                >
                                    <a target="_blank" href={project.github}>
                                        <FaGithubSquare
                                            size={42}
                                        />
                                    </a>
                                </Button>
                            </Flex>
                        </Box>
                    </CardFooter>
                </Stack>
            </Card>

        </>
    )
}

export default Project