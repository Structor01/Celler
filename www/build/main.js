webpackJsonp([2],{

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/places/places.module": [
		298,
		1
	],
	"../pages/planned/planned.module": [
		299,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_location__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(app, menu) {
        this.location = {
            lat: -16.689682,
            lng: -49.277111
        };
        this.map = __WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */];
        menu.enable(true);
    }
    HomePage.prototype.onSetMarker = function (event) {
        this.marker = new __WEBPACK_IMPORTED_MODULE_1__models_location__["a" /* Location */](event.coords.lat, event.coords.lng);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/arthurbarros/Desktop/Projetos/Celler/Celler_v1/src/pages/home/home.html"*/'<ion-header>\n  <ion-row>\n    <ion-col col-2>\n      <button ion-button icon-only clear menuToggle float-start>\n        <ion-icon color="primary" name="md-menu"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col text-center col-8>\n      <img width="20%" src="assets/imgs/icon.png">\n    </ion-col>\n    <ion-col col-2>\n      <button ion-button icon-only clear float-end>\n        <ion-icon color="primary" name="md-settings"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-menu type="overlay" [content]="content">\n  <ion-header>\n    <ion-list>\n      <ion-item>\n        <ion-avatar item-start="">\n          <img src="https://scontent.fgyn3-1.fna.fbcdn.net/v/t1.0-9/31445063_1527021374063269_6630260406336094208_n.jpg?_nc_cat=0&oh=8c9b1ae8ed0dc8e123f01dfe08aa39ec&oe=5B572810">\n        </ion-avatar>\n        <h2>Arthur Barros</h2>\n        <p>Premium</p>\n      </ion-item>\n    </ion-list>\n  </ion-header>\n  <!--<ion-content>-->\n    <!--<ion-list>-->\n      <!--<button ion-item (click)="openPage(homePage)">-->\n        <!--Home-->\n      <!--</button>-->\n      <!--<button ion-item (click)="openPage(friendsPage)">-->\n        <!--Friends-->\n      <!--</button>-->\n      <!--<button ion-item (click)="openPage(eventsPage)">-->\n        <!--Events-->\n      <!--</button>-->\n      <!--<button ion-item (click)="closeMenu()">-->\n        <!--Close Menu-->\n      <!--</button>-->\n    <!--</ion-list>-->\n  <!--</ion-content>-->\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n<ion-content padding [ngStyle]="{\'background\':\'#006699\'}">\n  <ion-row>\n    <ion-col text-center col-6>\n      <button ion-button clear icon-only col-12 [navPush]="map">\n        <ion-icon name="md-paper-plane"></ion-icon>\n      </button>\n      <p>Iniciar</p>\n    </ion-col>\n    <ion-col text-center col-6>\n      <button ion-button icon-only clear col-12>\n        <ion-icon name="md-time"></ion-icon>\n      </button>\n      <p>Histórico</p>\n    </ion-col>\n    <ion-col text-center col-6 >\n      <button ion-button icon-only clear col-12>\n        <ion-icon name="md-stopwatch"></ion-icon>\n      </button>\n      <p>Programar Entrega</p>\n    </ion-col>\n    <ion-col text-center col-6>\n      <button ion-button icon-only clear col-12>\n        <ion-icon name="md-map"></ion-icon>\n      </button>\n      <p>Meus Lugares</p>\n    </ion-col>\n    <ion-col></ion-col>\n    <ion-col text-center col-6 >\n      <button ion-button icon-only clear col-12>\n        <ion-icon name="logo-usd"></ion-icon>\n      </button>\n      <p>Meus Créditos</p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/arthurbarros/Desktop/Projetos/Celler/Celler_v1/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
var Location = /** @class */ (function () {
    function Location(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    return Location;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_location__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapPage = /** @class */ (function () {
    function MapPage(geolocation, loadingCtr, nativeGeocoder, events, cdRef, modal) {
        this.geolocation = geolocation;
        this.loadingCtr = loadingCtr;
        this.nativeGeocoder = nativeGeocoder;
        this.events = events;
        this.cdRef = cdRef;
        this.modal = modal;
        this.origemSet = false;
        this.iconBase = '/assets/imgs/marker.png';
        this.showOrigem = true;
        this.location = {
            lat: -16.689682,
            lng: -49.277111
        };
        this.styles = [
            { elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: null }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#01579B' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#01579B' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#66BB6A' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#dddddd' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#eeeeee' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#bbbbbb' }]
            }, {
                featureType: 'road',
                elementType: 'labels.text.stroke',
                stylers: [{ color: null }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#dddddd' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#fff' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#4FC3F7' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ];
    }
    MapPage.prototype.presentLoadingCrescent = function (text) {
        this.loading = this.loadingCtr.create({
            spinner: 'crescent',
            content: text
        });
        this.loading.present();
    };
    MapPage.prototype.ngOnInit = function () {
        var _this = this;
        // this.presentLoadingCrescent('Opa, estamos preparando o mapa para você!');
        this.events.subscribe('changeOrigin', function (data) {
            console.log('SUBS');
            setTimeout(function () {
                _this.originVal = _this.originChanged;
                _this.cdRef.detectChanges();
            }, 1000);
        });
    };
    MapPage.prototype.ngOnDestroy = function () {
        this.events.unsubscribe('changeOrigin');
    };
    MapPage.prototype.mapReadyDo = function () {
        var _this = this;
        this.myLocation();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 1000);
    };
    MapPage.prototype.onSetMarker = function (event) {
        this.presentLoadingCrescent('Anotando o endereço...');
        console.log(event);
        this.location.lat = event.coords.lat;
        this.location.lng = event.coords.lng;
        this.marker = new __WEBPACK_IMPORTED_MODULE_1__models_location__["a" /* Location */](event.coords.lat, event.coords.lng);
        this.getAddress(event.coords.lat, event.coords.lng);
        this.loading.dismiss();
        // navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
    };
    MapPage.prototype.getAddress = function (lat, lng) {
        var _this = this;
        this.nativeGeocoder.reverseGeocode(lat, lng)
            .then(function (result) { return _this.setOrigin(result); })
            .catch(function (error) { return alert('Erro ' + error); });
    };
    MapPage.prototype.searchAddress = function (ev) {
        var _this = this;
        this.nativeGeocoder.forwardGeocode(ev.value)
            .then(function (coordinates) {
            _this.location.lat = parseFloat(coordinates[0]['latitude']);
            _this.location.lng = parseFloat(coordinates[0]['longitude']);
            _this.marker = new __WEBPACK_IMPORTED_MODULE_1__models_location__["a" /* Location */](_this.location.lat, _this.location.lng);
        })
            .catch(function (error) { return console.log(error); });
        // console.log(ev);
    };
    MapPage.prototype.setOrigin = function (val) {
        console.log(val);
        var address;
        address = val[0]['thoroughfare'];
        val[0]['subThoroughfare'] != '' ? address += ', ' + val[0]['subThoroughfare'] : false;
        address += ', ' + val[0]['subLocality'];
        this.originChanged = address;
        this.events.publish('changeOrigin');
    };
    MapPage.prototype.myLocation = function () {
        var _this = this;
        this.presentLoadingCrescent('Procurando você...');
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp);
            _this.location.lat = resp.coords.latitude;
            _this.location.lng = resp.coords.longitude;
            _this.marker = new __WEBPACK_IMPORTED_MODULE_1__models_location__["a" /* Location */](_this.location.lat, _this.location.lng);
            _this.getAddress(_this.location.lat, _this.location.lng);
            _this.origemSet = true;
            _this.loading.dismiss();
        }).catch(function (error) {
            console.log(error);
            alert(JSON.stringify(error));
        });
    };
    MapPage.prototype.confirma = function (ev) {
        alert(this.originVal);
        this.showEntrega = true;
        this.showOrigem = false;
    };
    MapPage.prototype.clearVal = function () {
        this.originVal = '';
        this.cdRef.detectChanges();
    };
    MapPage.prototype.mapsSearchBar = function (ev) {
        // set input to the value of the searchbar
        //this.search = ev.target.value;
        console.log(ev);
        var autocomplete = new google.maps.places.Autocomplete(ev);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    sub.next(place.geometry.location);
                    sub.complete();
                }
            });
        });
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/arthurbarros/Desktop/Projetos/Celler/Celler_v1/src/pages/map/map.html"*/'<ion-header>\n  <ion-list>\n    <ion-item id="origem" *ngIf="showOrigem">\n      <ion-label floating>Origem</ion-label>\n      <ion-input [(ngModel)]="origin" type="text" value="{{ originVal }}" (ionBlur)="searchAddress($event)" (ionFocus)="clearVal()"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="showEntrega">\n      <ion-label floating>Local de Entrega</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-header>\n<agm-map\n  [latitude]="location.lat"\n  [longitude]="location.lng"\n  [zoom]="19"\n  [minZoom]="16"\n  (mapClick)="onSetMarker($event)"\n  [styles]= "styles"\n  (mapReady)="mapReadyDo()"\n>\n  <agm-marker\n    [latitude]="marker.lat"\n    [longitude]="marker.lng"\n    *ngIf="marker"\n    iconUrl="assets/imgs/marker.png"\n  ></agm-marker>\n</agm-map>\n<ion-footer padding="">\n  <ion-row>\n    <ion-col text-center col text-left>\n      <button ion-button clear icon-only color="light" navPop>\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col text-center col text-end>\n      <button ion-button clear icon-only color="light">\n        <ion-icon name="md-stopwatch"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col text-center col text-end>\n      <button ion-button clear icon-only color="light" (click)="myLocation()">\n        <ion-icon name="md-locate"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col text-center col *ngIf="origemSet" text-end>\n      <button ion-button color="secondary" (click)="confirma($event)">\n        Confirmar\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Users/arthurbarros/Desktop/Projetos/Celler/Celler_v1/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */]) === "function" && _f || Object])
    ], MapPage);
    return MapPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_map_map__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_geocoder__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/places/places.module#PlacesPageModule', name: 'PlacesPage', segment: 'places', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/planned/planned.module#PlannedPageModule', name: 'PlannedPage', segment: 'planned', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAXFswmaC0DHZkwFYF-t3SDZRlC1CGUCNU'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/arthurbarros/Desktop/Projetos/Celler/Celler_v1/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/arthurbarros/Desktop/Projetos/Celler/Celler_v1/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map