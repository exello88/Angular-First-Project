import { Component, } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiseForArrayService } from '../servise-for-array.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  array!: any[];
  subscriptionUsers! : Subscription;

  constructor(private serviseForArrayService: ServiseForArrayService) { }

  ngOnInit() {
    this.subscriptionUsers = this.serviseForArrayService.generateArrayObservable().subscribe(
      (data) => {
        this.array = data;
      }
    );
    this.serviseForArrayService.callApiUserInfo();
  }

  ngOnDestroy(){
    this.subscriptionUsers.unsubscribe();
  }
}
