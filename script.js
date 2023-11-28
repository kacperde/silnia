function silnia()
{
    let liczba = document.getElementById('liczba').value;
    let silnia = 1;
    if (isNaN(liczba) || liczba == "")
    {
        document.getElementById('silnia').innerHTML = "Nie podano liczby!";
    }
    else
    {
        for(i = 1; i<= liczba; i++)
        {
            silnia *= i;
        }
    document.getElementById('silnia').innerHTML = "Silnia wynosi: " + silnia;
    }

}