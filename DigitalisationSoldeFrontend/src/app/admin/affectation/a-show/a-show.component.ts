import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDossier } from 'src/app/_interfaces/dossier';
import { DossierService } from 'src/app/_services/dossier.service';

@Component({
  selector: 'app-a-show',
  templateUrl: './a-show.component.html',
  styleUrls: ['./a-show.component.scss']
})
export class AShowComponent {
  form: any
  dossier?: IDossier
  id: number = 0;
  constructor(private route: ActivatedRoute,
    private router: Router, 
    private dossierService: DossierService) { }

  ngOnInit(): void {


    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') as unknown as number

    });

    this.dossierService.getDossier(this.id).subscribe({
      next: dossier => {
        this.dossier = dossier
        console.log(this.dossier)
      }
    });


  }
  public backToList(): void {
    this.router.navigate(['/admin/affectation']);
  }
}
