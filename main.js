const validate = function() {
    const name= document.getElementById("name").value;
    const salary = parseInt(document.getElementById("salary").value);
    const date = document.getElementById("birthday").value;
    const phone = document.getElementById("tel").value;
    const form_msg = document.getElementById("form-message");
    console.log("date:"+date)
    let msg = "";
    if (name.length<=2)
        msg="Name must be longer then 2 characters";
    else if (isNaN(salary)|| salary<10000 || salary>16000)
        msg="Salary must be <10000 >16000";
    else if (date===null)
        msg="date must not be null";
    else if (phone.length!=10)
        msg="phone number must be 10 numbers";
    else
        msg="all good";

    form_msg.innerHTML=msg;
    form_msg.style.color = "Red"
}