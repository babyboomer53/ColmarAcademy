$('[data-edgar]').each(function () {
    var $this = $(this),
        finalDate = $(this).data('edgar');
    $this.countdown(finalDate, function (event) {
        $this.html(event.strftime('%-D days %-H hours %-M minutes and %S seconds Left'));
    });
});
