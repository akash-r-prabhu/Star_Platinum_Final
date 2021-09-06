 
        function validation(){  
        var status=false;
        var name=document.pay.name.value; 
        var address=document.pay.adr.value; 
        var email=document.pay.email.value; 
        var city=document.pay.city.value;
        var state=document.pay.state.value;
        var zip=document.pay.zip.value;
        var cname=document.pay.cname.value; 
        var ccnum=document.pay.ccnum.value; 
        // var expmonth=document.pay.cname.value; 
        var cvv=document.pay.cnvv.value; 
        
        if(name==NULL)
            {
                alert("Please enter your name");  
                status=false;  
 
            }
        if(email==NULL)
            {
                alert("Please enter email");  
                status=false;  
 
            }
        if(length(String(zip))!=6)
            {
                alert("Zip should be 6 digit");
                status=false;
            }
        if(cname==NULL)
            {
                alert("Please enter your name");  
                status=false;  
 
            }
            ValidateName();
            ValidateCname();
        function ValidateCname() 
            {
                if (document.pay.cname.value == "") 
                    {
                        alert("Enter a name");
                        document.pay.cname.focus();
                        return false;
                    }
                if (!/^[a-zA-Z]*$/g.test(document.pay.cname.value)) 
                    {
                        alert("Invalid characters");
                        document.pay.cname.focus();
                        return false;
                    }
            }
        function ValidateName() 
            {
                if (document.pay.cname.value == "") 
                    {
                        alert("Enter a name");
                        document.pay.cname.focus();
                        return false;
                    }
                if (!/^[a-zA-Z]*$/g.test(document.pay.cname.value)) 
                    {
                        alert("Invalid characters");
                        document.pay.cname.focus();
                        return false;
                    }
            }
        status=ValidateEmail1(email);
        function ValidateEmail1(inputText1)
            {
               var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
               if(inputText1.value.match(mailformat))
               {
                  document.form1.email1.focus();
                  validation();
                  return true;
               }
               else
               {
                  alert("Invalid Email Address");
                  document.form1.email1.focus();
                  return false;
               }
            }
        function complete()
            {
                document.write("Your Form Has Been Successfully Submitted!!");
            }
        return status;
        }