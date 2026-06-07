import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleComponent} from "./components/title/title.component";
import {CoolInputDirective} from "./directives/cool-input.directive";
import {IsChickenDirective} from "./directives/is-chicken.directive";
import {ChickenDescriptionPipe} from "./pipes/chicken-description.pipe";
import {ChickenProductsPipe} from "./pipes/chicken-products.pipe";
import {WordUpperPipe} from "./pipes/word-upper.pipe";
import {RouterModule} from "@angular/router";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    TitleComponent,
    ProductCardComponent,
    CoolInputDirective,
    IsChickenDirective,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    WordUpperPipe,
    PopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    TitleComponent,
    ProductCardComponent,
    CoolInputDirective,
    IsChickenDirective,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    WordUpperPipe,
    PopupComponent
  ]
})
export class SharedModule { }
