


var btn_next = document.querySelector('.btn_next')
var login_now = document.querySelector('.btn_dangkyngay')
var send_otp = document.querySelector('.btn_send_otp')
var frm_dangkyngay = document.querySelector('.frm_dangkyngay')
var frm_dangnhap = document.querySelector('.frm_dangnhap')
var frm_dangky_otp = document.querySelector('.frm_dangky_otp')
var frm_hoantatdangky = document.querySelector('.frm_hoantatdangky')
var button = document.querySelector('.btn_eye')
var x = document.querySelector('.myInput')
var icon = document.querySelector('.icon')
var state = false;


// show password
function showPassword() {
    if (x.type === "password") {
      x.type = "text"
    } else {
      x.type = "password"
    }
  }

// đóng mở form
function frmFunction1(){
    frm_dangnhap.classList.add("js_frm_close")
    frm_dangkyngay.classList.remove("js_frm_close")
     
}

function frmFunction2(){
  frm_dangkyngay.classList.add("js_frm_close")
  frm_dangky_otp.classList.remove("js_frm_close")
}

function frmFunction3(){
  frm_dangky_otp.classList.add("js_frm_close")
  frm_hoantatdangky.classList.remove("js_frm_close")
}
// đóng mở mắt
  function myFunction(){
      if(state === false){
        icon.classList.add("fa-eye")
        icon.classList.remove("fa-eye-slash")
        state = true;
      } else if(state === true){
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash")
        state = false;
      }
  }

  button.addEventListener("click", showPassword)
  button.addEventListener("click", myFunction)
  login_now.addEventListener("click", frmFunction1)
  send_otp.addEventListener("click", frmFunction2)
  btn_next.addEventListener("click", frmFunction3)
  