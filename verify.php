<?php
session_start();
require_once 'userconfig.php';

if (isset($_GET['token'])) {
    $token = $_GET['token'];
    
    try {
        // Ideiglenes felhasználó keresése
        $sql = "SELECT * FROM temp_users 
                WHERE verification_token = :token 
                AND token_expiry > NOW()";
        
        $stmt = $conn->prepare($sql);
        $stmt->execute([':token' => $token]);
        $temp_user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($temp_user) {
            // Felhasználó áthelyezése a végleges táblába
            $insert_sql = "INSERT INTO users (username, email, password) 
                          VALUES (:username, :email, :password)";
            
            $insert_stmt = $conn->prepare($insert_sql);
            $insert_result = $insert_stmt->execute([
                ':username' => $temp_user['username'],
                ':email' => $temp_user['email'],
                ':password' => $temp_user['password']
            ]);
            
            if ($insert_result) {
                // Ideiglenes felhasználó törlése
                $delete_sql = "DELETE FROM temp_users WHERE id = :id";
                $delete_stmt = $conn->prepare($delete_sql);
                $delete_stmt->execute([':id' => $temp_user['id']]);
                
                $_SESSION['success'] = "Email cím sikeresen megerősítve! Most már bejelentkezhetsz.";
            } else {
                $_SESSION['error'] = "Hiba történt a regisztráció véglegesítése során.";
            }
        } else {
            $_SESSION['error'] = "Érvénytelen vagy lejárt megerősítő link.";
        }
        
    } catch (PDOException $e) {
        $_SESSION['error'] = "Hiba történt a megerősítés során.";
    }
    
    header("Location: login.php");
    exit();
}