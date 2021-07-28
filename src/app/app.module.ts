import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { ArtistInformationService } from './services/bandsintown-api';
import { HeaderComponent } from './components/header/header.component';
import { ArtistInfoComponent } from './components/artist-info/artist-info.component';

import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ArtistInfoComponent,
    SearchFilterPipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ArtistInformationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
