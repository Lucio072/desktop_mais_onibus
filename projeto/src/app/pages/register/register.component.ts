import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

function passwordsMatchValidator(formGroup: FormGroup) {
  const password = formGroup.get('senha');
  const confirmPassword = formGroup.get('confirmarSenha');
  return password.value === confirmPassword.value ? null : { notEquivalent: true };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<CadastroComponent>) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    }, { validator: passwordsMatchValidator });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      // Aqui você pode enviar os dados do cadastro para o servidor
      this.dialogRef.close();
    }
  }
}
