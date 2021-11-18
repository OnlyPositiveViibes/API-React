const ajaxServices =  (term) => {
const url = "https://api.postit.lt/?term="
const key = "wudk30BeblUfYKlXJFaB";
return fetch(`${url}${term}&key=${key}`)
    .then(response => response.json())


}

export default ajaxServices