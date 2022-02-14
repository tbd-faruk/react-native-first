import {Navigation} from "react-native-navigation";
import Home from '../components/Home'
import BasicDetail from '../components/BasicDetail';
import ConfirmUser from '../components/ConfirmUser';
import CreatePassword from '../components/CreatePassword';
import EnterSmsPin from '../components/EnterSmsPin';
import UserInfo from '../components/UserInfo';
import Warning from '../components/Warning';

export const registerScreen = () =>{

    Navigation.registerComponent('IntroHome', ()=> Home);
    Navigation.registerComponent('UserNumber', ()=> BasicDetail);
    Navigation.registerComponent('ConfirmUser', ()=> ConfirmUser);
    Navigation.registerComponent('CreatePassword', ()=> CreatePassword);
    Navigation.registerComponent('EnterSmsPin', ()=> EnterSmsPin);
    Navigation.registerComponent('UserInfo', ()=> UserInfo);
    Navigation.registerComponent('Warning', ()=> Warning);
}