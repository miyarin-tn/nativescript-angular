import { Subject, BehaviorSubject } from 'rxjs';

export const loginEvent: Subject<boolean> = new Subject<boolean>();
export const logoutEvent: Subject<boolean> = new Subject<boolean>();
