let data1 = {
    photo: 'images/1.jpg',
    title: 'Brewster Hut',
    description: 'This challenging, steep summit hike offers 360 degree views, access to Brewster Glacier, and beautiful bush walking through beech forests. This is among shortest trips into the heart of the Southern Alps.'
};

let data2 = {
    photo: 'images/2.jpg',
    title: 'Marian Lake',
    description: 'Lake Marian is an alpine lake at the southern end of the Darran Mountains in the Fiordland National Park. The valley is sheltered by steep snow-covered peaks of over 2,000 metres on all sides apart from the entrance.'
};

let data3 = {
    photo: 'images/3.jpg',
    title: 'Mount Cook',
    description: 'Mount Cook (Aoraki) is the highest mountain in New Zealand with height of 3,724 metres. It is a popular tourist destination and also a favourite challenge for mountain climbers.'
};

let data4 = {
    photo: 'images/4.jpg',
    title: 'Mount Fyffe',
    description: 'Mount Fyffe offers a superb views over the Kaikōura plains in one direction and coastal views of Kaikoura plains in the other. It is a steep and challenging track.'
};

let data5 = {
    photo: 'images/5.jpg',
    title: 'Tongariro National Park',
    description: 'Tongariro National Park is the oldest national park in New Zealand and is also acknowledged by UNESCO as World Heritage Site. The active volcanic mountains Ruapehu, Ngauruhoe, and Tongariro are located in the centre of the park.'
};

let data6 = {
    photo: 'images/6.jpg',
    title: 'Routeburn Track',
    description: 'Routeburn Track is a world-renowned, 32 km tramping track. With soaring mountain peaks, huge valleys, waterfalls and jewel-like lakes the Routeburn Track links the Mount Aspiring National Park with Fiordland National Park.'
};

let currentPhoto = 0;
let imagesData = [data1, data2, data3, data4, data5, data6];

$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#descriptionName').text(imagesData[currentPhoto].title);
$('#descriptionText').text(imagesData[currentPhoto].description);

let loadPhoto = (photoNumber) => {
    $('.thumbnail').removeClass('highlight');
    $('.thumbnail').eq(photoNumber).addClass('highlight');
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#descriptionName').text(imagesData[photoNumber].title);
    $('#descriptionText').text(imagesData[photoNumber].description);
    currentPhoto = photoNumber;
}

function createThumbnail(imageData, index) {
    $('.thumbnail').eq(index).attr('src', imageData.photo).data('index', index);
}

imagesData.forEach(createThumbnail);

$('.thumbnail').on('click', function () {
    let clickedIndex = $(this).data('index');
    loadPhoto(clickedIndex);
});

$('.arrow2').click(() => {
    if (currentPhoto < 5) {
        currentPhoto++;
    }
    loadPhoto(currentPhoto);
});

$('.arrow1').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
    }
    loadPhoto(currentPhoto);
});
