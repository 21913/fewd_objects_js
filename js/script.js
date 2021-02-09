var hotel = {
    // Object properties
    name: 'Kids World Hotel',
    rooms: 100,
    booked: 65,
    gym: true,
    roomTypes: ['double', 'twin', 'suite', 'king'],
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

// Define a constructor function template for hotels
function Hotel(name, rooms, booked) {
    // Object properties
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailablity = function() {
        return this.rooms - this.booked;
    };
}

// Define to instances of the hotel and their arguments
var KidsHotel = new Hotel('Kids World Hotel', 68, 3);
var LoliPopHotel = new Hotel('LoliPop Hotel', 56, 15);

// Declare a variable to hold the name of the hotel and room availability 
var details1 = KidsHotel.name + ' rooms: ';
    // add content to an existing variable----
    details1 += KidsHotel.checkAvailablity();
// Get the hotel1 div
var elHotel1 = document.getElementById('hotel1');
// Add the variables created onto the empty div
elHotel1.textContent = details1;

var details2 = LoliPopHotel.name + ' rooms: ';
    details2 += LoliPopHotel.checkAvailablity();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2