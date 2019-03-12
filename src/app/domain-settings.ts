import * as Promise from "bluebird";
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
const {pipe, publishReplay, refCount} = require('rxjs/operators');


export class DomainSettings {
    private static currentSettingsPromise: Promise<DomainSettings>;
    private static constantsPromise: Promise<{ [key: string]: any }>;
    public textOnLoad: string;

    constructor() { }

    public updateFromJSON(json: any): DomainSettings {
        if (json.hasOwnProperty("textOnLoad")) { this.textOnLoad = json.textOnLoad; }
        return this;
    }

    static fromJSON(json: any): DomainSettings {
        const instance = new DomainSettings();
        instance.updateFromJSON(json);
        return instance;
    }

    static fetchCurrentSettings(): Promise<DomainSettings> {
        if (DomainSettings.currentSettingsPromise) {
            return DomainSettings.currentSettingsPromise;
        } else {
            DomainSettings.currentSettingsPromise = DomainSettings.fetch();
            return DomainSettings.currentSettingsPromise;
        }
    }

    static fetch(): Promise<DomainSettings|any> {
        const url = 'http://127.0.0.1:8000/config-on-load';
        /*
        const promise = ChatApi.request(url, params, _options)
            .then((json) => {
                return raw ? json : DomainSettings.fromJSON(json);
            });
        return promise;
         */
    }

}
