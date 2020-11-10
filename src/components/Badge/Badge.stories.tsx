import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './Badge';
import { Button } from '../Button';
import * as Grid from '../Grid';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Badge', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <div style={{padding: 20}}>
          <Grid.Row>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <Badge
                label={12}
              >
                <Button>Some button</Button>
              </Badge>
            </Grid.Col>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <Badge
                label={14}
              >
                <Button variant="secondary" sizeVariant="mini">Other button</Button>
              </Badge>
            </Grid.Col>
          </Grid.Row>
        </div>
      </Wrapper>
    );
  });
