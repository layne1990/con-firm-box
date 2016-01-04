import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Opportunity }    from './opp';

@Component({
  selector: 'opportunity-form',
  templateUrl: 'app/opportunity/opp-form.component.html'
})
export class OpportunityFormComponent {

  workLocations = ['Onsite', 'Offsite',
            'Mixed'];

  model = new Opportunity(18, 'Dr IQ', this.workLocations[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


}