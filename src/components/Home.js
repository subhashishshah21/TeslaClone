import React from "react";
import styled from "styled-components";
import Section from "./Section";
import carinfo from "../carInfo.json";

function Home() {
  return (
    <Container>
      {carinfo.map((car) => {
        return (
          <Section
            key={car.id}
            title={car.title}
            description={car.description}
            background={car.image}
            leftbtntext="Custom Order"
            rightbtntext="Existing Inventory"
          />
        );
      })}
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        background="solar-panel.jpg"
        leftbtntext="Order Now"
        rightbtntext="Learn More"
      />
      <Section
        title="Solar for new Roofs"
        description="Solar Roof Costs less than a New Roofs"
        background="solar-roof.jpg"
        leftbtntext="Order Now"
        rightbtntext="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        background="accessories.jpg"
        leftbtntext="Shop Now"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
