import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {RegistrarComponent} from "./pages/registrar/registrar.component";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {HeaderComponent} from "./components/header/header.component";
import {MainComponent} from "./components/main/main.component";
import {CreditCardComponent} from "./components/creditCard/creditCard.component";
import {IngresosEgresosComponent} from "./components/ingresos-egresos/ingresos-egresos.component";
import {BalanceComponent} from "./components/balance/balance.component";
import {UltimasTransaccionesComponent} from "./components/ultimas-transacciones/ultimas-transacciones.component";
import {CuotasTablaComponent} from "./components/cuotas-tabla/cuotas-tabla.component";

// Angular Material
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";

// Charts
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrarComponent,
    SidenavComponent,
    HeaderComponent,
    MainComponent,
    CreditCardComponent,
    IngresosEgresosComponent,
    BalanceComponent,
    UltimasTransaccionesComponent,
    CuotasTablaComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    NgxChartsModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
