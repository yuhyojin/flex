//스무스 스크롤
$('#navbar a, .btn').on('click', function(event){
    if(this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top -100 //위치
            },
            1000 //속도
        );
    }
})
// 백그라운드 투명하게
window.addEventListener('scroll',function(){
    if(window.scrollY > 150){
        document.querySelector('#navbar').style.opacity =0.5;
    }else{
       document.querySelector('#navbar').style.opacity= 1;
    }
});