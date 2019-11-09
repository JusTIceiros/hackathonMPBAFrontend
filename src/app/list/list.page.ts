import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'information-circle-outline',
    'information-circle-outline',
    'information-circle-outline',
    'information-circle-outline',
    'information-circle-outline',
    'information-circle-outline',
    'information-circle-outline',
    'information-circle-outline',
    'information-circle-outline',
    'information-circle-outline'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  retorno;
  msg
  constructor(protected http: Http) {
    for (let i = 1; i < 5; i++) {
      this.items.push({
        title: 'Denúncia ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }

  tramita(){

    let url = 'https://esb-hom.trt5.jus.br/justiceiros/service/enviarPush';

    this.retorno = this.http.post(url,this.msg, null).toPromise();

    console.log(this.msg)
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
