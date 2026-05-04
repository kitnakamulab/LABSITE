const form = document.querySelector("#entry-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get("name");

  message.textContent = `${name} 様、申し込み内容を受け付けました。確認メール送信の実装先を接続すると本番運用できます。`;
  form.reset();
});
