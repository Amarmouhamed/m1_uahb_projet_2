import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  monFormulaire!: FormGroup
  constructor(private fb: FormBuilder, public api: ApiService) { }
  ngOnInit(): void {
    this.monFormulaire = this.fb.group({
      titre: "",
      prix: ""
    })
  }
  valider() {
    console.log(this.monFormulaire.value)
    this.api.les_livres.push(this.monFormulaire.value)
  }

}
