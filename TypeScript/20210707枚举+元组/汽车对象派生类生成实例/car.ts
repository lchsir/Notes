//档位
enum Gear {
    First=1, Second=3, Third=5
}
//颜色
enum Color {
    White, Red
}
//接口 
interface IDrivable {
    //启动
    start(): void;
    //驾驶
    drive(time: number, speed: Gear): void;
    //行驶距离
    getKilometer(): number
}

//定义一个抽象的类  车 
abstract class Car implements IDrivable {  
    protected _isRunning: boolean;   
    protected _distanceFromStart: number;  

    constructor() {
        this._isRunning = false;
        this._distanceFromStart = 0;
    }

    public start() {    //公共启动汽车
        this._isRunning = true;   //开始行驶
    }
    //抽象类的子类必须实现抽象类的抽象方法
    abstract drive(time: number, speed: Gear): void;   
    public getKilometer(): number {    //公共行驶距离
        return this._distanceFromStart;
    }
}
//子类  
class BMW<T extends Color> extends Car {
    private color: Color;  //私有属性

    constructor(c:T) {
        super();
        this.color = c;
    }

    public drive(time: number, speed: Gear): void {
        if (this._isRunning) {
            this._distanceFromStart += time*speed;//行驶距离
        }
    }

    public getColor(): string {
        return Color[this.color]
    }
}

let bmw = new BMW(Color.Red);
bmw.start();  
bmw.drive(10, Gear.First);  
bmw.drive(60, Gear.Third);  
document.body.innerHTML = "distance:"+bmw.getKilometer()+',color:'+bmw.getColor()