import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { SignUpData } from './models/sign-up-data';

@Component({
  selector: 'app-sign-up',
  imports: [FormField],
  templateUrl: './sign-up.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUp {
  private readonly signUpModel = signal<SignUpData>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  readonly signUpForm = form(this.signUpModel);

  readonly isPasswordVisible = signal(false);
  readonly isConfirmPasswordVisible = signal(false);

  togglePasswordVisibility() {
    this.isPasswordVisible.update((visible) => !visible);
  }

  toggleConfirmPasswordVisibility() {
    this.isConfirmPasswordVisible.update((visible) => !visible);
  }
}
