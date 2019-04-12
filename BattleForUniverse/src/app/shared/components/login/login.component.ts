import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../services/http-service';

import { takeWhile, map } from 'rxjs/operators';
import { IServerStatus } from '../../interfaces/iServerStatus';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    private isAlive = true;

    public systemOnline: boolean;
    public statusMessage: string;

    constructor(
        private httpService: HttpService
    ) { }

    public ngOnInit() {
        this.httpService.getServerStatus()
            .pipe(map(res => res.json()))
            .pipe(takeWhile(() => this.isAlive))
            .subscribe((data: IServerStatus) => {
                this.systemOnline = data.online;
                this.statusMessage = data.message;
            }, () => {
                this.systemOnline = false;
            });
    }

    public ngOnDestroy(): void {
        this.isAlive = false;
    }
}
