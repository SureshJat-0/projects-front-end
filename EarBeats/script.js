let items = document.querySelectorAll('.item');
let images = document.querySelectorAll('.right_section img');
let img_ind_footer = document.querySelector('.ind');
let img_total_footer = document.querySelector('.total_num');
let link_btns = document.querySelectorAll('.link button');
let infos = document.querySelectorAll('.info');
let back_btns = document.querySelectorAll('.back_btn');


// function for event listener 
function activeClass(items) {
    let isRun = false;
    items.forEach((item, ind) => {
        if (!isRun) {
            if (item.classList.contains('active')) {
                // adding active class
                item.classList.remove('active');
                images[ind].classList.remove('active');
                if (ind < items.length - 1) {
                    // removing active calss
                    items[ind + 1].classList.add('active');
                    images[ind + 1].classList.add('active');
                    img_ind_footer.innerText = ind + 2;
                }
                if (ind >= items.length - 1) {
                    // end point
                    items[0].classList.add('active');
                    images[0].classList.add('active');
                    img_ind_footer.innerText = 1;
                }
                isRun = true;
            }
        }
    })
}

// handlar function
function handlar() {
    return function () {
        activeClass(items);
    }
}

const listener = handlar();
// event listener for images 
images.forEach((img) => {
    img.addEventListener('click', listener);

    // EXPLORE PRODUCT Section 
    link_btns.forEach((btn, ind) => {
        btn.addEventListener('click', () => {
            img.removeEventListener('click', listener);
            items[ind].classList.add('show');
            images[ind].classList.add('show');
            infos[ind].classList.add('show');
        })
    })

    back_btns.forEach((btn, ind) => [
        btn.addEventListener('click', () => {
            img.addEventListener('click', listener);
            items[ind].classList.remove('show');
            images[ind].classList.remove('show');
            infos[ind].classList.remove('show');
        })
    ])
})

// total images 
img_total_footer.innerText = images.length;
