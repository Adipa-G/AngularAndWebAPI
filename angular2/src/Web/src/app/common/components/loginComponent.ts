﻿import {Component} from '@angular/core';
import { NgForm }    from '@angular/forms';

import {LoginInfo} from '../../domain/auth/LoginInfo';

import {AuthService} from '../services/AuthService';

@Component({
    selector: 'common-login',
    templateUrl: './app/common/components/loginComponent.html'
})

export class LoginComponent {
    private loginInfo: LoginInfo;

    constructor(private authService: AuthService) {
        this.authService = authService;
        this.loginInfo = new LoginInfo();
    }

    public login(): void {
        this.authService.authenticate(this.loginInfo);
    }
}