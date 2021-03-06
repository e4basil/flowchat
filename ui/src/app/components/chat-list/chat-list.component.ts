import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES } from '@angular/router';
import {ChatComponent} from '../chat/index';
import {UserService} from '../../services/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-chat-list',
  templateUrl: 'chat-list.component.html',
  styleUrls: ['chat-list.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ChatListComponent implements OnInit {

  constructor(private router: Router,
    private userService: UserService) {}

  ngOnInit() {
	
  }

}
