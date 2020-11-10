import * as React from 'react';
import { storiesOf } from '@storybook/react';
import CalendarIcon from '../Icons/Calendar';
import { SidebarNavigationContainer, SidebarNavigationSection, SidebarNavigationRoute } from './SidebarNavigation';
import Card, { Body as CardBody  } from '../Card';
import { Row, Col } from '../Grid';
import { Wrapper } from '../../storybook/components/Wrapper';

const SidebarExternalControl = (props: any) => {
  const [selectedSection, setSelectedSection] = React.useState('');
  const [selectedRoute, setSelectedRoute] = React.useState('');

  return (
    <Wrapper>
      <Card>
        <SidebarNavigationContainer
          selectedSection={selectedSection}
          selectedRoute={selectedRoute}
          onRouteChange={(section: any, route: any) => { setSelectedSection(section); setSelectedRoute(route); }}
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
            description=""
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
};

storiesOf('Navigation/Sidebar navigation', module)
  .add('Normal', () => {
    return (
      <Wrapper>
          <SidebarNavigationContainer
            onRouteChange={(section: any, item: any) => console.log('Route changed!', [section, item])}
          >
            <SidebarNavigationSection
              route="section1"
              title="Section 1"
              description="Lorem ipsum dolor sit amet"
              open
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
            <SidebarNavigationSection
              route="section4"
              title="Section 4"
              description="Empty section"
            />
          </SidebarNavigationContainer>
      </Wrapper>
    );
  })
  .add('with icon', () => {
    return (
      <Wrapper>
        <SidebarNavigationContainer
          onRouteChange={(section: any, item: any) => console.log('Route changed!', [section, item])}
        >
          <SidebarNavigationSection
            route="section1"
            title="Section 1"
            description="Lorem ipsum dolor sit amet"
            icon={<CalendarIcon/>}
            open
          >
            <SidebarNavigationRoute route="hello">Hello</SidebarNavigationRoute>
            <SidebarNavigationRoute route="world">World</SidebarNavigationRoute>
            <SidebarNavigationRoute route="!">!</SidebarNavigationRoute>
          </SidebarNavigationSection>
          <SidebarNavigationSection
            route="section2"
            title="Section 2"
            description="Empty section"
            icon={<CalendarIcon/>}
          />
          <SidebarNavigationSection
            route="section3"
            title="Section 3"
            description="Lorem ipsum dolor sit amet"
            icon={<CalendarIcon/>}
            iconSize="mini"
          >
            <SidebarNavigationRoute route="other">Other</SidebarNavigationRoute>
            <SidebarNavigationRoute route="stuff">Stuff</SidebarNavigationRoute>
            <SidebarNavigationRoute route="here">Here</SidebarNavigationRoute>
          </SidebarNavigationSection>
          <SidebarNavigationSection
            route="section4"
            title="Section 4"
            description="Empty section"
            icon={<CalendarIcon/>}
            iconSize="mini"
          />
        </SidebarNavigationContainer>
      </Wrapper>
    );
  })
  .add('With title', () => {
    return (
      <Wrapper>
        <SidebarNavigationContainer
          title="Title"
          description="description"
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
      </Wrapper>
    );
  })
  .add('Site', () => {
    return (
      <Wrapper>
        <Row>
          {/** Sidebar */}
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
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
          </Col>
          {/** Main Content */}
          <Col xs={12} sm={12} md={6} lg={8} xl={9}>
            <Card>
              <CardBody>
                <h2>Matterhorn</h2>
                <h3>About Matterhorn</h3>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </div>
                <h3>About Matterhorn</h3>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Wrapper>
    );
  })
  .add('External Control', () => {
    return <SidebarExternalControl />;
  });
