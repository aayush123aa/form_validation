<!DOCTYPE html>
<html>
    <head>
        <title>Form Validation</title>
        <link rel="stylesheet" href="cs.css">
        <script>
            function validateForm(event) {
                // Prevent the form from submitting
                event.preventDefault();

                // Retrieve form data
                const fname = document.forms["validationForm"]["aayush_fname"].value.trim();
                const lname = document.forms["validationForm"]["aayush_lname"].value.trim();
                const email = document.forms["validationForm"]["aayush_email"].value.trim();
                const age = document.forms["validationForm"]["aayush_age"].value.trim();
                const gender = document.forms["validationForm"]["aayush_gen"].value;
                const faculty = document.querySelector('input[name="aayush_faculty"]:checked');
                const countryCode = document.forms["validationForm"]["aayush_con"].value;
                const phoneNum = document.forms["validationForm"]["aayush_con_num"].value.trim();

                // Patterns for validation
                const namePattern = /^[A-Za-z]+$/; // Only letters
                const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/; // Email format
                const agePattern = /^\d+$/; // Only digits
                const phonePattern = /^\d{7,13}$/; // 7 to 13 digits

                // Error messages
                let errors = [];

                if (!fname.match(namePattern)) {
                    errors.push("First name must contain only letters.");
                }
                if (!lname.match(namePattern)) {
                    errors.push("Last name must contain only letters.");
                }
                if (!email.match(emailPattern)) {
                    errors.push("Invalid email format.");
                }
                if (!age.match(agePattern) || parseInt(age) <= 0) {
                    errors.push("Age must be a positive number.");
                }
                if (!gender) {
                    errors.push("Gender is .");
                }
                if (!faculty) {
                    errors.push("Faculty is .");
                }
                if (!phoneNum.match(phonePattern)) {
                    errors.push("Phone number must be 7 to 13 digits long.");
                }

                // Display errors or success message
                const errorDiv = document.getElementById("errors");
                errorDiv.innerHTML = ""; // Clear previous errors

                if (errors.length > 0) {
                    errors.forEach(error => {
                        const p = document.createElement("p");
                        p.style.color = "red";
                        p.textContent = error;
                        errorDiv.appendChild(p);
                    });
                } else {
                    alert("Form submitted successfully!");
                    document.forms["validationForm"].submit(); // Submit the form if no errors
                }
            }
        </script>
    </head>
    <body>
        <h2>Form Validation</h2>
        <div id="errors"></div> <!-- Error messages will be displayed here -->
        <div class="fs">
            <form name="validationForm" onsubmit="validateForm(event)" action="validate.php" method="post">
                <table>
                    <tr>
                        <td>First Name</td>
                        <td><input type="text" name="aayush_fname" placeholder="First Name" ></td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td><input type="text" name="aayush_lname" placeholder="Last Name" ></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="email" name="aayush_email" placeholder="Email" ></td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td><input type="number" name="aayush_age" placeholder="Age" ></td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>
                            <select name="aayush_gen" >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Faculty</td>
                        <td>
                            Computer <input type="radio" name="aayush_faculty" value="comp" >
                            Biology <input type="radio" name="aayush_faculty" value="bio" >
                        </td>
                    </tr>
                    <tr>
                        <td>Contact No.</td>
                        <td>
                            <select name="aayush_con" >
                                <option value="+977">+977</option>
                                <option value="+91">+91</option>
                                <option value="+1">+1</option>
                                <option value="+93">+93</option>
                                <option value="+92">+92</option>
                            </select>
                            <input type="number" name="aayush_con_num" placeholder="123456789" >
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input type="submit" value="Submit">
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </body>
</html>
