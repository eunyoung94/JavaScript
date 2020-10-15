/*웹서버를 구축하여, 클라이언트가 전송한 파라미터 값들을 mysql에 넣어보자.*/

var http=require("http");//http모듈 가져오기
var fs= require("fs"); //File system 모듈 가져오기
//http모듈로부터 server 객체 생성하기
var server = http.createServer(function(request,response){
    //아래의 코드들이 동작하기 전에 , 클라이언트가 원하는게 뭔지 알아야한다. 요청정보..
    //서버에 존재하는 회원가입 양식 폼을 읽어서, 클라이언트의 브라우저에 보내주자!
    //요청분석을 들어가려면, 요청정보를 담고있는 request 객체를 이용해야한다. 
    console.log("클라이언트가 요청시 사용한 url",request.url);request.url;

    fs.readFile("./회원폼유효성.html","utf-8",function(error,data){
        if(error){
            console.log("파일을 읽지 못했습니다.",error);
        }else{
            response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            response.end(data);//클라이언트에게 컨텐츠를 전송하는것 
        }
    });
    //http 프로토콜 상, 형식을 지켜서 보내자 
    //2) 가입을 원할 경우엔 ,db에 넣어줘야하고
    // 3) 이미지를 원하는 이미지를 보여줘야하고, 오디오파일을 원하면 오디오를 전송해줘야함..
});
//서버 가동하기 
server.listen(7979,function(){
    console.log("Server is running at 7979 port...");
});