﻿import {Component} from '@angular/core';

import {OrderAndPage} from '../../domain/common/orderAndPage';
import {UserInfo} from '../../domain/admin/userInfo';

import { ErrorService } from '../../common/services/errorService';
import {UserService} from '../services/userService';

@Component({
    selector: 'admin-users',
    templateUrl: './app/admin/components/userListComponent.html'
})

export class UserListComponent {
    private orderAndPage: OrderAndPage;
    private errorMessage: string;
    private users: UserInfo[];
    private totalCount: number;

    constructor(private errorService: ErrorService, private userService: UserService) {
        this.errorService = errorService;
        this.userService = userService;
        this.users = [];
        this.totalCount = 0;

        this.orderAndPage = this.initOrderAndPagingDetails();
        this.updateView(this.orderAndPage);
    }

    private updateView(orderAndPage: OrderAndPage) {
        this.orderAndPage = orderAndPage;
        this.userService.getUsers(this.orderAndPage).subscribe(
            data => {
                this.users = data.results;
                this.totalCount = data.totalCount;
            },
            err => {
                this.errorMessage = JSON.stringify(err);
                this.errorService.handleHttpError(err);
            });
    }

    private initOrderAndPagingDetails(): OrderAndPage {
        var orderAndPage: OrderAndPage = new OrderAndPage();
        orderAndPage.orderField = 'UserName';
        orderAndPage.orderDirection = 'Asc';
        orderAndPage.pageNumber = 1;
        orderAndPage.pageSize = 5;
        return orderAndPage;
    }

    public deleteUser(userName: string): void {
        this.userService.deleteUser(userName).subscribe(
            data => {
                for (var i = 0; i < this.users.length; i++) {
                    if (this.users[i].userName === userName) {
                        this.users.splice(i, 1);
                        break;
                    }
                }
            },
            err => {
                this.errorMessage = JSON.stringify(err);
                this.errorService.handleHttpError(err);
            });
    }
}