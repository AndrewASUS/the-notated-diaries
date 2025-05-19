import {
    Button,
    Container,
    Flex,
    HStack,
    Text,
    useColorMode,
    useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CalendarIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    // Show the CalendarIcon only if viewport width is >= 700px
    const showCalendarIcon = useBreakpointValue({ base: false, md: true });

    return (
        <Container maxW={"1640px"} px={4}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base: "column",
                    sm: "row",
                }}
            >
                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgClip={"text"}
                    color="blue.500"
                >
                    <Link to={"/"}>
                        {showCalendarIcon && <CalendarIcon mr={2} />}
                        The Notated Diaries
                    </Link>
                </Text>
                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                            <PlusSquareIcon fontSize={20} mr={1} />
                            Add Notation
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? (
                            <IoMoon ml={4} size="20" />
                        ) : (
                            <LuSun ml={4} size="20" />
                        )}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    );
};

export default Navbar;
