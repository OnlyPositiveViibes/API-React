
const searchList = () => {
    document.querySelector('.history').addEventListener('click', () => {
        for(let key in localStorage) {
            if(localStorage.getItem(key)!== null) {

                let result = JSON.parse(localStorage.getItem(key))
                console.log(result)
                let li = document.createElement('li');
                li.className = "list-group-item";
                li.textContent = `Adresas: ${result.address}. Pasto kodas: ${result.post_code}`
                document.querySelector('ul').appendChild(li)
            }
        }

    })
    

}

export default searchList