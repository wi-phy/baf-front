import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  email,
  form,
  FormField,
  maxLength,
  minLength,
  pattern,
  required,
  submit,
} from '@angular/forms/signals';
import { LoginData } from './models/login-data';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  private readonly loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  readonly loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: '- Email requis' });
    email(schemaPath.email, { message: "- L'email doit être valide" });

    required(schemaPath.password, { message: '- Mot de passe requis' });
    minLength(schemaPath.password, 8, {
      message: '- Minimum 8 caractères',
    });
    maxLength(schemaPath.password, 50, {
      message: '- Maximum 50 caractères',
    });
    pattern(schemaPath.password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).*$/, {
      message:
        '- Minimum une lettre majuscule, minuscule, un chiffre et un caractère spécial (#?!@$%^&*-)',
    });
  });

  readonly isPasswordVisible = signal(false);

  togglePasswordVisibility() {
    this.isPasswordVisible.update((visible) => !visible);
  }

  onSubmit(event: Event) {
    event.preventDefault();

    submit(this.loginForm, async () => {
      if (this.loginForm().invalid()) return;
      console.log(this.loginForm().value());
    });
  }
}
