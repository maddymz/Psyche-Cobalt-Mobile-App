import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground
} from 'react-native';
import {WebView} from 'react-native-webview';
import {
    Icon,
    Button,
    Container,
    Header,
    Content,
    Left,
    Body,
    Card,
    CardItem,
    Right
} from 'native-base';

import headerStyle from '../styles/SideMenu.style';
import infoPageStyle from '../styles/InfoPage.style';
import {Fonts} from '../components/Fonts';


class OverviewScreen extends Component {
    render() {
        return (
           <Container>
                {/* Display the header, including access to the navigation menu */}
                <Header style={headerStyle.sectionHeadingStyle}>
                    <Left style={{flex: 1}}>
                        <Icon
                            style={headerStyle.navIconStyle}
                            name="ios-menu"
                            onPress={() => this.props.navigation.openDrawer()}
                        />
                    </Left>
                    <Body style={{flex:1}}/>
                    <Right style={{flex:1}} />
                </Header>
                {/* Informational content for 'Overview' */}
                <Content contentContainerStyle={infoPageStyle.content} style={infoPageStyle.pageStyle}>
                    <ImageBackground 
                        source={require('../assets/images/backgrounds/Background.jpg')}
                        style={{
                            width: '100%',
                            height: null,
                            flex: 1
                        }}
                    >
                        <Text style={infoPageStyle.pageHeadingText}>Mission</Text>
                        <Text style={infoPageStyle.overflowPageHeadingText}>Overview</Text>
                        <Text style={infoPageStyle.pageBodyText}>
                            Psyche is both the name of an asteroid orbiting the Sun between Mars and Jupiter 
                            — and the name of a NASA space mission to visit that asteroid, led by Arizona 
                            State University. The mission was chosen by NASA on January 4, 2017 as one of two 
                            missions for the agency’s Discovery Program, a series of relatively low-cost missions 
                            to solar system targets.
                        </Text>


                        <Text style={infoPageStyle.pageHeadingTextSmall}>Trajectory</Text>
                        <Image
                            source={require('../assets/images/sketches/RN_NEW_Trajectory-03.png')}
                            style={infoPageStyle.sketchStyle}
                        />
                        <Text style={infoPageStyle.pageBodyText}>
                            The Psyche spacecraft is targeted to launch in summer 2022 and travel to the asteroid 
                            using solar-electric (low-thrust) propulsion, arriving in 2026, following a Mars flyby 
                            and gravity-assist in 2023. After arrival, the mission plan calls for 21 months spent 
                            at the asteroid, mapping it and studying its properties.
                        </Text>


                        <Text style={infoPageStyle.pageHeadingTextSmall}> Orbit</Text>
                        <Image
                            source={require('../assets/images/animations/OrbitsAnimation.gif')}
                            style={infoPageStyle.animationStyle}
                        />
                        <Text style={infoPageStyle.pageBodyText}>
                            Once the spacecraft arrives at the asteroid in 2026, plans call for it to spend 21 months 
                            at the asteroid, performing science operations from four staging orbits, which become successively closer.
                        </Text>


                        <Card style={infoPageStyle.cardStyle}>
                            <CardItem style={infoPageStyle.cardHeader}>
                                <Body>
                                    <Text style={infoPageStyle.cardText}>Journey to a Metal World</Text>
                                </Body>
                            </CardItem>
                            <CardItem cardbody style={infoPageStyle.cardBodyVideo}>
                                {/* <WebView
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    style={{width: '100%'}}
                                    source={{ uri: "https://www.youtube.com/embed/aExTQGcIGKo" }}
                                /> */}
                            </CardItem>
                        </Card>
                    </ImageBackground>
                </Content>
           </Container>
        );
    }
}

export default OverviewScreen;