
/*영화 이미지 썸네일을 정의한다!!*/
class Thumbnail{
    constructor(container, width, height, bd, src, x){
        this.container=container; //어디에 넣을지 컨테이너를 동적으로 받자
        this.div=document.createElement("div");
        this.width=width;
        this.height=height;
        this.bd=bd; //보더 두께 
        this.img=document.createElement("img");
        this.src=src;
        this.x=x; //div의 x좌표
        
        //스타일 부여 
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.border=this.bd+"px solid white";
        this.div.style.boxSizing="border-box";
        this.img.src=this.src; //이미지 대입
        this.img.style.width=(this.width-(bd*2))+"px";
        this.img.style.height=(this.height-(bd*2))+"px";

        var me=this;

        // 이미지에 이벤트 구현하기 
        this.img.addEventListener("click",function(){
        // 이벤트 구형시 사용되는 익명함수내에서 this를 사용하게 되면, 객체의 인스턴스를 가리키게 되는 것이 아니라 
        // 익명함수{}를 가르키게된다. 
            var index=thumbArray.indexOf(me);
            console.log("index:" ,index);
            getDetail(index);
            //포인터의 targetX값을 나의 좌표와 일치
            Pointer.tagetX=me.x;
        });

        //조립 
        this.div.appendChild(this.img);//div에 이미지 넣기 
        this.container.appendChild(this.div);
    }   

}