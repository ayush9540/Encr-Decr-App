import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-toggle-enc-dec',
  templateUrl: './toggle-enc-dec.component.html',
  styleUrls: ['./toggle-enc-dec.component.css']
})
export class ToggleEncDecComponent implements OnInit {

  encryptMode: boolean;
  textToConvert: string;
  password: string;
  conversionOutput: string;

  constructor() {
    this.encryptMode = true;
   }

   changeMode() {
    this.encryptMode = this.encryptMode ? false : true;
    this.textToConvert = "";
  }
  
   convertText() {
    if (this.textToConvert.trim() === "" || this.password.trim() === "") {
        this.conversionOutput = "Please fill the textboxes."
      return;
    }
    else {
      if (this.encryptMode) {
        this.conversionOutput = CryptoJS.AES.encrypt(this.textToConvert.trim(), this.password.trim()).toString();
      }
      else {
        this.conversionOutput = CryptoJS.AES.decrypt(this.textToConvert.trim(), this.password.trim()).toString(CryptoJS.enc.Utf8);
      }
    }
  }

  ngOnInit() {
  }

}
