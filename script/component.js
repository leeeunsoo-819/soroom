document.addEventListener("DOMContentLoaded",function(){
    // like 클래스의 SVG 하트 클릭 이벤트
    const likeButtons = document.querySelectorAll('.like svg');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 이벤트 방지
            const likeContainer = this.closest('.like');
            const likeNumElement = likeContainer.querySelector('.likeNum');
            
            // on 클래스 토글
            likeContainer.classList.toggle('on');
            
            // 숫자 변경
            let currentNum = parseInt(likeNumElement.textContent.replace(/,/g, ''));
            
            if (likeContainer.classList.contains('on')) {
                // 좋아요 추가
                currentNum += 1;
            } else {
                // 좋아요 취소
                currentNum -= 1;
            }
            
            // 천 단위 콤마 추가하여 표시
            likeNumElement.textContent = currentNum.toLocaleString();
        });
    });
})