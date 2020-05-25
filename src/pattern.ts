class MessageService {
    find(message: string): string {
        return `MESSAGE_SERVICE_[${message.toString()}]`;
    }
}

class SmsSender {
    send(message: string): void {
        console.log(`Sending message: ${message}`);
    }
}

class SmsFacade {
    service: MessageService;

    sender: SmsSender;

    constructor(service: MessageService | null, sender: SmsSender | null) {
        this.service = service || new MessageService();
        this.sender = sender || new SmsSender();
    }

    complexSendingMessage(message: string): void {
        const messageFromService = this.service.find(message);
        this.sender.send(messageFromService);
    }
}

((function clientCode() {
    new SmsFacade(null, null).complexSendingMessage('Hello World');
})());
