import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  masonryItems = [
    { src: 'assets/images/Alejandra_Barba_003_2.jpg' },
    { src: 'assets/images/Ana_Bonilla_001_2.jpg' },
    { src: 'assets/images/Ana_Bonilla_002_2.jpg' },
    { src: 'assets/images/Ana_Bonilla_Ana_Bonilla_003_2.jpg' },
    { src: 'assets/images/Carlos_Alberto_Badillo_Baile_de_colores.jpg' },
    { src: 'assets/images/Carlos_Alberto_Badillo_Perdon_corazon.jpg' },
    { src: 'assets/images/Cecilia_Rebora_001.jpg' },
  ];

  private moreItems = [
    { src: 'assets/images/Ana_Teresa_Martinez_Alanis_amigo01.jpg' },
    { src: 'assets/images/Ana_Teresa_Martinez_Alanis_amigo02.jpg' },
    { src: 'assets/images/Ana_Teresa_Martinez_Alanis_amigo03.jpg' },
    { src: 'assets/images/Ana_Teresa_Martinez_Alanis_amigo04.jpg' },
    { src: 'assets/images/Ana_Teresa_Martinez_Alanis_amigo05.jpg' },
    { src: 'assets/images/Beatriz_Martin_Terceno_Juliana de viaje_1.jpg' },
    { src: 'assets/images/Beatriz_Martin_Terceno_Juliana_mar_3.jpg' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addMore(): void {
    this.masonryItems = this.masonryItems.concat(this.moreItems);
  }

  open(index: number): void {
    console.log(index);
  }

}
