  var arr2 = [];
    var totalPrice = Number(0);
    $(document).ready(function() {
      row();


      $("#CartButton1").click(function() {
        var Image = "<img src='images/Furniture/Couch.jpg'>";
        var FurnitureName = "White Recliner Couch";
        var Price = 5000;
        var obj = {
          Image_: Image,
          FurnitureName_: FurnitureName,
          Price_: Price,
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
      });


      $("#CartButton2").click(function() {
        var Image = "<img src='images/Furniture/Couch2.jpg'>";
        var FurnitureName = "Black Corner Couch";
        var Price = 12000;
        var obj = {
          Image_: Image,
          FurnitureName_: FurnitureName,
          Price_: Price, 
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
      });


      $("#CartButton3").click(function() {
        var Image = "<img src='images/Furniture/Desk.jpg'>";
        var FurnitureName = "Wooden Trestle Desk";
        var Price = 3000;       
        var obj = {
          Image_: Image,
          FurnitureName_: FurnitureName,
          Price_: Price,          
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string 
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);    
      });


      $("#CartButton4").click(function() {
        var Image = "<img src='images/Furniture/Desk2.jpg'>";
        var FurnitureName = "Natural Wood Desk";
        var Price = 6000;       
        var obj = {
          Image_: Image,
          FurnitureName_: FurnitureName,
          Price_: Price,          
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string 
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);    
      });


      $("#CartButton5").click(function() {
        var Image = "<img src='images/Furniture/DiningSet.jpg'>";
        var FurnitureName = "Dining Table and Chair Set";
        var Price = 13000;       
        var obj = {
          Image_: Image,
          FurnitureName_: FurnitureName,
          Price_: Price,          
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string   
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);  
      });


      $("#CartButton6").click(function() {
        var Image = "<img src='images/Furniture/Sideboard.jpg'>";
        var FurnitureName = "Wooden Sideboard";
        var Price = 4500;       
        var obj = {
          Image_: Image,
          FurnitureName_: FurnitureName,
          Price_: Price,          
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string   
        totalPrice += Price;
        alert("Your current total is R" + totalPrice); 
      });




      $("#CartButton7").click(function() {
        var Image = "<img src='images/Homeware/Bedding.jpg'>";
        var FurnitureName = "Grey Satin Bedding";
        var Price = 500;       
        var obj = {
          Image_: Image,
          FurnitureName_: FurnitureName,
          Price_: Price,          
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string    
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
      });


      $("#CartButton8").click(function() {
        var Image = "<img src='images/Homeware/Lamp.jpg'>";
        var FurnitureName = "Black Desk Lamp";
        var Price = 350;       
        var obj = {
          Image_: Image,
          FurnitureName_: FurnitureName,
          Price_: Price,          
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string    
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
      });


      $("#CartButton9").click(function() {
        var Image = "<img src='images/Homeware/Cushions.jpeg'>";
        var FurnitureName = "Faux Fur Cushions";
        var Price = 300;       
        var obj = {
          Image_: Image,
          FurnitureName_: FurnitureName,
          Price_: Price,          
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string  
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);   
      });



      $("#CartButton11").click(function() {
        var Image = "<img src='images/Homeware/Lamp2.jpg'>";
        var FurnitureName = "Bronze Bedside Lamp";
        var Price = 450;       
        var obj = {
          Image_: Image,
          FurnitureName_: FurnitureName,
          Price_: Price,          
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string   
        totalPrice += Price;
        alert("Your current total is R" + totalPrice); 
      });



      $("#CartButton12").click(function() {
        var Image = "<img src='images/Homeware/Pillows.jpg'>";
        var FurnitureName = "Throw Pillows";
        var Price = 250;       
        var obj = {
          Image_: Image,
          FurnitureName_: FurnitureName,
          Price_: Price,          
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string    
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
      });


      $("#CartButton10").click(function() {
        var Image = "<img src='images/Homeware/PotPlants.jpeg'>";
        var FurnitureName = "Decorative Plants";
        var Price = 200;       
        var obj = {
          Image_: Image,
          FurnitureName_: FurnitureName,
          Price_: Price,          
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string  
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);   
      });


       $("#ClearButton").click(function() {
      localStorage.clear();
      });
    });


    var row = function() {
      if (localStorage.tbl) {
        arr2 = JSON.parse(localStorage.tbl); //JSON string to JS Object 
        for (var i = 0; i < arr2.length; i++) {
          var _image = arr2[i].Image_;
          var _FurnitureName = arr2[i].FurnitureName_;
          totalPrice += _price = arr2[i].Price_;
          
          var row = "<tr id='" + i + "'><td>" + (i + 1) + "</td><td>" +
            _image + "</td><td>" +
            _FurnitureName + "</td><td>R" +
            _price + "</td><td><button class='remove'>Remove</button></td></tr>";
          $("tbody").append(row);

        }


    $(".remove").click(function(){
      var parent = $(this).parent().parent()

      var itemId = parseInt(parent.attr('id'))

      function changeNextId(next) {
        var currentId = parseInt(next.attr("id"))
        next.attr("id", currentId - 1)
        if(next.length) {
          changeNextId(next.next())
        }
      }
      changeNextId(parent.next())

      totalPrice -= arr2[itemId].Price_
        $("#TotalDisplay").text("Total: R" + totalPrice)
        arr2.splice(itemId, 1)
        localStorage.tbl = JSON.stringify(arr2)

      parent.remove()
    })

        $("#TotalDisplay").text("Total: R" + totalPrice)
      }
    };



function Order(){
  alert("Your order has been succesfully placed.\nYour reference number is: " + Math.random() * 1000000000000000000 );
  totalPrice = 0;
  localStorage.clear();
}

function CourierSelect(){
  var selected = document.getElementById("Select").value;
  if (selected == "Courier"){
    totalPrice += 200;
    document.getElementById("TotalDisplay").innerHTML = "Total: R" + totalPrice;
  }
}




$("#CouponButton").click(function(event){
   event.preventDefault();
  var coupon = document.getElementById("TextInput").value;
  if (coupon != ""){
    var discount = totalPrice * 10 / 100;
  totalPrice = totalPrice - discount;
  document.getElementById("TotalDisplay").innerHTML = "Total: R" + totalPrice; 
  }
})