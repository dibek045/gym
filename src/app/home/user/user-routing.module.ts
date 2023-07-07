import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
        children: [
                    {
                      path: 'auth-face', // child route path
              //        component: AuthFaceComponent, // child route component that the router renders
                    },
                    {
                      path: 'finger-print',
            //          component: FingerPrintComponent, // another child route component that the router renders
                    },

        ], 
  },
  
  // Otras rutas y componentes relacionados del módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class userRoutesRoutingModule { }
