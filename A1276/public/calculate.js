function chgAct(fieldid)
{
    var newVal = prompt("Re-name " + document.getElementById("tf" + fieldid).innerHTML + "?", document.getElementById("tf" + fieldid).innerHTML);
    
    if (newVal != null)
    {
        document.getElementById("tf" + fieldid).innerHTML = "" + newVal;
    }
}

function removetablerow()
{
    var numInputs = document.getElementsByTagName("input").length / 2;
    
    if (numInputs >= 2)
    {
        document.getElementById("tbl1").deleteRow(numInputs);
    }
    
}

function addtablerow()
{
    var numInputs = document.getElementsByTagName("input").length / 2;
    var curTable = document.getElementById("tbl1").getElementsByTagName("tbody")[0];
    var curRow = curTable.insertRow(numInputs);
    
    var nameCell = curRow.insertCell(0);
    nameCell.innerHTML = "Activity " + (numInputs + 1);
    nameCell.id = "tf" + (numInputs + 1);
    
    var shNameCell = curRow.insertCell(1);
    shNameCell.innerHTML = "A" + (numInputs + 1);
    shNameCell.id = "ab" + (numInputs + 1);
    nameCell.onclick = function() {chgAct(numInputs + 1)};
    shNameCell.onclick = function() {chgAbbrev(numInputs + 1)};
    
    var inputcell = curRow.insertCell(2);
    var numField = document.createElement("input");
    var denField = document.createElement("input");
    numField.id = "gr" + (numInputs + 1);
    denField.id = "tot" + (numInputs + 1);
    numField.type = "number";
    denField.type = "number";
    numField.min = "0";
    denField.min = "1";
    inputcell.appendChild(numField);
    inputcell.innerHTML += " / ";
    inputcell.appendChild(denField);
    
    var pctCell = curRow.insertCell(3);
    var pctp = document.createElement("p");
    pctp.id = "pc" + (numInputs + 1);
    pctCell.appendChild(pctp);
    
}

function chgAbbrev(fieldid) {
    var newVal = prompt("Re-name " + document.getElementById("ab" + fieldid).innerHTML + "?", document.getElementById("ab" + fieldid).innerHTML);
    //var newVal = prompt("Re-name Activity 1", "Activity 1");
    
     if (newVal != null)
    {
        document.getElementById("ab" + fieldid).innerHTML = "" + newVal;
    }
}

function clearValues()
{
    var numInputs = document.getElementsByTagName("input").length / 2;
    
    for (var i = 1; i < numInputs + 1; i++)
    {
        document.getElementById('pc' + i).value = "";
        document.getElementById('pc' + i).innerHTML = "";
    }
    document.getElementById('moaog').innerHTML = "";
    document.getElementById('moaog').value = "";
}

function meanofgrades()
{
    calcPercentages();
    
    var numInputs = document.getElementsByTagName("input").length / 2;
    var curPc;
    var sum = 0;
    var totDiv = 0;
    
    for (var i = 1; i < numInputs + 1; i++)
    {
        curPc = document.getElementById('pc' + i).value;
        if (curPc != null && curPc != "" && curPc != "N/A")
        {
            sum += +curPc;
            totDiv++;
        }
    }
    
    document.getElementById('moaog').innerHTML = "N/A";
    document.getElementById('moaog').value = "N/A";
    
    if (totDiv > 0)
    {
        document.getElementById('moaog').innerHTML = Math.round((sum/totDiv) * 100) / 100 + "%";
        document.getElementById('moaog').value = Math.round((sum/totDiv) * 100) / 100 + "%";
    }
}

function avgofgrades()
{
    calcPercentages();
    
    var numInputs = document.getElementsByTagName("input").length / 2;
    var curGr;
    var curTot;
    var sumMarks = 0;
    var sumTotals = 0;
    
    
    for (var i = 1; i < numInputs + 1; i++)
    {
        curGr = document.getElementById('gr' + i).value;
        curTot = document.getElementById('tot' + i).value;
        
        if (curGr != null && curGr != "" && curGr >= 0 &&
            curTot != null && curTot != "" && curTot > 0)
        { 
            sumMarks += +curGr;
            sumTotals += +curTot;
        }
        
    }
    
    document.getElementById('moaog').innerHTML = "N/A";
    document.getElementById('moaog').value = "N/A";
    
    if (sumTotals > 0)
    {
        document.getElementById('moaog').innerHTML = Math.round((sumMarks / sumTotals) * 10000) / 100 + "%";
        document.getElementById('moaog').value = Math.round((sumMarks / sumTotals) * 10000) / 100;
    }
}

function calcPercentages()
{
    
    var curGr;  //the current grade
    var curTot; //the current total
    var numInputs = document.getElementsByTagName("input").length / 2;
    
    for (var i = 1; i < numInputs + 1; i++)
    {
        document.getElementById('pc' + i).value = "N/A";
        document.getElementById('pc' + i).innerHTML = "N/A";
        
        curGr = document.getElementById('gr' + i).value;
        
        //if its blank, we don't need to do anything more.
        if (curGr != null && curGr != "" && curGr >= 0)
        {
            curTot = document.getElementById('tot' + i).value;
            
            if (curTot != null && curTot != "" && curTot > 0)
            {
                document.getElementById('pc' + i).value = Math.round((curGr / curTot) * 10000) / 100;
                document.getElementById('pc' + i).innerHTML = Math.round((curGr / curTot) * 10000) / 100 + "%";
            }
        }
    }
}