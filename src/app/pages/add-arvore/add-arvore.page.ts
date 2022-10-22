import { Component, OnInit } from '@angular/core';
import { Arvore } from 'src/app/models/arvore';

@Component({
  selector: 'app-add-arvore',
  templateUrl: './add-arvore.page.html',
  styleUrls: ['./add-arvore.page.scss'],
})
export class AddArvorePage implements OnInit {
  arvore: Arvore = new Arvore();
  constructor() { }

  ngOnInit() {
  }

}
