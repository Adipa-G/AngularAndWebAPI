﻿import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES } from '@angular/router'

import {AuthenticationDetails} from '../../domain/auth/AuthenticationDetails';
import {ErrorInfo} from '../../domain/ErrorInfo';

import {AuthService} from '../services/AuthService';
import {ErrorService} from '../services/ErrorService';

@Component({
    selector: 'common-menu',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './templates/common/components/MenuComponent.html'
})

export class MenuComponent {
    private currentAuth: AuthenticationDetails;

    private authChangedSubscription: any;
    private authErrorSubscription: any;

    constructor(private router: Router,
        private authService: AuthService,
        private errorService: ErrorService) {
        this.router = router;
        this.authChangedSubscription = authService.authChanged$.subscribe(auth => this.onAuthChanged(auth));
        this.authErrorSubscription = errorService.authErrorOccured$.subscribe(auth => this.onAuthError(auth));

        this.currentAuth = new AuthenticationDetails();
    }

    private onAuthChanged(auth: AuthenticationDetails): void {
        if (this.currentAuth.isAuth !== auth.isAuth) {
            if (auth.isAuth) {
                this.router.navigate(['/userList']);
            } else {
                this.router.navigate(['/home']);
            }    
        }

        this.currentAuth = auth;
    }

    private onAuthError(errorInfo: ErrorInfo): void {
        this.authService.clearAuthData();
        this.currentAuth = new AuthenticationDetails();
        this.router.navigate(['/login']);
    }

    public logOut(): void {
        this.authService.logout();
    }

    ngOnDestroy() {
        this.authChangedSubscription.unsubscribe();
        this.authErrorSubscription.unsubscribe();
    }
}