function insert(num)
{
	document.form.textbox.value=document.form.textbox.value+num;
}
function equal()
{
	var nm=document.form.textbox.value;
	if(nm)
	{
		document.form.textbox.value=eval(nm);
	}
}
function clean()
{
	document.form.textbox.value="";
}
function back(){
 	var nm=document.form.textbox.value;
 	document.form.textbox.value=nm.substring(0,nm.length-1);
}
function sqrt()
{
	var nm=document.form.textbox.value;
	nm=Math.sqrt(nm);
	document.form.textbox.value=nm;
}
function square()
{
	var nm=document.form.textbox.value;
	nm=(nm*nm);
	document.form.textbox.value=nm;
}
