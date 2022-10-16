import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['categorias']);
  }

}
