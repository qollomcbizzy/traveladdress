//back-end for my address book
//first function of the propeties of object place
function Place(name,town,county,country,timeOfYear,notes){
  this.locationName=name;
  this.locationCity=town;
  this.locationCounty=county;
  this.locationCountry=country;
  this.locationTime=timeOfYear;
  this.shortnote=notes;
};
//user interface logic
$(document).ready(function(){
$("form#destination").submit(function(event){
  event.preventDefault();
  var inputtedName=$("input#new-name").val();
  var inputtedTown=$("input#new-town").val();
  var inputtedCounty=$("input#new-county").val();
  var inputtedCountry=$("input#new-country").val();
  var inputtedTime=$("input#new-date").val();
  var inputtedNotes=$("input#new-notes").val();
  var newLocation=new Place(inputtedName,inputtedTown,inputtedCounty,inputtedCountry,inputtedTime,inputtedNotes);
  $("ul#place").append("<li><span class='location'>"+ newLocation.inputtedName +"</span></li>");
  $(".location").click(function(){
    $("#show-location").show();
    $("#show-location h2").text(newLocation.locationName);
    $(".town").text(newLocation.locationCity);
    $(".county").text(newLocation.locationCounty);
    $(".country").text(newLocation.locationCountry);
    $(".year").text(newLocation.locationTime);
    $(".note").text(newLocation.shortnote);
  });
  $("input#new-name").val();
  $("input#new-town").val();
  $("input#new-county").val();
  $("input#new-country").val();
  $("input#new-date").val()
  $("input#new-notes").val()
});
});
