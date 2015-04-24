$(document).ready(function(){
  $('.danger').popover({ 
    html : true,
    content: function() {
      return $('#balance_content_wrapper').html();
    }
  });
});

$(".learn-button").mouseover(function() {
    $(this).animate({ marginTop: 300 });
})

var $btn1 = $('#btn1');
$btn1.data('state', 'hover');

var enterShow = function () {
    if ($btn1.data('state') === 'hover') {
        $btn1.popover('show');
    }
};
var exitHide = function () {
    if ($btn1.data('state') === 'hover') {
        $btn1.popover('hide');
    }
};

var clickToggle = function () {
    if ($btn1.data('state') === 'hover') {
        $btn1.data('state', 'pinned');
    } else {
        $btn1.data('state', 'hover')
        $btn.popover('hover');
    }
};

$btn1.popover({trigger: 'manual'})
    .on('mouseenter', enterShow)
    .on('mouseleave', exitHide)
    .on('click', clickToggle);

var $btn2 = $('#btn2');
$btn2.data('state', 'hover');

var enterShow = function () {
    if ($btn2.data('state') === 'hover') {
        $btn2.popover('show');
    }
};
var exitHide = function () {
    if ($btn2.data('state') === 'hover') {
        $btn2.popover('hide');
    }
};

var clickToggle = function () {
    if ($btn2.data('state') === 'hover') {
        $btn2.data('state', 'pinned');
    } else {
        $btn2.data('state', 'hover')
        $btn.popover('hover');
    }
};

$btn2.popover({trigger: 'manual'})
    .on('mouseenter', enterShow)
    .on('mouseleave', exitHide)
    .on('click', clickToggle);