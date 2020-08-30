import { LoginService } from "./pages/login/login.service";
import { NotaCreditoModule } from "./pages/nota-credito/nota-credito.module";
import { DescentModule } from "./pages/descent/descent.module";
import { DdoModule } from "./pages/ddo/ddo.module";
import { AcaoModule } from "./pages/acao/acao.module";
import { MaterialModule } from "./shared/material/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./shared/header/header.component";
import { NavComponent } from "./shared/nav/nav.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { UsuarioComponent } from "./pages/usuario/usuario.component";
import { UsuarioCreateComponent } from "./pages/usuario/usuario-create/usuario-create.component";
import { UsuarioUpdateComponent } from "./pages/usuario/usuario-update/usuario-update.component";
import { UsuarioDeleteComponent } from "./pages/usuario/usuario-delete/usuario-delete.component";
import { LicitacaoModule } from "./pages/licitacao/licitacao.module";
import { UgComponent } from "./pages/ug/ug.component";
import { UgListComponent } from "./pages/ug/ug-list/ug-list.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { LayoutModule } from "@angular/cdk/layout";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent,
    UsuarioDeleteComponent,
    UgComponent,
    UgListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AcaoModule,
    LicitacaoModule,
    DdoModule,
    DescentModule,
    NotaCreditoModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
    LoginService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
