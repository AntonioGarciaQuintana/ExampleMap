import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../services/notification.service';



@Component({
  templateUrl: 'categorias.component.html'
})
export class CategoriasComponent implements OnInit {

  autoClose = false;
  constructor(private router: Router, private route: ActivatedRoute, private _toastr: NotificationService) {
  }

  ngOnInit(): void {

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
}
