$(document).ready(function () {

// on page load, this plugin will add animation to my name in the h1
    $('.tlt').textillate();
    $('.tlt').textillate({ in: { effect: 'wobble' } });

// When you click amy h2, the h2s will change color
    $('h2').on('click', function () {
        $('h2').toggleClass('change-color');
    });
});


// on page load, this plugin will count up to my full phone number in the contact section
var options = {
    useEasing: true,
    useGrouping: true,
    separator: '',
    decimal: '.',
};

var demo = new CountUp('phone', 0, 529.7466, 4, 2, options);
if (!demo.error) {
    demo.start();
} else {
    console.error(demo.error);
}
