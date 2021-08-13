const popupAddPost = document.querySelector("#popup-add-post");
// Подключаем попап для добавления карточки
const popupEditInfo = document.querySelector("#popup-edit");
// Подключаем попап с формой для изменения данных профиля
const addPostButton = document.querySelector(".profile__add-button");
// Кнопка для открытия popupAddPost
const buttonEditInfo = document.querySelector(".profile__edit-button");
// Кнопка для открытия popupEditInfo
const closeButtonPopupAddPost = popupAddPost.querySelector("#close-button-popup-add-post");
// Кнопка для закрытия popupAddPost
const closeButtonPopupEditInfo = popupEditInfo.querySelector("#button-close-popup-edit");
// Кнопка для закрытия popupEditInfo
const buttonSubmitAddPost = popupAddPost.querySelector("#button-submit-add-post");
// Кнопка для добавления карточки из popupAddPost
const buttonInfoSave = popupEditInfo.querySelector("#button-submit-profile");
// Кнопка для сохранения данных для профиля из popupEditInfo
const inputName = popupEditInfo.querySelector("#input-name");
const inputDescription = popupEditInfo.querySelector("#input-description");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector('.profile__about-me');
const buttonLike = document.querySelector(".card__like");
const closeButton = document.querySelector('.popup__close-button');

const cardData = [

    {
        title: "Карачаевск",
        image: "./images/1.jpg"
    },

    {
        title: "Москва",
        image: "https://get.wallhere.com/photo/temple-city-cityscape-Moscow-building-tower-cathedral-Red-Square-landmark-wat-place-of-worship-hindu-temple-88842.jpg"
    },

    {
        title: "Домбай",
        image: "https://sk-intour.ru/wp-content/uploads/2020/10/tur-vyhodnogo-dnja-v-dombaj-s-kjeshbjekom-ot-svoej-kompanii-4.jpg"
    },

    {
        title: "Гора Эльбрус",
        image: "https://akademiya-gornih-turov.ru/wp-content/uploads/2019/09/Elbrus-Great-Mountain.jpg"
    },

    {
        title: "Выборг",
        image: "https://gdenahoditsya.ru/wp-content/uploads/2019/07/DpDvgAlfgdsfsW0AAE5-n-e1564383812232.jpg"
    },

    {
        title: "Екатеринбург",
        image: "https://mediasole.ru/data/images/468/468254/43s.jpg"
    }
];

function openPopup(classPopup) {
    classPopup.classList.add("popup_open");
}

function closePopup(classPopup) {
    classPopup.classList.remove("popup_open");
}

function InfoProfile() {
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
}

function createCard(item) {
    const card = document.querySelector("#template-card").content.querySelector('.card').cloneNode(true);
    const popupCard = document.querySelector("#popup-card");
    const popupImage = popupCard.querySelector(".popup__image");
    const popupTitle = popupCard.querySelector(".popup__image-caption");
    const title = card.querySelector(".card__title");
    const image = card.querySelector('.card__image');
    const closeButton = popupCard.querySelector("#close-button-popup-card");

    title.textContent = item.title;
    image.src = item.image;

    card.querySelector('.card__like').addEventListener('click', (evt) => {
        evt.target.classList.toggle("card__like_active");
    });

    card.querySelector('.card__button-delete').addEventListener('click', (evt) => {
        card.remove();
    });

    image.addEventListener('click', () => {
        popupImage.src = item.image;
        popupTitle.textContent = item.title;
        openPopup(popupCard);
    });

    closeButton.addEventListener('click', () => {
        popupImage.src = '';
        popupTitle.textContent = '';
        closePopup(popupCard);
    });

    popupCard.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget) {
            popupCard.classList.remove("popup_open");
        }
    });
    return card;
}

function addCard(item, container) {
    const card = createCard(item);
    container.append(card);
}

cardData.forEach((item) => {
    const cards = document.querySelector('.cards');
    addCard(item, cards);
});

addPostButton.addEventListener('click', () => {
    openPopup(popupAddPost);
});

closeButtonPopupAddPost.addEventListener('click', () => {
    closePopup(popupAddPost);
});

buttonSubmitAddPost.addEventListener('click', () => {
    const title = document.querySelector('#input-title-post');
    const image = document.querySelector("#input-post-image");
    const cardData = [{
        title: `${title.value}`,
        image: `${image.value}`
    }];

    cardData.forEach((item) => {
        const cards = document.querySelector('.cards');
        addCard(item, cards);
    });

    createCard(cardData);
    closePopup(popupAddPost);

    title.value = '';
    image.value = '';
});

popupAddPost.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(popupAddPost);
    }
});

popupEditInfo.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(popupEditInfo);
    }
});

buttonEditInfo.addEventListener('click', () => {
    openPopup(popupEditInfo);
    InfoProfile();
});

closeButton.addEventListener('click', (evt) => {
    const popup = closeButton.closest('.popup');
    popup.classList.remove('popup_open');
});

buttonInfoSave.addEventListener('click', () => {
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;

    closePopup(popupEditInfo);
});