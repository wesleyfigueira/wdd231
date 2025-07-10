


document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    technology: ['HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    technology: ['C#'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  }
];

const coursesContainer = document.getElementById('courses-container');
const totalCreditsElem = document.getElementById('total-credits');

document.getElementById('btn-all').addEventListener('click', () => renderCourses('all'));
document.getElementById('btn-wdd').addEventListener('click', () => renderCourses('WDD'));
document.getElementById('btn-cse').addEventListener('click', () => renderCourses('CSE'));

function renderCourses(filter) {
  let filteredCourses = courses;

  if (filter !== 'all') {
    filteredCourses = courses.filter(course => course.subject === filter);
  }

  coursesContainer.innerHTML = '';

  filteredCourses.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('course-card');
    if (course.completed) {
      card.classList.add('completed');
    }

    card.innerHTML = `
      <h3>${course.subject} ${course.number}</h3>
      <p>${course.completed ? 'Completed' : 'In Progress'}</p>
    `;

    coursesContainer.appendChild(card);
  });

  const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  totalCreditsElem.textContent = `The total Number of Credits listed below is: ${totalCredits}`;
}

renderCourses('all');




