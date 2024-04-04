import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Imobile } from '../../models/post';
import { mobileProducts } from '../../consts/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  mobilearr : Array<Imobile> = mobileProducts; 
  constructor() { }
  ngOnInit(): void {
  }

}
