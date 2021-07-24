
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AddComponent } from './global/add/add.component';
import { AdminComponent } from './global/admin/admin.component';
import { HomeUserComponent } from './global/admin/home-user/home-user.component';
import { GlobalComponent } from './global/global.component';
import { HistoriqueListComponent } from './global/historique-list/historique-list.component';
import { DetailsComponent } from './global/home/details/details.component';
import { HomeComponent } from './global/home/home.component';
import { ModifyComponent } from './global/modify/modify.component';
import { MyprofilComponent } from './global/myprofil/myprofil.component';
import { NotificationComponent } from './global/notification/notification.component';
import { ProfilComponent } from './global/profil/profil.component';
import { LoginComponent } from './loginn/login/login.component';

const routes : Routes =[
   
    {path : '' , component : LoginComponent},

    {path : 'login', component : LoginComponent},
    {path : '' , component : GlobalComponent,
     canActivate :[AuthGuard],
     children: [
    {path : 'modify/:id', component : ModifyComponent},
        {path : 'home' , component : HomeComponent},
        {path : 'profil' , component : MyprofilComponent},
        {path : 'add' , component : AddComponent},
    {path : 'admin' , component : AdminComponent},

        {path : 'notif' , component : NotificationComponent},
        {path : 'history' , component: HistoriqueListComponent},
        {path : 'details/:id' , component: DetailsComponent},
         {path:'admnHome/:id', component:HomeUserComponent}
        
    ]}
    

];
export const routing = RouterModule.forRoot(routes);
