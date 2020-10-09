class Hero extends GameObject {
    constructor(container,src,width,height,x,y,velX,velY){
        super(container,src,width,height,x,y,velX,velY);//부모를 먼저 초기화
    }
    // 아래의 메서드는 주인공만의 행동방법이므로, 이 클래스 안에서 정의하면 된다. 
    // extends GameObject를 명시하는 순간부터, 
    // 현재의 Hero의 인스턴스는 마치 내것처럼 gameobject의 모든 변수와 함수를 사용할 수 있다. 
        tick(){         
            this.x=this.x+this.velX;
            this.y=this.y+this.velY;
        }
        render(){
            this.img.style.left=this.x+"px";
            this.img.style.top=this.y+"px";
        }
    }
