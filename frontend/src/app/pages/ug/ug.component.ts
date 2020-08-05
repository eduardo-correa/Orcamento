import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UgService } from './ug.service';
import { Ug } from './ug.model';

@Component({
  selector: 'cggov-ug',
  templateUrl: './ug.component.html',
  styleUrls: ['./ug.component.scss']
})
export class UgComponent implements OnInit {

  ugs: Ug[];
  displayedColumns = ['cod_ug', 'uf', 'action'];

  constructor(private router: Router,
    private ugService: UgService) {}

  ngOnInit(): void {
    this.ugService.read().subscribe( retorno => {
      this.ugs = retorno
    })
  }

  novaUg(): void {
    this.router.navigate(['/ug/novo'])
  }

}
