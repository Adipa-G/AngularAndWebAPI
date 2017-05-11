﻿import {Injectable, Inject} from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {OrderAndPage} from '../../domain/common/orderAndPage';
import {UserInfo} from '../../domain/admin/userInfo';

import {HttpClient} from '../../common/services/httpClient';
import {Constants} from '../../common/services/constants';

@Injectable()
export class UserService {
    private httpClient: HttpClient;
    private constants: Constants;

    constructor( @Inject(HttpClient) httpClient: HttpClient,
        @Inject(Constants) constants: Constants) {
        this.httpClient = httpClient;
        this.constants = constants;
    }

    public getUsers(orderAndPage: OrderAndPage) {
        return this.httpClient
            .post(this.constants.getServiceBaseUrl() + 'api/Account/list', JSON.stringify(orderAndPage))
            .map((res: Response) => res.json());
    }

    public deleteUser(userName: string) {
        return this.httpClient
            .delete(this.constants.getServiceBaseUrl() + 'api/Account/' + userName)
            .map((res: Response) => res.json());
    }
}