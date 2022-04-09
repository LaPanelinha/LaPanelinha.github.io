import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { MessageService } from 'primeng/api';
import { args, imgModel, mensagem, resMensagem, respImg, sendImg } from '../models/panelinha.model';
import { WppServiceService } from '../services/wpp-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mensagem = '';
  numero='';
  sendMensagem: args = {
    to: '',
    content: ''
  };
  finalMensage: mensagem = {
    args: this.sendMensagem,
  };
  respMensagem!: resMensagem;
  uploadedFiles!: any;
  args: imgModel = {
    caption: '',
    file: '',
    filename: '',
    hideTags: false,
    ptt: false,
    quotedMsgId: '',
    to: '',
    viewOnce: false,
    waitForId: false,
    withoutPreview: false
  };
  sendImg: sendImg = {
    args: this.args
  };
  respImg!: respImg;
  url!: string;


  constructor(private service: WppServiceService, 
    private http: HttpClient,
    // private messageService: MessageService
    ) { }

  ngOnInit(): void {
  }

  mandaMensagem(): void {
    console.log(this.mensagem);
    this.finalMensage.args.to = this.numero;
    this.finalMensage.args.content = this.mensagem;
    console.log(this.finalMensage);
    this.service.chamaEle(this.finalMensage).subscribe((data)=>{
      this.respMensagem = data;
      console.log(data);
    })
  }
  mandaImg(): void{
    this.sendImg.args.to = this.numero;
    this.sendImg.args.caption = this.mensagem;
    this.sendImg.args.file = this.url;
    this.sendImg.args.filename = 'teste';
    this.sendImg.args.quotedMsgId = 'false_447123456789@c.us_9C4D0965EA5C09D591334AB6BDB07FEB';

    console.log(this.sendImg);

    this.service.sendImg(this.sendImg).subscribe((data)=>{
      this.respImg = data;
      console.log(this.respImg);
    })
  }

  onUpload(event: any):void {
    this.uploadedFiles = event;
    console.log(this.uploadedFiles);
  }

}
