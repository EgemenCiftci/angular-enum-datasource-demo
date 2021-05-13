import { Component } from '@angular/core';
import { SomeStringEnum } from './some-string-enum.enum';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  someStringEnumValues = Object.values(SomeStringEnum);
  someCustomStringEnumValues = Object.values(SomeStringEnum).filter(
    f => f !== SomeStringEnum.none
  );
  selectedValue0 = SomeStringEnum.none;
  selectedValue1 = SomeStringEnum.none;
  selectedValue2 = SomeStringEnum.enum0;
}
