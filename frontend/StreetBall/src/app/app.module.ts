import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './pages/team/team.component';
import { FirstPageComponent } from './pages/first/firstPage/firstPage.component';



@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      TeamComponent,
      FirstPageComponent,
      
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,

      
      RouterModule.forRoot([
         {
            path: '',
            component: LoginComponent,
    
          },
          {
            path: 'TeamPage',
            component: TeamComponent,
    
          },

          {
            path: 'FirstPage',
            component: FirstPageComponent,
    
          },
      ])
   ],
   providers: [LoginService],
   bootstrap: [AppComponent]
})
export class AppModule { }
