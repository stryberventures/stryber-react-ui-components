import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonsSet from '../ButtonsSet';

import { Wrapper } from '../../storybook/components/Wrapper';

const buttons = [
  {label: 'button 1', active: false, onClick: () => console.log('Clicked on 1 button')},
  {label: 'button 2', active: true, onClick: () => console.log('Clicked on 2 button')},
  {label: 'button 3', active: false, onClick: () => console.log('Clicked on 3 button')}
];

storiesOf('ButtonSet', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <ButtonsSet
          buttonsData={buttons}
          style={{ margin: 40 }}
        />
      </Wrapper>
    );
  });
