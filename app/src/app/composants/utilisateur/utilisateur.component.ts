import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  nom: string
  age: number
  email: string
  hobby : hobby

  utilisateurForm;

  constructor(private formBuilder: FormBuilder, private data: DataService) {
    this.nom = "Victor"
    this.age = 21
    this.email = "victorj.boix@gmail.com"
    this.hobby = {
      second: "PWA",
      third: "Dev Web",
      first: "Angular"
    }

    this.utilisateurForm = this.formBuilder.group({
      nom: this.nom,
      age: this.age,
      hobby1 : this.hobby.first,
      hobby2: this.hobby.second,
      hobby3: this.hobby.third,
      email: this.email
    })

  }

  ngOnInit(): void {

  }

  onClick() {
    alert("Aucune information supplémentaire")
  }

  onSubmit(utilisateurData) {
    // Process checkout data here

    this.nom = utilisateurData.nom
    this.age = utilisateurData.age
    this.hobby.first = utilisateurData.hobby1
    this.hobby.second = utilisateurData.hobby2
    this.hobby.third = utilisateurData.hobby3
    this.email = utilisateurData.email

    alert('Mise à jour Utilisateur ' + utilisateurData.nom);
  }

}

interface hobby {
  first: string
  second: string
  third: string
}
