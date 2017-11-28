$(document).ready(function () {
    $('.tlt').textillate();
    $('.tlt').textillate({ in: { effect: 'wobble' } });
});

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
