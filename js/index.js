const emailInput = $("input");
const errorText = $("h6");

errorText.hide();

function CheckEmail() {
    const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (emailRegex.test(emailInput.val())) {
        emailInput.removeClass("error");
        errorText.hide();
    }
    else {
        emailInput.addClass("error");
        errorText.show();
    }
}

function CheckEmailByEnter(event) {
    if (event.which == 13) {
        CheckEmail();
    }
}

emailInput.keypress(CheckEmailByEnter);