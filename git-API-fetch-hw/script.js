'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const usernameInput = document.getElementById('username-input');

  let timeoutId;

  if (usernameInput) {
    usernameInput.addEventListener('input', function() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(fetchRepositories, 300);
    });
  }
});

async function fetchRepositories() {
  const usernameInput = document.getElementById('username-input');
  const spinner = document.getElementById('spinner');
  const repositoriesList = document.getElementById('repositories-list');
  const errorMessage = document.getElementById('error-message');

  const username = usernameInput.value.trim();
  if (username === '') {
    return;
  }

  spinner.style.display = 'block';
  repositoriesList.innerHTML = '';
  errorMessage.textContent = '';

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const data = await response.json();
    displayRepositories(data);
  } catch (error) {
    console.error(error);
    errorMessage.textContent = `Repositories doesn\'t exist by user name: ${username}`;
  } finally {
    spinner.style.display = 'none';
  }
}

function displayRepositories(repositories) {
  const repositoriesList = document.getElementById('repositories-list');
  const errorMessage = document.getElementById('error-message');

  if (repositories.length === 0) {
    return errorMessage.textContent = `User: ${username}, haven\'t any repository!`;
  }

  // Clear previous contents
  repositoriesList.innerHTML = '';

  // Create table header
  const tableHeader = document.createElement('div');
  tableHeader.classList.add('table-header');
  tableHeader.innerHTML = `
    <div class="header-cell">Repository Name</div>
    <div class="header-cell">Language</div>
  `;
  repositoriesList.appendChild(tableHeader);

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

    repositoriesList.appendChild(row);
  });
}
