import { HStack, Text, Button } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";

export const Main = () => {
  return (
    <>
      <main id="main" className="main">
        <section className="hero">
          <HStack>
            <article className="textBlock">
              <Text textStyle="4xl" className="hero_title">
                Little Lemon
              </Text>
              <Text textStyle="xl" className="hero_subtitle">
                Chicago
              </Text>

              <Text
                textStyle="md"
                className="hero_description"
                width={["100%", "80%", "60%"]}
                lineClamp="2"
              >
                We are a family-owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </Text>
              <Button colorScheme="yellow" size="lg" className="hero_button">
                Reserve a Table us <RiArrowRightLine />
              </Button>
            </article>
            <img
              src="https://images.unsplash.com/photo-1583354608715-177553a4035e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Restaurant interior"
              className="hero_img"
            />
          </HStack>
        </section>
      </main>
    </>
  );
};
