import React, { Component } from 'react';
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
    Right,
    Body,
    Card,
    CardItem
} from 'native-base';

import headerStyle from '../styles/SideMenu.style';
import infoPageStyle from '../styles/InfoPage.style';
import {Fonts} from '../components/Fonts';

class AsteroidScreen extends Component {
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
                {/* Informational content for 'The Asteroid' */}
                <Content contentContainerStyle={infoPageStyle.content} style={infoPageStyle.pageStyle}>
                    <ImageBackground 
                            source={require('../assets/images/backgrounds/Background.jpg')}
                            style={{
                                width: '100%',
                                height: null,
                                flex: 1
                            }}
                        >
                            <Text style={infoPageStyle.pageHeadingText}>The Asteroid</Text>
                            <Text style={infoPageStyle.pageBodyText}>
                                Only the 16th asteroid to be discovered, Psyche was found in 1852 
                                by Italian astronomer Annibale de Gasparis, who named it for the 
                                goddess of the soul in ancient Greek mythology.
                            </Text>
                            <Text style={infoPageStyle.pageBodyText}>
                                What gives asteroid Psyche great scientific interest is that it is 
                                made of metal. It appears to be the exposed nickel-iron core of a 
                                protoplanet, one of the building blocks of the Sun’s planetary system. 
                                At Psyche scientists will explore, for the first time ever, a world made 
                                not of rock or ice, but of metal.
                            </Text>
                            <Image
                                source={require('../assets/images/sketches/PsycheAsteroidStats_iconsandtextgroup.png')}
                                style={infoPageStyle.sketchStyle}
                            />
                            

                            <Text style={infoPageStyle.pageHeadingTextSmall}>Psyche's Story</Text>
                            <Image
                                source={require('../assets/images/sketches/AssetsPSYCHE_AsteroidNEW.png')}
                                style={infoPageStyle.sketchStyle}
                            />
                            <Text style={infoPageStyle.pageBodyText}>
                                One scenario is that long ago, a protoplanet that had separated internally 
                                into a rocky mantle and iron core suffered violent impacts that stripped away 
                                its mantle, leaving only the metal core. Or is Psyche a survivor of some more 
                                unusual process not yet imagined?
                            </Text>
                        

                            <Card style={infoPageStyle.cardStyle}>
                                <CardItem style={infoPageStyle.cardHeader}>
                                    <Body>
                                        <Text style={infoPageStyle.cardText}>How It Was Formed</Text>
                                    </Body>
                                </CardItem>
                                <CardItem style={infoPageStyle.cardBody}>
                                    <Text style={infoPageStyle.cardCaptionText}>
                                        The asteroid is most likely a survivor of multiple violent 
                                        hit-and-run collisions, common when the solar system was forming.
                                        Thus Psyche may be able to tell us how Earth’s core and the cores 
                                        of the other terrestrial planets came to be.
                                    </Text>
                                </CardItem>
                                <CardItem cardbody style={infoPageStyle.cardBodyVideo}>
                                    {/* <WebView
                                        javaScriptEnabled={true}
                                        domStorageEnabled={true}
                                        style={{width: '100%'}}
                                        source={{ uri: "https://vimeo.com/246338699" }}
                                    /> */}
                                </CardItem>
                            </Card>


                            <Text style={infoPageStyle.pageHeadingTextSmall}>Sizing It Up</Text>
                            <Text style={infoPageStyle.pageBodyText}>
                                If Psyche were a perfect sphere, it would have a diameter of 140 miles (
                                226 km), or about the length of the state of Massachusetts (leaving out Cape 
                                Cod). It would have a surface area of about 246,300 square miles or 641,800 square 
                                kilometers, making it just smaller than the area of the state of Texas and quite a bit 
                                larger than the area of California.
                            </Text>
                            <Image
                                source={require('../assets/images/sketches/Psyche_AsteroidStats_MassachusettsComparison.png')}
                                style={infoPageStyle.sketchStyle}
                            />


                            <Text style={infoPageStyle.pageHeadingTextSmall}>The Orbit</Text>
                            <Text style={infoPageStyle.pageBodyText}>
                                Psyche follows an orbit in the outer part of the main asteroid belt, at an average 
                                distance from the Sun of 3 astronomical units (AU); Earth orbits at 1 AU.
                            </Text>
                        

                            <Text style={infoPageStyle.pageHeadingTextSmall}>Our Mission</Text>
                            <Text style={infoPageStyle.pageBodyText}>
                                The science goals of the Psyche Mission are to understand these building blocks of 
                                planet formation and to explore first-hand a wholly new and unexplored type of world. 
                                The mission team seeks to determine whether Psyche really is a protoplanetary core, 
                                how old it is, whether it formed in similar ways to the Earth’s core, and what its 
                                surface is like.
                            </Text>
                    </ImageBackground>
                </Content>
           </Container>

        );
    }
}
export default AsteroidScreen;