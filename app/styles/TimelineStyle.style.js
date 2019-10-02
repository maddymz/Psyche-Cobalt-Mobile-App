import {Fonts} from '../components/Fonts';

export default {
    pageHeadingText: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 32,
        paddingTop: '5%',
        paddingBottom: '1%', // prevent cuttoff letters
        color: 'white',
        width: '80%',
        letterSpacing: 2,
    },
    content: {
        backgroundColor: '#140025',
        marginLeft: '10%',
        marginRight: '10%'
    },
    pageStyle: {
        backgroundColor: '#140025', // may replace w/ background image from GD students?
    },
    timelineTitleStyle: {
        fontFamily: Fonts.RobotoBold,
        color: '#f79f27ff',
        fontSize: 20,
        padding: '3%',
        letterSpacing: 1,
    },
    timelineTimeStyle: {
        textAlign: 'center', 
        backgroundColor: '#f79f27ff', 
        color: '#140025', 
        padding: 7, 
        fontFamily: Fonts.RobotoMedium,
        fontSize: 16,
        overflow: 'hidden',
        borderRadius:10,
       
    },
    timeContainerStyle: {
        minWidth:52, 
        marginTop: 5,
    },
    timelineDescriptionStyle: {
        padding: '3%',
        fontFamily: Fonts.RobotoLight,
        fontSize: 16,
        color: 'white',
        letterSpacing: 1,
        lineHeight: 25
    },
    timelineContainerStyle: {
        backgroundColor: '#592951ff',
        marginTop: 20,
        paddingLeft: '3%',
        paddingRight: '3%',
        borderRadius: 10
    }
};