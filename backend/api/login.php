
<?php

session_start();

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

require_once "../config/database.php";

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$username = trim($data["username"] ?? "");
$password = $data["password"] ?? "";

if ($username === "" || $password === "") {
    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "اطلاعات ورود را کامل وارد کنید"
    ]);

    exit;
}

$sql = "SELECT * FROM users
        WHERE username = :username
        OR phone = :phone
        LIMIT 1";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    "username" => $username,
    "phone" => $username
]);

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (
    !$user ||
    !password_verify($password, $user["password"])
) {
    http_response_code(401);

    echo json_encode([
        "success" => false,
        "message" => "نام کاربری یا رمز عبور اشتباه است"
    ]);

    exit;
}

if ($user["status"] !== "prmitted") {
    http_response_code(403);

    echo json_encode([
        "success" => false,
        "message" => "حساب کاربری مجاز نیست"
    ]);

    exit;
}

if (!in_array(
    $user["role"],
    ["BOSS", "SUPER ADMIN", "ADMIN"],
    true
)) {
    http_response_code(403);

    echo json_encode([
        "success" => false,
        "message" => "شما دسترسی مدیریت ندارید"
    ]);

    exit;
}

session_regenerate_id(true);

$_SESSION["user_id"] = $user["id"];
$_SESSION["role"] = $user["role"];

echo json_encode([
    "success" => true,
    "message" => "ورود موفقیت‌آمیز بود",
    "user" => [
        "id" => $user["id"],
        "name" => $user["name"],
        "username" => $user["username"],
        "role" => $user["role"]
    ]
]);
