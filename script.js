import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

const emblaNode = document.querySelector('.embla');
const options = { loop: false };
// const plugins = [Autoplay({ delay: 5000 })];
const plugins = [EmblaCarouselAutoplay()]
const viewportNode = emblaNode.querySelector('.embla__viewport');
const emblaApi = EmblaCarousel(viewportNode, emblaNode, options, plugins);


emblaApi.on('init', () => {
    console.log('Embla Carousel initialized');
});

emblaApi.on('slideChange', () => {
    console.log('Slide changed');
});

const prevButton = emblaNode.querySelector('.embla__prev');
const nextButton = emblaNode.querySelector('.embla__next');

// Initialize the carousel
const embla = EmblaCarousel(viewportNode)

// Add click listeners
prevButtonNode.addEventListener('click', embla.scrollPrev, false)
nextButtonNode.addEventListener('click', embla.scrollNext, false)

console.log("Hello Ian");