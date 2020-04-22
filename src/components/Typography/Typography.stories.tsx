import * as React from 'react';
import { storiesOf } from '@storybook/react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './Typography.styles';

import { CheckboxField } from '../CheckboxField';
import { Wrapper } from '../../storybook/components/Wrapper';

const TypographyExample = ({ classes}: WithStyles<typeof styles>) => {
  const [isBlack, setIsBlack] = React.useState(false);
  return (
    <div style={isBlack ? {backgroundColor: '#000', color: '#fff'} : {}}>
      <CheckboxField
        placeholder="Set black background"
        value="black"
        name="background"
        variant="switch"
        onChange={ (d: any) => setIsBlack(d.target.checked) }
      />
      <h1>Headline 1</h1>
      <h2>Headline 2</h2>
      <h3>Headline 3</h3>
      <h4>Headline 4</h4>
      <h5>Headline 5</h5>
      <h6>Headline 6</h6>
      <p className={classes.bodyLarge}>Body Large</p>
      <p className={classes.buttons}>Buttons</p>
      <p>Body / Small Button</p>
      <p className={classes.subtitle}>Subtitle</p>
      <p className={classes.caps}>ALL CAPS</p>
      <p className={classes.smallLink}>Small Link </p>
      <p className={classes.bodySmall}>Body Small</p>
      <p className={classes.capsSmall}>ALL CAPS SMALL</p>
      <p className={classes.message}>Message</p>
      <p className={classes.finePrint}>Fine Print</p>
  </div>
  );
};

const TypographyExampleWithStyles = withStyles(styles)(TypographyExample);

storiesOf('Typography', module)
  .add('all typography', () => {
    return (
      <Wrapper>
        <TypographyExampleWithStyles />
      </Wrapper>
    );
  });
