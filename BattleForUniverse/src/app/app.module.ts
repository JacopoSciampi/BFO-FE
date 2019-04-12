import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';

import { AuthGuard } from './shared/services/auth.guard';
import { HttpService } from './shared/services/http-service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        routing,
        HttpModule,
        BrowserModule,
        BrowserAnimationsModule,
    ],
    providers: [
        AuthGuard,
        HttpService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
