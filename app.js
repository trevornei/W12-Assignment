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



// Function connects data from JSON server to table element.

// Function takes information from form and inputs data into db.json and table body.
// table data-cell deletes comment.