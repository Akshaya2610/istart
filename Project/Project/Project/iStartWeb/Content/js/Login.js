$(document).ready(function () {
    debugger;

    if ($('#UserId').val() == "" || $('#UserId').val() == undefined) {
        LoadUser()
      
    }
    else {
      
            Useredit($('#UserId').val())
       
         
    }
   
});
$('#btnSignIn').click(function () {
    debugger;

    if ($.trim($('#txtloginusername').val()) == "") {
        $('#Ptxtusername').show();
        $('#Ptxtusername').fadeOut(8000);
        $('#Ptxtusername').html('Enter Email Id');
        $('#txtloginusername').focus();
        return false;
    }
    if ($.trim($('#txtloginPassword').val()) == "") {
        $('#PtxtPassword').show();
        $('#PtxtPassword').fadeOut(8000);
        $('#PtxtPassword').html('Enter Password');
        $('#txtloginPassword').focus();
        return false;
    }

    var submit = {
        Dml_Indicator: 'S',
        Name: $('#txtloginusername').val(),
        Password: $('#txtloginPassword').val()
    }

    $.ajax({
        async: true,
        type: 'POST',
        url: '/Login/insert_update_deleteRegister',
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(submit),
        success: function (data) {
            debugger;
            var data1 = JSON.parse(data);
            if (data1.msg == "Success") {
                debugger;
                var data2 = data1.data.Table[0];
                if (data2 == '' || data2 == undefined) {
                  
                    toastr.warning('Please Enter Valid Email or Password');
                    $('#txtloginusername').val('')
                    $('#txtloginPassword').val('')
                }
                else {
                    var UserId = 0
                    UserId = data2.Id
                    var LoginData = {
                        Id: UserId
                    }
                    $.ajax({
                        async: true,
                        type: 'POST',
                        url: '/Login/LoginSession',
                        contentType: 'application/json; charset=UTF-8',
                        data: JSON.stringify(LoginData),
                        success: function (data) {
                            debugger;

                            toastr.success('Login Succesfully');
                            setTimeout(function () {
                                window.location.href = '/Login/HomePage';
                            }, 2000);
                        }
                    });
                                     
                }

               
            }
            else {
                toastr.success('Somthing Went Wrong');
            }
        },
    });

   // alert('hi')
});


function LoadUser() {
    debugger;

    values = {
        Dml_Indicator: "SA"
    }


    $.ajax({
        async: true,
        type: 'POST',
        url: '/Login/insert_update_deleteRegister',
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(values),
        success: function (data) {
            console.log(data);
            var data1 = JSON.parse(data);
            console.log(data1);
            if (data1.msg == "Success") {
                debugger;
                var data1 = data1.data;
                if (jQuery.isEmptyObject((data1))) {

                }
                else {
                    $('#user_table_list tbody').empty();

                    var j = 0, b = '', tr = '', edit = '', active_inactive = '', active = '';

                    b = data1.Table;
                    $.each(b, function (i, emp) {
                        j++

                       
                            edit = '<a href="/Login/RegisterPage?Id=' + emp.Id + '" ' + 'data-toggle="tooltip" title="Edit" ' + 'class="btn btn-edit btn-xs">' +'<i class="fa fa-pencil" aria-hidden="true"></i>' +'</a>';
                    
                          
                        
                        //edit = '<a href="/Login/RegisterPage?Id=' + emp.Id + '" ' +
                        // 'data-toggle="tooltip" title="Edit" ' +                         
                        // 'class="btn btn-edit btn-xs">' +
                        // '<i class="fa fa-pencil" aria-hidden="true"></i>' +
                        // '</a>';
                       
                        // other_info = '<div class="col-md-12 padding0"><div class="disp_if">' + edit + ' ' + del + ' </div></div>';
                        if (emp.IsActive == '1') {
                            active_inactive = '<span class="label label-success">Active</span>';
                            active = '<a  data-toggle="tooltip" title="Make In Active" class="btn btn-xs btn-blue mr-10" href="javascript:void(0);"  data-id="SM_D1" data-type="role_rights_delete" data-nav="sp_delete" data-name="c_details_form" onclick= Bagdel(this,"' + emp.bag_type_id + '","INACT")><i class="fa fa-minus-square-o mr-5" aria-hidden="true"></i></a>';
                            
                        }
                        else if (emp.IsActive == '2') {
                            active_inactive = '<span class="label label-warning">Inactive</span>';
                            active = '<a  data-toggle="tooltip" title="Make Active" class="btn btn-xs btn-blue mr-10" href="javascript:void(0);"  data-id="SM_D1" data-type="role_rights_delete" data-nav="sp_delete" data-name="c_details_form" onclick= Bagdel(this,"' + emp.bag_type_id + '","ACT")><i class="fa fa-check-square-o mr-5" aria-hidden="true"></i></a>';
                           
                        }
                        tr = tr + '<tr' + j + '"><td>' + j + '</td><td>' + emp.Name + '</td><td>' + emp.EmailId + '</td><td>' + active_inactive + '</td><td>' + edit + '</td></tr>';

                    });
                    $('#user_table_list tbody').html(tr);
                    $('#user_table_list').DataTable();
                 //   datatable('user_table_list', 'user_form', 'Legal');

                }
            }
            else {
                console.log(data);
            }
        }
    });
}

$('#IsAdd').click(function () {
    debugger;

    window.location.href = '/Login/RegisterPage';
})

// insert
$('#btnsubmit').on("click", function () {
    debugger;

    if ($.trim($('#txtname').val()) == "") {
        $('#Ptxtname').show();
        $('#Ptxtname').fadeOut(8000);
        $('#Ptxtname').html('Enter Name');
        $('#txtname').focus();
        return false;
    }

    if ($('#txtemail').val() == "") {
        $('#Ptxtemail').show();
        $('#Ptxtemail').fadeOut(8000);
        $('#Ptxtemail').html('Enter Email Id');
        $('#txtemail').focus();
        return false;
    }

    if ($('#gender').val() == "") {
        $('#Pgender').show();
        $('#Pgender').fadeOut(8000);
        $('#Pgender').html('Select Gender');
        $('#gender').focus();
        return false;
    }

    if ($('#txtPassword').val() == "") {
        $('#PtxtPassword').show();
        $('#PtxtPassword').fadeOut(8000);
        $('#PtxtPassword').html('Enter Password');
        $('#txtPassword').focus();
        return false;
    }


    var Dml_Indicator = '', UserId = 0

    if ($('#btnsubmit').html() == 'Submit') {
        Dml_Indicator = 'I'
        msg = 'Saved Successfully';
        UserId = 0
    }
    else {
        Dml_Indicator = 'U'
        msg = 'Updated Successfully';
        UserId = $('#HId').val()
    }

    var submit = {
        Dml_Indicator: Dml_Indicator,
        Id: UserId,
        Name: $('#txtname').val(),
        EmailId:$('#txtemail').val(),
        Gender:$('#gender').val(),
        Password: $('#txtPassword').val(),

    }

    $.ajax({
        async: true,
        type: 'POST',
        url: '/Login/insert_update_deleteRegister',
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(submit),
        success: function (data) {
            debugger;
            var data1 = JSON.parse(data);
            if (data1.msg == "Success") {
                debugger;
                var data2 = data1.data;
                if (data2.Table[0].Message == 'already') {
                    toastr.warning('Name Already Exists');
                    $('#txtname').val('');
                }
                else if (data2.Table[0].Message == 'Inserted') {
                    toastr.success('Inserted Successfully');
                    setTimeout(function () {
                        window.location.href = '/Login/HomePage'
                    }, 1000)

                }
                else if (data2.Table[0].Message == 'Updated') {
                    toastr.success('Updated Successfully');
                    setTimeout(function () {
                        window.location.href = '/Login/HomePage'
                    }, 1000)
                }
                else {
                    toastr.success('Somthing Went Wrong');
                }
            }
            else {
                toastr.success('Somthing Went Wrong');
            }
        },
    });
});

function clear() {
    $('#txtname').val('')
    $('#txtemail').val('')
    $('#gender').val(0)
    $('#txtPassword').val('')
    $('#txtRePassword').val('')
}

function Useredit(Id) {
    debugger
    //var url = '/Login/RegisterPage?id=' + Id;
    //window.location.href = url;

    $('#btnsubmit').html('Update')


    var Edit = {
        Id: Id,
        Dml_Indicator: 'E'
    };

    $.ajax({
        async: true,
        type: 'POST',
        url: '/Login/insert_update_deleteRegister',
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(Edit),
        success: function (data) {
            debugger;
            var data1 = JSON.parse(data);
            var emp = data1.data.Table;
            $("#txtname").val(emp[0].Name);
            $("#txtemail").val(emp[0].EmailId);
            $('#gender').val(emp[0].Gender);
            $('#txtPassword').val(emp[0].Password);
            $('#txtRePassword').val(emp[0].Password);
            $('#HId').val(emp[0].Id)
        

        }
    })
}

function email(emailId) {
    const emailInput = document.getElementById(emailId);
    const errorMessage = document.getElementById('Ptxtemail'); 

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block'; 
    } else {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none'; 
    }
}

function editaccess() {
    toastr.warning('You Didnt have Access');
}