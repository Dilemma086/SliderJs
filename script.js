if(document.querySelector('.contentImg') != null){
    const data = {
        'height' : "auto",
        'width' : "1024",
        'timeMove': "4000",
        'radiusLi' : "5px",
        'paddingLi' : "10px"
    }
    let ulBlock = document.querySelector('.ulBlock')

    let contImg = document.querySelector('.contentImg')
    // let widthCont = contImg.clientWidth
    let _image = Array.from(document.querySelectorAll('.sliderMainBottom'));
    let _left = document.querySelector('.left_blockSliderMain')
    let _right = document.querySelector('.right_blockSliderMain')
    _image.forEach((item, i) => {
        
        
        if(i==0){
            const li = document.createElement('li')
            li.classList.add('indicatorsToche')
            li.classList.add('activeIndicator')
            ulBlock.append(li)
        }
        else{
            const li = document.createElement('li')
            li.classList.add('indicatorsToche')
            ulBlock.append(li)
        }
    
    })

    let _indicatorsArr = Array.from(document.querySelectorAll('.indicatorsToche'));

    const blockChildSsection = document.querySelector('.blockSliderMain')
        blockChildSsection.style.height = data.height
        blockChildSsection.style.width = data.width+'px'
    _indicatorsArr.map(item => {
        item.style.height = data.radiusLi
        item.style.width = data.radiusLi
        item.style.marginRight = data.paddingLi
    })

    let count = 0 
  
    const scrollImg = (countCard) => {
        contImg.scroll({top:0,left:countCard * data.width, behavior:"smooth"})
    }

    const indicatorChange = (indictNum) => {
        _indicatorsArr.map(item => item.classList.remove('activeIndicator'))
        _indicatorsArr[indictNum].classList.add('activeIndicator')
    }

    _right.addEventListener('click', () => {
        count < _image.length-1 ? count++ : count = 0;
        scrollImg(count);
        indicatorChange(count)
        clearInterval(timer)
        interval()
    }) 

    _left.addEventListener('click', () => {
        count < 1 ? count = _image.length-1 : count--;
        scrollImg(count);
        indicatorChange(count)
        clearInterval(timer)
        interval()
    })

    _indicatorsArr.map((item, i) => item.addEventListener('click', (e)=>{
        scrollImg(i)
        _indicatorsArr.map(item => item.classList.remove('activeIndicator'))
        item.classList.add('activeIndicator')
    }))

    
    let timer
    function interval() {
            timer = setInterval(() => {
            count < _image.length-1 ? count++ : count = 0;
            scrollImg(count)
            _indicatorsArr.map(item => item.classList.remove('activeIndicator'))
            _indicatorsArr[count].classList.add('activeIndicator')
        }, data.timeMove)
    } 
    interval() 
    
    const hadleStart = (event) =>{
        console.log(event.value + 'px');
    }
    _image.forEach(item => {
        item.addEventListener('touchstart', hadleStart)
    })

    // свайпер

    // Вешаем на прикосновение функцию handleTouchStart
    document.addEventListener('touchstart', handleTouchStart, false);  
// А на движение пальцем по экрану - handleTouchMove      
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;                                                        
    var yDown = null;                                                        

    function handleTouchStart(evt) {                                         
        xDown = evt.touches[0].clientX;                                      
        yDown = evt.touches[0].clientY;                                      
    };                                                

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    // немного поясню здесь. Тут берутся модули движения по оси абсцисс и ординат (почему модули? потому что если движение сделано влево или вниз, то его показатель будет отрицательным) и сравнивается, чего было больше: движения по абсциссам или ординатам. Нужно это для того, чтобы, если пользователь провел вправо, но немного наискосок вниз, сработал именно коллбэк для движения вправо, а ни как-то иначе.
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
        } else {
            /* right swipe */
        }                       
    } else { // Это вам, в общем-то, не надо, вы ведь только влево-вправо собираетесь двигать
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
    };
    
}