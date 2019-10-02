import {Fonts} from '../components/Fonts';

export default {
    pageHeadingText: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 32,
        paddingTop: '5%',
        paddingBottom: '1%', // prevent cuttoff letters
        paddingLeft: '10%',
        paddingRight: '10%',
        color: 'white',
        width: '80%',
        letterSpacing: 2,
    },
    overflowPageHeadingText: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 32,
        paddingBottom: '1%', // prevent cuttoff letters
        paddingLeft: '10%',
        paddingRight: '10%',
        color: 'white',
        width: '80%',
        letterSpacing: 2,
    },
    pageHeadingTextSmall: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 22,
        marginTop: '5%',
        paddingBottom: '1%', // prevent cuttoff letters
        paddingLeft: '10%',
        paddingRight: '10%',
        color: 'white',
        width: '80%',
        letterSpacing: 2,
    },
    overflowPageHeadingTextSmall: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 22,
        paddingBottom: '1%', // prevent cuttoff letters
        paddingLeft: '10%',
        paddingRight: '10%',
        color: 'white',
        width: '80%',
        letterSpacing: 2,
    },
    pageBodyText: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 20,
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '2%',
        paddingBottom: '5%',
        color: 'white',
        letterSpacing: 2,
        lineHeight: 30
    },
    content: {
        backgroundColor: '#140025',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageStyle: {
        backgroundColor: '#140025', // may replace w/ background image from GD students?
    },
    cardStyle: {
        backgroundColor: '#f79f27ff',
        paddingTop: '5%',
        paddingBottom: '5%',
        marginLeft: '5%',
        borderRadius: 10,
        borderColor: '#f79f27ff',
        width: '90%',
    },
    cardHeader: {
        backgroundColor: '#f79f27ff',
    },
    cardBody: {
        backgroundColor: '#f79f27ff',
        width: '100%',
        flex: 1,
    },
    cardBodyVideo: {
        backgroundColor: '#f79f27ff',
        height: 250,
        width: '100%',
        flex: 1,
    },
    cardText: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 18,
        color: '#140025',
        letterSpacing: 2,
    },
    cardCaptionText: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 18,
        color: '#140025',
        letterSpacing: 2,
        lineHeight: 30 
    }, 
    animationStyle: {
        marginTop: '2%',
        marginBottom: '2%',
        width: '100%',
        height: 215
    },
    sketchStyle: {
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '2%',
        marginBottom: '2%',
        width: '80%',
        height: 300,
        resizeMode:'contain'   
    },
};