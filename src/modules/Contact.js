const createContact = () => {
  const contact = document.createElement('div');
  contact.innerHTML = `<h1 class="contact-title">Contact Us</h1>
    <p class="contact-info">jabustarde.com</p>`;
  return contact;
};

const Contact = () => {
  document.querySelector('section').innerHTML = '';
  const content = document.querySelector('section');
  content.innerHTML = '';
  content.appendChild(createContact());
};

export default Contact;
