import { Injectable } from '@angular/core';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
 // departmentList: AngularFireList<any>;
  array = [{id:1,type:"day"},{id:2,type:"Mensual"},{id:3,type:"Anual"}];

  constructor() {
   // this.departmentList = this.firebase.list('departments');
  /*  this.departmentList.snapshotChanges().subscribe(
      list => {
        this.array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });*/
   }

/*
   getDepartmentName($key) {
    if ($key == "0")
      return "";
    else{
      return _.find(this.array, (obj) => { return obj.$key == $key; })['name'];
    }
  }
*/
}
