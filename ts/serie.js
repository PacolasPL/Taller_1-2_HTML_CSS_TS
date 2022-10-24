export class Serie {
    constructor(id, name, canal, score, resume, page, img) {
        this.id = id;
        this.name = name;
        this.canal = canal;
        this.score = score;
        this.resume = resume;
        this.page = page;
        this.img = img;
    }
    getId() {
        return this.id;
    }
    getCanal() {
        return this.canal;
    }
    getResume() {
        return this.resume;
    }
    getPage() {
        return this.page;
    }
    getScore() {
        return this.score;
    }
    getName() {
        return this.name;
    }
    getImg() {
        return this.img;
    }
}
