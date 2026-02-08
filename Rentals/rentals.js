const rentals = [
{
id: 1,
name: "Modern Downtown Apartment",
description: "Spacious apartment with city views and modern amenities.",
price: 150,
location: "Victoria Island, Lagos",
images: [
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
]
},
{
id: 2,
name: "Cozy Suburban House",
description: "Comfortable house for families with a garden and parking.",
price: 200,
location: "Lekki, Lagos",
images: [
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
]
},
{
id: 3,
name: "Luxury Beachfront Villa",
description: "Elegant villa with ocean access and private pool.",
price: 400,
location: "Banana Island, Lagos",
images: [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811"
]
},
{
id: 4,
name: "Family Townhouse",
description: "Ideal for families with multiple bedrooms and a backyard.",
price: 250,
location: "Ikoyi, Lagos",
images: [
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    "https://images.unsplash.com/photo-1599423300746-b62533397364",
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c"
]
},
{
id: 5,
name: "Penthouse Loft",
description: "Stylish loft with skyline views and rooftop access.",
price: 350,
location: "Victoria Island, Lagos",
images: [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
]
},
{
id: 6,
name: "Budget Studio Apartment",
description: "Affordable studio with essentials and Wi-Fi.",
price: 100,
location: "Surulere, Lagos",
images: [
    "https://images.unsplash.com/photo-1527030280862-64139fba04ca",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3b2a6c"
]
},
{
id: 7,
name: "Romantic Cottage",
description: "Charming cottage with fireplace and garden.",
price: 180,
location: "Lagos Island, Lagos",
images: [
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    "https://images.unsplash.com/photo-1472224371017-08207f84aaae",
    "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
]
},
{
id: 8,
name: "Mountain Cabin",
description: "Cozy cabin with hiking trails and wood stove.",
price: 220,
location: "Lekki, Lagos",
images: [
    "https://images.unsplash.com/photo-1501876725168-00c445821c9e",
    "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff",
    "https://images.unsplash.com/photo-1470167290877-7d5d3446de4c"
]
},
{
id: 9,
name: "Business Center Condo",
description: "Professional condo with workspace and high-speed internet.",
price: 170,
location: "Victoria Island, Lagos",
images: [
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
]
},
{
id: 10,
name: "Garden Bungalow",
description: "Private bungalow in lush gardens with a hammock.",
price: 190,
location: "Ikoyi, Lagos",
images: [
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    "https://images.unsplash.com/photo-1599423300746-b62533397364",
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c"
]
},
{
id: 11,
name: "Spa Retreat House",
description: "Relaxing house with in-home spa and aromatherapy.",
price: 280,
location: "Banana Island, Lagos",
images: [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811"
]
},
{
id: 12,
name: "Historic Brownstone",
description: "Charming historic home with antique details.",
price: 160,
location: "Lagos Island, Lagos",
images: [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    "https://images.unsplash.com/photo-1599423300746-b62533397364",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
]
},
{
id: 13,
name: "Beach House",
description: "Quaint house steps from the beach with outdoor shower.",
price: 300,
location: "Lekki, Lagos",
images: [
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    "https://images.unsplash.com/photo-1599423300746-b62533397364",
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c"
]
},
{
id: 14,
name: "Accessible Duplex",
description: "Wheelchair-friendly duplex with wide spaces.",
price: 140,
location: "Surulere, Lagos",
images: [
    "https://images.unsplash.com/photo-1527030280862-64139fba04ca",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3b2a6c"
]
},
{
id: 15,
name: "Skyline Penthouse",
description: "Modern penthouse with city views and terrace.",
price: 320,
location: "Victoria Island, Lagos",
images: [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
]
},
{
id: 16,
name: "Eco-Friendly Tiny House",
description: "Sustainable tiny house with solar power.",
price: 120,
location: "Lagos Island, Lagos",
images: [
    "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff",
    "https://images.unsplash.com/photo-1501876725168-00c445821c9e",
    "https://images.unsplash.com/photo-1470167290877-7d5d3446de4c"
]
},
{
id: 17,
name: "Luxury Mansion",
description: "Opulent mansion with butler service and dining.",
price: 500,
location: "Ikoyi, Lagos",
images: [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
]
},
{
id: 18,
name: "Pet-Friendly Apartment",
description: "Spacious apartment welcoming pets with park nearby.",
price: 130,
location: "Lekki, Lagos",
images: [
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
]
},
{
id: 19,
name: "Art Deco Loft",
description: "Stylish loft with bold designs and art.",
price: 210,
location: "Victoria Island, Lagos",
images: [
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
]
},
{
id: 20,
name: "Forest Retreat Cabin",
description: "Secluded cabin in the woods with hiking trails nearby.",
price: 150,
location: "Surulere, Lagos",
images: [
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    "https://images.unsplash.com/photo-1599423300746-b62533397364",
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c"
]
}
];

document.addEventListener('DOMContentLoaded', () => {
    const rentalList = document.getElementById('rental-list');
    const details = document.getElementById('rental-details');
    const nameEl = document.getElementById('rental-name');
    const descEl = document.getElementById('rental-description');
    const priceEl = document.getElementById('rental-price');
    const locationEl = document.getElementById('rental-location');
    const gallery = document.getElementById('image-gallery');
    const reserveForm = document.getElementById('reservation-form');
    const cancelForm = document.getElementById('cancellation-form');
    const form = document.getElementById('reserve-form');
    const cancelFormEl = document.getElementById('cancel-form');

    rentals.forEach(rental => {
        const card = document.createElement('div');
        card.className = 'rental-card';
        card.innerHTML = `
            <img src="${rental.images[0]}" alt="${rental.name} thumbnail">
            <h3>${rental.name}</h3>
            <p>${rental.description}</p>
            <p>Location: ${rental.location}</p>
            <p><strong>$${rental.price} per night</strong></p>
            <button onclick="selectRental(${rental.id})">View Airbnb</button>
        `;
        rentalList.appendChild(card);
    });
    window.selectRental = (id) => {
        const rental = rentals.find(r => r.id === id);
        nameEl.textContent = rental.name;
        descEl.textContent = rental.description;
        locationEl.textContent = `Location: ${rental.location}`;
        priceEl.innerHTML = `<strong>$${rental.price} per night</strong> (includes taxes and breakfast)`;
        gallery.innerHTML = rental.images.slice(1).map(img => `<img src="${img}" alt="${rental.name} gallery">`).join('');
        reserveForm.style.display = 'none';
        cancelForm.style.display = 'none';
        details.style.display = 'flex';
    };
    window.showReservationForm = () => {
        reserveForm.style.display = 'block';
        cancelForm.style.display = 'none';
    };
    window.showCancellationForm = () => {
        cancelForm.style.display = 'block';
        reserveForm.style.display = 'none';
    };
    window.hideReservationForm = () => {
        reserveForm.style.display = 'none';
    };
    window.hideCancellationForm = () => {
        cancelForm.style.display = 'none';
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
    cancelFormEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const reservationId = document.getElementById('reservation-id').value;
        const cancelReason = document.getElementById('cancel-reason').value;

        if (!reservationId || !cancelReason) {
            alert('Please fill in all required fields.');
            return;
        }
        alert(`Cancellation confirmed for Reservation ID: ${reservationId}!\nReason: ${cancelReason}`);
        closeDetails();
    });
    function calculateTotal(checkin, checkout, price) {
        const nights = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
        return nights * price;
    }
    window.closeDetails = () => {
        details.style.display = 'none';
        hideReservationForm();
        hideCancellationForm();
    };
});