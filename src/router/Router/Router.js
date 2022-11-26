export class Router {
  currentRoute = "/";

  subscribers = {};

  constructor() {
    this.currentRoute = window.location.pathname;
  }

  pushRoute(route) {
    console.log(route);
    this.currentRoute = route;

    window.history.pushState({}, "", route);

    Object.values(this.subscribers).forEach((subscriber) => {
      typeof subscriber === "function" && subscriber(this.currentRoute);
    });
  }

  subscribe(key, callback) {
    this.subscribers[key] = callback;
    this.subscribers[key](this.currentRoute);
  }

  unsubscribe(key) {
    this.subscribers[key] = undefined;
  }
}
