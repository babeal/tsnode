import {Observable, Observer} from "rxjs";

//import {Observable, Observer} from "./node_modules/rxjs/rx"


var sample1$: Observable<string> =
    Observable.create((observer: Observer<string>): void => {
        observer.next("test");
        observer.complete();
    });

sample1$.map(x=>x)
        .subscribe(y=> console.log(y));
