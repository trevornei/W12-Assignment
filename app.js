// Hide blog title on scroll.
$(window).on('scroll', function() {
    const blogTitle = $('#blogTitle');

    const testValue = 1;

    if ($(this).scrollTop() >= 60) {
        blogTitle.addClass('hidden');
    } else {
        blogTitle.removeClass('hidden');
    }
})

// Resets submit button from refreshing the page.

// Function connects data from JSON server to table element.

// Function takes information from form and inputs data into db.json and table body.
// table data-cell deletes comment.