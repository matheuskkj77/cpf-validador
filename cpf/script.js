function validateCPF(event) {

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
}
