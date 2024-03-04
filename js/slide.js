const sliderContainer = document.getElementById('slider-container');
const slider = document.getElementById('slider');
const sliderElements = document.querySelectorAll('.slider__element');
const rootStyles = document.documentElement.style;
let slideCounter = 0;
let isInTransition = false;
let autoPlayInterval;

const DIRECTION = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT'
};

const getTransformValue = () =>
  Number(rootStyles.getPropertyValue('--slide-transform').replace('px', ''));

const reorderSlide = () => {
  const transformValue = getTransformValue();
  rootStyles.setProperty('--transition', 'none');
  if (slideCounter === sliderElements.length - 1) {
    slider.appendChild(slider.firstElementChild);
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue + sliderElements[slideCounter].scrollWidth}px`
    );
    slideCounter--;
  } else if (slideCounter === 0) {
    slider.prepend(slider.lastElementChild);
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue - sliderElements[slideCounter].scrollWidth}px`
    );
    slideCounter++;
  }

  isInTransition = false;
};

const moveSlide = direction => {
  if (isInTransition) return;
  const transformValue = getTransformValue();
  rootStyles.setProperty('--transition', 'transform 4s');
  isInTransition = true;
  if (direction === DIRECTION.LEFT) {
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue + sliderElements[slideCounter].scrollWidth}px`
    );
    slideCounter--;
  } else if (direction === DIRECTION.RIGHT) {
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue - sliderElements[slideCounter].scrollWidth}px`
    );
    slideCounter++;
  }
};

slider.addEventListener('transitionend', reorderSlide);

// Función para iniciar la reproducción automática con una velocidad más lenta
const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    moveSlide(DIRECTION.RIGHT);
  }, 3000); // Cambiar slide cada 3 segundos (por ejemplo)
};

// Función para detener la reproducción automática
const stopAutoPlay = () => {
  clearInterval(autoPlayInterval);
};

// Iniciar la reproducción automática al cargar la página
startAutoPlay();

// Detener la reproducción automática cuando el cursor entra en el slider
sliderContainer.addEventListener('mouseenter', stopAutoPlay);

// Reanudar la reproducción automática cuando el cursor sale del slider
sliderContainer.addEventListener('mouseleave', startAutoPlay);

// Llamar a reorderSlide una vez al principio para asegurarse de que las diapositivas estén en el orden correcto inicialmente.
reorderSlide();