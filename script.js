if(document.querySelector('.contentImg') != null){
    const data = {
        'height' : "510px",
        'width' : "1024",
        'timeMove': "5000",
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
    }, data.timeMove)
}