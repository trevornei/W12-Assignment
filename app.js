// Hide blog title on scroll.
// Selects the window object and uses .on() JQuery method to select a scroll event. With this event it creates a function. 
$(window).on('scroll', function() {
    // Variable that selects the div with the id of blogTitle
    const blogTitle = $('#blogTitle');
    // if else statement that adds the class hidden (which applies display hidden because of Tailwind CSS). 
    if ($(this).scrollTop() >= 20) {
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
    $.delete('')
})


// Create a variable that stores URL Endpoint
const urlEndpoint = 'http://localhost:3000/userComments';

// Check if variable works with a console.log() statement.
$.get(urlEndpoint).then(data => console.log(data));
// Success, logs the data stored inside local host 3k/userComments. 

// 1. The get() JQuery method uses AJAX to fetch data from the variable urlEndpoint.
// 2. then() method takes the data from local host once the data is fetched.
// 3. map() loops through the array and refers to every element in the array as 'userComments'
// 4. Selects table body elements and adds a table row, with the table data cells for the key/value pairs: id, fullName, comment and adds a delete button.
// the delete button has an onclick attribute that calls a function deleteUser. This function takes a parameter of the id from the element. 
$.get(urlEndpoint).then(data => {
    data.map(userComments => {
        $('tbody').append(
            $(`
            <tr class="bg-violet-200 border-b border-violet-200 px-3 py-3">
                <td class="m-6">${userComments.id}</td>
                <td class="m-6">${userComments.fullName}</td>
                <td class="m-6">${userComments.comment}</td>
                <td class="m-6 border-slate-950 rounded-2xl bg-violet-200">
                <button onclick="deleteUser(${userComments.id})">Delete</button>

                </td> 
            </tr>
            `)
        )
    })
})

// Function deletes a users comment and passes id as a parameter.
function deleteUser(id) {
    // JQuery method that does an async HTTP request. 
    $.ajax({
        // specifies what local host and the elements id
        url: `${urlEndpoint}/${id}`,
        // specifies HTTP request type.
        type: 'DELETE'
    })
}
