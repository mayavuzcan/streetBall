import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './pages/team/team.component';
import { FirstPageComponent } from './pages/firstPage/firstPage.component';
import { HeaderComponent } from './header/header.component';

import { CreatPlayerComponent } from './pages/creat/creatPlayer/creatPlayer.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { LoginPageComponent } from './pages/loginPage/loginPage.component';
import { SoloPageComponent } from './pages/SoloPage/SoloPage.component';



@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      TeamComponent,
      HeaderComponent,
      CreatPlayerComponent ,
      FirstPageComponent,
      SoloPageComponent,
      ProfilComponent,
      LoginPageComponent,
      HeaderComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      MatButtonModule,
      MatCheckboxModule,
      BrowserAnimationsModule,
      RouterModule.forRoot([

         {
            path: 'login',
            component: LoginComponent,
    
         },

         {
            path: '',
            component: FirstPageComponent,
    
         },
         {
            path: 'creatPlayer',
            component: CreatPlayerComponent,
    
         },
          {
            path: 'profil',
            component: ProfilComponent,
    
         },
         {
            path: 'welcome',
            component: LoginPageComponent,
    
         },
         {
            path: 'soloPlay',
            component: SoloPageComponent,
    
         },



         ])
   ],
   providers: [LoginService],
   bootstrap: [AppComponent]
})
export class AppModule { }
