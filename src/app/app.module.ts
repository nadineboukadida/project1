import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './loginn/login/login.component';
import { SignupComponent } from './loginn/signup/signup.component';
import { GlobalComponent } from './global/global.component';
import { HomeComponent } from './global/home/home.component';
import { routing } from './app.routing';
import { HeaderComponent } from './global/header/header.component';
import { TabComponent } from './global/tab/tab.component';
import { ElementComponent } from './global/home/element/element.component';
import { AddComponent } from './global/add/add.component';
import { ProfilComponent } from './global/profil/profil.component';
import { NotificationComponent } from './global/notification/notification.component';
import { ElementnotifComponent } from './global/notification/elementnotif/elementnotif.component';
import { HistoriqueListComponent } from './global/historique-list/historique-list.component';
import { DetailsComponent } from './global/home/details/details.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule, ɵAngularFireSchedulers } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AuthGuard } from './auth.guard';
import { MyprofilComponent } from './global/myprofil/myprofil.component';
import { AdminComponent } from './global/admin/admin.component';
import { AdmnComponent } from './global/admin/admn/admn.component';
import { HomeUserComponent } from './global/admin/home-user/home-user.component';
import { ElementUserComponent } from './global/admin/home-user/element-user/element-user.component';
// import { ElementUserComponent } from './global/admin/homeUser/element-user/element-user.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    GlobalComponent,
    HomeComponent,
    HeaderComponent,
    TabComponent,
    ElementComponent,
    AddComponent,
    ProfilComponent,
    NotificationComponent,
    ElementnotifComponent,
    HistoriqueListComponent,
    DetailsComponent,
    MyprofilComponent,
    AdminComponent,
    AdmnComponent,
    HomeUserComponent,
    ElementUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule,
    routing,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }), AngularFireModule.initializeApp(environment.firebaseConfig)
    ,AngularFirestoreModule 

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
