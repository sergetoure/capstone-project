import { Nav } from "./Nav";
import reactLogo from "../assets/react.svg";

export const Header = () => {
  return (
    <>
      <header>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <Nav />
      </header>
    </>
  );
};
