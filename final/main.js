//slider//
jQuery(document).ready(function($) {
    var s, Slider = {
        settings: {
            images: $('.slide-container li'),
            position: 0,
            delay: 4000,
            speed: 1000,
            easing: 'linear'
        },

        init: function() {
            s = this.settings;
            setInterval(this.next, s.delay);
        },

        next: function() {
            oldPosition = s.position;
            s.position = ((s.position + 1) % s.images.length);
            Slider.jumpTo(oldPosition, s.position);

        },

        jumpTo: function(prev, next) {
            s.images.eq(prev).animate({
                opacity: 0
            }, s.speed, s.easing);
            s.images.eq(next).animate({
                opacity: 1
            }, s.speed, s.easing);
        }
    };

    Slider.init();
});



//login//
$(".email-signup").hide();
$("#signup-box-link").click(function(){
  $(".email-login").fadeOut(100);
  $(".email-signup").delay(100).fadeIn(100);
  $("#login-box-link").removeClass("active");
  $("#signup-box-link").addClass("active");
});
$("#login-box-link").click(function(){
  $(".email-login").delay(100).fadeIn(100);;
  $(".email-signup").fadeOut(100);
  $("#login-box-link").addClass("active");
  $("#signup-box-link").removeClass("active");
});




//empty check//
var validations = {
  "presence": {
    "pattern": new RegExp(/(.+)/),
    "msg": "！"
  }
};

$('form[data-validate="form"]').on('submit', function (event) {
  var $this = $(this);
  var invalidMatches = getInvalids($this);
  
  if (invalidMatches.length > 0) {
  
    event.preventDefault();
    $.each(invalidMatches, function (key, $el) {
      
      var msg = '<span class="validation-msg">';
      msg += validations[$el.attr('data-validate')].msg;
      msg += '</span>';
      
      $(msg).insertAfter($el);
    });
   
  }
});

function getInvalids ($parent) {  
  var inputs = $parent.find('[data-validate]');
  var inputCount = inputs.length;
  var invalidMatches = [];
  
  $.each(inputs, function () {
    var $el = $(this);
    $el.next('.validation-msg').remove();
    var isMatch = getMatch($el);
   
    if (!isMatch) invalidMatches.push($el);
  });
  
  return invalidMatches;
}

function getMatch ($el) {
  var validationMethod = $el.attr('data-validate');
  var value = $el.val();
  var isMatch = false;
  
  if (validationMethod in validations) {
    isMatch = validations[validationMethod].pattern.test(value);
  }
 
  return isMatch;
}