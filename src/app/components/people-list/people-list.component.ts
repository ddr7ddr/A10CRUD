import { Component, OnInit } from '@angular/core';
import { IPeople } from 'src/app/model/people.model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {


  constructor(private peopleService: PeopleService) { }

  peoples: IPeople[] = [];
  selectedPeople: Partial<IPeople> = {};

  ngOnInit() {
    this.getPeopleAll();
  }

  getPeopleAll(): void {
    this.peopleService.getPeopleAll()
      .subscribe(allPeople => this.peoples = allPeople);
  }

  onSelect(people: IPeople): void {
    this.selectedPeople = people;
  }

}


