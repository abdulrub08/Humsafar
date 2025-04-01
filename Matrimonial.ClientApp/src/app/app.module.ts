import { NgModule } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
