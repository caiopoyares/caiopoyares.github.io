// Assign variables
const UIcapital = document.querySelector('.capital');
const UItaxaMensal = document.querySelector('.taxa-mensal');
const UIprazo = document.querySelector('.prazo');
const UIcalcBtn = document.querySelector('.btn');
const UIresults = document.querySelector('.resultados');


UIcalcBtn.addEventListener('click', function(e){
    e.preventDefault();

    if(UIcapital.value === '' || UItaxaMensal.value === '' || UIprazo.value === '') {
      // show error message
/*       const error = document.createElement('div');
      error.className = 'alerta alert alert-danger text-center'
      error.textContent = 'Favor preencher todos os campos acima.';
      UIresults.appendChild(error);

      // Hiding the loader and displaying the results
      document.querySelector('.loader').style.display = 'none';
      UIresults.style.display = 'block'; */
  
      // removing the warning after 3 seconds
      document.querySelector('.alerta').style.display = 'block';
      setTimeout(function() {
        document.querySelector('.alerta').style.display = 'none';
      }, 2000);
  
      
  
    } else {
    UIresults.innerHTML = '';
    // parse into numbers
    const cap = Number(UIcapital.value);
    const tax = Number(UItaxaMensal.value);
    const pra = Number(UIprazo.value);
  
    //Put title
    const valoresTitle = document.createElement('h3');
    valoresTitle.className = 'resultados h4';
    valoresTitle.textContent = 'Resultados';
    UIresults.appendChild(valoresTitle);
  
    // Put the number in UI
    const valores = document.createElement('p');
    valores.className = 'valores';
    valores.innerHTML = `<p><span class="font-weight-bold">Capital investido :</span> R$${UIcapital.value}</p>
    <p><span style='font-weight: bold'>Taxa Mensal :</span> ${UItaxaMensal.value}%</p>
    <p><span style='font-weight: bold'>Período:</span> ${UIprazo.value} meses</p>`;
    UIresults.appendChild(valores);
  
  
    // calculate total payment
    let totalPayment = cap * Math.pow((1 + (tax/100)), pra);
    totalPayment = totalPayment.toFixed(2);
    totalPayment = totalPayment.replace('.',',');
    // create UI
    const totalPay = document.createElement('p');
    totalPay.innerHTML = `<span style='font-weight: bold'>Montante total :</span> R$${totalPayment}`;
    valores.appendChild(totalPay);
  
    // calculate total interest
    let totalInterest = (cap * Math.pow((1 + (tax/100)), pra)) - cap;
    totalInterest = totalInterest.toFixed(2);
    totalInterest = totalInterest.replace('.',',');
    // create UI
    const totalInt = document.createElement('p');
    totalInt.innerHTML = `<span style='font-weight: bold'>Juros totais :</span> R$${totalInterest}`;
    valores.appendChild(totalInt);
  
  
    // calculate monthly payment
    let monthlyPayment = ((cap * Math.pow((1 + (tax/100)), pra)) - cap)/ pra;
    monthlyPayment = monthlyPayment.toFixed(2);
    monthlyPayment = monthlyPayment.replace('.',',');
    // create UI
    const monthlyPay = document.createElement('p');
    monthlyPay.innerHTML = `<span style='font-weight: bold'>Juro médio mensal :</span> R$${monthlyPayment}`;
    valores.appendChild(monthlyPay);

    // Hiding the loader and displaying the results
    document.querySelector('.loader').style.display = 'none';
    UIresults.style.display = 'block';
  
    UIcapital.value = '';
    UItaxaMensal.value = '';
    UIprazo.value = '';
  }
  }
  );