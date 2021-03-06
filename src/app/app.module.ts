import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from "@ionic-native/geolocation";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AgmCoreModule} from "@agm/core";
import {MapPage} from "../pages/map/map";
import {NativeGeocoder} from "@ionic-native/native-geocoder";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        MapPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAXFswmaC0DHZkwFYF-t3SDZRlC1CGUCNU'
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        MapPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Geolocation,
        NativeGeocoder,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
