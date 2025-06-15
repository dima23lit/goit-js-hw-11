import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', handleForm);

function handleForm(event) {
    event.preventDefault()

    if (event.target.elements[0].value === "") {
        alert('Please, fill out the form')
        return
    }
    clearGallery()
    showLoader()

    getImagesByQuery(event.target.elements[0].value)
        .then(response => {
            if (response.hits.length >= 1) {
                console.log(response.hits)
                createGallery(response.hits)
            }
            else {
                iziToast.show({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: 'topRight',
                    backgroundColor: '#EF4040',
                    titleColor: '#fff',
                    messageColor: '#fff',
                    close: true,
                }
                )
            }
        })
        .catch(error =>
        error
    )
        .finally(() => 
        hideLoader()
    )

    form.reset()
}