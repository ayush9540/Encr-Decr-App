import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PracticeComponent } from './practice/practice.component';
import { ToggleEncDecComponent } from './toggle-enc-dec/toggle-enc-dec.component';
import { HeaderComponent } from './header/header.component';
import { EncryptionComponent } from './encryption/encryption.component';
import { DecryptionComponent } from './decryption/decryption.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    ToggleEncDecComponent,
    HeaderComponent,
    EncryptionComponent,
    DecryptionComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
