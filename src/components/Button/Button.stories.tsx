import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import {Profile} from '../Icons';
import * as Grid from '../Grid';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Button', module)
  .add('all variants', () => {
    return (
      <Wrapper>
        <Grid.Row>
          <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button>Button</Button>
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button style={{ whiteSpace: 'nowrap' }} disabled>Disabled button</Button>
          </Grid.Col>
        </Grid.Row>
        <div style={{ marginTop: 20 }} />
        <Grid.Row>
          <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button variant="secondary">Button</Button>
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button variant="secondary" style={{ whiteSpace: 'nowrap' }} disabled>Disabled button</Button>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button variant="tertiary">Button</Button>
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button variant="tertiary" style={{ whiteSpace: 'nowrap' }} disabled>Disabled button</Button>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button variant="primary"  style={{ whiteSpace: 'nowrap' }} sizeVariant="mini">Primary Mini button</Button>
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button variant="secondary"  style={{ whiteSpace: 'nowrap' }} sizeVariant="mini">Secondary Mini button</Button>
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button variant="tertiary" style={{ whiteSpace: 'nowrap' }} sizeVariant="mini">Tertiary Mini button</Button>
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button style={{ whiteSpace: 'nowrap' }} sizeVariant="mini" disabled>Disabled Mini button</Button>
          </Grid.Col>
        </Grid.Row>
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
