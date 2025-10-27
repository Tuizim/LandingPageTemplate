import { Component, signal } from '@angular/core';
import { InputField } from '../../shared/input/input';
import { Button } from '../../shared/button/button';
import { Select } from '../../shared/select/select';
import { Modal } from '../../shared/modal/modal';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [InputField, Button, Select, Modal],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  showModal = signal(false);

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }
}
