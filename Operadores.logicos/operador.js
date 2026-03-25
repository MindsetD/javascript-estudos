/*    

== --- igual exemplo a==b --- isso será verdadeiro se a for gual a B

=== --- Operador chamado identico, no caso a===b ele diz se é verdadeiro se a for identico a B

!== Operador Não identico, no caso a for diferente de b a!==b ( seria verdade )
 eu estaria dizendo é verdade não são identicos ( logo sairia true). 
 agora se forem diferentes no caso se fossem 2 variaveis tipo string iguais, seria (false), pois
 eu estaria dizendo -> é mentira é falso, pois são duas variaveis iguals. 

 != diferente, no caso verificar o tipo de dado se é diferente, mas não a tipagem ou seja 
 se o valor da variavel a é a mesma que a de b, sairia FALSE, pois as variaveis não são diferentes. 
 caso fossem diferentes seria Verdadeiro ( true ), pois ele diria que é verdade que são diferentes !=
 (só lembrete que !=, não verifica a tipagem ou seja se fosse 1 string e numerador com o mesmo valor,
 logo então daria falso, pois pra ele seriam duas variaveis iguais.)

 --- a < b? no caso eu pergunto -> a é < menor que b? se for menor seria verdadeiro., caso não seja 
 será falso. 

--- a <= a b?, aqui eu pergunto a é menor ou igual a B?, caso seja igual ( será verdeiro) se for menor 
(será true verdadeiro.) , se for maior será (false).

---- a > b, aqui eu pergunto a é maior que b? se for maior será (true), se for menor( será false) 

---- a > = b?, aqui eu pergunto a é maior ou igual a b?, se for igual é true, se for menor é false.

*/




// exemplo abaixo:

//const a = 3
//const b = 2

//console.log(a==b)

// acabou retornando valor false porque A vale 3, e B vale 2, logo então não são variaves iguais.
// se fosse ao contratrio tivessem o mesmo valor, seriam variaveis iguais. ==


//MAIS UM EXEMPLO ---


//const a = 3 
//const b = "3"

//console.log(a==b)

// quando comparamos uma string com tipo primitivo de numero, e as variaveis possuem 
// o mesmo valor, mesmo sendo tipagem diferentes dados diferentes
// isso acontece porque a tipagem do javascript é fraca, então não analisa o tipo de dado. 

// MAS SE FIZERMOS ASSIM: 
// quando adicionamos +1 sinal de igual, ele verifica a tipagem no caso  o tipo de dado, logo então 
// se torna mais forte, e assim obtemos a conclusão que as variaveis são diferentes. 
// estão comparando tanto variavel como os dados 


//const a = 3 // se fosse duas variaveis strings no caso "3", ai retornaria true pois seria 2 variaveis iguais
//const b = "3"

//console.log(a===b) // logo então se torna FALSO, pois é uma String contra um Numerador 


// --- OPERADOR NÃO IDENTICO ---

//const a = 3 
//const b = "3"

// o resultado acaba se tornando verdadeiro -> no caso " é verdade que não são identicos."

//console.log(a !== b) // pedindo pra ele comparar se esses dois dados não são identicos

// --> quando sai true, no caso ( É VERDADE QUE NÃO SÃO IDENTICOS!).

const a = 1
const b = 1

console.log(a >= b)