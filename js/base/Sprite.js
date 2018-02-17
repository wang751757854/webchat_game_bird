// 精灵的基类，负责初始化精灵加载的资源和大小以及位置
export class Sprite{
    //如果这些值是空的，那么就会当做默认值赋值
    constructor(ctx=null,
                img = null,//要绘制的图片对象,也就是new出来的image，src已经加载完毕了
                srcX = 0,//要剪裁的x坐标
                srcY = 0,//要剪裁的y坐标
                srcW = 0,//要剪裁的宽度
                srcH = 0,//要剪裁的高度
                x = 0, y = 0,//在canvas上的摆放位置
                width=0, height=0//剪裁完之后要使用的图片大小
                ){
        this.ctx = ctx;
        this.img = img;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }
    draw(){
        this.ctx.drawImage(
            this.img,
            this.srcX,
            this.srcY,
            this.srcW,
            this.srcH,
            this.x,
            this.y,
            this.width,
            this.height
    )
    }
}