import { Injectable, Injector } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({providedIn: 'root'})
export class HttpService {
  
  http: Http;
  headers: Headers = new Headers();
  TIMEOUT_HTTP = 20;

  constructor( protected injector: Injector ) {
                this.http = injector.get(Http);
  }

  send(){
    //return this.http.get(url, null).toPromise();
  }

  // send(url: string, dataToSend:any, httpOptions: any = {timeout: this.TIMEOUT_HTTP}) : Promise<any> {
  //     //url: Deve ser atribuida como a url completa: url = uRLBase + uRLServico;
  //   return new Promise<any> ((resolve, reject) => {
  //     if (!navigator.onLine) {
  //           reject({"message":Util.msgOffline});
  //     }
  //   else {
  //       let ajustarTimestamp = true; // FIXME: verificar se vale a pena fazer apenas em algumas requisições ou em todas.
  //       let dadoOriginal = JSON.stringify(dataToSend);
  //       dadoOriginal = this.limparStringJSON(dadoOriginal);
        
  //       let dataCripto = CriptografiaUtil.getInstance().encrypt(JSON.stringify(dataToSend));
        
  //       if( typeof dataToSend == 'string') //caso o body seja texto
  //         dataCripto = CriptografiaUtil.getInstance().encrypt(dataToSend);        

  //       dataToSend = { body:  "'"+ dataCripto + "'" };

  //       let headersData = this.getHeaders(this.headers);
  
  //       if(headersData){
  //         let headerCripto = CriptografiaUtil.getInstance().encrypt(JSON.stringify(headersData));
  //         dataToSend.header = "'"+ headerCripto + "'";
  //       }

  //       httpOptions.headers = this.headers;

  //           this.http.post(url, dataToSend, httpOptions).toPromise().then((response) => {

  //             if (ajustarTimestamp) {
  //               // Depende do servidor setar no response o cabeçalho "access-control-expose-headers" com valor "date"
  //               this.ajustarTimestampServidor(response.headers.get("Date"));
                
  //             }

  //               let novoResponse: any = response;
  //               let erro = {};
  //               //detecta erro no body original
  //               if (novoResponse._body == '' || this.isResponseComErro(novoResponse._body)) {
  //                    this.tratarErro(novoResponse._body, erro, url, dataToSend);
  //                    reject(erro);
  //               }

  //               let body: any;

  //               if(!this.isConteudoPdf(novoResponse)){
                  
  //                 //para versoes mais novas os dados vem criptografados
  //                 let jsonRetorno = novoResponse.json();
  //                 body = CriptografiaUtil.getInstance().decrypt(jsonRetorno.body);
  //                 //detecta erro no body que veio criptografado
  //                 if (this.isResponseComErro(body)) {
  //                   this.tratarErro(body, erro, url, dataToSend);
  //                   reject(erro);
  //                 }

  //                 let jsonHeader = JSON.parse(CriptografiaUtil.getInstance().decrypt(jsonRetorno.header));
  //                 this.configurarHeaderHttp(novoResponse.headers, jsonHeader);

  //                 novoResponse._body = body;
  //               }
  //               this.posSend(novoResponse);

  //               if (Util.isJson(novoResponse)) {
  //                   resolve(novoResponse);
  //               }
  //               else {
  //                   if(novoResponse._body){
  //                       var rtn:any = [];
  //                       rtn._body = novoResponse._body;
  //                       if (novoResponse.headers){
  //                           rtn.headers = novoResponse.headers;
  //                       }
  //                       resolve(rtn)
  //                   }
  //                   else{
  //                       resolve(novoResponse);
  //                   }
  //               }
  //           })
  //           .catch(error =>{
  //             let erro = {};
  //             if(!error.message){
  //                this.configurarObjetoErro(erro,'message','Serviço indisponível. Tente novamente mais tarde')
  //             }
  //             else{
  //               this.configurarObjetoErro(erro,'message',error.message)
  //             }
  //              this.configurarObjetoErro(erro,'message','Serviço indisponível. Tente novamente mais tarde')
  //              this.configurarObjetoErro(erro,'dados','URL: ' + url + '; body: ' + this.limparStringJSON(JSON.stringify(dadoOriginal)));

  //             reject(erro);
  //           });
  //     }
  //   });
  // }

  // posSend(response: any){
  //   //A ser chamado pelos descendentes, caso tenha tratamentos específicos para ser chamado após o send do http
  // }

  // private isConteudoPdf(response){
  //   if(response.headers.get('Content-Type') && response.headers.get('Content-Type').indexOf('pdf') >= 0){
  //     return true;
  //   }
  // }

  // private configurarHeaderHttp(headers, jsonObject ){
  //   if(jsonObject.idApp){
  //       headers.set('idApp', jsonObject.idApp );
  //   }

  //   if(jsonObject.idUsuario && jsonObject.idUsuario != 'undefined' && jsonObject.idUsuario != 'null' ){
  //       headers.set('idUsuario', jsonObject.idUsuario);
  //   }

  //   if(jsonObject.uuid && jsonObject.uuid != 'NULO' && jsonObject.uuid != 'undefined'){
  //       headers.set('uuid', jsonObject.uuid);
  //   }

  //   if(jsonObject.tokenUsuario){
  //       headers.set('tokenUsuario', jsonObject.tokenUsuario);                
  //   }

  //   //SAT-2028 novo login pje
  //   if( jsonObject.Authorization ){ 
  //     headers.set('Authorization', jsonObject.Authorization);
  //     headers.set('refreshToken', jsonObject.refreshToken);
  //   }

  //   if(jsonObject.idDevice && jsonObject.idDevice != 'undefined' && jsonObject.idDevice != 'null'){
  //       headers.set('idDevice', jsonObject.idDevice);
  //   }

  //   if(jsonObject.tokenJT){
  //       headers.set('tokenJT', jsonObject.tokenJT);
  //   }

  //   if(jsonObject.perfilUsuario && jsonObject.perfilUsuario != 'undefined'){
  //       headers.set('perfilUsuario', jsonObject.perfilUsuario);
  //   }

  //   if( jsonObject.novoToken ){
  //      headers.set('novoToken', jsonObject.novoToken);
  //   }

  //   if( jsonObject.email ){
  //       headers.set('email', jsonObject.email);
  //    }
  // }

  // private tratarErro(body, erro, url, dataToSend){

  //   let dadoOriginal = this.limparStringJSON(JSON.stringify(dataToSend));

  //   let detalhes = '';
  //   body = body.split("\\").join("");
  //   if (Util.isJson(body)) {
  //       detalhes = JSON.stringify(JSON.parse(body))
  //   }
  //   else{
  //       detalhes = this.limparStringJSON(body);
  //   }
  //   this.configurarObjetoErro(erro,'message','Serviço indisponível. Tente novamente mais tarde')
  //   this.configurarObjetoErro(erro,'detalhes',detalhes.length > 0?detalhes+ ' [Decriptografado]':'')
  //   this.configurarObjetoErro(erro,'dados','URL: ' + url + '; body: ' + dadoOriginal)
  // }

  // private limparStringJSON(jsonString) : string {
  //   return jsonString.replace(/[\\"{}]+/g, ""); // retira barra invertida, chaves e aspas
  // }

  // private isResponseComErro(response){
  //   return response.substring(0,7).toUpperCase() == 'CAMINHO' || response.substring(2,11).toUpperCase() == 'EXCEPTION';
  // }

  // // requisicao para uma url específica.
  // //   Para ser utilizado quando a requisição for pra um servidor diferente do backend da app
  // //   ou pra uma url fixa que nao dependera do regional
  // //   EXEMPLO: noticias
  
  // sendTo(url: string, dataToSend: any, config:any) : Promise<any>{
  //   if (this.isBrowser) {
  //     return this.http.get(url, config).toPromise();
  //   } else {
  //     return this.http.post(url, dataToSend, config).toPromise();
  //   }
  // }

  // consultaGenerica(url, idConsulta, parametros: any) : Promise<Array<any>> {
  //    let param = {};
  //    if (!parametros){
  //       param = { idConsulta  : idConsulta };
  //    }
  //    else{
  //       param = { idConsulta  : idConsulta, parametros  : parametros};
  //    }

  //   let retorno : any;
  //   return new Promise<Array<any>>((resolve, reject) => {
  //     this.send(url, param).then((response) => {
  //        let data: any;
  //         if(Util.isJson((response._body))){
  //             data = JSON.parse(response._body)
  //           }
  //         else{
  //           resolve(retorno);
  //         }
  //         if (data){
  //             retorno = data;
  //             resolve(retorno);
  //         }
  //         })
  //         .catch((error) => {
  //           reject(error);
  //         });
  //   })
  // };

  // _backEndConsultaGenericaMobile(url,idConsulta, parametros: any) : Promise<Array<any>> {
  //   return new Promise<Array<any>>((resolve, reject) => {
  //     this.consultaGenerica(url,idConsulta, parametros).then((result) => {
	// 			if (result){
	// 					resolve(result);
	// 			}
  //     })
  //     .catch((error) => {
  //      let mensagem: string;
  //       if (!error.message){
  //           mensagem = 'Favor tentar novamente mais tarde!'
  //       }
  //       else{
  //           mensagem =  ":" + error.message;
  //       }
  //       reject({"message": mensagem});
  //     });
  //   });   
  // };

  // _backEndConsultaGenericaPje(url, idConsulta, parametros: any, config: any) : Promise<Array<any>> {
  //    let param = {};
  //    if (!parametros){
  //       param = {
  //                 idConsulta  : idConsulta
  //               };
  //    }
  //    else{
  //       param = {
  //                 idConsulta  : idConsulta,
  //                 parametros  : parametros
  //               };
  //    }

	// let retorno : any;

  // return new Promise<Array<any>>((resolve, reject) => {
  //     this.send(url,param, config).then((response) => {
        
  //           let data = JSON.parse(response._body);
  //           if (data){
  //               retorno = data;
  //               resolve(retorno);
  //           }
  //     })
  //     .catch((error) => {reject(error);});
  //   });   
  // }

  //  configurarObjetoErro(erro, chave, valor ){
  //    if(chave == 'message'){
  //       erro.message = valor;
  //    }else if(chave == 'detalhes'){
  //       erro.detalhes = valor;
  //    } else if(chave == 'dados'){
  //       erro.dados = valor;
  //    }
  // }

  // private ajustarTimestampServidor(dataServidor: string) : void {
  //     if (dataServidor) {
  //       let timestampServidor = new Date(dataServidor).getTime();
  //       let timestampLocal = new Date().getTime();
  //       let diferencaRelogios = timestampServidor - timestampLocal;
  //       this.store.set(controle.timestampAdd,diferencaRelogios );
  //     }
  //   }
 
}


  
  
