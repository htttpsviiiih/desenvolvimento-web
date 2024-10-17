<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $pais = $_POST['pais'];
    $coment = $_POST['comentarios'];
    $hab = isset($_POST['habilidades']) ? implode(", ", $_POST['habilidades']) : 'Nenhuma habilidade selecionada';
    $email = $_POST['email'];
    $data_nasc = $_POST['data_nascimento'];

    echo "Nome: " . htmlspecialchars($nome) . "<br>";
    echo "Email: " . htmlspecialchars($email) . "<br>";
    echo "Data de nascimento: " . htmlspecialchars($data_nasc) . "<br>";
    echo "Habilidades: " . htmlspecialchars($hab) . "<br>";
    echo "País: " . htmlspecialchars($pais) . "<br>";
    echo "Comentários: " . htmlspecialchars($coment) . "<br>";
}


