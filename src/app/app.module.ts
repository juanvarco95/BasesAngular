import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountModule } from './count/count.module';
import { DbzModule } from './dbz/dbz.module';
import { ExampleModule } from './example/example.module';
import { HeroesModule } from './hero\'s/heroes.module';
import { NameModule } from './name/name.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DbzModule,
    CountModule,
    BrowserModule,
    HeroesModule,
    NameModule,
    ExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
