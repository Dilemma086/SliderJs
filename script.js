if(document.querySelector('.contentImg') != null){
    let contImg = document.querySelector('.contentImg')
    let widthCont = contImg.clientWidth
    let _image = Array.from(document.querySelectorAll('.sliderMainBottom'));
    let _left = document.querySelector('.left_s5')
    let _right = document.querySelector('.right_s5')
    let _indicatorsArr = Array.from(document.querySelectorAll('.indicatorsToche'));

    let count = 0 
    console.log(widthCont);
    const scrollImg = (countCard) => {
        contImg.scroll({top:0,left:countCard * widthCont, behavior:"smooth"})
        
    }

    const indicatorChange = (indictNum) => {
        _indicatorsArr.map(item => item.classList.remove('activeIndicator'))
        _indicatorsArr[indictNum].classList.add('activeIndicator')
    }

    _right.addEventListener('click', () => {
        count < _image.length-1 ? count++ : count = 0;
        scrollImg(count);
        indicatorChange(count)
    }) 

    _left.addEventListener('click', () => {
        count < 1 ? count = _image.length-1 : count--;
        scrollImg(count);
        indicatorChange(count)
    })

    _indicatorsArr.map((item, i) => item.addEventListener('click', (e)=>{
        scrollImg(i)
        _indicatorsArr.map(item => item.classList.remove('activeIndicator'))
        item.classList.add('activeIndicator')
    }))

    setInterval(() => {
        count < _image.length-1 ? count++ : count = 0;
        scrollImg(count)
        _indicatorsArr.map(item => item.classList.remove('activeIndicator'))
        _indicatorsArr[count].classList.add('activeIndicator')
    }, 8000)
}