
$(document).ready(function(){
 
  

    $.validator.addMethod("regexEmail", function (value){
            var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return re.test(value)
        },"Invalid Email Format"
    )

    

    $('#formvalidation').validate({
        onsubmit: true,
        rules:{
            firstName: 'required',
            lastname: 'required',
            email:{
                required: true,
                regexEmail: '',
            },
            number: 'required'
        },
        messages:{
            firstName: 'Please enter the your firstname',
            lastname: "Please enter your LastName",
            email:{
                required: "Please enter your Email Address",
                regexEmail:"Invalid your Email Format",
            },
            number: "Please enter your Number",
        },
        submitHandler: function(form){
            form.submit();
        }
    });

});