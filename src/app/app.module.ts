import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'template-driven-form', component: TemplateDrivenFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'dynamic-form', component: DynamicFormComponent},
  {path: '**', redirectTo: 'home'},
]

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    HomePageComponent,
    ReactiveFormComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
