import { Component } from '@angular/core';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.css'],

})
export class ListLivreComponent {
  recherche: string = ""
  constructor(public api: ApiService) {
    console.log(this.api.test)
  }

}
