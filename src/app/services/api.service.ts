import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  test = 19
  les_livres: any[] = [
    { titre: "livre 1", prix: 1000 },
    { titre: "livre 2", prix: 2500 },
  ]
  constructor() { }
  get_user() {
    let user_string: any = localStorage.getItem("user");
    let user = JSON.parse(user_string)
    console.log("user = ", user)
  }
  save_user() {
    let user: any = { id: 1, prenom: "Mouhamed", nom: "Amar" }
    let user_string = JSON.stringify(user)
    localStorage.setItem("user", user_string);
  }
  delete_user() {
    localStorage.removeItem("user");
  }
  update_user() {
    let user: any = { id: 2, prenom: "Lamine", nom: "Fall" }
    let user_string = JSON.stringify(user)
    localStorage.setItem("user", user_string);
  }

}
