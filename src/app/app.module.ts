import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import  { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormComponent } from './product-list/form/form.component';
import  { ProductService} from './product-list/share/product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireDatabaseModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }


