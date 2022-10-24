export class Serie{
    private id: number;
    private name: string;
    private canal: string;
    private score: number;
    private resume: string;
    private page: string;
    private img : string;
    constructor(id:number, name:string, canal:string, score:number,  resume:string, page:string, img:string){
        this.id = id;
        this.name = name;
        this.canal =canal;
        this.score=score;
        this.resume = resume;
        this.page = page
        this.img =  img;
        
    }
    public getId():number{
        return this.id;
    }
    public getCanal(): string{
        return this.canal;
    }
    public getResume(): string{
        return this.resume;
    }
    public getPage(): string{
        return this.page;
    }
    public getScore(){
        return this.score;
    }
    public getName(): string{
        return this.name;
    }
    public getImg(): string{
        return this.img;
    }
}