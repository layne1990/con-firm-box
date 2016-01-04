import {Component} from 'angular2/core';
import {OpportunityFormComponent} from './opportunity/opp-form.component';

@Component({
    selector: 'cfb-app',
    template: '<h1>My First Angular 2 App</h1><opportunity-form></opportunity-form>',
    directives: [OpportunityFormComponent]
})
export class AppComponent { }
