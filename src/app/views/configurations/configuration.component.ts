import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

@Component({
  styleUrls: ['./configuration.component.scss'],
  templateUrl: 'configutation.component.html'
})
export class ConfigurationComponent implements OnInit {

  configurationFormGroup: FormGroup;
  minDate = new Date();
  emailPattern = /^\s*[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}\s*$/;
  validTimer = true;
  constructor(private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.configurationFormGroup = new FormGroup({
      emailControl: new FormControl('', [Validators.pattern(this.emailPattern)]),
      dateControl: new FormControl('', [Validators.required]),
      timerControl: new FormControl('', [Validators.required, (control: AbstractControl) => this.customValidationTimer(control)])
    });
  }

  customValidationTimer(control: AbstractControl) {
    const value = control.value;

    if (!value) {
      return null;
    }
  }

  isValid(event: boolean): void {
    this.validTimer = event;
  }

  onSave(){
    this.notificationService.success('La configuracion se guardo correctamente');
  }
}
