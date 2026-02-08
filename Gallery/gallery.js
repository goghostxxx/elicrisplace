document.addEventListener('DOMContentLoaded', () => {

const properties = [
{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
additionalImages: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
additionalImages: [
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2'
]
},
{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
additionalImages: [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
    'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d42'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
additionalImages: [
    'https://images.unsplash.com/photo-1551776235-dde6d4829808',
    'https://images.unsplash.com/photo-1540518614846-7eded433c457',
    'https://images.unsplash.com/photo-1560347876-aeef00ee58a1'
]
},
{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
additionalImages: [
    'https://images.unsplash.com/photo-1501876725168-00c445821c9e',
    'https://images.unsplash.com/photo-1515263487990-61b07816b324',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
additionalImages: [
'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
'https://images.unsplash.com/photo-1507089947368-19c1da9775ae'
]
},
{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
additionalImages: [
    'https://images.unsplash.com/photo-1493666438817-866a91353ca9',
    'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d42',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
additionalImages: [
    'https://images.unsplash.com/photo-1551776235-dde6d4829808',
    'https://images.unsplash.com/photo-1559599101-f09722fb4948',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461'
]
},
{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
additionalImages: [
    'https://images.unsplash.com/photo-1501876725168-00c445821c9e',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
additionalImages: [
    'https://images.unsplash.com/photo-1560067174-8949f35a14fd',
    'https://images.unsplash.com/photo-1540518614846-7eded433c457',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2'
]
},
{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
additionalImages: [
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
    'https://images.unsplash.com/photo-1551776235-dde6d4829808',
    'https://images.unsplash.com/photo-1559599101-f09722fb4948'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
additionalImages: [
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
    'https://images.unsplash.com/photo-1551776235-dde6d4829808',
    'https://images.unsplash.com/photo-1559599101-f09722fb4948'
]
},
{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
additionalImages: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
additionalImages: [
    'https://images.unsplash.com/photo-1560067174-8949f35a14fd',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2'
]
},

{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
additionalImages: [
'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
'https://images.unsplash.com/photo-1507089947368-19c1da9775ae'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
additionalImages: [
'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2'
]
},
{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
additionalImages: [
'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
'https://images.unsplash.com/photo-1493666438817-866a91353ca9'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
additionalImages: [
'https://images.unsplash.com/photo-1551776235-dde6d4829808',
'https://images.unsplash.com/photo-1540518614846-7eded433c457',
'https://images.unsplash.com/photo-1560347876-aeef00ee58a1'
]
},
{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
additionalImages: [
'https://images.unsplash.com/photo-1523217582562-09d0def993a6',
'https://images.unsplash.com/photo-1515263487990-61b07816b324',
'https://images.unsplash.com/photo-1501876725168-00c445821c9e'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
additionalImages: [
'https://images.unsplash.com/photo-1559599101-f09722fb4948',
'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
'https://images.unsplash.com/photo-1551776235-dde6d4829808'
]
},

{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
additionalImages: [
'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d42',
'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
additionalImages: [
'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
'https://images.unsplash.com/photo-1524758631624-e2822e304c36'
]
},
{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
additionalImages: [
'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
'https://images.unsplash.com/photo-1493666438817-866a91353ca9'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
additionalImages: [
'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
'https://images.unsplash.com/photo-1551776235-dde6d4829808',
'https://images.unsplash.com/photo-1559599101-f09722fb4948'
]
},

{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
additionalImages: [
'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
'https://images.unsplash.com/photo-1523217582562-09d0def993a6',
'https://images.unsplash.com/photo-1501876725168-00c445821c9e'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
additionalImages: [
'https://images.unsplash.com/photo-1540518614846-7eded433c457',
'https://images.unsplash.com/photo-1560067174-8949f35a14fd',
'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2'
]
},
{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1515263487990-61b07816b324',
additionalImages: [
'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d42'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
additionalImages: [
'https://images.unsplash.com/photo-1559599101-f09722fb4948',
'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
'https://images.unsplash.com/photo-1551776235-dde6d4829808'
]
},

{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
additionalImages: [
'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
'https://images.unsplash.com/photo-1524758631624-e2822e304c36'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
additionalImages: [
'https://images.unsplash.com/photo-1551776235-dde6d4829808',
'https://images.unsplash.com/photo-1540518614846-7eded433c457',
'https://images.unsplash.com/photo-1560347876-aeef00ee58a1'
]
},

{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
additionalImages: [
'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
'https://images.unsplash.com/photo-1493666438817-866a91353ca9',
'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
additionalImages: [
'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2'
]
},
{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1501876725168-00c445821c9e',
additionalImages: [
'https://images.unsplash.com/photo-1515263487990-61b07816b324',
'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
'https://images.unsplash.com/photo-1523217582562-09d0def993a6'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
additionalImages: [
'https://images.unsplash.com/photo-1559599101-f09722fb4948',
'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
'https://images.unsplash.com/photo-1551776235-dde6d4829808'
]
},

{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
additionalImages: [
'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
additionalImages: [
'https://images.unsplash.com/photo-1559599101-f09722fb4948',
'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
'https://images.unsplash.com/photo-1551776235-dde6d4829808'
]
},
{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
additionalImages: [
'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
'https://images.unsplash.com/photo-1505691938895-1758d7feb511'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
additionalImages: [
'https://images.unsplash.com/photo-1551776235-dde6d4829808',
'https://images.unsplash.com/photo-1540518614846-7eded433c457',
'https://images.unsplash.com/photo-1560347876-aeef00ee58a1'
]
},
{
type: 'apartment',
title: 'Apartment',
mainImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
additionalImages: [
'https://images.unsplash.com/photo-1523217582562-09d0def993a6',
'https://images.unsplash.com/photo-1515263487990-61b07816b324',
'https://images.unsplash.com/photo-1501876725168-00c445821c9e'
]
},
{
type: 'hotel',
title: 'Hotel',
mainImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
additionalImages: [
'https://images.unsplash.com/photo-1559599101-f09722fb4948',
'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
'https://images.unsplash.com/photo-1551776235-dde6d4829808'
]
}];
const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const showAllBtn = document.getElementById('show-all');
const showApartmentsBtn = document.getElementById('show-apartments');
const showHotelsBtn = document.getElementById('show-hotels');
let currentImages = [];
let currentIndex = 0;

function generateGallery(filter = 'all') {
    gallery.innerHTML = '';
    properties.forEach((property, index) => {
        if (filter === 'all' || property.type === filter) {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <img src="${property.mainImage}" alt="${property.title}">
                <h3>${property.title}</h3>
                <button class="view-more" data-index="${index}">View More</button>
            `;
            gallery.appendChild(item);
        }
    });
}
function openLightbox(index) {
    currentImages = properties[index].additionalImages;
    currentIndex = 0;
    lightboxImg.src = currentImages[currentIndex];
    lightbox.style.display = 'flex';
    updateButtons();
}
function updateButtons() {
    prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';
    nextBtn.style.display = currentIndex < currentImages.length - 1 ? 'block' : 'none';
}
showAllBtn.addEventListener('click', () => generateGallery('all'));
showApartmentsBtn.addEventListener('click', () => generateGallery('apartment'));
showHotelsBtn.addEventListener('click', () => generateGallery('hotel'));
gallery.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-more')) {
        const index = e.target.getAttribute('data-index');
        openLightbox(index);
    }
});
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        lightboxImg.src = currentImages[currentIndex];
        updateButtons();
    }
});
nextBtn.addEventListener('click', () => {
    if (currentIndex < currentImages.length - 1) {
        currentIndex++;
        lightboxImg.src = currentImages[currentIndex];
        updateButtons();
    }
});
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
generateGallery();
});