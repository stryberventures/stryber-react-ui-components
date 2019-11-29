import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Navbar } from './Navbar';
import { NavigationContainer, NavigationRoute } from '../NavbarNavigation';
import { Wrapper } from '../../storybook/components/Wrapper';

const NavbarRoutesWithExternalControl = (props: any) => {
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
              <NavigationRoute
                route={i}
                selected={selectedIndex === i}
                onClick={() => setSelectedIndex(i)}
              >
                Route {i}
              </NavigationRoute>
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
            <NavigationRoute route="hello">Hello</NavigationRoute>
            <NavigationRoute route="world">World</NavigationRoute>
            <NavigationRoute route="!">!</NavigationRoute>
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
            initialRoute="hello"
          >
            <NavigationRoute route="hello">Hello</NavigationRoute>
            <NavigationRoute route="world">World</NavigationRoute>
            <NavigationRoute route="!">!</NavigationRoute>
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
            initialRoute="hello"
          >
            <NavigationRoute route="hello">Hello</NavigationRoute>
            <NavigationRoute route="world">World</NavigationRoute>
            <NavigationRoute route="!">!</NavigationRoute>
          </NavigationContainer>
        </Navbar>
      </Wrapper>
    );
  })
  .add('External control', () => {
    return (
      <Wrapper>
        <NavbarRoutesWithExternalControl />
      </Wrapper>
    );
  });
