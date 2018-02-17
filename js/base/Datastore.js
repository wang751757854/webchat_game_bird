// 变量缓存器，方便我们在不同的类中访问和修改变量
export class Datastore{
    static getInstance(){
        if(!Datastore.instance){
            Datastore.instance = new Datastore();
        }
        return Datastore.instance;
    }
    constructor(){
        this.map = new Map();
    }

    put(key,value){
        this.map.set(key,value);
        return this;
    }

    get(key){
        return this.map.get(key);
    }

    destroy(){
            for(let value of this.map.values()){
                value = null;
            }
    }
}