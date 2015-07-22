var form = document.entry;
var table = document.getElementById('tableEntries');

document.querySelector('#Change').addEventListener('click', addRow);

function addRow() {
	var index = table.rows.length
	var row = table.insertRow(index)

	var start = form.startBalance.value;
	var end = form.endBalance.value;
	var description = form.Description.value;
	var tags = form.Tags.value;

	row.insertCell(0).innerHTML = start;
	row.insertCell(1).innerHTML = end;
	row.insertCell(2).innerHTML = description;
	row.insertCell(3).innerHTML = tags;

	//add buttons
	row.insertCell(4).innerHTML = '<input type="button" value = "Edit" onClick="editRow(this)">';
	row.insertCell(5).innerHTML = '<input type="button" value = "Delete" onClick="deleteRow(this)">';

	form.reset();
}

function deleteRow(cell){
	var row = cell.parentNode.parentNode;
	var table = row.parentNode;
	var index = row.rowIndex;
	table.deleteRow(index);
}

function editrow(cell){
	
}