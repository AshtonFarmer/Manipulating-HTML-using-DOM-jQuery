$(document).ready(function () {

    $('body').prepend($('<button> Something Sweet! </button>'));
    $('button:first').addClass('Button');
    $('.Button').click(function () {
        alert('Your so dang beautiful!')
    })

    $('#inputButton').click(function () {
        alert($('#inputText').val());
    })
    

    $(document).on({
        mouseenter: function () {
            $('.colorDiv').css({ 'background-color': 'Orange', })
        },
    }, '.colorDiv')

    $(document).on({
        mouseleave: function () {
            $('.colorDiv').css({ 'background-color': 'White', })
        },
    }, '.colorDiv')

    $('.colorDiv').height('10em'); // Big Boi
    
    $('body').append($('<p> The Flash is the best speedster! </p>').addClass('colorParagraph'));
    $('.colorParagraph').click(function () {
        $(this).css('color', 'rgb(' + colorR + ')');
    })
    let counter = 0;
    let friendsArray = ["Gavin", "Madalynn", "Chris", "Ashlyn", "Shae", "Tristan", "Tatum", "Tony", "Emma", "Meagan"];
    $('.addFriend').click(function () {
        $('.friendsList').append($('<li>' + friendsArray[counter] + '</li>'))
        counter++;
    })
})
