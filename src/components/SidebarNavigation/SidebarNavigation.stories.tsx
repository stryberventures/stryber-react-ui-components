import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SidebarNavigationContainer, SidebarNavigationSection, SidebarNavigationItem } from './SidebarNavigation';
import Card from '../Card';
import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Sidebar navigation', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <Card>
          <SidebarNavigationContainer
            // @ts-ignore
            onChange={(section: any, item: any) => console.log('Route changed!', [section, item])}
          >
            <SidebarNavigationSection
              value="section1"
              title="Section 1"
              description="Lorem ipsum dolor sit amet"
            >
              <SidebarNavigationItem value="hello">Hello</SidebarNavigationItem>
              <SidebarNavigationItem value="world">World</SidebarNavigationItem>
              <SidebarNavigationItem value="!">!</SidebarNavigationItem>
            </SidebarNavigationSection>
            <SidebarNavigationSection
              value="section2"
              title="Section 2"
              description="Empty section"
            />
            <SidebarNavigationSection
              value="section3"
              title="Section 3"
              description="Lorem ipsum dolor sit amet"
            >
              <SidebarNavigationItem value="other">Other</SidebarNavigationItem>
              <SidebarNavigationItem value="stuff">Stuff</SidebarNavigationItem>
              <SidebarNavigationItem value="here">Here</SidebarNavigationItem>
            </SidebarNavigationSection>
          </SidebarNavigationContainer>
        </Card>
      </Wrapper>
    );
  });
