import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

export class User {
  id: number;
  nome: string;
  itens: string;
  total: string;
  pagamento: string;
  localizacao: string;
  horario: string;
  status: string;
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  errormsg:any;
  successmsg: any;
  user: User = new User();
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiservice: ApiService,
    private actrouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      nome: ['', Validators.required],
      itens: ['', Validators.required],
      total: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return;
    }
    if(this.userForm.valid){
      this.apiservice.createNewUser(this.userForm.value).subscribe((res)=>{
        console.log(res, 'data submitted');
        this.userForm.reset();
        this.successmsg = res.message;
      })
    } else {
      this.errormsg ="All field required.";
    }
  }
}
