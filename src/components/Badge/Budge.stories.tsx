import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './Badge';
import { Button } from '../Button';

import { Wrapper } from '../../storybook/components/Wrapper';

const DynamicNumberDemo = (props: any) => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      if (counter < 100000) {
        setCounter((counter: number) => counter + 1);
      } else {
        setCounter(() => 0);
      }
    }, 1);
  }, []);
  return (
    <Badge
      style={{ margin: 40 }}
      value={counter}
    >
      <Button>Hello</Button>
    </Badge>
  );
};

storiesOf('Badge', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <Badge
          style={{ margin: 40 }}
          value={1}
        >
          <Button>Hello</Button>
        </Badge>
        <Badge
          style={{ margin: 40 }}
          value={3423423}
        >
          <Button>Hello</Button>
        </Badge>
        <DynamicNumberDemo />
      </Wrapper>
    );
  });
