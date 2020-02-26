import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Card, { Title, Body } from './Card';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Card', module)
  .add('With Text', () => {
    return (
      <Wrapper>
        <Card>
          <Title>
            Test card
          </Title>
          <Body>
            Body
          </Body>
        </Card>
      </Wrapper>
    );
  })
  .add('With Image', () => {
    return (
      <Wrapper>
        <Card>
          <Title
            style={{
              backgroundImage: `url('https://forums.unrealengine.com/filedata/fetch?id=1189160&d=1470406352')`,
              backgroundRepeat: 'repeat',
              backgroundSize: 'auto',
            }}
          >
            Test card
          </Title>
          <Body>
            Body
          </Body>
        </Card>
      </Wrapper>
    );
  });
