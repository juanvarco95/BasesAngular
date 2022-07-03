import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NameComponent } from './name/name.component';

@NgModule({
    declarations: [
        NameComponent
    ],
    exports: [
        NameComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class NameModule {}