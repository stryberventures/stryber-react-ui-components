import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Navbar } from './Navbar';
import { NavigationContainer, NavigationItem } from '../NavbarNavigation';
import { Wrapper } from '../../storybook/components/Wrapper';

const NavbarItemsWithExternalControl = (props: any) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <Navbar>
      <NavigationContainer
        variant="underlined"
      >
        {
          Array
            .from({ length: 5 })
            .map((d: any, i: number) => (
              <NavigationItem
                value={i}
                selected={selectedIndex === i}
                onClick={() => setSelectedIndex(i)}
              >
                Item {i}
              </NavigationItem>
            ))
        }
      </NavigationContainer>
    </Navbar>
  );
};

storiesOf('Navbar', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <Navbar>
          <NavigationContainer
            onRouteChange={(value: any) => console.log('Route changed!', value)}
          >
            <NavigationItem value="hello">Hello</NavigationItem>
            <NavigationItem value="world">World</NavigationItem>
            <NavigationItem value="!">!</NavigationItem>
          </NavigationContainer>
        </Navbar>
      </Wrapper>
    );
  })
  .add('Underlined', () => {
    return (
      <Wrapper>
        <Navbar>
          <NavigationContainer
            variant="underlined"
            onRouteChange={(value: any) => console.log('Route changed!', value)}
            initialValue="hello"
          >
            <NavigationItem value="hello">Hello</NavigationItem>
            <NavigationItem value="world">World</NavigationItem>
            <NavigationItem value="!">!</NavigationItem>
          </NavigationContainer>
        </Navbar>
      </Wrapper>
    );
  })
  .add('Normal with initial value', () => {
    return (
      <Wrapper>
        <Navbar>
          <NavigationContainer
            onRouteChange={(value: any) => console.log('Route changed!', value)}
            initialValue="hello"
          >
            <NavigationItem value="hello">Hello</NavigationItem>
            <NavigationItem value="world">World</NavigationItem>
            <NavigationItem value="!">!</NavigationItem>
          </NavigationContainer>
        </Navbar>
      </Wrapper>
    );
  })
  .add('External control', () => {
    return (
      <Wrapper>
        <NavbarItemsWithExternalControl />
      </Wrapper>
    );
  });
