// 初始化整个游戏的精灵，作为游戏开始的入口
import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {Director} from "./js/Director.js";

export class Main {
    constructor() {
        // console.log("测试执行");
        //用this定义，就说明是整个类的变量了，在任何方法都可以直接使用
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        const loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map))
        // Director.getinstance();
        let image = new Image();
        image.src = 'res/background.png';

        image.onload = () => {
            this.ctx.drawImage(
                //image对象，将要渲染的对象
                image,
                //    图片的剪裁起始位置，也就是x坐标
                0,
                0,
                //被剪裁的图片的宽度
                image.width,
                image.height,
                //    放置在画布上的位置，以图形的左上角作为顶点
                0,
                0,
                //    需要使用的图片大小
                image.width,
                image.height
            );
        }

    }

    onResourceFirstLoaded(map) {
        console.log(map);
    }
}