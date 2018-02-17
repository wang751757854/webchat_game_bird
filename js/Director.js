// 导演类，控制游戏的逻辑
export class Director {

    //构造函数
    constructor(){
        console.log('构造器初始化。。。')
    }

    static getinstance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }
    run(){
        const backgroundSprite = this.dataStore.get('background');
        backgroundSprite.draw();
    }

}