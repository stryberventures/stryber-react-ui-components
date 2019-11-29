import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SidebarNavigationContainer, SidebarNavigationSection, SidebarNavigationRoute } from './SidebarNavigation';
import Card from '../Card';
import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Sidebar navigation', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <Card>
          <SidebarNavigationContainer
            onRouteChange={(section: any, item: any) => console.log('Route changed!', [section, item])}
          >
            <SidebarNavigationSection
              route="section1"
              title="Section 1"
              description="Lorem ipsum dolor sit amet"
            >
              <SidebarNavigationRoute route="hello">Hello</SidebarNavigationRoute>
              <SidebarNavigationRoute route="world">World</SidebarNavigationRoute>
              <SidebarNavigationRoute route="!">!</SidebarNavigationRoute>
            </SidebarNavigationSection>
            <SidebarNavigationSection
              route="section2"
              title="Section 2"
              description="Empty section"
            />
            <SidebarNavigationSection
              route="section3"
              title="Section 3"
              description="Lorem ipsum dolor sit amet"
            >
              <SidebarNavigationRoute route="other">Other</SidebarNavigationRoute>
              <SidebarNavigationRoute route="stuff">Stuff</SidebarNavigationRoute>
              <SidebarNavigationRoute route="here">Here</SidebarNavigationRoute>
            </SidebarNavigationSection>
          </SidebarNavigationContainer>
        </Card>
      </Wrapper>
    );
  })
  .add('Site', () => {
    return (
      <Wrapper>
        <Card>
          <SidebarNavigationContainer
            onRouteChange={(section: any, item: any) => console.log('Route changed!', [section, item])}
          >
            <SidebarNavigationSection
              route="about"
              title="About Matterhorn"
              description="Lorem ipsum dolor sit amet"
            />
            <SidebarNavigationSection
              route="elements"
              title="Elements"
              description="Lorem Ipsum is simply dummy"
            >
              <SidebarNavigationRoute route="button">Button</SidebarNavigationRoute>
            </SidebarNavigationSection>
            <SidebarNavigationSection
              route="personal"
              title="Personal information"
              description="Lorem Ipsum is simply dummy"
            />
            <SidebarNavigationSection
              route="payment"
              title="Payment Details"
              description="Lorem Ipsum is simply dummy"
            />
            <SidebarNavigationSection
              route="questions"
              title="Questions"
              description="Lorem Ipsum is simply dummy"
            />
            <SidebarNavigationSection
              route="Settings"
              title="General Settings"
              description="Lorem Ipsum is simply dummy"
            />
          </SidebarNavigationContainer>
        </Card>
      </Wrapper>
    );
  });
