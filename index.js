import {Navigation} from "react-native-navigation";
import { registerScreen } from "./src/config/routes";


Navigation.events().registerAppLaunchedListener(async () =>{
    registerScreen();

    Navigation.setRoot({
        root: {
            component:{
                name: "IntroHome"
            }
        }
    });
});
