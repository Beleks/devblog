<template>
  <div class="card">
    <div class="card-h">
      <h2>Регистрация на сайте</h2>
    </div>
    <div class="section">
      <div class="left">
        <div class="img">
          <img src="../img/10072020.png" alt />
        </div>
        <div class="des">
          <div class="date">10.07.2020</div>
        </div>
      </div>
      <div class="right">
        <span class="des strong">1) Теперь вы можете зарегестрироваться на сайте</span>
        <span
          class="des"
        >Для успешной регистрации вам на почту придет письмо с подтверждением. Помимо почты и пароля вас попросят ввести имя(Оно будет отображаться в вашем личном кабинете и будет видно только вам).</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.card {
  padding: 1em;
  .card-h {
    display: flex;
    // justify-content: center;
    align-items: center;
    padding: 1em 3em;
    color: rgb(50, 183, 108);
  }
}

.section {
  display: flex;
  .left {
    .img {
      max-width: 400px;
      max-height: 250px;
      // background: image('../img/10072020.png')
      img {
        max-width: 400px;
        max-height: 250px;
      }
    }
    .des {
      border-top: 2px solid rgb(50, 183, 108);
      padding: 0.5em;
      display: flex;
      margin-top: 1em;
      .date {
        font-style: italic;
        color: grey;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    padding: 1em;
    font-size: 1.1rem;
    max-width: 650px;
    .strong {
      font-weight: 600;
    }

    span:not(:first-child) {
      margin-top: 1em;
      color: rgb(50, 67, 85);
      line-height: 1.7;
    }
  }
}
</style>