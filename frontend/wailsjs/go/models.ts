export namespace main {
	
	export class MonType {
	    MaVal: number;
	    MaChaine: string;
	
	    static createFrom(source: any = {}) {
	        return new MonType(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.MaVal = source["MaVal"];
	        this.MaChaine = source["MaChaine"];
	    }
	}

}

