import { Component } from '@angular/core';
import {Location} from "../../models/location";

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  location: Location;
  marker: Location;
  constructor() {
    this.location = {
      lat : -16.689682,
      lng: -49.277111
    };
  }

  onSetMarker(event: any) {
    this.marker = new Location(event.coords.lat, event.coords.lng);
  }

}
