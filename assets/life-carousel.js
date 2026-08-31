(function() {
  let currentIndex = 0;

  function loadEventsFromJson() {
    const jsonTag = document.getElementById('life-in-weeks-events-json');
    if (!jsonTag) return [];

    try {
      return JSON.parse(jsonTag.textContent.trim());
    } catch (e) {
      return [];
    }
  }

  function getWeekNumberSinceBirth(eventDateStr) {
    const container = document.getElementById('life-carousel-container');
    const startDateStr = container ? container.getAttribute('data-start-date') : null;
    if (!startDateStr) return '?';

    const start = new Date(startDateStr);
    const eventDate = new Date(eventDateStr);
    if (isNaN(start) || isNaN(eventDate)) return '?';

    return Math.floor((eventDate - start) / (1000 * 60 * 60 * 24 * 7)) + 1;
  }

  function updateCarousel(events) {
    const quote = document.getElementById('life-carousel-quote');
    const meta = document.getElementById('life-carousel-meta');
    if (!quote || !meta) return;

    document.querySelectorAll('.week.carousel-pulse').forEach(function(el) {
      el.classList.remove('carousel-pulse');
    });

    if (!events.length) {
      quote.textContent = 'No events to display.';
      meta.textContent = '';
      return;
    }

    if (currentIndex >= events.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = events.length - 1;

    const event = events[currentIndex];
    const weekNum = getWeekNumberSinceBirth(event.date);
    const weekDiv = document.querySelector('.week[data-week-number="' + (weekNum - 1) + '"]');
    if (weekDiv) weekDiv.classList.add('carousel-pulse');

    quote.innerHTML = '<span class="carousel-weeknum">Week ' + weekNum + '</span>: ' + event.name;
    meta.textContent = event.desc || event.date;
  }

  function setupCarousel() {
    const events = loadEventsFromJson();
    const up = document.getElementById('life-carousel-up');
    const down = document.getElementById('life-carousel-down');
    if (!up || !down) return;

    up.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + events.length) % events.length;
      updateCarousel(events);
    });

    down.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % events.length;
      updateCarousel(events);
    });

    updateCarousel(events);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupCarousel);
  } else {
    setupCarousel();
  }
})();
