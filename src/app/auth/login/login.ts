import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { LoginData } from './models/login-data';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  readonly loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  readonly loginForm = form(this.loginModel);

  readonly isPasswordVisible = signal(false);

  togglePasswordVisibility() {
    this.isPasswordVisible.update((visible) => !visible);
  }
}
