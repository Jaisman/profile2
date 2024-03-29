window.onload = () =>{
		document.querySelector('#calculate').onclick = calculateTip;
	}

function calculateTip() {
	
	let amount = document.querySelector('#amount').value;
	let persons = document.querySelector('#persons').value;
	let service = document.querySelector('#services').value;

	console.log(service);
	if (amount === '' && service === 'Select') {
		alert("Please enter valid values");
		return;
	}

	//now we are checking number of persons 
	if (persons === '1')
	//if there is only one person then we need not to display each.
		document.querySelector('#each').style.display = 'none';
	else
		document.querySelector('#each').style.display = 'block';
	let total = (amount * service) / persons;
	total = total.toFixed(2);

	//finally displaying the tip value 
	document.querySelector('.tip').style.display = 'block';
	document.querySelector('#total').innerHTML = total;
}
