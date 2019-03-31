import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
declare var $: any;


@Component({
  templateUrl: 'photos.component.html'
})
export class PhotosComponent implements OnInit {

  autoClose = false;
  dropifyElement: any;
  selectedFiles: File;
  constructor(private router: Router, private route: ActivatedRoute, private _toastr: NotificationService) {
  }

  ngOnInit(): void {
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

  goToRegister() {

    // this.router.navigate(['/newarticulo', { id: 1 }]);
    // this.router.navigate(['/newarticulo'], { relativeTo: this.route });

  }

  onDelete() {
    this._toastr.success('La categoría se ha eliminado correctamente');
  }

  onSaveCategory() {
    this._toastr.success('La categoría se guardó correctamente');
  }

  goToRegisterPhoto() {
    this.router.navigate(['/newphoto'], { relativeTo: this.route });
  }
}
