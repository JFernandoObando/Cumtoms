// angular import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule aquí
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { RolesComponent } from './settings/roles/roles.component'; // Asegúrate de importar el componente

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule, // Agrega HttpClientModule en el arreglo de imports
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}