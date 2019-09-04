import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncryptionComponent } from './encryption/encryption.component';
import { DecryptionComponent } from './decryption/decryption.component';
import { ToggleEncDecComponent } from './toggle-enc-dec/toggle-enc-dec.component';
import { OverviewComponent } from './overview/overview.component';


const routes: Routes = [
  {path: 'encryption', component: EncryptionComponent},
  {path: 'decryption', component: DecryptionComponent},
  {path: 'toggle-mode', component: ToggleEncDecComponent},
  {path: 'overview', component: OverviewComponent},
  {path: '', redirectTo: '/overview', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
