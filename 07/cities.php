<?php  
    $result = NULL;

    //01 - Paraná
    //02 - São Paulo
    //03 - Rio de Janeiro
    //04 - Minas Gerais

    switch ($_POST['ESTADO']) {
            case '01':
            $result = array("Curitiba", "Pato Branco", "Matinhos", "Cascavel");
            break;

            case '02':
            $result = array("São Paulo", "Osasco", "Santos", "Campo Grande");
            break;

            case '03':
            $result = array("Macaé", "Angra dos Reis", "Parati", "Volta Redonda");
            break;

            case '04':
            $result = array("Belo Horizonte", "Ouro Preto", "Ipatinga", "Passos");
            break;
        
        default:
            $result = 'Ocorreu um erro';
            break;
    }

    echo json_encode($result);
?>