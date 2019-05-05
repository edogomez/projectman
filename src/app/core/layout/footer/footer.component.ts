import { Component, OnInit } from '@angular/core';
import { MessagesStoreService } from '../../messages-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  public messages$: Observable<any>;
  constructor(private messagesStore: MessagesStoreService) { }

  ngOnInit() {
    this.messages$ = this.messagesStore.select$();
  }

}
