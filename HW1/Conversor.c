#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main()
{
    /*
        opcaoMenu - Controlar fluxo do menu
        1 - Realizar nova conversão (Conversão jã selecionada no segundo menu)
        2 - Acessar Menu Principal (Menu com opções de conversão)

        Inicializa com a opção 2 para rodar pelo menos uma vez o fluxo de escolher o tipo de conversão.
    */
    int opcaoMenu = 2;

    /*
        opcaoConversao - Controlar fluxo de tipo de conversão que vai ser realizada
        1 - Converter Decimal para Binário
        2 - Converter Bínario para Decimal

        Inicializa com a opção 0 para rodar pelo menos uma vez o fluxo de escolher o tipo de conversão.
    */
    int opcaoConversao = 0;

    
    /*
    Loop para verificar o fluxo que o usuário deseja realizar, se deseja realizar 
    uma nova conversão ou deseja escolher qual conversão deseja realizar.
    */
    while (opcaoMenu == 1 || opcaoMenu == 2)
    {
        /*
         Loop para que opção digitada seja valida.
        */
        while (opcaoMenu == 2 && (opcaoConversao != 1 && opcaoConversao != 2))
        {
            printf("\nSelecione uma das opcoes: \n 1 - CONVERTER DECIMAL PARA BINARIO \n 2 - CONVERTER BINARIO PARA DECIMAL  \nOpcao: ");
            scanf("%i", &opcaoConversao);

            /*
                Caso não digite uma opção valida, ira exibir a mensagem de opção Invalida e também continuara dentro desse loop
            */
            if (opcaoConversao != 1 && opcaoConversao != 2)
            {
                printf("\nOpcao invalida\n\n");
            }
        }

        if ((int)opcaoConversao == 1)
        {
            //Metodo para converter Decimal para Binário
            decimalParaBinario();
        }
        else
        {
            //Metodo para converter Binario para Decimal
            binarioParaDecimal();
        }

        do{
            // Caso o usuário deseje trocar o tipo de Conversão, ira setar a opcaoConversao para 0 e 
            // com isso fazendo entrar no while que pede para selecionar um tipo de conversão
            printf("\n1 - Fazer nova conversao? \n2 - Menu Principal\n0 - SAIR\n");
            scanf("%i", &opcaoMenu);

            if(opcaoMenu != 0 && opcaoMenu != 1 && opcaoMenu != 2){
                printf("\nOpcao Invalida\n\n");
            }


        }while(opcaoMenu != 0 && opcaoMenu != 1 && opcaoMenu != 2);

        if (opcaoMenu == 2)
        {
            opcaoConversao = 0;
        }
    }

    return (0);
}

//Metodo para a escolha de Binário para Decimal
int binarioParaDecimal()
{
    //Declara as variaveis que serão usadas para conversão
    long long numeroDigitado;
    long long numeroDigitadoVerificar;
    long long  digito; 
    int resultado = 0;
    int digitosValidos = 0;
    
    do
    {
        //Pede para o usuário digitar o numero decimal que deseja converter
        printf("Digite o numero que deseja converter para Decimal: ");
        // scanf("%i", &numeroDigitado);
        scanf("%lld", &numeroDigitado);

        numeroDigitadoVerificar = numeroDigitado;

        //Verifica se todos numeros digitados são numeros validos(binários)
        for (int i = 0; i < 16; i++) {
            digito = numeroDigitadoVerificar - ((numeroDigitadoVerificar / 10)*10);
            numeroDigitadoVerificar = numeroDigitadoVerificar / 10;

            if(digito != 0 && digito != 1){
                printf("\nBinario invalido\n\n");
                digitosValidos = 0;
                i = 16;
            }else{
                digitosValidos = 1;
            }
        }
    } while (digitosValidos == 0);
    
    //Trick para ir sabendo qual o valor do digito e logo apos fazer o calculo baseado na casa que ele pertence
    for (int i = 0; i < 16; i++) {
		digito = numeroDigitado - ((numeroDigitado / 10)*10);
		
		numeroDigitado = (long long)(numeroDigitado / 10LL);
		resultado += digito * (long long)pow(2,i);
	}

    //Exibe o resultado da conversão.
    printf("Resultado da conversao:  %i", resultado);    
    
    printf("\n");
    system("pause");

    return 0;
}

//Metodo para a escolha de Decinal para Binário
int decimalParaBinario()
{
    //Declara as variaveis que serão usadas para conversão
    int binarios[16];
    int numeroDigitado;
    int aux;
    int auxEspaco = 0;

    do
    {
        //Pede para o usuário digitar o numero decimal que deseja converter
        printf("Digite o numero que deseja converter para binario: ");
        scanf("%i", &numeroDigitado);

        if(numeroDigitado > 65535){
            printf("\nPassou o limite de 65535\n\n");
        }


    } while (numeroDigitado > 65535);

    //Nesse cenário vamos poder ter numeros binarios de no maximo 16 caracteres e tambem no maximo o valor 65535,
    //então ele vai vai fazer um loop nessas 16 para prencher as casas com 0 ou 1 forma decrescente (direita pra esquerda)
    for (aux = 15; aux >= 0; aux--)
    {
        if (numeroDigitado % 2 == 0)
        {
            binarios[aux] = 0;
        }
        else
        {
            binarios[aux] = 1;
        }

        numeroDigitado = numeroDigitado / 2;
    }

    
    printf("Resultado da conversao: ");
    
    //Na variavel binario podemos encontrar todos binarios que foram extraidos do numero decimal digitado,
    //realizar um loop para que seja formado o numero binario para exibição, o auxEspaco serve para que possamos 
    //deixar melhor a visualizacao do binario com as casas separadas de 4 em 4
    for (aux = 0; aux < 16; aux++)
    {
        printf("%i", binarios[aux]);
        
        auxEspaco++;
        if(auxEspaco == 4){
            printf(" ");
            auxEspaco = 0;
        }
    }

    printf("\n");
    system("pause");

    return 0;
}