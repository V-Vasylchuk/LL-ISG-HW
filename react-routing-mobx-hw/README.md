# Routing & mobX To Do List

This application provides basic authentication functionalities and features three main pages accessible through a menu:

- Users List
- Posts List
- To-Do List

## Features
### Users List
Renders a list of users displaying their name and surname.
Clicking on a user's name displays additional information about the user, such as email, phone number, or address.
Utilizes routing to change the URL and display user details.
### Posts List
Renders a list of posts displaying their titles.
Clicking on a post's title displays the full post content, including title and text.
Utilizes routing to change the URL and display post details.
### To-Do List
Utilizes MobX for state management.
Renders a list of to-do items with `edit` and `delete` buttons.
Clicking the `edit` button changes the route to `/todos/edit/:todoId` and renders a form pre-filled with the selected to-do item's information.
Clicking the `update` button updates the selected to-do item's title.
Clicking the `delete` button removes the selected to-do item from the list.

## APIs Used
This application uses the [`JSONPlaceholder API`](https://jsonplaceholder.typicode.com/) and [`Axios`](https://axios-http.com/uk/docs/intro) client for fetching users, posts, and to-do items.

## Author
[_Vasylchuk Vasyl_](https://www.linkedin.com/in/vasyl-vasylchuk-632303273/)