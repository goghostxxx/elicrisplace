document.addEventListener('DOMContentLoaded', () => {
    const airbnbBtn = document.getElementById('airbnbBtn');
    const hotelBtn = document.getElementById('hotelBtn');
    const airbnbForm = document.getElementById('airbnbForm');
    const hotelForm = document.getElementById('hotelForm');
    const successAirbnb = document.getElementById('successAirbnb');
    const successHotel = document.getElementById('successHotel');
    
    airbnbBtn.addEventListener('click', () => {
        airbnbForm.classList.remove('hidden');
        hotelForm.classList.add('hidden');
        airbnbBtn.classList.add('active');
        hotelBtn.classList.remove('active');
        successAirbnb.style.display = 'none';
        successHotel.style.display = 'none';
    });
    hotelBtn.addEventListener('click', () => {
        hotelForm.classList.remove('hidden');
        airbnbForm.classList.add('hidden');
        hotelBtn.classList.add('active');
        airbnbBtn.classList.remove('active');
        successAirbnb.style.display = 'none';
        successHotel.style.display = 'none';
    });
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach(input => input.min = today);
    airbnbForm.addEventListener('submit', e => {
        e.preventDefault();
        const fields = ['location','checkin','checkout','guests','nameAirbnb','emailAirbnb','phoneAirbnb'];
        if (!fields.every(id => document.getElementById(id).value.trim() !== '')) {
            return alert('Please fill all Airbnb fields.');
        }
        successAirbnb.style.display = 'block';
        airbnbForm.reset();
    });
    hotelForm.addEventListener('submit', e => {
        e.preventDefault();
        const fields = ['checkinHotel','checkoutHotel','guestsHotel','roomType','nameHotel','emailHotel','phoneHotel'];
        if (!fields.every(id => document.getElementById(id).value.trim() !== '')) {
            return alert('Please fill all Hotel fields.');
        }
        successHotel.style.display = 'block';
        hotelForm.reset();
    });
});