export class Quote {
    showDescription: boolean;
    constructor(public name: string, public quote: string, public author: string, public completeDate: Date){
        this.showDescription=false;
    }
}

