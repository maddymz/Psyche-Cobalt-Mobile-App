import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground
} from 'react-native';

import {
    Icon,
    Button,
    Container,
    Header,
    Content,
    Left,
    Body,
    Right
} from 'native-base';

import Timeline from 'react-native-timeline-feed';

import headerStyle from '../styles/SideMenu.style';
import pageStyle from '../styles/TimelineStyle.style';

class TimelineScreen extends Component {
    constructor() {
        super()

        // Data to populate the timeline
        this.data = [
            {
                key: '1',
                time: 'Phase A',
                title: 'Concept Study',
                description: 'Sept 2015 - Dec  2016  \n\nIn September of 2015, the Psyche Mission was selected by NASA to develop a detailed concept study for consideration for NASA’s Discovery Program.  \n\nThe team submitted the ~1,000-page concept study in August of 2016, and in November of 2016, they presented the proposed mission to 30 NASA reviewers during a nine-hour “site visit.”  \n\nThe site visit is an intense, highly technical in-person review done by a select group of science, technical, and industry experts. They review every detail of the proposed mission, from concept and design, to execution and science application, as well as how the mission personnel from different institutions work together as a team.  \n\nFollowing the site visit, the Principal Investigator presented to NASA’s Associate Administrator.  On January 4 of 2017, the Psyche Mission’s selection for flight was announced by NASA.',
                lineColor: '#f79f27ff',
                circleColor: '#f79f27ff'
            },
            {
                key: '2',
                time: 'Phase B',
                title: 'Preliminary Design of All Instruments & Spacecraft',
                description: 'Jan 2017 – May 2019  \n\nScience and engineering teams on the mission are designing the spacecraft and the instruments that will be used to analyze the asteroid.  In March 2019, the team will undergo project and flight system Preliminary Design Review.  In May 2019, the team reaches Key Decision Point C, which will give the team the official approval to move to the next phase (Phase C).',
                lineColor: '#f27d3eff',
                circleColor: '#f27d3eff',
            },
            {
                key: '3',
                time: 'Phase C',
                title: 'Final Design & Subsystem Fabrication, Assembly, & Test',
                description: 'May 2019 – Jan 2021  \n\nScience and engineering teams will begin to build their instruments.  The instruments consist of a magnetometer, a multispectral imager, and a gamma ray and neutron spectrometer.  \n\nIn April 2020, the teams will undergo Project and Flight System Critical Design Review, this is an integral step in the instrument engineering process.  The bus or “body” of the spacecraft will be completed by May 2020.  \n\nIn January 2021, the team will conduct the Systems Integration Review to ensure that the system is ready to be integrated. The last step in Phase C is Key Decision Point D that will give the team the official approval to move to the next phase.',
                lineColor: '#f27d3eff',
                circleColor: '#f27d3eff'
            },
            {
                key: '4',
                time: 'Phase D',
                title: 'Instrument & Spacecraft Assembly & Test',
                description: 'Jan 2021 – July 2022  \n\nDuring this phase, all the spacecraft subsystems are integrated onto the spacecraft bus.  The spacecragt undergoes vibration testing, environmental thermal-vacuum testing, electromagnetic interference, and electromagnetic compatibility testing.  \n\nIn May 2022 the team will conduct the Operations Readiness Review to ensure the system, procedures, and all supporting software and personnel are ready and fully operational. Before launch, the team will conduct Key Decision Point E that will determine readiness to conduct post launch operations.',
                lineColor: '#ed5b68ff',
                circleColor: '#ed5b68ff'
            },
            {
                key: '5',
                time: 'Phase D',
                title: 'Spacecraft Shipped to Launch Site',
                description: 'May 2022  \n\nThe Psyche spacecraft, now fully assembled, includes solar panels, which fold during transport and launch.  The spacecraft measures about 81 feet long (24.76 meters) when the solar panels are unfolded. This is about the size of a singles tennis court.  The body of the spacecraft is about 10 feet long (3.1 meters) and almost eight feet (2.4 meters) wide.',
                lineColor: '#ed5b68ff',
                circleColor: '#ed5b68ff'
            },
            {
                key: '6',
                time: 'Phase D',
                title: 'Mission Launch',
                description: 'Aug 2022  \n\nAt the launch site the team will conduct an entire re-check of the spacecraft before integrating into the launch vehicle.  The spacecraft will launch August of 2022, and once in space, the spacecraft will travel using solar-electric propulsion.  \n\nIt will arrive at the asteroid, located in the main asteroid belt between Mars and Jupiter, in early January of 2026.',
                lineColor: '#ed5b68ff',
                circleColor: '#ed5b68ff'
            },
            {
                key: '7',
                time: 'Phase E',
                title: 'Mars Gravity Assist',
                description: 'May 2023  \n\nPhase E begins after the Post Launch Assessment Review is conducted.  \n\nThe spacecraft will use the gravity of Mars to increase speed and to set its trajectory to intersect with Psyche’s orbit around the Sun.  It does this by entering and leaving the gravitational field of Mars.  This slingshot maneuver will save propellant, time and expense.',
                lineColor: '#a3415dff',
                circleColor: '#a3415dff'
            },
            {
                key: '8',
                time: 'Phase E',
                title: 'Arrival at Psyche',
                description: 'Jan 2026  \n\nLeading up to arrival at Psyche, the spacecraft will spend 100 days in the approach phase.  The spacecraft will also measure the asteroid’s spin axis and rotation.',
                lineColor: '#a3415dff',
                circleColor: '#a3415dff'
            },
            {
                key: '9',
                time: 'Phase E',
                title: 'Orbiting Psyche',
                description: 'Jan 2026 - Oct 2027  \n\nThe spacecraft will orbit the asteroid for 21 months, performing science operations from four different orbits, each successively closer to the asteroid.  In each orbit, the instruments on board will send data back to Earth to be analyzed by the mission’s science team.',
                lineColor: '#a3415dff',
                circleColor: '#a3415dff'
            },
            {
                key: '10',
                time: 'Phase F',
                title: 'Mission Closeout',
                description: 'Nov 2027 - Aug 2028  \n\nIn this final phase, the mission team will provide all remaining deliverables and safely decommission the space flight systems.',
                lineColor: '#592951ff',
                circleColor: '#592951ff'
            }
        ]
    }

    render() {
        return (
            <Container>
                {/* Display the header, including access to the navigation menu */}
                <Header style={headerStyle.sectionHeadingStyle}>
                    <Left style={{ flex: 1 }}>
                        <Icon
                            style={headerStyle.navIconStyle}
                            name="ios-menu"
                            onPress={() => this.props.navigation.openDrawer()}
                        />
                    </Left>
                    <Body style={{ flex: 1 }} />
                    <Right style={{ flex: 1 }} />
                </Header>
                {/* The Timeline */}
                <Content contentContainerStyle={pageStyle.content} style={pageStyle.pageStyle}>
                    <Text style={pageStyle.pageHeadingText}>Timeline</Text>
                    <Text />
                    <Text />
                    <Timeline
                        data={this.data}
                        circleSize={20}
                        descriptionStyle={pageStyle.timelineDescriptionStyle}
                        dotColor="#140025"
                        innerCircleType='dot'
                        lineWidth={4}
                        timeContainerStyle={pageStyle.timeContainerStyle}
                        timeStyle={pageStyle.timelineTimeStyle}
                        titleStyle={pageStyle.timelineTitleStyle}
                        detailContainerStyle={pageStyle.timelineContainerStyle}
                    />
                    <Text />
                    <Text />
                </Content>
            </Container>
        );
    }
}

export default TimelineScreen;