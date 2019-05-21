import React from "react";
import {
  base,
  Backpack,
  Box,
  Card,
  Heading,
  Paragraph
} from "@viacom-advancedadvertising/backpack";
import { Grommet, Text, Box as GBox } from "grommet";
import { grommet } from "grommet/themes";

function App() {
  const GrommetComponent = () => (
    <GBox background="yellow" elevation="xsmall">
      <Text color="red">Grommet Text</Text>
    </GBox>
  );

  const BackpackComponent = () => (
    <Box bg="gray.2">
      <Card>
        <Card.Body>
          <Heading size="xl">Backpack Heading</Heading>
          <Paragraph>Backpack Paragraph Text</Paragraph>
        </Card.Body>
      </Card>
    </Box>
  );

  const GrommetInBackpack = ({ children }) => (
    <Backpack theme={base}>
      <Grommet theme={grommet}>{children}</Grommet>
    </Backpack>
  );

  const BackpackInGrommet = ({ children }) => (
    <Grommet theme={grommet}>
      <Backpack theme={base}>{children}</Backpack>
    </Grommet>
  );

  return (
    <React.Fragment>
      {/* WORKS */}
      <BackpackInGrommet>
        <BackpackComponent />
      </BackpackInGrommet>

      {/* WORKS */}
      <GrommetInBackpack>
        <GrommetComponent />
      </GrommetInBackpack>

      {/* TypeError: Cannot read property 'colors' of undefined */}
      <BackpackInGrommet>
        <BackpackComponent />
        <GrommetComponent />
      </BackpackInGrommet>

      {/* TypeError: Cannot read property 'boxShadow' of undefined */}
      <GrommetInBackpack>
        <BackpackComponent />
        <GrommetComponent />
      </GrommetInBackpack>
    </React.Fragment>
  );
}

export default App;
