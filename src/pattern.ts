interface NeededRequest {
    request(): string;
}

class OriginalRequest {
    public requestToChange(): string {
        return 'Request.';
    }
}

class RequestAdapter implements NeededRequest {
    private currentRequest: OriginalRequest;

    constructor(currentRequest: OriginalRequest) {
        this.currentRequest = currentRequest;
    }

    public request(): string {
        return `${this.currentRequest.requestToChange()} -> [COMPATIBLE WITH REQUIRED INTERFACE]`;
    }
}

((function clientCode() {
    const originalRequest = new OriginalRequest();
    console.log(originalRequest.requestToChange());
    const request: RequestAdapter = new RequestAdapter(originalRequest);
    console.log(request.request());
})());
