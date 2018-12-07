import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl:'./user.component.html',
})
export class UserComponent  {
  userDetails:any=[{ id: 1, name: 'Rajesh' },
  { id: 2, name: 'Ritesh' },
  { id: 3, name: 'Snephal' }];
  @Input() inputValue:string;

}