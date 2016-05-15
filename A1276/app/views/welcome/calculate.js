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
        document.getElementById('moaog').innerHTML = sum/totDiv;
        document.getElementById('moaog').value = sum/totDiv;
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
        document.getElementById('moaog').innerHTML = sumMarks / sumTotals;
        document.getElementById('moaog').value = sumMarks / sumTotals;
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
                document.getElementById('pc' + i).value = curGr / curTot;
                document.getElementById('pc' + i).innerHTML = curGr / curTot;
            }
        }
    }
}