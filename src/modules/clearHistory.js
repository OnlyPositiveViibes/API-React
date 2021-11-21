
const clearHistory = () => {
    const deleteBtn = document.querySelector('.btn-danger');
    deleteBtn.addEventListener('click', () => {
        localStorage.clear(),
        location.reload();
    })
           
}




 export default clearHistory