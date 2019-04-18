import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { latLng, tileLayer, marker, CircleMarker, Marker, LatLng, Layer } from 'leaflet';

declare var $: any;

@Component({
    templateUrl: 'registroarticulo.component.html'
})
export class RegistroArticuloComponent implements OnInit {

    idArticulo = 0;
    dropifyElement: any;
    selectedFiles: File;
    map: L.Map;
    markers: Marker;
    options = {
        layers: [
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; Cd. Obregon, Sonora'
            }),
        ],
        zoom: 13,
        center: latLng([27.4773685, -109.9291206])
    };

    constructor(private route: ActivatedRoute, private _location: Location, private _toastr: NotificationService) {

    }

    ngOnInit(): void {

        // this.mark = new marker([46.879966, -121.726909], {draggable: true});
        this.route.params.subscribe(params => {
            this.idArticulo = params['id'] !== undefined ? +params['id'] : 0;
            if (this.idArticulo !== 0) {
                // buscar artículo
            }
        });

        this.dropifyElement = $('.dropify').dropify({
            error: {
                'fileSize': 'The file size is too big ({{ value }} max).',
                'maxWidth': 'The image width is too big ({{ value }}px max).',
                'maxHeight': 'The image height is too big ({{ value }}px max).',
            }
        });
    }


    selectFile(event: any) {
        const file = event.target.files.item(0);
        if (file.type.match('image.*')) {
            const fileReader = new FileReader();
            fileReader.onload = (ev: any) => {
                const img = new Image();
                img.onerror = (imageEvent: any) => {
                    this._toastr.error('La imagen es invalida');
                    this.selectedFiles = null;
                    this.reset();
                };
                img.src = ev.target.result;
                this.selectedFiles = file;
            };
            fileReader.readAsDataURL(file);
        }
    }

    reset() {
        const drEvent = $('.dropify').dropify();
        const dropify = drEvent.data('dropify');
        dropify.resetPreview();
        dropify.clearElement();
    }

    back() {
        this._location.back();
    }

    onDelete() {
        this._toastr.success('asi nomas');
    }

    onOpenMap() {
        setTimeout(() => {
            this.map.invalidateSize(false);
        }, 200);
    }

    onCopy() {
    }

    onMapReady(map: L.Map) {
        this.map = map;
    }

    onPutMarker(ass: any) {
        if (this.markers) {
            this.map.removeLayer(this.markers);
        }
        this.markers = new Marker([ass.latlng.lat, ass.latlng.lng], { draggable: true });
        this.markers.addTo(this.map);
    }

    onSave() {
        this._toastr.success('El artículo se guardó correctamente');
        this.back();
    }
}
