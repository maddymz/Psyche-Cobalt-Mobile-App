import HomeScreen from '../screens/HomeScreen';
import TimelineScreen from '../screens/TimelineScreen';
import SocialMediaScreen from '../screens/SocialMediaScreen';
import OverviewScreen from '../screens/OverviewScreen';
import AsteroidScreen from '../screens/AsteroidScreen';
import SpacecraftScreen from '../screens/SpacecraftScreen';
import ScienceScreen from '../screens/ScienceScreen';
import TeamScreen from '../screens/TeamScreen';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import SideMenu from '../components/SideMenu'

export default DrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Timeline: {
        screen: TimelineScreen
    },
    'Social Media': {
        screen: SocialMediaScreen
    },
    Overview: {
        screen: OverviewScreen
    },
    'The Asteroid': {
        screen: AsteroidScreen
    },
    'The Spacecraft': {
        screen: SpacecraftScreen
    },
    'Instruments and Science': {
        screen: ScienceScreen
    },
    'The Team': {
        screen: TeamScreen
    }
}, {
    initialRouteName: 'Home', // Set diff for testing right now
    contentComponent: SideMenu,
    drawerOpenRoute: 'openDrawer',
    drawerCloseRoute: 'closeDrawer',
    drawerToggleRoute: 'toggleDrawer',
})