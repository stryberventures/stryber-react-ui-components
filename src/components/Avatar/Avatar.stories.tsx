import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from './Avatar';
import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Avatar', module)
  .add('sizes', () => {
    return (
      <Wrapper>
        <div>
          <Avatar sizeVariant="large" />
          <Avatar sizeVariant="normal" />
          <Avatar sizeVariant="small" />
          <Avatar sizeVariant="mini" />
        </div>
      </Wrapper>
    );
  })
  .add('loading', () => {
    return (
      <Wrapper>
        <div>
          <Avatar sizeVariant="large" loading={true} />
          <Avatar sizeVariant="normal" loading={true} />
          <Avatar sizeVariant="small" loading={true} />
          <Avatar sizeVariant="mini" loading={true} />
        </div>
      </Wrapper>
    );
  })
  .add('with initials', () => {
    return (
      <Wrapper>
        <div>
          <Avatar initials="PB" sizeVariant="large" />
          <Avatar initials="PB" sizeVariant="normal" />
          <Avatar initials="PB" sizeVariant="small" />
          <Avatar initials="PB" sizeVariant="mini" />
        </div>
      </Wrapper>
    );
  })
  .add('with image', () => {
    return (
      <Wrapper>
        <div>
          <Avatar
            image="https://static01.nyt.com/images/2020/04/10/video/HowToMakeAMask_Cover_1/HowToMakeAMask_Cover_1-square640.jpg"
            sizeVariant="large"
          />
          <Avatar
            image="https://static01.nyt.com/images/2020/04/10/video/HowToMakeAMask_Cover_1/HowToMakeAMask_Cover_1-square640.jpg"
            sizeVariant="normal"
          />
          <Avatar
            image="https://static01.nyt.com/images/2020/04/10/video/HowToMakeAMask_Cover_1/HowToMakeAMask_Cover_1-square640.jpg"
            sizeVariant="small"
          />
          <Avatar
            image="https://static01.nyt.com/images/2020/04/10/video/HowToMakeAMask_Cover_1/HowToMakeAMask_Cover_1-square640.jpg"
            sizeVariant="mini"
          />
        </div>
      </Wrapper>
    );
  });
