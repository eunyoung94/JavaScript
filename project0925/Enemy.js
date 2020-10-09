// 적군을 정의한다. 
// 적군이 태어날때 어떤 속성으로 태어날지를 결정하는 생성자 
class Enemy{

    constructor(container,width,height,x,y,src){
    this.img=document.createElement("img");
    this.img.src=src;
    this.img.style.width=width+"px";
    this.img.style.height=height+"px";
    this.img.style.position="absolute";
    this.img.style.left=x+"px";
    this.img.style.top=y+"px";
    container.appendChild(this.img);
    }
}
//적군의 행동을 정의하는매서드