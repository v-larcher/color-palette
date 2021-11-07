import Head from "next/head";
import styled from "styled-components";
import { Stack } from "@tymate/margaret";

const ColorBlock = styled.div`
  width: 200px;
  height: 200px;
  background-color: var(--background-color);
`;

const Main = styled.main`
  padding: 1rem 2rem;
`;

export default function Home() {
  const colors = ["#eabfcb", "#c191a1", "#a4508b", "#5f0a87", "#2f004f"];

  return (
    <>
      <Head>
        <title>Color Palette</title>
        <meta name="description" content="Colors generation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Stack size="full" gap={1} alignY="center" alignX="space-between">
          {colors.map((color, index) => (
            <ColorBlock key={index} style={{ "--background-color": color }} />
          ))}
        </Stack>
      </Main>

      <footer></footer>
    </>
  );
}
