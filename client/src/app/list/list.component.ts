import { Component, OnInit } from "@angular/core";
import { ListService } from "../services/list.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  list;
  lists;
  newItemName;
  constructor(public listService: ListService) {

    listService.lists.subscribe(lists => {
      console.log('lists changed');
      console.log(lists);
      this.lists = lists;
      if (lists !== null) {
        this.list = lists[0];
      }
      
    });
  }

  ngOnInit() {
    this.listService.connect()
    .then(() => this.listService.getLists());
  }

  alterItemState(item) {
    console.log(item);
    item.complete = !item.complete;
    this.listService.setList(this.list);
  }

  addItem() {
    this.list.items.push({name: this.newItemName, complete: false});
    this.listService.setList(this.list);
    this.newItemName = '';
  }
}
