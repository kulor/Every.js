every = require('../every');
every.between('20111124T0000', '20121124T0000');

var dummyDates = ['20111223T0000', '20111224T0000'];

exports.testWeekdays = function(test){
    var dates = every.weekday();
    test.deepEqual(dates, dummyDates, "Should provide a range of dates");
    test.done();
};

exports.testLastDayOfMonth = function(test){
    var dates = every.lastDayOfMonth();
    test.deepEqual(dates, dummyDates, "Should provide a range of dates");
    test.done();
};

exports.testLastWeekdayOfMonth = function(test){
    var dates = every.lastWeekDayOfMonth();
    test.deepEqual(dates, dummyDates, "Should provide a range of dates");
    test.done();
};

exports.testMondays = function(test){
    var dates = every.day('Monday');
    test.deepEqual(dates, dummyDates, "Should provide a range of dates");
    test.done();
};

exports.testMondaysAndFridays = function(test){
    var dates = every.days(['Monday', 'Friday']);
    test.deepEqual(dates, dummyDates, "Should provide a range of dates");
    test.done();
};

exports.testDayOfMonth = function(test){
    var dates = every.day(2);
    test.deepEqual(dates, dummyDates, "Should provide a range of dates");
    test.done();
};