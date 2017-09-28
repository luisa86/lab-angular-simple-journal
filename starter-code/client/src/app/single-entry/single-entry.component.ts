import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JournalEntriesService} from '../service/journal-entries.service'

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private journalEntriesService:JournalEntriesService ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.getSingleEntry(params['id'])
    })
  }

  getSingleEntry(id){
    this.journalEntriesService.get(id)
      .subscribe((entry)=>{
        console.log(entry)
        this.entry = entry
      })

  }

}
