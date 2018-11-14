$(document).ready(function () {
    $('#modal1').modal({
        dismissible: false,
        onCloseEnd: function () { timer.run() }
    });
    $('#modal2').modal({
        dismissible: false,
    });
    $('#modal1').modal('open');
    $("#timerNum").text(moment(timer.startNumber).format('m:ss'));
    var roundNumber = 1;
    $("#roundNumber").text(roundNumber);
});

var timer = {
    startNumber: 120000,
    intervalId: '',
    run: function () {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.decrement, 1000);
    },
    decrement: function () {
        timer.startNumber-= 1000;
        var formattedTime = moment(timer.startNumber).format('m:ss');
        $("#timerNum").text(formattedTime);
        if (timer.startNumber === 0) {
            timer.stop();
            //do something here after timer hits zero
            $('#modal2').modal('open');
        }
    },
    stop: function () {
        clearInterval(this.intervalId);
    }
};