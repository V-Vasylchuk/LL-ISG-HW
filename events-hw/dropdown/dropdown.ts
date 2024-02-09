interface MenuItem {
  name: string;
  url: string;
}

class Dropdown {
  private container: HTMLElement | null;
  private items: MenuItem[];

  constructor(selector: string, items: MenuItem[]) {
      this.container = document.querySelector(selector);
      this.items = items;
      this.render();
  }

  private render() {
      const dropdownButton = document.createElement('button');
      dropdownButton.classList.add('dropbtn');
      dropdownButton.textContent = 'Dropdown';

      const dropdownContent = document.createElement('div');
      dropdownContent.classList.add('dropdown-content');

      this.items.forEach(item => {
          const link = document.createElement('a');
          link.href = item.url;
          link.textContent = item.name;
          dropdownContent.appendChild(link);
      });

      this.container?.appendChild(dropdownButton);
      this.container?.appendChild(dropdownContent);
  }
}

// content for test
const menuItems: MenuItem[] = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Contact', url: '/contact' }
];

const dropdown = new Dropdown('.dropdown', menuItems);
