# Validar CPF
## Prof: Tarcisio Medeiros
## Algoritimo feito em HTML, CSS e JS para validar CPF

## Integrantes
- Robert Miguel
- Matheus Shaddai
- Gabriel Alves

# Explicação rápida do código:
 ### Na linha *3*, removemos todos os caracteres não númericos do CPF passado como parâmetro, eliminando uma possível máscara.
 ````sql
   if((c = c.replace(/[^\d]/g,"")).length != 11)
      return false
````
<br>

### O condicional if da linha *7* verifica se número de dígitos da string já limpa é igual a 11 e checa por valores iguais. Esta verificação é necessária uma vez que se aplicarmos o algoritmo do CPF sobre o número "111.111.111-11" teoricamente os      dígitos verificadores estão corretos, mas este NÃO é um número válido.
````sql
  if (c == "00000000000" ||
````
<br>

### As linha *23* à *32* verificam se o primeiro dígito verificador é válido de acordo com o algoritmo do CPF. Caso negativo, a validação já retorna false encerrando a função.
````sql
  for (i=1; i<=9; i++)
      s = s + parseInt(c[i-1]) * (11 - i);
  
    r = (s * 10) % 11;
  
    if ((r == 10) || (r == 11))
      r = 0;
  
    if (r != parseInt(c[9]))
      return false;
````
<br>

### Já as linha *35* à *46* verificam se o segundo dígito verificador é válido.
````sql
s = 0;
  
    for (i = 1; i <= 10; i++)
      s = s + parseInt(c[i-1]) * (12 - i);
  
    r = (s * 10) % 11;
  
    if ((r == 10) || (r == 11))
      r = 0;
  
    if (r != parseInt(c[10]))
      return false;
````
<br>

### Caso o algoritmo alcance a linha *48* temos um CPF válido e o boolean true é retornado.
````sql
   return true;
````
  
