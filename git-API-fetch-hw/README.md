# Simple GitHub Repositories Viewer
This project allows users to view a list of repositories for a GitHub user by entering their username. Upon pressing Enter, the application sends a request to the GitHub API to retrieve the user's repositories. While the request is being processed, a spinner is displayed. Once the data is received, the repositories are displayed on the page.

## Features
1. Users can enter a GitHub username to view their repositories.
2. Automatic fetching of repositories after a 300-millisecond delay when the user stops typing.
3. Display of a spinner while fetching repositories.
4. Each repository card displays the following information:
- Repository name
- Programming language used (if available)
- Link to the repository on GitHub
- If the user has no repositories, a message indicating this is displayed.

## Instructions for Use
Follow the [LINK](http://git.api.fetch.s3-website.eu-central-1.amazonaws.com/) OR:
1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Enter a GitHub `username` into the input field and wait for the automatic fetching to occur.
4. View the list of repositories displayed on the page.

## Technologies Used
- HTML
- CSS
- JavaScript

## Author
[_Vasylchuk Vasyl_](https://www.linkedin.com/in/vasyl-vasylchuk-632303273/)