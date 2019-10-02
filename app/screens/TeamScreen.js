import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    Linking
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

import headerStyle from '../styles/SideMenu.style';
import teamPageStyle from '../styles/TeamPageStyle.style';
import { Fonts } from '../components/Fonts';


class TeamScreen extends Component {
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
                {/* Content for Psyche Team */}
                <Content contentContainerStyle={teamPageStyle.content} style={teamPageStyle.pageStyle}>
                    <ImageBackground 
                        source={require('../assets/images/backgrounds/Background.jpg')}
                        style={{
                            width: '100%',
                            height: null,
                            flex: 1
                        }}
                    >
                        <Text style={teamPageStyle.pageHeadingText}>The Team</Text>
                        <Text />
                        <Text />
                        <Text style={teamPageStyle.pageHeadingTextSmall}>Principle Investigator</Text>
                        <Image
                            source={require('../assets/images/team/Lindy34Half.jpg')}
                            style={teamPageStyle.teamPhoto}
                        />
                        <Text style={teamPageStyle.teamCaptionText}>Lindy Elkins-Tanton</Text>

                        <Text />
                        <Text style={teamPageStyle.pageHeadingTextSmall}>Deputy Principle</Text>
                        <Text style={teamPageStyle.overflowPageHeadingTextSmall}>Investigator</Text>
                        <Image
                            source={require('../assets/images/team/JimBell.jpg')}
                            style={teamPageStyle.teamPhoto}
                        />
                        <Text style={teamPageStyle.teamCaptionText}>Jim Bell</Text>

                        <Text />
                        <Image
                            source={require('../assets/images/team/GroupShot.jpg')}
                            style={teamPageStyle.teamPhoto}
                        />
                        <Text style={teamPageStyle.pageBodyTextAlt}>To see more of the team, visit the </Text>
                        <Text 
                            style={teamPageStyle.webLinkStyle} 
                            onPress={() => Linking.openURL('https://psyche.asu.edu/')}
                        >
                            Psyche Website.
                        </Text>
                        <Text/>
                        <Text/>
                    </ImageBackground>
                </Content>
            </Container>
        );
    }
}

export default TeamScreen;