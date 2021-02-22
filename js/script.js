var hotel = {
    // Object properties
    name: 'Kids World Hotel',
    rooms: 50,
    booked: 17,
    meals: true,
    roomTypes: ['arts crafts', 'wet play', 'family room', 'free play'],
    checkAvailablity: function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

document.getElementById('hotelName').textContent = hotel.name;
document.getElementById('hotelName').style.color = 'chocolate';

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailablity();

function Hotel(name, rooms, booked, meals) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.meals = meals;
    this.checkAvailablity = function() {
        return this.rooms - this.booked;
    };
}


var KidsHotel = new Hotel('Kids World Hotel', 58, 3, true);
var LoliPopHotel = new Hotel('LoliPop Hotel', 56, 15, false);

 
var details1 = KidsHotel.name + ' rooms: ';
    details1 += KidsHotel.checkAvailablity();
// Get the hotel1 div
var elHotel1 = document.getElementById('hotel1');
// Add the variables created onto the empty div
elHotel1.textContent = details1;
document.getElementById('mealsAvailable').textContent ='Meals Included: ' + KidsHotel.meals;

var details2 = LoliPopHotel.name + ' rooms: ';
    details2 += LoliPopHotel.checkAvailablity();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2

//Random num
var randowNum = Math.floor((Math.randow() * 10) + 1);
var el3 = document.getElementById('hotel');
el3. innerHTML += '<h2>randow number</h2><p>' + randowNum + '</p>';


//DOM
var msg2 = '<p><b>Page title:</b>' + document.title + '<br />';
msg2 += '<b>Page Address: </b>' + document.URL + '<br />';
msg2 += ' <b> Last Modified: </b>' + document.lastModified + '</p>';

var el2 = document.getElementById('footer');
el2.innerHTML = msg2;