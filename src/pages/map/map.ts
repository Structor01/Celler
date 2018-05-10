import { Component } from '@angular/core';
import {Location} from "../../models/location";

@Component({
    selector: 'page-map',
    templateUrl: 'map.html',
})
export class MapPage {

    location: Location;
    marker: Location;
    styles: any[];
    iconBase = '/assets/imgs/marker.png';
    constructor() {
        this.location = {
            lat : -16.689682,
            lng: -49.277111
        };

        this.styles =  [
            {elementType: 'geometry', stylers: [{color: '#E1F5FE'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: 'white'}]},
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
                stylers: [{color: '#006699'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#eeeeee'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ffffff'}]
            },{
                featureType: 'road',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#000000'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#006699'}]
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

    onSetMarker(event: any) {
        console.log(event);
        this.marker = new Location(event.coords.lat, event.coords.lng);
    }

}
