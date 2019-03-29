import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../services/notification.service';



@Component({
  templateUrl: 'articulos.component.html'
})
export class ArticulosComponent implements OnInit {

  autoClose = false;

 
  constructor(private router: Router, private route: ActivatedRoute, private _toastr: NotificationService) {
  }

  ngOnInit(): void {

  }



  goToRegister() {

    // this.router.navigate(['/newarticulo', { id: 1 }]);
    this.router.navigate(['/newarticulo'], { relativeTo: this.route });

  }
}
