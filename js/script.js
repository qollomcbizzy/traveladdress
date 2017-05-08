//back-end for my address book
//first function of the propeties of object place
function Place(name,country,county,town,timeOfYear,notes){
  this.loacationName=name;
  this.locationCountry=country;
  this.locationCounty=county;
  this.locationCity=town;
  this.locationTime=timeOfYear;
  this.shortnote=notes;
}
//user interface logic
$(document).ready(function(){
$("form#destination").submit(function(){
  var inputedName=$("input#new-name").val();
  var inputedTown=$("input#new-town").val();
  var inputedCounty=$("input#new-county").val();
  var inputedCountry=$("input#new-country").val();
  var inputedTime=$("input#new-date").val();
  var inputedNotes=$("input#new-name").val();
  var newLocation=new Place(inputedName,inputedTown,inputedCounty,inputedCountry,inputedTime,inputedNotes);
});
});
