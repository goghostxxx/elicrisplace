const rooms = [
{
id: 1,
name: "Deluxe Ocean View Suite",
description: "Spacious suite with panoramic ocean views and a private balcony.",
price: 350,
images: [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427"
]
},
{
id: 2,
name: "Standard Double Room",
description: "Comfortable room for two with city views and modern amenities.",
price: 120,
images: [
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
]
},
{
id: 3,
name: "Executive King Suite",
description: "Luxurious suite with a king bed, work desk, and mini-bar.",
price: 280,
images: [
    "https://images.unsplash.com/photo-1595576508898-0ad5c879a061",
    "https://images.unsplash.com/photo-1540518614846-7eded433c457",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39"
]
},
{
id: 4,
name: "Family Quad Room",
description: "Ideal for families with four beds, play area, and garden access.",
price: 200,
images: [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"
]
},
{
id: 5,
name: "Penthouse Villa",
description: "Exclusive top-floor villa with rooftop terrace and jacuzzi.",
price: 500,
images: [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
]
},
{
id: 6,
name: "Budget Single Room",
description: "Affordable single room with essential amenities and Wi-Fi.",
price: 80,
images: [
    "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    "https://images.unsplash.com/photo-1527030280862-64139fba04ca",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3b2a6c"
]
},
{
id: 7,
name: "Romantic Honeymoon Suite",
description: "Elegant suite with luxury decor and sunset views.",
price: 400,
images: [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    "https://images.unsplash.com/photo-1591088398332-8a7791972843",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
]
},
{
id: 8,
name: "Mountain View Cabin",
description: "Cozy cabin-style room with scenic views and fireplace.",
price: 180,
images: [
    "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff",
    "https://images.unsplash.com/photo-1501876725168-00c445821c9e",
    "https://images.unsplash.com/photo-1470167290877-7d5d3446de4c"
]
},
{
id: 9,
name: "Business Executive Room",
description: "Designed for professionals with ergonomic desk and high-speed internet.",
price: 160,
images: [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"
]
},
{
id: 10,
name: "Garden Bungalow",
description: "Private bungalow surrounded by lush gardens and a hammock.",
price: 220,
images: [
    "https://images.unsplash.com/photo-1595576508898-0ad5c879a061",
    "https://images.unsplash.com/photo-1540518614846-7eded433c457",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39"
]
},
{
id: 11,
name: "Luxury Spa Suite",
description: "Indulgent suite with in-room spa bath and aromatherapy.",
price: 320,
images: [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427"
]
},
{
id: 12,
name: "Historic Heritage Room",
description: "Charming room in the historic wing with antique furnishings.",
price: 140,
images: [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    "https://images.unsplash.com/photo-1599423300746-b62533397364",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
]
},
{
id: 13,
name: "Beachfront Cottage",
description: "Quaint cottage steps from the beach with outdoor shower.",
price: 260,
images: [
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
]
},
{
id: 14,
name: "Accessible Twin Room",
description: "Wheelchair-friendly room with twin beds and wide doorways.",
price: 130,
images: [
    "https://images.unsplash.com/photo-1595576508898-0ad5c879a061",
    "https://images.unsplash.com/photo-1540518614846-7eded433c457",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39"
]
},
{
id: 15,
name: "Skyline View Loft",
description: "Modern loft with floor-to-ceiling windows and city skyline.",
price: 290,
images: [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
]
},
{
id: 16,
name: "Eco-Friendly Pod",
description: "Sustainable pod room with solar panels and recycled materials.",
price: 100,
images: [
    "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    "https://images.unsplash.com/photo-1527030280862-64139fba04ca",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3b2a6c"
]
},
{
id: 17,
name: "Presidential Suite",
description: "Opulent suite with butler service and private dining area.",
price: 600,
images: [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
]
},
{
id: 18,
name: "Pet-Friendly Suite",
description: "Spacious suite welcoming pets with comfort extras.",
price: 170,
images: [
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
]
},
{
id: 19,
name: "Art Deco Room",
description: "Stylish room inspired by Art Deco with bold patterns and art.",
price: 190,
images: [
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
]
},
{
id: 20,
name: "Forest Retreat Cabin",
description: "Secluded cabin-style room with nature views and quiet surroundings.",
price: 150,
images: [
    "https://images.unsplash.com/photo-1595576508898-0ad5c879a061",
    "https://images.unsplash.com/photo-1540518614846-7eded433c457",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39"
]
}
];

document.addEventListener('DOMContentLoaded', () => {
const roomList = document.getElementById('room-list');
const details = document.getElementById('room-details');
const nameEl = document.getElementById('room-name');
const descEl = document.getElementById('room-description');
const priceEl = document.getElementById('room-price');
const gallery = document.getElementById('image-gallery');
const reserveForm = document.getElementById('reservation-form');
const form = document.getElementById('reserve-form');

rooms.forEach(room => {
const card = document.createElement('div');
card.className = 'room-card';
card.innerHTML = `
    <img src="${room.images[0]}" alt="${room.name} thumbnail">
    <h3>${room.name}</h3>
    <p>${room.description}</p>
    <p><strong>$${room.price} per night</strong></p>
    <button onclick="selectRoom(${room.id})">Select Room</button>
`;
roomList.appendChild(card);
});
window.selectRoom = (id) => {
const room = rooms.find(r => r.id === id);
nameEl.textContent = room.name;
descEl.textContent = room.description;
priceEl.innerHTML = `<strong>$${room.price} per night</strong> (includes taxes and breakfast)`;
gallery.innerHTML = room.images.slice(1).map(img => `<img src="${img}" alt="${room.name} gallery">`).join('');
reserveForm.style.display = 'none';
details.style.display = 'flex';
};
window.showReservationForm = () => {
reserveForm.style.display = 'block';
};
window.hideReservationForm = () => {
reserveForm.style.display = 'none';
};
form.addEventListener('submit', (e) => {
e.preventDefault();
const checkin = document.getElementById('checkin').value;
const checkout = document.getElementById('checkout').value;
const guests = document.getElementById('guests').value;
const requests = document.getElementById('requests').value;

const checkinDate = new Date(checkin);
const checkoutDate = new Date(checkout);
if (!checkin || !checkout || !guests) {
    alert('Please fill in all required fields.');
    return;
}
if (checkoutDate <= checkinDate) {
    alert('Check-out date must be after check-in date.');
    return;
}
alert(`Reservation confirmed for ${nameEl.textContent}!\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}\nRequests: ${requests || 'None'}\nTotal: $${calculateTotal(checkinDate, checkoutDate, parseInt(priceEl.textContent.match(/\d+/)[0]))}`);
closeDetails(); 
});
function calculateTotal(checkin, checkout, price) {
const nights = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
return nights * price;
}
window.closeDetails = () => {
details.style.display = 'none';
hideReservationForm();
};
});