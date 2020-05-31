const SKY = document.querySelector('a-sky');
const SCENE = document.querySelector('a-scene');
const NEXT_ROOM = 'next-room';

import { APARTMENT_1 } from './assets-config';

AFRAME.registerComponent('next-room', {
  schema: {
    next: {type: 'string'}
  },
  init: function () {
    this.listener = onArrowClick.bind(this);
    this.el.addEventListener('click', this.listener);
  },
  remove() {
    this.el.removeEventListener('click', this.listener);
  },
});


function onArrowClick() {
  const { data } = this;

  const nextRoom = APARTMENT_1.rooms.find(({name}) => name === data.next);

  setUpRoom(nextRoom);
}

function buildApartment(app) {
  const initialRoom = app.rooms[0];

  setUpRoom(initialRoom);
}

function setUpRoom(room) {
  document.querySelectorAll('[next-room]').forEach(el => el.remove());
  SKY.setAttribute('src', room.url);

  room.arrows.forEach(arrowConfig => {
    SCENE.appendChild(buildArrow(arrowConfig));
  })
}

function buildArrow(config) {
  const aImage = document.createElement('a-image');
  Object.entries(config.attr).forEach(([key, val]) => {
    aImage.setAttribute(key, val);
  })

  const dataString = Object.entries(config.data).reduce((acc, [key, val]) => {
    return acc + `${key}: ${val};`;
  }, '')

  aImage.setAttribute(NEXT_ROOM, dataString);
  return aImage;
}

buildApartment(APARTMENT_1);
