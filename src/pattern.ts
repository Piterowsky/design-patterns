interface Notifier {
    notify(): void;
}

class NotifierDecorator {
    private notifier: Notifier;

    constructor(notifier: Notifier) {
        this.notifier = notifier;
    }

    notify(): void {
        this.notifier.notify();
    }
}

class BaseNotifier implements Notifier {
    notify(): void {
        console.log('Base notifier');
    }
}

class FacebookNotifier extends NotifierDecorator {
    notify(): void {
        super.notify();
        console.log('Facebook');
    }
}

class TwitterNotifier extends NotifierDecorator {
    notify(): void {
        super.notify();
        console.log('Twitter');
    }
}

class YoutubeNotifier extends NotifierDecorator {
    notify(): void {
        super.notify();
        console.log('Facebook');
    }
}

((function clientCode() {
    const notifies = {
        facebook: true,
        youtube: true,
        twitter: true,
    };
    let notifier: Notifier = new BaseNotifier();

    if (notifies.facebook) {
        notifier = new FacebookNotifier(notifier);
    }
    if (notifies.twitter) {
        notifier = new TwitterNotifier(notifier);
    }
    if (notifies.youtube) {
        notifier = new YoutubeNotifier(notifier);
    }

    notifier.notify();
})());
