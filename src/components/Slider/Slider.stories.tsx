import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from './Slider';

import { Wrapper } from '../../storybook/components/Wrapper';
import {useState} from "react";

const SliderPreview = () => {
  const [val, setVal] = useState(40);

  return (
    <>
      <Slider name="large" sizeVariant="large" value={50} style={{width: 'initial'}} />
      <Slider name="slider" sizeVariant="normal" controlled style={{width: 'initial'}} onChange={(e: any) => setVal(e.target.value)} value={val} />
      <Slider name="small" sizeVariant="small" value={30} style={{width: 'initial'}} />
    </>
  )
}

storiesOf('Selection Controls/Slider', module)
  .add('default', () => {
    return (
      <Wrapper>
        <SliderPreview />
      </Wrapper>
    );
  })
  .add('loading', () => {
    return (
      <Wrapper>
        <Slider name="large" sizeVariant="large" value={50} style={{width: 'initial'}} loading={true} loadingStyle={{ width: 342 }} />
        <Slider name="slider" sizeVariant="normal" controlled style={{width: 'initial'}} loading={true} loadingStyle={{ width: 256 }} />
        <Slider name="small" sizeVariant="small" value={30} style={{width: 'initial'}} loading={true} loadingStyle={{ width: 171 }} />
      </Wrapper>
    );
  });
