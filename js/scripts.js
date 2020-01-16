function chooser(colorInput){
  var digit = colorInput.charAt(4);
  
  if(digit === "a"){
    digit = 11;
  }
  if(digit === "b"){
    digit = 12;
  }
  if(digit === "c"){
    digit = 13;
  }
  if(digit === "d"){
    digit = 14;
  }
  if(digit === "e"){
    digit = 15;
  }
  if(digit === "f"){
    digit = 16;
  }
  else{
    digit = 0;
  }

  return digit;
}

function missingInput(name, gender, age, date, color, ssn){
  var missing = false;
  if(name === "" || gender === undefined || age === undefined|| date === undefined || color === undefined || ssn === undefined){
    missing = true;
  }
  else{
    missing = false;
  }
  return missing;
}

$(document).ready(function(){
  $(".inputs").submit(function(event){

    var nameInput = $("#name").val();
    var genderInput = $("#gender").val();
    var ageInput = $("input:radio[name=ageRange]:checked").val();
    var dateInput = $("#dob").val();
    var colorInput = $("#color").val();
    var ssnInput = $("#ssn").val();

    var choice = chooser(colorInput);

    var isMissing = missingInput(nameInput, genderInput, ageInput, dateInput, colorInput, ssnInput);
    if(isMissing === true){
      $("#output").hide();
      alert("Please fill in all the fields.")
    }
    else{

      if(choice <= 3 ){
        $(".output").show();
        $("#pearlman").show();
        $("#hyde").hide();
        $("#buscemi").hide();
        $("#parker").hide();
        $("#madonna").hide();
        $("#rosie").hide();
      }
      else if(choice > 3 && choice <6){
        $(".output").show();
        $("#pearlman").hide();
        $("#hyde").show();
        $("#buscemi").hide();
        $("#parker").hide();
        $("#madonna").hide();
        $("#rosie").hide();
      }
      else if(choice >=6 && choice <8){
        $(".output").show();
        $("#pearlman").hide();
        $("#hyde").hide();
        $("#buscemi").show();
        $("#parker").hide();
        $("#madonna").hide();
        $("#rosie").hide();
      }
      else if(choice >=8 && choice <10){
        $(".output").show();
        $("#pearlman").hide();
        $("#hyde").hide();
        $("#buscemi").show();
        $("#parker").hide();
        $("#madonna").hide();
        $("#rosie").hide();
      }
      else if(choice >=10 && choice <12){
        $(".output").show();
        $("#pearlman").hide();
        $("#hyde").hide();
        $("#buscemi").hide();
        $("#parker").show();
        $("#madonna").hide();
        $("#rosie").hide();
      }
      else if(choice >=12 && choice <14){
        $(".output").show();
        $("#pearlman").hide();
        $("#hyde").hide();
        $("#buscemi").hide();
        $("#parker").hide();
        $("#madonna").show();
        $("#rosie").hide();
      }
      else{
        $(".output").show();
        $("#pearlman").hide();
        $("#hyde").hide();
        $("#buscemi").hide();
        $("#parker").hide();
        $("#madonna").hide();
        $("#rosie").show();
      }
      $(".btn").attr("disabled", true);
    }

    event.preventDefault();
  });
});