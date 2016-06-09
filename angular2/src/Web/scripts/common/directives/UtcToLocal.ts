﻿import {Component, OnChanges, Input, Inject} from '@angular/core';
import moment from 'moment';

import {Constants} from "../../common/services/Constants";

@Component({
    selector: '[utc-to-local]',
    template: '{{localTimeStr}}'
})

export class UtcToLocal implements OnChanges {
    @Input('utc-to-local') utcTimeStr: string;

    private localTimeStr: string;

    constructor( @Inject(Constants) private constants: Constants) {
        this.constants = constants;
    }

    ngOnChanges(changes) {
        var localTime = moment.utc(this.utcTimeStr).toDate();
        this.localTimeStr = moment(localTime).format(this.constants.getServerDateFormat());
    }
}