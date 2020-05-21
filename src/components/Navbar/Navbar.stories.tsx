import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Navbar, NavbarSection } from './Navbar';
import { NavigationContainer, NavigationRoute } from '../NavbarNavigation';
import { Wrapper } from '../../storybook/components/Wrapper';
import { Eye } from '../Icons';

const NavbarRoutesWithExternalControl = (props: any) => {
  const [selectedRoute, setSelectedRoute] = React.useState('');
  return (
    <Navbar>
      <Wrapper>
        <Navbar>
          <NavigationContainer
            selectedRoute={selectedRoute}
            onRouteChange={(value: any) => setSelectedRoute(value)}
          >
            <NavigationRoute route="hello">Hello</NavigationRoute>
            <NavigationRoute route="world">World</NavigationRoute>
            <NavigationRoute route="!">!</NavigationRoute>
          </NavigationContainer>
        </Navbar>
      </Wrapper>
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
  .add('with background', () => {
    return (
      <Wrapper>
        <Navbar background="#f9f9f9">
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
  .add('with icon', () => {
    return (
      <Wrapper>
        <Navbar>
          <NavigationContainer
            variant="underlined"
            onRouteChange={(value: any) => console.log('Route changed!', value)}
            initialRoute="hello"
          >
            <NavigationRoute iconComponent={Eye} route="hello">Hello</NavigationRoute>
            <NavigationRoute iconComponent={Eye} route="world">World</NavigationRoute>
            <NavigationRoute iconComponent={Eye} route="!">!</NavigationRoute>
          </NavigationContainer>
        </Navbar>
        <Navbar background="#f9f9f9">
          <NavigationContainer
            variant="underlined"
            onRouteChange={(value: any) => console.log('Route changed!', value)}
            initialRoute="hello"
          >
            <NavigationRoute iconComponent={Eye} route="hello">Hello</NavigationRoute>
            <NavigationRoute iconComponent={Eye} route="world">World</NavigationRoute>
            <NavigationRoute iconComponent={Eye} route="!">!</NavigationRoute>
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
  })
  .add('Align', () => {
    return (
      <Wrapper>
        <Navbar>
          <NavbarSection align="left">Site LOGO</NavbarSection>
          <NavbarSection align="center">

          </NavbarSection>
          <NavbarSection align="right">
            <NavigationContainer
              onRouteChange={(value: any) => console.log('Route changed!', value)}
              initialRoute="hello"
            >
              { [] }
            </NavigationContainer>
          </NavbarSection>
      </Navbar>
      </Wrapper>
    );
  });
