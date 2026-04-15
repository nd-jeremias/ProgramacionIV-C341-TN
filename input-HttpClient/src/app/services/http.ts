import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Http {
    http = inject(HttpClient);

    USER = 'nd-jeremias';
    URI = 'https://api.github.com/users/';

    gitHubUser = signal<any | null>(null);
    
    getGithubUser() {
        const request = this.http.get<any>(this.URI + this.USER)

        const subscription = request.subscribe((data) => {
            if(data){
                this.gitHubUser.set(data);
                console.log(data)
            }
        })

        // subscription.unsubscribe();
    }
}