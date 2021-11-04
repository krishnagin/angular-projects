import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  title!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
