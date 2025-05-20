import { Box, Button, Container, Heading, Input, Textarea, useColorModeValue, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useStoryStore } from '../store/story'
import { useNavigate } from "react-router-dom"


const CreatePage = () => {

  const toast = useToast()

  const [ newStory, setNewStory ] = useState({
    consultant: "",
    title: "",
    entry: ""
  })

  const { createStory } = useStoryStore()

  const navigate = useNavigate()

  const handleAddStory = async () => {
    const { success, message } = await createStory(newStory)
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true
      })
    } else {
      toast({
        title: "Success",
        description: message,
        status: 'success',
        isClosable: true
      })
      navigate("/")
    }
    setNewStory({ consultant: "", title: "",  entry: "" })
  }


  return (

    <Container maxW={"container.sm"} mt={40}>
      <VStack
        spacing={8}
      >
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8} >
          Create New Notated Story
        </Heading>
        <Box
          w={"full"} bg={useColorModeValue("white", "gray.800")}
          p={6} rounded={"lg"} shadow={"md"}
        >

        <VStack spacing={4}>
          <Input 
            placeholder='Add the donut that quoted such wisdom...'
            consultant='consultant'
            value={newStory.consultant}
            onChange={(e) => setNewStory({ ...newStory, consultant: e.target.value})}
          />
          <Input 
            placeholder='Add a title...'
            title='title'
            value={newStory.title}
            onChange={(e) => setNewStory({ ...newStory, title: e.target.value})}
          />
          <Textarea 
            placeholder='Add your notated story..'
            entry='entry'
            rows={4}
            value={newStory.entry}
            onChange={(e) => setNewStory({ ...newStory, entry: e.target.value})}
          />
          <Button colorScheme='blue' onClick={handleAddStory}>
            Create Notation Enrty
          </Button>
        </VStack>

        </Box>
      </VStack>
    </Container>
    
  )
}

export default CreatePage