

// countup
$(".st-animate").click(function(e) {
      e.preventDefault();
      $(this).closest('li').find('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
          duration: 4000,
          easing:'linear',
          decimal: '.',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
      });
     });
