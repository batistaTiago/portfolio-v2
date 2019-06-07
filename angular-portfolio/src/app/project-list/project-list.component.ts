import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    // const serverResponseDelay = Math.floor(Math.random() * 3500 + 1500)

    const serverResponseDelay = 0;

    setTimeout(
      () => {
        this.projects = [
          {
            id: 0,
            titulo: 'Pássaro Urbano',
            imagens: [
              '/assets/images/passaro-urbano/logo.png',
              '/assets/images/passaro-urbano/passaro-urbano1.png',
              '/assets/images/passaro-urbano/passaro-urbano2.png',
              '/assets/images/passaro-urbano/passaro-urbano3.png',
            ],
            descricao: 'Web app baseado no Peixe Urbano. Desenvolvido com Angular 7 e Firebase. O app oferece a possibilidade de criar cadastro (consumidor/anunciante), publicar/editar/deletar ofertas (caso tipo de conta seja anunciante) e realizar compras. Além disso, o app também é integrado a uma API de CEPs, fazendo a busca de endereço automaticamente utilizando abordagem AJAX. ',
            deployUrl: 'http://batista-tiago-ekyidag.s3-website-sa-east-1.amazonaws.com',
            gitUrl: 'https://github.com/batistatiago/passaro-urbano'
          }
        ]
      }, serverResponseDelay
    )
  }

  public projects: any[] = [
    // {
    //   id: 0,
    //   titulo: 'Pássaro Urbano',
    //   imagens: [
    //     '/assets/images/passaro-urbano/logo.png',
    //     '/assets/images/passaro-urbano/passaro-urbano1.png',
    //     '/assets/images/passaro-urbano/passaro-urbano2.png',
    //     '/assets/images/passaro-urbano/passaro-urbano3.png',
    //   ],
    //   descricao: 'Web app baseado no Peixe Urbano. Desenvolvido com Angular 7 e Firebase. O app oferece a possibilidade de criar cadastro (consumidor/anunciante), publicar/editar/deletar ofertas (caso tipo de conta seja anunciante) e realizar compras. Além disso, o app também é integrado a uma API de CEPs, fazendo a busca de endereço automaticamente utilizando abordagem AJAX. ',
    //   deployUrl: 'http://batista-tiago-ekyidag.s3-website-sa-east-1.amazonaws.com',
    //   gitUrl: 'https://github.com/batistatiago/passaro-urbano'
    // }
  ]

}
