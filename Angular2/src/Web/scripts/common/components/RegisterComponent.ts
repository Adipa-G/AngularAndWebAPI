﻿import {Component} from 'angular2/core';
import { NgForm }    from 'angular2/common';
import {Router, ROUTER_DIRECTIVES } from 'angular2/router'

import {Observable} from 'rxjs/Rx';

import {RegistrationInfo} from '../../domain/common/RegistrationInfo';

import {RegisterService} from '../services/RegisterService';
import {ErrorService} from '../../common/services/ErrorService';

@Component({
    selector: 'common-signup',
    viewProviders: [RegisterService],
    templateUrl: './templates/common/components/RegisterComponent.html'
})

export class RegisterComponent {
    private regInfo: RegistrationInfo;
    private success: boolean = false;

    constructor(private router: Router,
        private errorService: ErrorService,
        private registerService: RegisterService) {
        this.router = router;
        this.errorService = errorService;
        this.registerService = registerService;
        this.regInfo = new RegistrationInfo();
    }

    private register() {
        this.registerService.register(this.regInfo).subscribe(
            data => {
                this.success = true;
                let timer = Observable.timer(2000);
                timer.subscribe(() => this.router.navigate(['Register']));
            },
            err => {
                this.errorService.handleHttpError(err);
            });
    }
}