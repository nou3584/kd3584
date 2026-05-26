<?php
/**
 * Optional PHP endpoint.
 * GitHub Pages cannot execute PHP.
 * Use this file only on Sakura Rental Server or another PHP-compatible server.
 */

header('Content-Type: application/json; charset=utf-8');

$response = [
  "site" => "KINGDOM 3584 - Saint Empire",
  "owner" => "nou3584",
  "repository" => "kd3584",
  "github_pages_url" => "https://nou3584.github.io/kd3584/",
  "discord" => "https://discord.gg/QA2q6GEq8",
  "status" => "ok",
  "message" => "Applications are reviewed by kingdom leadership."
];

echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
?>
