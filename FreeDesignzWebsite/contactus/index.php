<!DOCTYPE html>
<html>

<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Submit Template | Free Designz</title>

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $("#submit_btn").click(function() {

                var proceed = true;
                //simple validation at client's end
                //loop through each field and we simply change border color to red for invalid fields		
                $("#contact_form input[required=true], #contact_form textarea[required=true]").each(function() {
                    $(this).css('border-color', '');
                    if (!$.trim($(this).val())) { //if this field is empty 
                        $(this).css('border-color', 'red'); //change border color to red   
                        proceed = false; //set do not proceed flag
                    }
                    //check invalid email
                    var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    if ($(this).attr("type") == "email" && !email_reg.test($.trim($(this).val()))) {
                        $(this).css('border-color', 'red'); //change border color to red   
                        proceed = false; //set do not proceed flag				
                    }
                });

                if (proceed) //everything looks good! proceed...
                {
                    //data to be sent to server         
                    var m_data = new FormData();
                    m_data.append('user_name', $('input[name=name]').val());
                    m_data.append('user_email', $('input[name=email]').val());
                    m_data.append('country_code', $('input[name=phone1]').val());
                    m_data.append('phone_number', $('input[name=phone2]').val());
                    m_data.append('subject', $('select[name=subject]').val());
                    m_data.append('msg', $('textarea[name=message]').val());
                    m_data.append('file_attach', $('input[name=file_attach]')[0].files[0]);

                    //instead of $.post() we are using $.ajax()
                    //that's because $.ajax() has more options and flexibly.
                    $.ajax({
                        url: 'contact_me.php',
                        data: m_data,
                        processData: false,
                        contentType: false,
                        type: 'POST',
                        dataType: 'json',
                        success: function(response) {
                            //load json data from server and output message     
                            if (response.type == 'error') { //load json data from server and output message     
                                output = '<div class="error">' + response.text + '</div>';
                            } else {
                                output = '<div class="success">' + response.text + '</div>';
                            }
                            $("#contact_form #contact_results").hide().html(output).slideDown();
                        }
                    });


                }
            });

            //reset previously set border colors and hide all message on .keyup()
            $("#contact_form  input[required=true], #contact_form textarea[required=true]").keyup(function() {
                $(this).css('border-color', '');
                $("#result").slideUp();
            });
        });
    </script>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:600' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="../css/style.css">
    <link rel='shortcut icon' type='image/x-icon' href='../favicon.ico' />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<body>

    <header>

        <nav class="navbar-inverse" style="border-radius:0;">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#"></a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <ul class="nav navbar-nav">
                        <li><a href="featured.html">Featured</a>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Templates<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="templates/free_templates.html"><i class="fa fa-diamond"></i>Free Templates</a>
                                </li>
                                <li><a href="#"><i class="fa fa-shopping-cart"></i>Premium Templates</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="left-sidebar.html">Beats</a>
                            <li><a href="left-sidebar.html">Blog</a>
                            </li>
                            <li><a href="contactus/index.php">Submit Template</a>
                            </li>
                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a class="fa fa-twitter" href=""></a>
                        </li>
                        <li>
                            <a class="fa fa-facebook" href=""></a>
                        </li>
                        <li>
                            <a class="fa fa-google-plus" href=""></a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    </header>

    <div class="form">

        <div class="container">

            <div class="col-md-9">

                <div class="form-style" id="contact_form">
                    <div class="form-style-heading">Please Contact Us</div>
                    <div id="contact_results"></div>
                    <div id="contact_body">
                        <label><span>Name <span class="required">*</span></span>
                            <input type="text" name="name" id="name" required="true" class="input-field" />
                        </label>
                        <label><span>Email <span class="required">*</span></span>
                            <input type="email" name="email" required="true" class="input-field" />
                        </label>
                        <label><span>Phone</span>
                            <input type="text" name="phone2" maxlength="15" placeholder="+44" class="tel-number-field long" />
                        </label>
                        <label><span>Attachment</span>
                            <input type="file" name="file_attach" class="input-field" />
                        </label>

                        <label for="subject"><span>Regarding</span>
                            <select name="subject" class="select-field" style="margin-top: 7px">
                                <option value="General Question">General Question</option>
                                <option value="General Question">Submit Template</option>
                                <option value="General Question">Submit PSD</option>
                                <option value="Advertise">Advertisement</option>
                                <option value="Partnership">Partnership Opportunity</option>
                            </select>
                        </label>
                        <label for="field5"><span>Message <span class="required">*</span></span>
                            <textarea name="message" id="message" class="textarea-field" required="true"></textarea>
                        </label>
                        <label>
                            <span>&nbsp;</span>
                            <input type="submit" id="submit_btn" value="Submit" />
                        </label>
                    </div>
                </div>

            </div>

            <div class="col-md-3">
                <div class="affiliate">
                    <a href="http://www.dreamhost.com/r.cgi?2179618"><img src="../images/affiliate.gif" class="img-responsive">
                    </a>
                </div>

                <div class="email">
                    <h3>Email us at: support@freedesignz.com</h3>
                </div>
            </div>

            <div class="col-md-9">
                <div class="information">
                    <p>Please note that when submitting a file, it could take up to a minute for the file to be processed and sent.</p>
                    <p>Everything that you send us, must be your own work and by doing so, you will have agreed to let us upload your work to our website and distribute it to a larger audience. If you would like us to put a link under you work, please tell us the name of your website in the message section. </p>
                    <p>We thank you for your participation. If you have any queries or concerns, please contact us on our email or fill in the contact form above, regarding a general question. It may be between 3-5 working days before we could respond.</p>
                </div>
            </div>

        </div>

    </div>


    <footer class="footer-distributed">
        <div class="container">

            <div class="footer-right">

                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-google-plus"></i></a>

            </div>

            <div class="footer-left">

                <p class="footer-links">
                    <a href="#">Featured</a>

                    <a href="#">Templates</a>

                    <a href="#">Beats</a>

                    <a href="#">Blog</a>

                    <a href="#" class="none">Submit Template</a>

                </p>

                <p>&copy; Free Designz 2016</p>
            </div>

        </div>

    </footer>

    <style>
        @media screen and (max-width: 500px) {
            .form .container {
                padding-left: 0px;
                padding-right: 0px;
            }
        }
        .affiliate {
            position: relative;
            top: 120px;
        }
        .affiliate img {
            margin: auto;
        }
    </style>

</body>

</html>