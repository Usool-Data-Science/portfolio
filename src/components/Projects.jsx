import { Button, ButtonGroup, Card, CardBody, CardFooter, Stack, Text } from "@chakra-ui/react";
import SearchProject from "./SearchProject";
import ProjectGrid from "./ProjectGrid";

const Projects = ({ searchProject, setSearchProject, projects }) => {
  const handleSearch = (e) => {
    setSearchProject(e.target.innerText);
  };

  return (
    <Stack flexGrow="1" maxWidth="100%" overflowX="hidden" p="4">
      <Text
        className="Description"
        fontSize="1.5rem"
        m="1rem"
        textAlign="justify"
        maxWidth="100%"
      >
        As a dedicated software engineer, I am passionate about transforming ideas into impactful solutions through innovative technology. My experience spans a diverse range of projects, from backend systems to full-stack applications, where I leverage modern frameworks and best practices to deliver efficient, scalable, and user-friendly software. Below are some of my notable projects:
      </Text>

      <Card
        direction={{ base: "column" }}
        alignItems="flex-start"
        justifyContent="flex-start"
        flexWrap="wrap"
        variant="outline"
        mb="1rem"
        maxWidth="100%"
        p="4"
      >
        <CardBody>
          <SearchProject
            searchProject={searchProject}
            setSearchProject={setSearchProject}
          />
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2" wrap="wrap" maxWidth="100%">
            {[
              "Python",
              "JavaScript",
              "MongoDB",
              "Django",
              "React",
              "Flask",
            ].map((tech) => (
              <Button key={tech} variant="solid" onClick={handleSearch}>
                {tech}
              </Button>
            ))}
          </ButtonGroup>
        </CardFooter>
      </Card>

      <ProjectGrid projects={projects} searchProject={searchProject} />
    </Stack>
  );
};

export default Projects;
