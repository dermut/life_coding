var A = {
    setColor:function(color){
        // var a = document.querySelectorAll('a');
        // var a_count = 0;
        // while(a_count < a.length) {
        //     a[a_count].style.color = color;
        //     a_count += 1;
        // }
        $('a').css('color', color);
    }
}
var Body = {
    setColor:function(color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor:function(color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self) {
    if(self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        
        A.setColor('yellow');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        
        A.setColor('blue');
    }
}