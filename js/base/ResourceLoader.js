// 资源文件加载器，确保canvas在图片资源加载完成之后才进行渲染
import {Resources} from "./Resources.js";

export class ResourceLoader{
     constructor() {
        this.map=new Map(Resources);
        // console.log(this.map)
        // let是局部的，var是全局的
        // 遍历map
         for (let [key,value] of this.map){
             // console.log(key);
             // console.log(value);
             const image = new Image();
             image.src=value;
             this.map.set(key,image);
         }
    }
    onLoaded(callback){
         let loadcount = 0 ;
         //遍历取出value
         for (let value of this.map.values()){
                //【箭头函数】，这样this就可以表示外部的引用对象，而不是表示onload的
                value.onload = () =>{
                    loadcount++;
                    if(loadcount>=this.map.size){
                        callback(this.map);
                    }
                }
         }
    }

    static create(){
         return new ResourceLoader();
    }
}