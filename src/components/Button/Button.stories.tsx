import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import {Profile} from '../Icons';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Button', module)
  .add('with text', () => {
    const fakedClickHandler = () => console.log('Button clicked!');
    return (
      <Wrapper>
        <Button type="submit" variant="primary" onClick={ fakedClickHandler }>Primary</Button>
        <Button variant="primary" disabled onClick={ fakedClickHandler }>Primary Disabled</Button>
        <Button variant="secondary" onClick={ fakedClickHandler }>Secondary</Button>
        <Button variant="secondary" disabled onClick={ fakedClickHandler }>Secondary Disabled</Button>
        <Button variant="tertiary" onClick={ fakedClickHandler }>Tertiary</Button>
        <Button variant="tertiary" onClick={ fakedClickHandler } disabled>Tertiary Disabled</Button>
      </Wrapper>
    );
  })
  .add('shapes', () =>  (
      <Wrapper>
        <Button type="submit" variant="primary" shape="round">Primary</Button>
        <Button type="submit" variant="primary" shape="flat">Primary</Button>
        <Button type="submit" variant="primary" shape="circle">Primary</Button>
      </Wrapper>
    ))
  .add('sizes', () =>  (
    <Wrapper>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <Button style={{width: 'initial'}} type="submit" sizeVariant='large' variant="primary">Primary</Button>
        <Button style={{width: 'initial'}} type="submit" sizeVariant='normal' variant="primary" >Primary</Button>
        <Button style={{width: 'initial'}} type="submit" sizeVariant='small' variant="primary">Primary</Button>
        <Button style={{width: 'initial'}} type="submit" sizeVariant='mini' variant="primary">Primary</Button>
      </div>
    </Wrapper>
  ))
  .add('with icon', () => (
    <Wrapper>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <Button sizeVariant="small" style={{width: 'initial'}}><div style={{width: 16, height: 16, display: 'inline-block', position: 'relative', top: 2, right: 4}}>
          <Profile width={12} />
        </div>Primary</Button>
        <Button sizeVariant="normal" style={{width: 'initial'}}><div style={{width: 16, height: 16, display: 'inline-block', position: 'relative', top: 2, right: 4}}>
          <Profile width={14} />
        </div>Primary</Button>
        <Button sizeVariant="large" style={{width: 'initial'}}><div style={{width: 16, height: 16, display: 'inline-block', position: 'relative', top: 2, right: 4}}>
          <Profile width={14} />
        </div>Primary</Button>
      </div>
    </Wrapper>
  ))
  .add('Mini', () => (
    <Wrapper>
      <Button sizeVariant="mini" style={{ width: 130 }}>
        Mini label
      </Button>
      <Button sizeVariant="mini" style={{ width: 230 }} variant="secondary">
        Mini label Secondary
      </Button>
      <Button sizeVariant="mini" disabled style={{ width: 230 }} variant="secondary">
        Mini label Disabled
      </Button>
    </Wrapper>
  ));
