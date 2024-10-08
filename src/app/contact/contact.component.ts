import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value;
      this.emailService.sendEmail(name, email, message).subscribe(
        (response: any) => {
          console.log('Email sent successfully', response);
          this.contactForm.reset();
          // Show success message to user
        },
        (error: any) => {
          console.error('Error sending email', error);
          // Show error message to user
        }
      );
    }
  }
}