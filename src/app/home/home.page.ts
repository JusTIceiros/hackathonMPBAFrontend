import { Component, Pipe  } from '@angular/core';
import { Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mapUrl;

  constructor(protected http: Http, private sanitizer:DomSanitizer) {}

  getMap(){

    let url = 'https://esb-hom.trt5.jus.br/justiceiros/service/obterMapaDeDenuncias';

    //this.mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=sao%20marcos,salvador,bahia,brasil&zoom=12&size=700x700&maptype=roadmap&markers=rua%20raul%20leite%20990%20ap%20404,BA&markers=largo%202%20de%20julho,BA&markers=rio%20vermelho,BA&markers=patamares,BA&markers=paralela,BA&key=AIzaSyAwXgvxWrgfpqDSXL0_iTarEY18N09y1RM';

    this.http.get(url, null).toPromise().then((response) => {
      let novoResponse: any = response;

      this.mapUrl = novoResponse._body;
      // let blob1 = new Blob([novoResponse._body], {type: 'image/png'})
      // this.mapUrl = URL.createObjectURL(blob1)

      //    var blob = new Blob([novoResponse._body], {
      //   type: 'image/png'
      // });
  
      
      //this.mapUrl = 'data:image/png;base64,'+ novoResponse._body;

     // this.sanitizer.bypassSecurityTrustHtml(this.mapUrl)
  
      // var reader = new FileReader();
      //     reader.readAsDataURL(blob);
      //     reader.onloadend = () => {
      //       this.mapUrl = reader.result;
      //       console.log(this.mapUrl);
      //     }

    })

   
   
  }

  sanitize(url: string) {
    //return url;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
