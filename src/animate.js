import anime from 'animejs';

export function mounted_ring(element, index) {
    anime({
        targets: element,
        delay: 500*index,
        scale: [0, 1],
        easing: 'easeInOutQuint'
    }).play()
}

export function mounted_card(element, ring_index, card_index) {
}