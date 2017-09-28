import { Component, OnInit } from '@angular/core';
import {JournalEntriesService} from '../service/journal-entries.service'
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries;
  constructor(public journalEntriesService:JournalEntriesService ) { }

  ngOnInit() {
    this.journalEntriesService.getList().subscribe(result => this.entries=result)
  }

}
