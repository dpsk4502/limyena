       //id="btn" 찾으시오.
       var btn = document.getElementById('btn');
       btn.onclick = function(event){
       // alert 고전 이벤트 모델 버튼이 클릭되었습니다.
       window.alert('고전 이벤트 모델 버튼이 클릭되었습니다.');
       };
       
       // <p name='name'>고전 이벤트 모델</p>
        var p = document.getElementsByTagName('p'); // ==> 배열이다.
        p[0].onclick = function(event){
        // alert 0번 p태그가 클릭되었습니다.
        window.alert('0번 p태그가 클릭되었습니다.');
        };
      
      //class="btn2" 찾으시오.
       var btn2 = document.getElementsByClassName('btn2'); // 배열
       btn2[0].onclick = function(event){
       window.alert('btn2 class태그가 클릭되었습니다.');
       };