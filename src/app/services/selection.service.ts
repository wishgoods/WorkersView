import { Injectable, ViewChild } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable()
export class SelectionService {  

  private _selected_user:BehaviorSubject<string> = new BehaviorSubject('שם העובד או המחלקה');

  constructor() { }

    addItem(user: string) {
        this._selected_user.next(user);
    }
 
    getItem(): Observable< string> {
      
        return this._selected_user.asObservable();
    }
    clearLeaks()
    {
        this._selected_user.unsubscribe();
    }

}