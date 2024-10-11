import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProjectNotFound = ({ searchProject }) => {
    const QUERY = searchProject.length ? (searchProject).toLowerCase() : '';
    const BASE_URL = import.meta.env.BASE_URL;
    return (
        <>
            <Card maxW='lg' display={"flex"} alignItems={"center"} fontSize={"1.5rem"} p={"5px"} m={"1.5rem"}>
                <CardBody alignItems={"center"} align={"justify"}>
                    <Stack mt='6' spacing='3'>
                        <Heading >Sorry project on {QUERY} aren't uploaded yet!</Heading>
                        <Text>
                            While I am working on uploading all my project which are related to {QUERY}, how about you take a look at the <Link to='/blogs' style={{ textDecoration: "underline" }}> blog</Link> posts to quench your thirst?
                        </Text>
                    </Stack>
                </CardBody>
                <CardFooter >
                    <Image
                        src={BASE_URL + 'Images/thinking.png'}
                        alt='Thinking about writing new blog'
                        borderRadius='lg'
                    />

                </CardFooter>
            </Card>
        </>
    )
}

export default ProjectNotFound