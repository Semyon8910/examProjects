export class Servers {
    id:number;
    server_name:string;
    ip:string;
    Hosting_Company:string
    status:number;
    datatime:string;
    name:string

    constructor(id:number,server_name:string,ip:string,Hosting_Company:string,status:number,datatime:string,name:string) {
        this.id=id;
        this.server_name=server_name;
        this.ip=ip;
        this.Hosting_Company=Hosting_Company;
        this.status=status;
        this.datatime=datatime
        this.name=name
    }
}