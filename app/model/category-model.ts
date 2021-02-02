export class Category{
    id : number;
    name : string;
    description : string;
    activeStatus : boolean;
    constructor(id : number, name : string, description : string, activeStatus : boolean)
    {
        this.id=id;
        this.name=name;
        this.description=description;
        this.activeStatus=activeStatus;
    }
}