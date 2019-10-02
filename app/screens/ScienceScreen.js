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

class ScienceScreen extends Component {
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
                {/* Informational content for 'Science' section */}
                <Content contentContainerStyle={infoPageStyle.content} style={infoPageStyle.pageStyle}>
                    <ImageBackground 
                        source={require('../assets/images/backgrounds/Background.jpg')}
                        style={{
                            width: '100%',
                            height: null,
                            flex: 1
                        }}
                    >
                        <Text style={infoPageStyle.pageHeadingText}>Instruments &</Text>
                        <Text style={infoPageStyle.overflowPageHeadingText}>Science</Text>
                        <Text style={infoPageStyle.overflowPageHeadingText}>Investigations</Text>
                        <Text style={infoPageStyle.pageBodyText}>
                            The Psyche spacecraft will carry a multispectral imager, a gamma ray and neutron 
                            spectrometer, and a magnetometer, and will conduct radio science.
                        </Text>
                        <Image
                            source={require('../assets/images/animations/SciencePhasesAnimation.gif')}
                            style={infoPageStyle.animationStyle}
                        />
                        

                        <Text style={infoPageStyle.pageHeadingTextSmall}>The Psyche</Text>
                        <Text style={infoPageStyle.overflowPageHeadingTextSmall}>Multispectral Imager</Text>
                        <Image
                            source={require('../assets/images/sketches/RN_Asset_MultiSpectralImager-02.png')}
                            style={infoPageStyle.sketchStyle}
                        />
                        <Text style={infoPageStyle.pageBodyText}>
                            The Multispectral Imager provides high-resolution images using filters to discriminate 
                            between Psyche’s metallic and silicate constituents. The instrument consists of a pair 
                            of identical cameras designed to acquire geologic, compositional, and topographic data. 
                            The purpose of the second camera is to provide redundancy for mission-critical optical navigation. 
                            The team is based at Arizona State University.
                        </Text>


                        <Text style={infoPageStyle.pageHeadingTextSmall}>The Gamma Ray and</Text>
                        <Text style={infoPageStyle.overflowPageHeadingTextSmall}>Neutron</Text>
                        <Text style={infoPageStyle.overflowPageHeadingTextSmall}>Spectrometer</Text>
                        <Image
                            source={require('../assets/images/sketches/RN_Asset_Spectometer-03.png')}
                            style={infoPageStyle.sketchStyle}
                        />
                        <Text style={infoPageStyle.pageBodyText}>
                            The Gamma Ray and Neutron Spectrometer will detect, measure, and map Psyche’s elemental composition. 
                            The instrument is mounted on a 6-foot (2-meter) boom to distance the sensors from background radiation 
                            created by energetic particles interacting with the spacecraft and to provide an unobstructed field of 
                            view. The team is based at the Applied Physics Laboratory at Johns Hopkins University.
                        </Text>
                        

                        <Text style={infoPageStyle.pageHeadingTextSmall}>Psyche</Text>
                        <Text style={infoPageStyle.overflowPageHeadingTextSmall}>Magnetometer</Text>
                        <Image
                            source={require('../assets/images/sketches/RN_Asset_Magnetometer-04.png')}
                            style={infoPageStyle.sketchStyle}
                        />
                        <Text style={infoPageStyle.pageBodyText}>
                            The Psyche Magnetometer is designed to detect and measure the remanent magnetic field of the asteroid. It is 
                            composed of two identical high-sensitivity magnetic field sensors located at the middle and outer end of a 
                            6-foot (2-meter) boom. The team is based at Massachusetts Institute of Technology and the University of California 
                            Los Angeles.
                        </Text>


                        <Text style={infoPageStyle.pageHeadingTextSmall}>Radio Science</Text>
                        <Text style={infoPageStyle.pageBodyText}>
                            The Psyche mission will use the X-band radio telecommunications system to measure Psyche’s gravity field to 
                            high precision. When combined with topography derived from onboard imagery, this will provide information on 
                            the interior structure of Psyche. The team is based at MIT and JPL.
                        </Text>
                        {/* Styled this asset differently because it is cut off at the edges on purpose */}
                        <Image
                            source={require('../assets/images/sketches/RN_ASSET_RadioScience-01.png')}
                            style={{
                                marginTop: '2%',
                                marginBottom: '2%',
                                width: '100%',
                                resizeMode:'contain' 
                            }}
                        />
                        

                        <Text style={infoPageStyle.pageHeadingTextSmall}>Deep Space Optical</Text>
                        <Text style={infoPageStyle.overflowPageHeadingTextSmall}>Communication</Text>
                        <Text style={infoPageStyle.overflowPageHeadingTextSmall}>(DSOC)</Text>
                        <Image
                            source={require('../assets/images/sketches/RN_ASSETS_DSOC.png')}
                            style={infoPageStyle.sketchStyle}
                        />
                        <Text style={infoPageStyle.pageBodyText}>
                            The Psyche mission will test a sophisticated new laser communication technology that encodes data in photons 
                            (rather than radio waves) to communicate between a probe in deep space and Earth. Using light instead of radio 
                            allows the spacecraft to communicate more data in a given amount of time. The DSOC team is based at the Jet 
                            Propulsion Laboratory.
                        </Text>
                    </ImageBackground>
               </Content>
           </Container>

        );
    }
}
export default ScienceScreen;