
function Main() {

  return (
    <p>
      Cтворити аплікацію з авторизацією.
      Апка має мати наступні сторінки, для доступу до кожної сторінки має бути посилання в меню.
      Для авторизації достатньо зберегти імя, наприклад, в локал сторедж.
      <br></br>
      <br></br>
      - Список користувачів (відрендерити просто імя і прізвище,
      при кліку на них має відобразитись інформація по юзеру,
      має бути змінений роут, подивіться, що верне АПІшка і відобразіть 1-3 параметра)
      <br></br>
      - Список постів (відрендерити просто заголовок,
      при кліку на нього має відобразитись інформація про пост,
      має бути змінений роут, подивіться, відобразити заголовок і текст)
      <br></br>
      - Список справ, для цієї сторінки використати mobx (має рендеритись список справ, кнопка редагувати і видалити.
      При кліку на редагування має змінитись роут на 'todos/edit/:todoId' і відрендеритись заповнене поле з кнопкою "Оновити".
      Коли нажати на Видалити то елемент має видалитись зі списку)
      <br></br>
      <br></br>
      Для АПІшки використати:
      <br></br>
      JSONPlaceholder - Guide
      jsonplaceholder.typicode.com
    </p>
  );
}
export { Main };
