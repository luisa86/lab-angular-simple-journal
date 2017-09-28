import { Component, OnInit } from '@angular/core';
import {JournalEntriesService} from '../service/journal-entries.service'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries;
  constructor(public journalEntriesService:JournalEntriesService ) { }

  ngOnInit() {
    this.entries = this.journalEntriesService.getList()
  }

}
