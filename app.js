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
    // CRUD --> .post() = Create
    //NOTE - Created an object that posts HTML node to urlEndpoint and webpage.
    $.post(urlEndpoint, {
        fullName: $('#fullName').val(), 
        comment: $('#comment').val(), 
    })
})


// Create a variable that stores URL Endpoint
const urlEndpoint = 'http://localhost:3000/userComments';

// Check if variable works with a console.log() statement.
$.get(urlEndpoint).then(data => console.log(data));
// Success, logs the data stored inside local host 3k/userComments. 

$.get(urlEndpoint).then(data => {
    data.map(userComments => {
        $('tbody').append(
            $(`
            <tr class="bg-violet-200 border-b border-violet-200 px-3 py-3">
                <td class="m-6">${userComments.id}</td>
                <td class="m-6">${userComments.fullName}</td>
                <td class="m-6">${userComments.comment}</td>
                <td class="m-6 border-slate-950 rounded-2xl bg-violet-200">
                    <button>
                        <p>Delete</p> 
                    </button>
                </td> 
            </tr>
            `)
        )
    })
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