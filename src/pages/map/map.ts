import { Component } from '@angular/core';
import {Location} from "../../models/location";
import { Geolocation } from "@ionic-native/geolocation";
import {LoadingController} from "ionic-angular";
import {NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult} from "@ionic-native/native-geocoder";

@Component({
    selector: 'page-map',
    templateUrl: 'map.html',
})
export class MapPage {
    startPos;
    loading;
    geoError;
    geoSuccess;
    location: Location;
    marker: Location;
    styles: any[];
    iconBase = '/assets/imgs/marker.png';
    show;
    constructor(private geolocation: Geolocation, public loadingCtr: LoadingController, private nativeGeocoder: NativeGeocoder) {
        this.location = {
            lat : -16.689682,
            lng: -49.277111
        };
        this.show = false;
        this.geoSuccess = function(position) {
            // hideNudgeBanner();
            // We have the location, don't display banner
            // clearTimeout(nudgeTimeoutId);

            // Do magic with location
            this.startPos = position;
            alert(this.startPos)
            document.getElementById('startLat').innerHTML = this.startPos.coords.latitude;
            document.getElementById('startLon').innerHTML = this.startPos.coords.longitude;
        };
        this.geoError = function(error) {
            switch(error.code) {
                case error.TIMEOUT:
                    // The user didn't accept the callout
                    // showNudgeBanner();
                    break;
            }
        };
        this.geolocation.getCurrentPosition().then((resp)=> {
            console.log(resp)
            this.location.lat = resp.coords.latitude;
            this.location.lng = resp.coords.longitude;
        }).catch((error)=>{
           console.log(error)
            alert(JSON.stringify(error))
        });
        this.loading = this.loadingCtr.create({
            spinner: 'crescent',
            content: 'Opa, estamos preparando o mapa para você!'
        });
        this.styles =  [
            {elementType: 'geometry', stylers: [{color: '#ffffff'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: null}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#01579B'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#01579B'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#66BB6A'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#dddddd'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#eeeeee'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#bbbbbb'}]
            },{
                featureType: 'road',
                elementType: 'labels.text.stroke',
                stylers: [{color: null}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#dddddd'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#fff'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#4FC3F7'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    }

    presentLoadingCrescent() {
        this.loading.present();
    }

    ionViewDidEnter() {
        this.presentLoadingCrescent();
    }

    mapReadyDo() {
        this.marker = new Location(this.location.lat, this.location.lng);
        this.nativeGeocoder.reverseGeocode(this.location.lat, this.location.lng)
            .then((result: NativeGeocoderReverseResult) => console.log(JSON.stringify(result)))
            .catch((error: any) => console.log(error));
        console.log('Pronto');
        setTimeout(() => {
            this.loading.dismiss();
        }, 1000);
    }

    onSetMarker(event: any) {
        console.log(event);
        this.marker = new Location(event.coords.lat, event.coords.lng);
        this.loading.dismiss();
        // navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
    }
}
