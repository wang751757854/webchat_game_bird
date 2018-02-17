// 初始化整个游戏的精灵，作为游戏开始的入口
import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {Director} from "./js/Director.js";

export class Main {
    constructor() {
        // console.log("测试执行");
        //用this定义，就说明是整个类的变量了，在任何方法都可以直接使用
        this.canvas  = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        const loader = ResourceLoader.create();
        loader.onLoaded(map =>this.onResourceFirstLoaded(map))
        Director.getinstance();
    }
    onResourceFirstLoaded(map){
        console.log(map);
    }
}