import { Nav } from "./Nav";
import reactLogo from "../assets/react.svg";
import { HStack } from "@chakra-ui/react";

export const Header = () => {
  return (
    <>
      <header>
        <HStack>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <Nav />
        </HStack>
      </header>
    </>
  );
};
