function consoleLog(str){if(window.console){console.log(str);}}
function bindTextArea($textArea,$charCount){if($textArea&&$textArea.val()){$charCount.text(parseInt($textArea.attr('maxlength'))-$textArea.val().length);}
$textArea.keyup(function(){var length=$(this).val().length;var length=parseInt($(this).attr('maxlength'))-length;$charCount.text(length);});}
function bindCaptcha($captchaImg,$captchaRefreshBtn){$captchaRefreshBtn.click(function(){$captchaImg.fadeOut(100,function(){var captchaURL=$captchaImg.attr("src");captchaURL=captchaURL.replace(captchaURL.substring(captchaURL.indexOf("=")+1,captchaURL.length),Math.floor(Math.random()*9999999999));$captchaImg.attr("src",captchaURL);});$captchaImg.fadeIn(100);});}
function inputFocus(i){if(i.value==i.defaultValue){i.value="";i.style.color="#666";}}
function inputBlur(i){if(i.value==""){i.value=i.defaultValue;i.style.color="#919191";}}