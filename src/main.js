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
        iziToast.show({
            message: "Please, fill out thne form",
            position: 'topRight',
            backgroundColor: '#EF4040',
            titleColor: '#fff',
            messageColor: '#fff',
            close: true,
        }
        )
        return
    }
    clearGallery()
    showLoader()

    getImagesByQuery(event.target.elements[0].value)
        .then(response => {
            if (response.hits.length >= 1) {
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
            iziToast.show({
                message: error.message,
                position: 'topRight',
                backgroundColor: '#EF4040',
                titleColor: '#fff',
                messageColor: '#fff',
                close: true,
            }
            )
    )
        .finally(() => 
        hideLoader()
    )
}