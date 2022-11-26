export class Router {
    currentRoute: string;
    subscribers: {};
    pushRoute(route: any): void;
    subscribe(key: any, callback: any): void;
    unsubscribe(key: any): void;
}
