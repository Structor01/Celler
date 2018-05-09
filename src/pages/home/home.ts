import { Component } from '@angular/core';
import { Location } from "../../models/location";
import { MapPage } from "../map/map";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  location: Location;
  marker: Location;
  map: any;
  constructor() {
    this.location = {
      lat : -16.689682,
      lng: -49.277111
    };

    this.map = MapPage;
  }

  onSetMarker(event: any) {
    this.marker = new Location(event.coords.lat, event.coords.lng);
  }
}
