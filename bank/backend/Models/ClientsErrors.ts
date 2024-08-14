export class ClientError {
    public status:number;
    public message:string;

    public constructor(status:number, message:string){
        this.status=status;
        this.message=message;
    }
}

export class RouteNotFound extends ClientError{
    constructor(route:string){
        super(404,`route ${route} was not found`);
    }
}

export class AccountNotFound extends ClientError{
    constructor(errorMessage:string){
        super(404,"account was not found....");
    }
}