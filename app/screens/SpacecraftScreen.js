import React, {Component} from 'react';
import {
    View,
    Text,
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

import headerStyle from '../styles/SideMenu.style';
import infoPageStyle from '../styles/InfoPage.style';
import {Fonts} from '../components/Fonts';

class SpacecraftScreen extends Component {
    render() {
        return (
           <Container>
                {/* Display the header, including access to the navigation menu */}
                <Header style={headerStyle.sectionHeadingStyle}>
                    <Left style={{flex: 1}}>
                        <Icon
                            style={headerStyle.navIconStyle}
                            name='ios-menu'
                            onPress={() => this.props.navigation.openDrawer()}
                        />
                    </Left>
                    <Body style={{flex: 1}}></Body>
                    <Right style={{flex: 1}}></Right>
                </Header>   
                 {/* Informational content for 'Spacecraft' section */}
                <Content contentContainerStyle={infoPageStyle.content} style={infoPageStyle.pageStyle}>
                    <ImageBackground 
                        source={require('../assets/images/backgrounds/Background.jpg')}
                        style={{
                            width: '100%',
                            height: null,
                            flex: 1
                        }}
                    >
                        <Text style={infoPageStyle.pageHeadingText}>The</Text>
                        <Text style={infoPageStyle.overflowPageHeadingText}>Spacecraft</Text>
                        <Text style={infoPageStyle.pageBodyText}>
                            The Psyche spacecraft and solar panels, which will be built by SSL, are about the size of a singles 
                            tennis court. The body of the spacecraft is slightly bigger than a Smart Car and about as tall as a 
                            regulation basketball hoop. The spacecraft will include a Gamma Ray and Neutron Spectrometer, a 
                            Multispectral Imager, a Magnetometer and an x-band radio telecommunications system.
                        </Text>
                        <Text style={infoPageStyle.pageBodyText}>
                            The Psyche mission will also test a sophisticated new laser communication technology, called Deep 
                            Space Optical Communication, that encodes data in photons to communicate between a probe in deep 
                            space and Earth.
                        </Text>
                        <Image
                            source={require('../assets/images/sketches/Psyche_SatelliteStats_Icons&Text.png')}
                            style={infoPageStyle.sketchStyle}
                        />


                        <Text style={infoPageStyle.pageHeadingTextSmall}>Spacecraft Size</Text>
                        <Image
                            source={require('../assets/images/sketches/PsycheAsset_VisualizingSatteliteSize_NEW.png')}
                            style={infoPageStyle.sketchStyle}
                        />
                        <Text style={infoPageStyle.pageBodyText}>
                            The Psyche spacecraft (including the solar panels) is about the size of a singles tennis court.
                        </Text>


                        <Text style={infoPageStyle.pageHeadingTextSmall}>Bus (Body) Size</Text>
                        <Image
                            source={require('../assets/images/sketches/PsycheBus_Sizecomparison.png')}
                            style={infoPageStyle.sketchStyle}
                        />
                        <Text style={infoPageStyle.pageBodyText}>
                            The bus or “body” of the spacecraft is slightly bigger than a Smart Car and about as tall as a 
                            regulation basketball hoop.
                        </Text>


                        <Text style={infoPageStyle.pageHeadingTextSmall}>The Spacecraft</Text>
                        <Image
                            source={require('../assets/images/sketches/RN_Asset_Sattelite-01.png')}
                            style={infoPageStyle.sketchStyle}
                        />
                        <Text style={infoPageStyle.pageBodyText}>
                            The Psyche spacecraft, comprised of the bus (body), two
                            solar arrays in a cross formation, and the instrument payload,
                            will use solar electric (low-thrust) propulsion to travel to and
                            orbit the asteroid.
                        </Text>
                        <Image
                            source={require('../assets/images/sketches/AssetsPsyche_Propulsion.png')}
                            style={infoPageStyle.sketchStyle}
                        />


                        <Text style={infoPageStyle.pageHeadingTextSmall}>Propulsion System</Text>
                        <Text style={infoPageStyle.pageBodyText}>
                            The spacecraft will be propelled by solar electric propulsion.
                        </Text>


                        <Text style={infoPageStyle.pageHeadingTextSmall}>Fully-Equipped</Text>
                        <Text style={infoPageStyle.pageBodyText}>
                            The spacecraft will include a Gamma Ray and Neutron Spectrometer, a Multispectral Imager, a 
                            Magnetometer and an x-band radio telecommunications system. The Psyche mission will also test 
                            a sophisticated new laser communication technology, called Deep Space Optical Communication (DSOC), 
                            that encodes data in photons to communicate between the spacecraft and Earth.
                        </Text>
                    </ImageBackground>
               </Content>
           </Container>

        );
    }
}
export default SpacecraftScreen;