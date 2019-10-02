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
        paddingBottom: '1%',
        paddingLeft: '10%',
        paddingRight: '10%', // prevent cuttoff letters
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
        letterSpacing: 1,
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
        paddingTop: '5%',
        paddingBottom: '5%',
        color: 'white',
        letterSpacing: 2,
    },
    pageBodyTextAlt: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 18,
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '5%',
        color: 'white',
        letterSpacing: 2,
    },
    webLinkStyle: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 20,
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingBottom: '5%',
        color: '#ed5b68ff',
        letterSpacing: 2,
    },
    content: {
        backgroundColor: '#140025',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageStyle: {
        backgroundColor: '#140025', // may replace w/ background image from GD students?
    },
    teamPhoto: {
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '5%',
        width: '80%',
        height: 200    
    },
    teamCaptionText: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 18,
        marginTop: '4%',
        marginBottom: '5%', // prevent cuttoff letters
        paddingLeft: '10%',
        paddingRight: '10%', 
        color: '#ed5b68ff',
        width: '80%',
        letterSpacing: 2,
    }
};