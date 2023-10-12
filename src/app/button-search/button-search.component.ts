import { Component } from '@angular/core';

@Component({
  selector: 'app-button-search',
  template: '<button class="button-search">Search</button>',
  styles: ['.button-search{\n' +
  '  padding: 0.5rem;\n' +
  '  border: none;\n' +
  '  border-radius: 0.3rem;\n' +
  '  box-shadow:0 0 5px 0 grey ;\n' +
  '  font-size: 1rem;\n' +
  '  cursor: pointer;\n' +
  '}\n' +
  '.button-search:hover{\n' +
  '  background-color: #313030;\n' +
  '  color: white;\n' +
  '}\n']
})
export class ButtonSearchComponent {

}
