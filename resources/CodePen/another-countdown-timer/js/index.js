$("[data-days]").each(function() {
  var $this = $(this),
      finalDate = $(this).data("days");
  $this.countdown(finalDate, function(event) {
    $this.html(event.strftime("%D"));
  });
});

$("[data-hours]").each(function() {
  var $this = $(this),
      finalDate = $(this).data("hours");
  $this.countdown(finalDate, function(event) {
    $this.html(event.strftime("%H"));
  });
});

$("[data-minutes]").each(function() {
  var $this = $(this),
      finalDate = $(this).data("minutes");
  $this.countdown(finalDate, function(event) {
    $this.html(event.strftime("%M"));
  });
});

$("[data-seconds]").each(function() {
  var $this = $(this),
      finalDate = $(this).data("seconds");
  $this.countdown(finalDate, function(event) {
    $this.html(event.strftime("%S"));
  });
});