import { useState } from 'react';

import { Stack } from '@tymate/margaret';
import Head from 'next/head';
import styled from 'styled-components';
import { generateColors } from 'utils/colors';

const ColorBlock = styled.div`
  width: 200px;
  height: 200px;
  background-color: var(--background-color);
`;

const Main = styled.main`
  width: 100%;
  padding: 1rem 2rem;
`;

const Input = styled.input`
  width: 20ch;
  align-self: center;
`;

const Button = styled.button`
  width: 10ch;
`;

export default function Home() {
  const colors = ['#eabfcb', '#c191a1', '#a4508b', '#5f0a87', '#2f004f'];
  const [color, setColor] = useState(null);

  const handleSubmit = () => {
    generateColors(color);
  };

  return (
    <>
      <Head>
        <title>Color Palette</title>
        <meta name="description" content="Colors generation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Stack direction="column" size="full" gap={2}>
          <Stack size="full" gap={1} alignY="center">
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
          <Stack size="full" gap={1} alignY="center" alignX="space-between">
            {colors.map((color, index) => (
              <ColorBlock key={index} style={{ '--background-color': color }} />
            ))}
          </Stack>
        </Stack>
      </Main>

      <footer />
    </>
  );
}
