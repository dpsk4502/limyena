// var 함수명 = function(params) {}
$.fn.faq = function(params) {
	// this !== params
	// this 는 paprams 프로퍼티도 갖는다. 자식의 의미.
	var that = this; // this는 변할 수 있기 때문에. javascript의 코딩 기법.
					// 자바스크립트에는 일반적으로 this를 임시 변수에 저장 가능.
	
	// each() 매서드 인자
	// 첫번째 인자 : 배열 => that. jQuery로 찾은 결과물. 여러개.
	// 두번째 인자 : 함수
	$.each(that, function(params){
		$(this).on('click', function(event){
			// 1. 클릭된 나를 찾는다. this
			// 2. 클릭된 나의 부모 찾기. parents
			// 3. 내 부모의 첫번째 동생 찾기. next()
			// 4. 내 부모의 첫번째 동생 show/hide 하기. toggle()
			$(this).parent()
					.next('div')
					.toggle();
			console.log(this.name); // this.name == <button name="">
		});
		// 내 부모의 첫번째 동생 click 이벤트 설정하기 ==> toggle
		// <div> <div class="cont"> 답변 내용2</div>
		$(this).parent().next('div').on('click', function(event){
			// 1.클릭된 나를 찾고 ==> this
			// 2. show/hide 하기 ==> toggle()
			$(this).toggle();
		})
	});
};