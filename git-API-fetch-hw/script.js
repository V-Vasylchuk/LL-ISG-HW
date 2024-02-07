'use strict';

const INPUT_USERNAME = document.getElementById('username-input');
const LIST_REPOSITORIES = document.getElementById('repositories-list');
const SPINNER = document.getElementById('spinner');
const ERROR_MESSAGE = document.getElementById('error-message');

document.addEventListener('DOMContentLoaded', function() {
  let timeoutId;

  if (INPUT_USERNAME) {
    INPUT_USERNAME.addEventListener('input', function() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(fetchRepositories, 300);
    });
  }
});

async function fetchRepositories() {
  const username = INPUT_USERNAME.value.trim();

  if (username === '') return;

  SPINNER.style.display = 'block';
  LIST_REPOSITORIES.innerHTML = '';
  ERROR_MESSAGE.textContent = '';

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const data = await response.json();
    displayRepositories(data);
  } catch (error) {
    console.error(error);
    ERROR_MESSAGE.textContent = `Repositories doesn\'t exist by user name: ${username}`;
  } finally {
    SPINNER.style.display = 'none';
  }
}

function displayRepositories(repositories) {

  if (repositories.length === 0) {
    return ERROR_MESSAGE.textContent = `User: ${username}, haven\'t any repository!`;
  }

  // Clear previous contents
  LIST_REPOSITORIES.innerHTML = '';

  // Create table header
  const tableHeader = document.createElement('div');
  tableHeader.classList.add('table-header');
  tableHeader.innerHTML = `
    <div class="header-cell">Repository Name</div>
    <div class="header-cell">Language</div>
  `;
  LIST_REPOSITORIES.appendChild(tableHeader);

  // Create table rows
  repositories.forEach(repo => {
    const row = document.createElement('div');
    row.classList.add('repo-row');

    const repoNameCell = document.createElement('div');
    repoNameCell.classList.add('repo-cell');
    const repoLink = document.createElement('a');
    repoLink.classList.add('repo-link');
    repoLink.textContent = repo.name;
    repoLink.href = repo.html_url;
    repoLink.target = '_blank';
    repoNameCell.appendChild(repoLink);
    row.appendChild(repoNameCell);

    const languageCell = document.createElement('div');
    languageCell.classList.add('repo-cell');
    languageCell.textContent = repo.language || 'A few language';
    row.appendChild(languageCell);

    LIST_REPOSITORIES.appendChild(row);
  });
}
