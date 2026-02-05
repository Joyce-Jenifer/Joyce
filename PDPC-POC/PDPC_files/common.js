function addEvent(obj,evType,fn){if(obj.addEventListener){obj.addEventListener(evType,fn,true);return true;}else if(obj.attachEvent){var r=obj.attachEvent("on"+evType,fn);return r;}else{return false;}}
function autoFocus(document){var allElements=document.getElementsByTagName("*");var element;for(var i=0;(element=allElements[i])!=null;i++){if((element.type=="text"||element.type=="password")&&element.disabled==false)
{element.focus();return false;}}}
function disableCntrls(e){if(e.keyCode==17||e.keyCode==93){alert('Copy Paste not allowed.');return false;}}
function disContextMenu(e){$(e).bind("contextmenu",function(e){return false;});}
function removeEvent(obj,evType,fn,useCapture){if(obj.removeEventListener){obj.removeEventListener(evType,fn,useCapture);return true;}else if(obj.detachEvent){var r=obj.detachEvent("on"+evType,fn);return r;}else{alert("Handler could not be removed");}}
function getViewportHeight(){if(window.innerHeight!=window.undefined)return window.innerHeight;if(document.compatMode=='CSS1Compat')return document.documentElement.clientHeight;if(document.body)return document.body.clientHeight;return window.undefined;}
function getViewportWidth(){if(window.innerWidth!=window.undefined)return window.innerWidth;if(document.compatMode=='CSS1Compat')return document.documentElement.clientWidth;if(document.body)return document.body.clientWidth;return window.undefined;}
function showMessage(message)
{if(message!='')alert(message);}
function populateFullCert(){var total_a;var total_ao;var gp;if(document.getElementById("aa").value/1+document.getElementById("ab").value/1+document.getElementById("ac").value/1+document.getElementById("ad").value/1+document.getElementById("ae").value/1>=2){total_a=true;}
if(document.getElementById("aoa").value/1+document.getElementById("aob").value/1+document.getElementById("aoc").value/1+document.getElementById("aod").value/1+document.getElementById("aoe").value/1+document.getElementById("aoa1").value/1+document.getElementById("aoa2").value/1+document.getElementById("aob3").value/1+document.getElementById("aob4").value/1+document.getElementById("aoc5").value/1+document.getElementById("aoc6").value/1>=2)
{total_ao=true;}
var selectObj=document.getElementById("gpgrade");var choice=selectObj.options[selectObj.selectedIndex].value;if(choice=='A'||choice=='B'||choice=='C'||choice=='D'||choice=='E'||choice==1||choice==2||choice==3||choice==4||choice==5||choice==6){gp=true;}
if(total_a==true&&total_ao==true&&gp==true){for(var i=0;i<document.getElementById("fullcertificate").options.length;i++)
{if(document.getElementById("fullcertificate").options[i].value=='yes')
{document.getElementById("fullcertificate").options[i].selected=true;}}}else{for(var i=0;i<document.getElementById("fullcertificate").options.length;i++)
{if(document.getElementById("fullcertificate").options[i].value=='no')
{document.getElementById("fullcertificate").options[i].selected=true;}}}}
function onClose(){if(window.opener){if(confirm("Unsaved data may be lost. Do you want to proceed?")){window.opener.location.reload();window.close();}}else if(window.dialogArguments){if(confirm("Unsaved data may be lost. Do you want to proceed?")){window.returnValue=true;window.close();}}}
function onCloseWithoutReturnValue(){if(window.opener){if(confirm("Unsaved data may be lost. Do you want to proceed?")){window.close();}}else if(window.dialogArguments){if(confirm("Unsaved data may be lost. Do you want to proceed?")){window.close();}}}
function closeWindowOnClick()
{window.close();}
function intonly(myfield,e)
{var key;var keychar;if(window.event)
key=window.event.keyCode;else if(e)
key=e.which;else
return true;keychar=String.fromCharCode(key);if((key==null)||(key==0)||(key==8)||(key==9)||(key==13)||(key==27))
return true;else if((("0123456789").indexOf(keychar)>-1))
return true;else
return false;}
function allowOnlyInt(Object){var str=Object.value;if(/^\d+$/.test(str)){return true;}else{Object.value="";return false;}}
function numonly(myfield,e,isDot){var key,keychar,compare,dot;compare="0123456789";dot=0;if(isDot=='Y')
compare="0123456789.";for(var i=0;i<myfield.value.length;i++){if(compare.indexOf(myfield.value.charAt(i))==-1||(myfield.value.charAt(i)=='.'&&dot==1))
{myfield.value=myfield.value.substring(0,i);break;}
if(myfield.value.charAt(i)=='.')
dot=dot+1;}}
function alphanumonly(myfield,e){var compare="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var i=0;i<myfield.value.length;i++){if(compare.indexOf(myfield.value.charAt(i))==-1)
{myfield.value=myfield.value.substring(0,i);break;}}}
function feeonly(myfield,e){var key,keychar,compare,dot;dot=0;compare="0123456789.";for(var i=0;i<myfield.value.length;i++){if(compare.indexOf(myfield.value.charAt(i))==-1||(myfield.value.charAt(i)=='.'&&dot==1))
{myfield.value=myfield.value.substring(0,i);break;}
if(myfield.value.indexOf('.')!=-1&&(myfield.value.indexOf('.')+3)<myfield.value.length)
{myfield.value=myfield.value.substring(0,myfield.value.indexOf('.')+3);break;}
if(myfield.value.charAt(i)=='.')
dot=dot+1;}}
function phoneonly(myfield,e){return numonly(myfield,e,'N');}
function checkLength(field,limitLength,e){var lengthOfField=field.value.length;var key;var keychar;if(window.event)
key=window.event.keyCode;else if(e)
key=e.which;else
return true;keychar=String.fromCharCode(key);if((key==null)||(key==0)||(key==8)||(key==9)||(key==13)||(key==27))
return true;if(lengthOfField>((limitLength/1))){alert("This field could not exceed "+(1+limitLength/1)+" characters");return false;}}
function confirmDelete(name)
{return confirm("Confirm to delete "+name);}
function checkMaxLength(Object,maxLength){var str=Object.value;if(Object.value.length>maxLength){Object.value=str.substring(0,maxLength);alert("The text has been truncated to the first "+maxLength+" characters.");}}
function limitTextLength(limitField,limitNum){if(limitField.value.length>limitNum){limitField.value=limitField.value.substring(0,limitNum);}}
function datecharonly(myfield,e)
{var dash=0;for(var i=0;i<myfield.value.length;i++)
{if("0123456789/".indexOf(myfield.value.charAt(i))==-1||(myfield.value.charAt(i)=='/'&&dash==2))
{myfield.value=myfield.value.substring(0,i);break;}
if(myfield.value.charAt(i)=='/')
dash=dash+1;}
var key;var keychar;if(window.event)
key=window.event.keyCode;else if(e)
key=e.which;else
return true;keychar=String.fromCharCode(key);if((key==null)||(key==0)||(key==8)||(key==9)||(key==13)||(key==27))
return true;else if((("0123456789/").indexOf(keychar)>-1))
return true;else
return false;}
function validdate(myfield,e)
{var dash=0;for(var i=0;i<myfield.value.length;i++)
{if("0123456789/".indexOf(myfield.value.charAt(i))==-1||(myfield.value.charAt(i)=='/'&&dash==2))
{myfield.value=myfield.value.substring(0,i);break;}
if(myfield.value.charAt(i)=='/')
dash=dash+1;}}
function feecharonly(myfield,e)
{var key;var keychar;if(window.event)
key=window.event.keyCode;else if(e)
key=e.which;else
return true;keychar=String.fromCharCode(key);if((key==null)||(key==0)||(key==8)||(key==9)||(key==13)||(key==27))
return true;else if((("0123456789.").indexOf(keychar)>-1)){if(keychar=="."&&myfield.value.indexOf(".")>-1){return false;}
return true;}
else
return false;}
function allowOnlyNumbers(Object){var str=Object.value;if(/^[0-9]*(\.)?[0-9]+$/.test(str)){return true;}else{Object.value="";return false;}}
function commaseperateddatecharonly(myfield,e)
{var key;var keychar;if(window.event)
key=window.event.keyCode;else if(e)
key=e.which;else
return true;keychar=String.fromCharCode(key);if((key==null)||(key==0)||(key==8)||(key==9)||(key==13)||(key==27))
return true;else if((("0123456789/, ").indexOf(keychar)>-1))
return true;else
return false;}
function onedecimalonly(myfield,e)
{var key;var keychar;if(window.event)
key=window.event.keyCode;else if(e)
key=e.which;else
return true;keychar=String.fromCharCode(key);if((key==null)||(key==0)||(key==8)||(key==9)||(key==13)||(key==27))
return true;else if((("0123456789.").indexOf(keychar)>-1)){if(keychar=="."&&myfield.value.indexOf(".")>-1){return false;}
if(myfield.value.indexOf(".")>-1){if(myfield.value.length==myfield.value.indexOf(".")+2){return false;}}
return true;}
else
return false;}
function signWitnessed()
{SigPlus1.TabletState=0;SigPlus2.TabletState=1;}
function signAccepted()
{SigPlus2.TabletState=0;SigPlus1.TabletState=1;}
function clearSignAccepted()
{SigPlus1.ClearTablet();}
function clearSignWitnessed()
{SigPlus2.ClearTablet();}
function twodecimalonly(myfield,e)
{var key;var keychar;if(window.event)
key=window.event.keyCode;else if(e)
key=e.which;else
return true;keychar=String.fromCharCode(key);if((key==null)||(key==0)||(key==8)||(key==9)||(key==13)||(key==27))
return true;else if((("0123456789.").indexOf(keychar)>-1)){if(keychar=="."&&myfield.value.indexOf(".")>-1){return false;}
if(myfield.value.indexOf(".")>-1){if(myfield.value.length==myfield.value.indexOf(".")+3){return false;}}
return true;}
else
return false;}
function disableButtons()
{var allElements=document.getElementsByTagName("*");var element;for(var i=0;(element=allElements[i])!=null;i++){if(element.type=="button"||element.type=="submit")
{element.disabled=true;}}}
function enableButtons()
{var allElements=document.getElementsByTagName("*");var element;for(var i=0;(element=allElements[i])!=null;i++){if(element.type=="button"||element.type=="submit")
{element.disabled=false;}}}
function trimString(s)
{if(s==null)return null;else return s.replace(/^\s+|\s+$/,'');}
function showPopup(url){newwindow=window.open(url,'popup','width=600,height=600,resizable=yes,scrollbars=1');if(window.focus){newwindow.focus()}}
function findPos(obj){var curleft=curtop=0;if(obj.offsetParent){do{curleft+=obj.offsetLeft;curtop+=obj.offsetTop;}while(obj=obj.offsetParent);return[curleft-200,curtop-200];}}
function isValidInputs(document){var allElements=document.getElementsByTagName("*");var element;for(var i=0;(element=allElements[i])!=null;i++){if(element.type=="text"||element.type=="textarea"||element.type=="hidden"||element.type=="select-one"||element.type=="password")
{element.value=trimString(element.value);var val=element.value.toUpperCase().split("");for(var k=0;k<val.length;k++)
{if(val[k]!=null&&"ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 `~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?".indexOf(val[k])<0)
{alert("Please enter only english alphabets, digits and special characters.");return false;}}}}
return true;}
function trimAllEndSpaces(document){var allElements=document.getElementsByTagName("*");var element;for(var i=0;(element=allElements[i])!=null;i++){if(element.type=="text")
{element.value=trimString(element.value);}}}
function isNumber(event){evt=(event)?event:window.event;var charCode=(evt.which)?evt.which:evt.keyCode;if(charCode>31&&(charCode<48||charCode>57)){event.preventDefault();return false;}
return true;}