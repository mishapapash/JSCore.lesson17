$(document).ready(function(){

    let checkArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let checkBoolean = true;

    function random() {
        let randomArray = [];
        let variantOne = `<div class="element second" data-set="2"></div>
            <div class="element forth" data-set="4"></div>
            <div class="element third" data-set="3"></div>
            <div class="element first" data-set="1"></div>
            <div class="element ninth" data-set="9"></div>
            <div class="element sixth" data-set="6"></div>
            <div class="element eighth" data-set="8"></div>
            <div class="element second" data-set="2"></div>
            <div class="element seventh" data-set="7"></div>`;
        let variantTwo = `<div class="element third" data-set="3"></div>
            <div class="element forth" data-set="4"></div>
            <div class="element fifth" data-set="5"></div>
            <div class="element first" data-set="1"></div>
            <div class="element second" data-set="2"></div>
            <div class="element sixth" data-set="6"></div>
            <div class="element eighth" data-set="8"></div>
            <div class="element ninth" data-set="9"></div>
            <div class="element seventh" data-set="7"></div>`;
        let variantThree = `<div class="element ninth" data-set="9"></div>
            <div class="element forth" data-set="4"></div>
            <div class="element third" data-set="3"></div>
            <div class="element first" data-set="1"></div>
            <div class="element fifth" data-set="5"></div>
            <div class="element sixth" data-set="6"></div>
            <div class="element eighth" data-set="8"></div>
            <div class="element second" data-set="2"></div>
            <div class="element seventh" data-set="7"></div>`;
        let variantFour = `<div class="element eighth" data-set="8"></div>
            <div class="element fifth" data-set="5"></div>
            <div class="element first" data-set="1"></div>
            <div class="element third" data-set="3"></div>
            <div class="element seventh" data-set="7"></div>
            <div class="element forth" data-set="4"></div>
            <div class="element sixth" data-set="6"></div>
            <div class="element ninth" data-set="9"></div>
            <div class="element second" data-set="2"></div>`;
        let creatArr = [variantOne, variantTwo, variantThree, variantFour];
        let randomIndex = Math.round(Math.random()*(creatArr.length-1));
        randomArray.push(creatArr[randomIndex]);
        console.log(randomArray);
        $('.left-box').html(randomArray);
    }

    random();
    
    $("#start").on('click', ()=> {
        $("#start").prop('disabled',true);
        $("#checkResult").prop('disabled',false);
        $(".left-box").prop('disabled',false);
        let minute = 1;
        let seconds = 0;
        let timeS = minute * 60;
        let minStart = minute.toLocaleString('en-US', { minimumIntegerDigits: 2 });
        let secStart = seconds.toLocaleString('en-US', { minimumIntegerDigits: 2 });
        $('.coutdown').html(`<h2>${minStart}:${secStart}</h2>`);
        let coutdownTimer = setInterval(
            () => {
                timeS -= 1;
                seconds -= 1;
                if (seconds < 0) {
                    minute -= 1;
                    seconds = 59;
                }         
                let min = minute.toLocaleString('en-US', { minimumIntegerDigits: 2 });
                let sec = seconds.toLocaleString('en-US', { minimumIntegerDigits: 2 });
                $('.coutdown').html(`<h2>${min}:${sec}</h2>`);
                $('.coutdown-mini').html(`<h2>${min}:${sec}</h2>`);
                if (timeS < 0) {
                    clearInterval(coutdownTimer);
                    $('.coutdown').html(`<h2>00:00</h2>`);
                    $('.coutdown-mini').html(`<h3>00:00</h3>`);
                    alert('Time is OVER')
                }
            }, 1000
        )
        $(".box").sortable({
            connectWith: '#start, #end'
        })
    })

    $("#checkResult").on('click', ()=> {
        $('.check-alert').removeClass('hidden');
    })

    $("#newGame").on('click', ()=> {
        location.reload();
    })

    $("#cancelCheck").on('click', ()=> {
        $('.check-alert').addClass('hidden');
    })

    $("#closeLose").on('click', ()=> {
        location.reload();
    })

    $("#closeWin").on('click', ()=> {
        location.reload();
    })

    $("#checkFinal").on('click', ()=> {
        for(let i = 0; i < checkArray.length; i++) {
            if($('.element').eq(i).data('set') != checkArray[i]) {
                checkBoolean = false;
                break;
            }
        }
        if(checkBoolean) {
            $('.win-alert').removeClass('hidden');
        }
        else {
            $('.lose-alert').removeClass('hidden');
        }
        checkBoolean = true;
    })

    

    



})