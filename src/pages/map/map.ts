import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Location} from "../../models/location";
import { Geolocation } from "@ionic-native/geolocation";
import {Events, LoadingController, ModalController} from "ionic-angular";
import {NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult} from "@ionic-native/native-geocoder";

@Component({
    selector: 'page-map',
    templateUrl: 'map.html',
})
export class MapPage implements OnInit {
    startPos;
    loading;
    origemSet = false;
    public originVal: string;
    public originChanged: string;
    location: Location;
    marker: Location;
    styles: any[];
    iconBase = '/assets/imgs/marker.png';
    showEntrega;
    showOrigem = true;

    constructor(
        private geolocation: Geolocation,
        public loadingCtr: LoadingController,
        private nativeGeocoder: NativeGeocoder,
        public events: Events,
        public cdRef:ChangeDetectorRef,
        public modal: ModalController
    ) {
        this.location = {
            lat : -16.689682,
            lng: -49.277111
        };

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

    presentLoadingCrescent(text: string) {
        this.loading = this.loadingCtr.create({
            spinner: 'crescent',
            content: text
        });
        this.loading.present();
    }

    ngOnInit() {
        // this.presentLoadingCrescent('Opa, estamos preparando o mapa para você!');
        this.events.subscribe('changeOrigin', (data) => {
            console.log('SUBS');
            setTimeout(()=>{
                this.originVal = this.originChanged;
                this.cdRef.detectChanges();
            }, 1000);
        });
    }

    ngOnDestroy() {
        this.events.unsubscribe('changeOrigin');
    }

    mapReadyDo() {
        this.myLocation();
        setTimeout(() => {
            this.loading.dismiss();
        }, 1000);
    }

    onSetMarker(event: any) {
        this.presentLoadingCrescent('Anotando o endereço...');
        console.log(event);
        this.location.lat = event.coords.lat;
        this.location.lng = event.coords.lng;
        this.marker = new Location(event.coords.lat, event.coords.lng);
        this.getAddress(event.coords.lat, event.coords.lng);
        this.loading.dismiss();
        // navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
    }

    getAddress(lat:any, lng:any) {
        this.nativeGeocoder.reverseGeocode(lat, lng)
            .then((result: NativeGeocoderReverseResult) => this.setOrigin(result))
            .catch((error: any) => alert('Erro '+error));
    }

    searchAddress(ev: any) {
        this.nativeGeocoder.forwardGeocode(ev.value)
            .then((coordinates: NativeGeocoderForwardResult) => {
                this.location.lat = parseFloat(coordinates[0]['latitude']);
                this.location.lng = parseFloat(coordinates[0]['longitude']);
                this.marker = new Location(this.location.lat, this.location.lng);
            })
            .catch((error: any) => console.log(error));
        // console.log(ev);
    }

    setOrigin(val: any) {
        console.log(val);
        let address: string;
        address = val[0]['thoroughfare'];
        val[0]['subThoroughfare'] != '' ? address += ', ' + val[0]['subThoroughfare'] : false;
        address += ', '+val[0]['subLocality']
        this.originChanged = address;
        this.events.publish('changeOrigin');
    }

    myLocation() {
        this.presentLoadingCrescent('Procurando você...');
        this.geolocation.getCurrentPosition().then((resp)=> {
            console.log(resp)
            this.location.lat = resp.coords.latitude;
            this.location.lng = resp.coords.longitude;
            this.marker = new Location(this.location.lat, this.location.lng);
            this.getAddress(this.location.lat, this.location.lng);
            this.origemSet = true;
            this.loading.dismiss();
        }).catch((error)=>{
            console.log(error)
            alert(JSON.stringify(error))
        });
    }

    confirma(ev: any) {
        alert(this.originVal);
        this.showEntrega = true;
        this.showOrigem = false;
    }

    clearVal() {
        this.originVal = '';
        this.cdRef.detectChanges();
    }
}
