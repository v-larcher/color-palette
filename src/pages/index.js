import { useState } from 'react';

import { Stack } from '@tymate/margaret';
import Head from 'next/head';
import styled from 'styled-components';

import { generateColors } from 'utils/colors';

const ColorBlock = styled.div`
  width: 200px;
  height: 200px;
  background-color: var(--background-color);
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
  border-radius: 2px;
`;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  padding: 1rem 2rem;
  background-color: rgb(237, 242, 247);
`;

const Input = styled.input`
  width: 20ch;
  align-self: center;
  background-color: rgb(254, 254, 254);
  border-radius: 4px;
`;

const Button = styled.button`
  width: 10ch;
  background-color: rgb(254, 254, 254);
  border-radius: 4px;
`;

export default function Home() {
  const [color, setColor] = useState('#CAD8EC');
  const [colors, setColors] = useState({});

  const handleSubmit = () => {
    if (color.length === 7) {
      const newColors = generateColors(color);
      setColors(newColors);
    }
  };

  return (
    <>
      <Head>
        <title>Color Palette</title>
        <meta name="description" content="Colors generation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Stack direction="column" size="full" gap={3} paddingTop={4}>
          <Stack size="full" gap={1} alignY="center" alignX="center">
            <Input
              type="text"
              name="color"
              value={color}
              onChange={event => {
                setColor(event.target.value);
              }}
              onKeyDown={handleSubmit}
            />
            <Button type="submit" onClick={handleSubmit}>
              Run
            </Button>
          </Stack>
          <Stack size="full" gap={1} alignY="center" alignX="space-evenly">
            {Object.values(colors).map((color, index) => (
              <ColorBlock key={index} style={{ '--background-color': color }} />
            ))}
          </Stack>
        </Stack>
      </Main>
    </>
  );
}
