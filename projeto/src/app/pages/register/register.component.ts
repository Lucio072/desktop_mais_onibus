import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  hide = true;

  public user!:Register;

  ngOnInit() {
  }

  async cadastrar(){
    if(this.user.password !== this.user.confPassword){
/*       this.alertController.create({
        header: 'Atenção',
        subHeader: 'Menssagem de Senha',
        message: 'Senhas incompatives',
        buttons: ['OK'],
      }); */
      console.log("Cadastrado os seguintes dados Senha: "+this.user.password+", Confirma senha : "+this.user.confPassword);

    }else{
     /*  this.presentAlert(); */
     console.log("Erro")
    }
  }

}
