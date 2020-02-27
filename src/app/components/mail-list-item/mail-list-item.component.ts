import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'app-mail-list-item',
  templateUrl: './mail-list-item.component.html',
  styleUrls: ['./mail-list-item.component.scss']
})
export class MailListItemComponent {
  @Input() mail: Mail;
}
