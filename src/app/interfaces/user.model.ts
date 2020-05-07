import { NumberFormatStyle } from '@angular/common';
export interface User {
    name: string;
    username: string;
    email: string;

}

export interface Address {
    street: string;
    suite: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface Geo {
    lat: string;
    lgn: string;
}
