import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Navbar, NavbarSection } from './Navbar';
import NavBurger from '../NavBurger';
import Button from '../Button';
import { NavigationContainer, NavigationRoute } from '../NavbarNavigation';
import { Wrapper } from '../../storybook/components/Wrapper';
import NavbarDropdown from './NavbarDropdown';
import Avatar from '../Avatar';


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

const NavbarExamples = (props: any) => {
  const [activeBurger, setActiveBurger] = React.useState(false);
  return (
    <div
      style={{
        background: '#000',
        height: '100%',
        paddingTop: 40
      }}
    >
      <Wrapper>
        <Navbar>
          <NavbarSection align="left">
            <NavBurger
              active={activeBurger}
              style={{marginRight: 12}}
              onClick={() => {
                setActiveBurger(!activeBurger)
                console.log('active navburger', activeBurger)
              }}
            />
            Logo Img/Text
          </NavbarSection>
          <NavbarSection align="right">
            <NavigationContainer
              onRouteChange={(value: any) => console.log('Route changed!', value)}
            >
              <NavigationRoute route="hello">Hello</NavigationRoute>
              <NavigationRoute route="world">World</NavigationRoute>
              <NavigationRoute route="!">!</NavigationRoute>
            </NavigationContainer>
          </NavbarSection>
        </Navbar>
        <div style={{marginTop: 40}}>
          <Navbar>
            <NavbarSection align="left">
              Logo Img/Text
            </NavbarSection>
            <NavbarSection align="right">
              <NavigationContainer
                onRouteChange={(value: any) => console.log('Route changed!', value)}
              >
                <NavigationRoute route="hello">Hello</NavigationRoute>
                <NavigationRoute route="world">World</NavigationRoute>
                <NavigationRoute route="!">!</NavigationRoute>
              </NavigationContainer>
            </NavbarSection>
          </Navbar>
        </div>
        <div style={{marginTop: 40}}>
          <Navbar>
            <NavbarSection align="left">
              Logo Img/Text
            </NavbarSection>
            <NavbarSection align="right">
              <NavigationContainer
                onRouteChange={(value: any) => console.log('Route changed!', value)}
              >
                <NavigationRoute route="hello">Hello</NavigationRoute>
                <NavigationRoute route="world">World</NavigationRoute>
                <NavigationRoute route="!">!</NavigationRoute>
              </NavigationContainer>
              <Button sizeVariant="small" shape="circle" style={{width: 150, marginLeft: 44}}>Test</Button>
            </NavbarSection>
          </Navbar>
        </div>
        <div style={{marginTop: 40}}>
          <Navbar>
            <NavbarSection align="left">
              <NavigationContainer
                onRouteChange={(value: any) => console.log('Route changed!', value)}
              >
                <NavigationRoute route="hello">Hello</NavigationRoute>
                <NavigationRoute route="world">World</NavigationRoute>
                <NavigationRoute route="!">!</NavigationRoute>
              </NavigationContainer>
            </NavbarSection>
            <NavbarSection align="center">
              Logo Img/Text
            </NavbarSection>
            <NavbarSection align="right">
              <NavigationContainer
                onRouteChange={(value: any) => console.log('Route changed!', value)}
              >
                <NavigationRoute route="hello">Hello</NavigationRoute>
                <NavigationRoute route="world">World</NavigationRoute>
                <NavigationRoute route="!">!</NavigationRoute>
              </NavigationContainer>
            </NavbarSection>
          </Navbar>
        </div>
        <div style={{marginTop: 40}}>
          <Navbar>
            <NavbarSection align="left">
              Logo Img/Text
            </NavbarSection>
            <NavbarSection align="right">
              <NavigationContainer
                onRouteChange={(value: any) => console.log('Route changed!', value)}
              >
                <NavigationRoute route="hello">Hello</NavigationRoute>
                <NavigationRoute route="world">World</NavigationRoute>
                <NavigationRoute route="!">!</NavigationRoute>
              </NavigationContainer>
              <NavbarDropdown
                title="English"
                prependContent="🇬🇧"
                options={[
                  {text: '🇬🇧 English', onClick: () => alert('Option 1'), newPrependContent: '🇬🇧', newTitle: 'English' },
                  {text: '🇫🇷 French', onClick: () => alert('Option 2'), newPrependContent: '🇫🇷', newTitle: 'French' },
                  {text: '🇷🇺 Russian', onClick: () => alert('Option 3'), newPrependContent: '🇷🇺', newTitle: 'Russian' }
                ]}
                style={{marginLeft: 44}}
              />
            </NavbarSection>
          </Navbar>
        </div>
        <div style={{marginTop: 110}}>
          <Navbar>
            <NavbarSection align="left">
              Logo Img/Text
            </NavbarSection>
            <NavbarSection align="right">
              <NavigationContainer
                onRouteChange={(value: any) => console.log('Route changed!', value)}
              >
                <NavigationRoute route="hello">Hello</NavigationRoute>
                <NavigationRoute route="world">World</NavigationRoute>
                <NavigationRoute route="!">!</NavigationRoute>
              </NavigationContainer>
              <NavbarDropdown
                title="Name"
                prependContent={<Avatar
                  image="https://static01.nyt.com/images/2020/04/10/video/HowToMakeAMask_Cover_1/HowToMakeAMask_Cover_1-square640.jpg"
                  sizeVariant="mini"
                />}
                style={{marginLeft: 44}}
                options={[
                  {text: 'Option 1', onClick: () => alert('Option 1') },
                  {text: 'Option 2', onClick: () => alert('Option 2') }
                ]}
              />
            </NavbarSection>
          </Navbar>
        </div>
      </Wrapper>
    </div>
  );
};

storiesOf('Navbar', module)
  .add('Normal', () => {
    return <NavbarExamples />;
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
