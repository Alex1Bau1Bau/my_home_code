let inp_add = document.getElementById('inp_add');
let add_butt_li = document.getElementById('add_butt_li');

let container_li = document.getElementById('container_li');
let del_butt_li = document.getElementById('del_butt_li');

id_numb = 1

// Create_new_li__OR__delete_li
    add_butt_li.addEventListener('click', function () {
        id_numb += 1

        console.log(id_numb)
        console.log(inp_add.value)

        let new_li = document.createElement('div')
        let new_but = document.createElement('button')

        let html_Inp = '<input type="checkbox" class="checkA">'

        new_li.innerText = inp_add.value;
        new_li.setAttribute('id',`${id_numb}`)
        new_li.setAttribute('class','div3')
        container_li.append(new_li);

        new_but.className = 'del_butt_li2'
        new_but.innerText = 'x'
        new_li.appendChild(new_but)
        
        
        let id_li = document.getElementById(`${id_numb}`);
        id_li.insertAdjacentHTML('afterbegin', html_Inp)

//delete_li
        new_but.addEventListener('click', function () {
            container_li.removeChild(new_li)
        })

//text_line_through
        new_li.addEventListener('click', function () {
            new_li.classList.toggle('li_active')
        })

        inp_add.value = ''
    });
