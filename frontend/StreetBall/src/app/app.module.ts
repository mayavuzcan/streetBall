
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

import { CreatPlayerComponent } from './creat/creatPlayer/creatPlayer.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { LoginPageComponent } from './pages/loginPage/loginPage.component';
import { SoloPageComponent } from './pages/SoloPage/SoloPage.component';
import { PlayerService } from './services/Player/player.service';


import { AuthGuard} from './Guard/auth.guard';
import { PlayerUpdateComponent } from './update/Player/PlayerUpdate/PlayerUpdate.component';
import { ComunityComponent } from './comunity/comunity.component';
import { NewPlayerComponent } from './pages/newPlayer/newPlayer.component';
import { NewUpdateplayerComponent } from './pages/newUpdateplayer/newUpdateplayer.component';



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
      PlayerUpdateComponent,
      ComunityComponent,
      NewPlayerComponent,
      NewUpdateplayerComponent
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
            component: ProfilComponent,canActivate:[AuthGuard]
         },
         {
            path: 'welcome',
            component: LoginPageComponent,canActivate:[AuthGuard]
         },
         {
            path: 'soloPlay',
            component: SoloPageComponent,canActivate:[AuthGuard]
         },

         {
            path: 'updatePlayer',
            component: PlayerUpdateComponent,canActivate:[AuthGuard]
         },
         {
         path: 'comunityPage',
         component: ComunityComponent
         },
         {
            path: 'newPlayer',
            component: NewPlayerComponent
         },
         {
               path: 'newPlayerUpdate',
               component: NewUpdateplayerComponent
         },

         ])
   ],
   providers: [LoginService,
               PlayerService,
               AuthGuard],
   bootstrap: [AppComponent]
})
export class AppModule { }