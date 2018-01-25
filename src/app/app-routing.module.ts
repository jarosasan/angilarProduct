import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { FormComponent } from './product-list/form/form.component';

const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'create', component: FormComponent },
    { path: 'edit/:key', component: FormComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule],
    declarations: []
})
export class AppRoutingModule { }



