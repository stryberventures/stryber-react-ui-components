import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Tag from './Tag';
import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Tag', module)
  .add('shapes', () => {
    return (
      <Wrapper>
        <div style={{margin: 20}}><Tag shape="flat">Option 1</Tag></div>
        <div style={{margin: 20}}><Tag shape="round">Option 1</Tag></div>
        <div style={{margin: 20}}><Tag shape="circle">Option 1</Tag></div>
      </Wrapper>
    );
  })
  .add('sizes', () => {
    return (
      <Wrapper>
        <div style={{margin: 20}}><Tag sizeVariant="small">Option 1</Tag></div>
        <div style={{margin: 20}}><Tag sizeVariant="normal">Option 1</Tag></div>
        <div style={{margin: 20}}><Tag sizeVariant="large">Option 1</Tag></div>
      </Wrapper>
    );
  })
  .add('loading', () => {
    return (
      <Wrapper>
        <div style={{margin: 20}}><Tag sizeVariant="small" loading={true}>Option 1</Tag></div>
        <div style={{margin: 20}}><Tag sizeVariant="normal" loading={true}>Option 1</Tag></div>
        <div style={{margin: 20}}><Tag sizeVariant="large" loading={true}>Option 1</Tag></div>
      </Wrapper>
    );
  })
  .add('disabled', () => {
    return (
      <Wrapper>
        <div style={{margin: 20}}><Tag shape="flat" disabled>Option 1</Tag></div>
        <div style={{margin: 20}}><Tag shape="round" disabled>Option 1</Tag></div>
        <div style={{margin: 20}}><Tag shape="circle" disabled>Option 1</Tag></div>
      </Wrapper>
    );
  });
