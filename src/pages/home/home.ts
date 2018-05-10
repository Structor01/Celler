import { Component } from '@angular/core';
import { Location } from "../../models/location";
import { MapPage } from "../map/map";
import {App, MenuController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  location: Location;
  marker: Location;
  map: any;
  constructor(app: App, menu: MenuController) {
    this.location = {
      lat : -16.689682,
      lng: -49.277111
    };

    this.map = MapPage;

      menu.enable(true);
  }

  onSetMarker(event: any) {
    this.marker = new Location(event.coords.lat, event.coords.lng);
  }
}
