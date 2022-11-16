import { FarmerDetailsService } from './../../../core/services/farmer-details.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.scss'],
})
export class FarmersComponent implements OnInit {
  farmers: any[] = [];
  term!: string;
  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

  searchText: string = '';

  hello: string = 'hello';
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  constructor(
    private farmerService: FarmerDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getFarmers();
  }

  getFarmers() {
    // this.rosterService.getAllAgents().subscribe(request => this.agents = request.data);
    this.farmerService
      .getAllFarmers()
      .subscribe((request) => (this.farmers = request.data));
  }

  // farmers: Farmer[] = [
  //   {
  //     id: 'Main Produce',

  //     name: 'John Brown',
  //     image:
  //       'https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     produce: [
  //       {
  //         name: 'Potato',
  //       },
  //       {
  //         name: 'Yam',
  //       },
  //       {
  //         name: 'Banana',
  //       },
  //       {
  //         name: 'Orange',
  //       },
  //     ],
  //   },
  //   {
  //     id: 'Main Produce',

  //     name: 'Paul Dunn',
  //     image:
  //       'https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     produce: [
  //       {
  //         name: 'Potato',
  //       },
  //       {
  //         name: 'Yam',
  //       },
  //       {
  //         name: 'Banana',
  //       },
  //       {
  //         name: 'Orange',
  //       },
  //     ],
  //   },
  // ];
}
