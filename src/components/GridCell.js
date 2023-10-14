import React from 'react';
import { Container, Sprite, Text } from '@pixi/react';
import * as PIXI from 'pixi.js';


const GridCell = ({ x, y, cellSize, color, text }) => {
  return (
    <Container x={x} y={y}>
      <Sprite
        texture={PIXI.Texture.from('https://as1.ftcdn.net/v2/jpg/00/92/53/56/1000_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg')}
        width={cellSize}
        height={cellSize}
        tint={color}
      />
      <Text text={text} style={{ fill: 'white', fontSize: 15, align: 'center' }} x={5} y={5} />
    </Container>
  );
};

export default GridCell;
