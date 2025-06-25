import { Nav } from "./Nav";
import reactLogo from "../assets/react.svg";
import { HStack } from "@chakra-ui/react";

export const Header = () => {
  return (
    <>
      <header className="header">
        <HStack spacing={4} gap={100} alignItems="center" padding="1rem">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <Nav />
        </HStack>
      </header>
    </>
  );
};
