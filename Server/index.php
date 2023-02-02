<!DOCTYPE html>
<html>
    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
    <title>Авторизация</title>
<div class="center-screen">
    <div class="modal modal-signin position-static d-block" tabindex="-1" role="dialog" id="modalSignin">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <h1 class="fw-bold mb-0 fs-2"><ya-tr-span data-index="14-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value="Sign up for free" data-translation="Авторизация" data-ch="0" data-type="trSpan">Авторизация</ya-tr-span></h1>
      </div>
      <form action="aut.php" method="post">
      <div class="modal-body p-5 pt-0">
          <div class="form-floating mb-3">
            <input name="login_user" type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput"><ya-tr-span data-index="15-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value="Email address" data-translation="Эл. адрес" data-ch="0" data-type="trSpan"> Эл. адрес</ya-tr-span></label>
          </div>
          <div class="form-floating mb-3">
            <input name="password_user" type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Пароль">
            <label for="floatingPassword">Пароль</label>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit"><ya-tr-span data-index="16-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value="Sign up" data-translation="Войти" data-ch="0" data-type="trSpan">Войти</ya-tr-span></button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
</html>
<style type="text/css">
.center-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
</style>