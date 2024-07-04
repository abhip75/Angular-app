import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductManagementComponent } from './product-management/product-management.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    ProductManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
