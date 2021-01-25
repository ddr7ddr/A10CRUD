import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';//引入服务

@Component({
  selector: 'app-people-create',
  templateUrl: './people-create.component.html',
  styleUrls: ['./people-create.component.css']
})


export class PeopleCreateComponent implements OnInit {
  // people = {
  //   name: '',
  //   description: '',
  //   available: false
  // };
  // submitted = false;

  constructor(private productService: PeopleService) { }

  ngOnInit(): void {
  }

  // createPeople(): void {
  //   const data = {
  //     name: this.product.name,
  //     description: this.product.description
  //   };

  //   this.productService.create(data)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.submitted = true;
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // newProduct(): void {
  //   this.submitted = false;
  //   this.product = {
  //     name: '',
  //     description: '',
  //     available: false
  //   };
  // }

}
