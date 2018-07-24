import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InvoiceFormComponent } from './components/home/invoice-form/invoice-form.component';
import { InvoiceListComponent } from './components/home/invoice-list/invoice-list.component';
import { InvoiceItemComponent } from './components/home/invoice-item/invoice-item.component';
import { InvoiceItemSettingsComponent } from './components/home/invoice-item-settings/invoice-item-settings.component';
import { InvoiceSearchComponent } from './components/home/invoice-search/invoice-search.component';

import { AuthService } from './services/auth/auth.service';
import { LogoutComponent } from './components/logout/logout.component';

const appRoutes : Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'invoices', component: HomeComponent },
    {
        path: '**',
        redirectTo: '/invoices',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        InvoiceFormComponent,
        InvoiceListComponent,
        InvoiceItemComponent,
        InvoiceItemSettingsComponent,
        InvoiceSearchComponent,
        LogoutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
        ),
        HttpClientModule,
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
