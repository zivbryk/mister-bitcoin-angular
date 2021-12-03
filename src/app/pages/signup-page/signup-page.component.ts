import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  subscription: Subscription
  mode: String = ''
  signupForm: FormGroup
  loginForm: FormGroup

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(({ mode }) => this.mode = mode)

    this.signupForm = this.fb.group({
      name: [''],
      password: [''],
    })

    this.loginForm = this.fb.group({
      name: [''],
      password: [''],
    })
  }

  onSignup(): void {
    const userCred = {
      name: this.signupForm.value.name,
      password: this.signupForm.value.password,
    }
    this.authService.signup(userCred)
    this.router.navigateByUrl('')
  }

  onLogin(): void {
    const userCred = {
      name: this.loginForm.value.name,
      password: this.loginForm.value.password,
    }
    this.authService.login(userCred)
    this.router.navigateByUrl('')

  }

  onGuestLogin(): void {
    let userCred = {
      name: 'Guest',
      password: '1234',
    }
    this.authService.login(userCred)
    this.router.navigateByUrl('')
  }

}
