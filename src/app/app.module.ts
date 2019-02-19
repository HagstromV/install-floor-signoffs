import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatRadioModule, 
  MatButtonModule, MatExpansionModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectOverview } from './project-overview/project-overview.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { FloorFramesComponent } from './floor-frames/floor-frames.component';
import { SingleFrameComponent } from './single-frame/single-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectOverview,
    SingleProjectComponent,
    FloorFramesComponent,
    SingleFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FloorFramesComponent]
})
export class AppModule {}
