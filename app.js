// Hide blog title on scroll.
$(window).on('scroll', function() {
    const blogTitle = $('#blogTitle');

    if ($(this).scrollTop() >= 20) {
        blogTitle.addClass('transition-opacity');
        blogTitle.addClass('ease-in-out');
        blogTitle.addClass('duration-300');
        blogTitle.addClass('hidden');

    } else {
        blogTitle.removeClass('hidden');
    }
})

// Resets submit button from refreshing the page.
// 1. Select the id formSubmit with JQuery.
// 2. Use .on() method and specify click
// 3. Add event and preventDefault() method
$('#formSubmit').on('click', function(event) {
    event.preventDefault();
})

// Funtion that translates the page title from off the page to intended position when the page loads. 
// 1. Select the document object.
// 2. Use ready() method to create a function when:
//      - The DOM is made and safe to manipulate.
// $(document).ready(function() {
//     // Initially set the title to be off-screen
//     $('#h ideMe').addClass('hidden')
//     $('#hideMe').removeClass('hidden'), {
//         duration: 2000
//     }
// });
// $(document).ready(function() {
//     // Initially set the title to be off-screen
//     $('#blogTitle').css({ 'transform': 'translateX(100%)' })
//     // Animate the title to its default position
//     $('#blogTitle').css({ 'transform': 'translateX(0%)' }, {
//       duration: 2000, // Animation time in milliseconds
//       step: function(now, fx) {
//         $(this).css('-webkit-transform', now); // for Safari
//         $(this).css('transform', now);
//       }
//     });
// });

// Function connects data from JSON server to table element.

// Function takes information from form and inputs data into db.json and table body.
// table data-cell deletes comment.