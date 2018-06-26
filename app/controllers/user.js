// Dữ liệu user mẫu dùng để login. [username: admin, pass: admin]
var test_user = require('../models/user');

var self = module.exports = {  
  getLogin : (req, res) => {
    res.render('../views/login');
  },
  postLogin : (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let message = null;
    let user_test = test_user.userlist;
	if(username == null || username.trim() == '') // Check username ( If username is null or blank)
	  message = "Username is blank";
	else if(password == null || password.trim()== '')
	  message = "Pass is blank";
	else if(username == user_test.username && password == user_test.password)
	  message = "Đăng nhập thành công";
	else
	  message = "Sai username hoặc password";
	res.send(message);
  },
  check_email : (val) => {
    if(!val.match(/\S+@\S+\.\S+/)) return false;
    if( val.indexOf(' ')!=-1 || val.indexOf('..')!=-1) return false;
    return true;
  },
  getRegister : (req, res) => {
    res.render('../views/register');
  },
  postRegister : (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let confirm_password = req.body.confirm_password;
    let email =  req.body.email;
    let message = null;
	if(username == null || username.trim() == '') // Check username ( If username is null or blank)
	  message = "Username trống";
	else if(password == null || password.trim()== '')
	  message = "Password trống";
	else if(password !== confirm_password)
	  message = "Password gõ lại không khớp"
	else if(!self.check_email(email))
	  message = "Email khong dung dinh dang!";
	else
	  message = "Dang ky thanh cong!";
	res.send(message);
  }
}