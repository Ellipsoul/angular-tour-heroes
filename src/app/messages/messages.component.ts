import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit {

  // This messageService must be public because it needs to be bound to the template
  constructor(public messageService:MessageService) { }

  ngOnInit(): void {
  }

}
