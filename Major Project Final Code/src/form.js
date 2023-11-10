// Get the form element.
const form = document.querySelector('form');

// Add an event listener to the form's submit event.
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior.
  event.preventDefault();

  // Get the form data.

  
const formData = new FormData(form);

  // Update the code fields with the form data.
  meta.title = formData.get('title');
  meta.description = formData.get('description');
  introdata.title = formData.get('introtitle');
  introdata.description = formData.get('introdescription');
  dataabout.aboutme = formData.get('aboutme');
  dataportfolio.forEach((item, index) => {
    item.description = formData.get(`portfolio-description-${index}`);
  });
  worktimeline.forEach((item, index) => {
    item.jobtitle = formData.get(`worktimeline-jobtitle-${index}`);
    item.where = formData.get(`worktimeline-where-${index}`);
    item.date = formData.get(`worktimeline-date-${index}`);
  });
  skills.forEach((item, index) => {
    item.name = formData.get(`skills-name-${index}`);
    item.value = formData.get(`skills-value-${index}`);
  });
  services.forEach((item, index) => {
    item.title = formData.get(`services-title-${index}`);
    item.description = formData.get(`services-description-${index}`);
  });
  contactConfig.description = formData.get('contact-description');
});

// Add event listeners to the form fields to auto-update the code fields.
form.querySelectorAll('input').forEach((input) => {
  input.addEventListener('input', () => {
    const fieldName = input.name;
    const fieldValue = input.value;

    // Update the corresponding code field.

    
if (fieldName in meta) {
      meta[fieldName] = fieldValue;
    } else
 
if (fieldName in introdata) {
      introdata[fieldName] = fieldValue;
    } else
 
if (fieldName in dataabout) {
      dataabout[fieldName] = fieldValue;
    } else
 
if (fieldName.startsWith('portfolio-description-')) {
      dataportfolio[fieldName.split('-')[2]].description = fieldValue;
    } else
 
if (fieldName.startsWith('worktimeline-jobtitle-')) {
      worktimeline[fieldName.split('-')[2]].jobtitle = fieldValue;
    } else
 
if (fieldName.startsWith('worktimeline-where-')) {
      worktimeline[fieldName.split('-')[2]].where = fieldValue;
    } else
 
if (fieldName.startsWith('worktimeline-date-')) {
      worktimeline[fieldName.split('-')[2]].date = fieldValue;
    } else
 
if (fieldName.startsWith('skills-name-')) {
      skills[fieldName.split('-')[2]].name = fieldValue;
    } else
 
if (fieldName.startsWith('skills-value-')) {
      skills[fieldName.split('-')[2]].value = fieldValue;
    } else
 
if (fieldName.startsWith('services-title-')) {
      services[fieldName.split('-')[2]].title = fieldValue;
    } else
 
if (fieldName.startsWith('services-description-')) {
      services[fieldName.split('-')[2]].description = fieldValue;
    } else
 
if (fieldName === 'contact-description') {
      contactConfig.description = fieldValue;
    }
  });
});