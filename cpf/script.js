/* function validateCPF(event) {

    event.preventDefault();

    const cpfInput = document.getElementById("cpfInput");
    const cpfValidationResult = document.getElementById("cpfValidationResult");

    const cpf = cpfInput.value.replace(/\D/g, '');

    if (cpf.length !== 11) {
        cpfValidationResult.textContent = "CPF inválido";
        cpfValidationResult.style.color = "red"
        event.preventDefault();
        return false;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf[i]) * (10 - i);
    }

    let digit1 = 0;
    if (sum % 11 > 1) {
        digit1 = 11 - (sum % 11);
    }

    if (parseInt(cpf[9]) !== digit1) {
        cpfValidationResult.textContent = "CPF inválido";
        cpfValidationResult.style.color = "red"
        event.preventDefault();
        return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf[i]) * (11 - i);
    }

    let digit2 = 0;
    if (sum % 11 > 1) {
        digit2 = 11 - (sum % 11);
    }

    if (parseInt(cpf[10]) !== digit2) {
        cpfValidationResult.textContent = "CPF inválido";
        cpfValidationResult.style.color = "red"
        event.preventDefault()
        return false;
    }

    cpfValidationResult.textContent = "CPF válido";
    cpfValidationResult.style.color = "green"
    return true;
} */

function is_cpf (c) {

    if((c = c.replace(/[^\d]/g,"")).length != 11)
      return false
  
    if (c == "00000000000")
      return false;
  
    var r;
    var s = 0;
  
    for (i=1; i<=9; i++)
      s = s + parseInt(c[i-1]) * (11 - i);
  
    r = (s * 10) % 11;
  
    if ((r == 10) || (r == 11))
      r = 0;
  
    if (r != parseInt(c[9]))
      return false;
  
    s = 0;
  
    for (i = 1; i <= 10; i++)
      s = s + parseInt(c[i-1]) * (12 - i);
  
    r = (s * 10) % 11;
  
    if ((r == 10) || (r == 11))
      r = 0;
  
    if (r != parseInt(c[10]))
      return false;
  
    return true;
  }
  
  
  function fMasc(objeto,mascara) {
  obj=objeto
  masc=mascara
  setTimeout("fMascEx()",1)
  }
  
    function fMascEx() {
  obj.value=masc(obj.value)
  }
  
  function mCPF(cpf){
  cpf=cpf.replace(/\D/g,"")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return cpf
  }
  
  cpfCheck = function (el) {
      document.getElementById('cpfResponse').innerHTML = is_cpf(el.value)? '<span style="color:green">válido</span>' : '<span style="color:red">inválido</span>';
      if(el.value=='') document.getElementById('cpfResponse').innerHTML = '';
  }
