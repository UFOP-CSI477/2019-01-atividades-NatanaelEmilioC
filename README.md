# 1.1 Competição de carrinhos de rolimã – 01-corrida.html
O objetivo desta aplicação é o desenvolvimento de uma interface para apurar resultados em provas
de carrinhos de rolimã. Os nomes dos(as) competidores(as) são inseridos juntamente aos seus respectivos
tempos. Por simplicidade, sugiro que esses tempos sejam inseridos em segundos. Por exemplo, em vez de
1 minuto e 10 segundos, o usuário deve inserir 70 segundos. Além disso, vamos considerar o padrão de até
6 pessoas competindo ao mesmo tempo. Assim, os dados serão digitados conforme a posição de largada,
a pessoa que compete e o tempo de prova. Ao final, a interface deve apresentar os tempos ordenados de
maneira ascendente, indicando a(s) pessoa(s) vencedora(s)3.

Um exemplo de apuração é apresentado a seguir. Inicialmente, os dados são inseridos de acordo com a
ordem de largada na competição, conforme apresentado na Tabela 1
Largada Competidor(a) Tempo (s)
1 Marie Curie 87
2 Malala Yousafzai 83
3 Nadia Murad 86
4 Suzana Herculano-Houzel 83
5 Margaret Hamilton 85
6 Grace Hopper 88
Tabela 1 – Ordem de largada e tempos dos(as) competidores(as)
Após o lançamento dos dados, o resultado final deverá ser exibido com a indicação da(s) pessoa(s)
vencedora(s), como apresentado na Tabela 2.
Posição Largada Competidor(a) Tempo (s) Resultado
1 2 Malala Yousafzai 83 Vencedor(a) !
1 4 Suzana Herculano-Houzel 83 Vencedor(a) !
3 5 Margaret Hamilton 85 –
4 3 Nadia Murad 86 –
5 1 Marie Curie 87 –
6 6 Grace Hopper 88 –
Tabela 2 – Resultado final da prova.

# 1.2 Cálculo do IMC – 02-imc.html
Crie uma página que calcule o Índice de Massa Corporal (IMC) para identificar se o peso de uma pessoa
está equilibrado em relação à sua altura. O cálculo é realizado por meio da Equação (1):
IMC =
peso
(altura)2 (1)
a) Receba os parâmetros necessários;
b) Calcule e apresente o IMC com a respectiva classificação, conforme a Tabela 3;
c) Calcule e apresente o intervalo de peso ideal (saudável), considerando a altura da pessoa.
IMC Classificação
Abaixo de 18,5 Subnutrição
Entre 18,5 e 24,9 Peso Saudável
Entre 25,0 e 29,9 Sobrepeso
Entre 30,0 e 34,9 Obesidade grau 1
Entre 35,0 e 39,9 Obesidade grau 2
Acima de 40 Obesidade grau 3
Tabela 3 – Classificação do IMC para adultos

# 1.3 Escala Richter – 03-escala.html
A escala mais conhecida para determinar qual a intensidade de um terremoto é a Escala Richter. Essa
escala foi desenvolvida por Charles F. Richter em 1935 no Instituto de Tecnologia da Califórnia a partir do
estudo de cerca de 200 terremotos ao ano. Veja na Tabela 4 quais os efeitos gerados por um terremoto de
acordo com seu valor na escala Richter: 4
Tabela 4 – Escala Richter e Efeitos – Imagem retirada de ??)
A magnitude M é calculada a partir da Equação (2).
M = log10 A + 3: log10(8:t) 􀀀 2; 92 (2)
Sendo:
 M é a magnitude do terremoto;
 A é a amplitude (em milímetros) medida com um sismógrafo;
 t é o intervalo de tempo (em segundos) entre a onda superficial (S) e a onda de pressão máxima (P).
1.3.1 Exemplo de Cálculo
A Figura 1 apresenta o gráfico obtido a partir de um sismógrafo de uma estação localizada no sul da
Califórnia.
Figura 1 – Gráfico obtido a partir de um sismógrafo. Gentil, N.; Greco, S.E.; Marcondes, C.A. (2000).
Matemática – Série Novo Ensino Médio. São Paulo: Ática. 3a edição. – Imagem retirada de ??)


Na Figura 1 a amplitude A é igual a 23mm. A distância entre as ondas P e S é de 24mm. Como o papel
de um sismógrafo “anda” a 1mm=s, então t = 24s. A partir da Equação (2), tem-se:
M = log10 23 + 3: log10(8:24) 􀀀 2; 92 = 5; 28 (3)
De acordo com a classificação apresenta na Tabela 4, esse valor representa um terremoto de baixa intensidade.
1.3.2 Atividade
Crie uma página para receber os parâmetros necessários para cálculo da Magnitude Ritcher, conforme
a Equação 2, e apresentar os efeitos de acordo com o valor encontrado (Tabela 4). Você pode também
apresentar informações gráficas para ilustrar o resultado. Veja, por exemplo, a biblioteca D3.js.5
5 <