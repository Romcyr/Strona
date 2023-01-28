import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrawyPanelComponent } from './prawy-panel/prawy-panel.component';
import { TloSrodekComponent } from './tlo-srodek/tlo-srodek.component';
import { PrawyPanelGlownyComponent } from './prawy-panel-glowny/prawy-panel-glowny.component';
import { PanelLewyComponent } from './panel-lewy/panel-lewy.component';
import { LewyGuzikComponent } from './lewy-guzik/lewy-guzik.component';
import {AppRoutingModule} from "./app-routing.module";
import { PageMainComponent } from './page-main/page-main.component';
import { PageStudentFormComponent } from './page-student-form/page-student-form.component';
import { PageStudentListComponent } from './page-student-list/page-student-list.component';
import {StudentService} from "./student-service/student.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PrawyPanelComponent,
    TloSrodekComponent,
    PrawyPanelGlownyComponent,
    PanelLewyComponent,
    LewyGuzikComponent,
    PageMainComponent,
    PageStudentFormComponent,
    PageStudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
