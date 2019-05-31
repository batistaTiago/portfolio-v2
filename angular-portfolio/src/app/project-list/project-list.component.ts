import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public projects: any[] = [
    {
      id: 0,
      titulo: 'Pássaro Urbano',
      imagens: [
        '/assets/images/passaro-urbano/logo.png',
        '/assets/images/passaro-urbano/passaro-urbano1.png',
        '/assets/images/passaro-urbano/passaro-urbano2.png',
        '/assets/images/passaro-urbano/passaro-urbano3.png',
      ],
      descricao: 'Web app baseado no Peixe Urbano. Desenvolvido com Angular 7 e Firebase. O app oferece a possibilidade de criar cadastro (consumidor/anunciante), publicar/editar/deletar ofertas (caso tipo de conta seja anunciante) e realizar compras. Além disso, o app também conta com uma integração com API de CEPs, fazendo a busca de endereço automaticamente usando metodologia AJAX.',
      deployUrl: 'http://batista-tiago-ekyidag.s3-website-sa-east-1.amazonaws.com'
    }
  ]

}
