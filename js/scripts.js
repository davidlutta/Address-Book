function contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}
contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputedFirstName = $("input#new-first-name").val();
    var inputedLastName = $("input#new-last-name").val();

    var newContact = new contact(inputedFirstName, inputedLastName);
    $("ul#contact").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>")
    $(".first-Name").text(newContact.firstName);
    $(".second-Name").text(newContact.lastName);
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $(".contact").last().click(function() {
      $("#output").show();
      $("#output h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
  });


});
