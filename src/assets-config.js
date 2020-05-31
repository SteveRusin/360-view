const ROOM_1 = {
    name: 'room_1',
    url: './img/view_1.jpeg',
    arrows: [
      {
        attr: {
          position: '0 0 10',
          rotation: "0 0 90",
          src: "#arrow-right",
          width: "5",
          height: "5",
        },
        data: {
          next: 'room_2',
        }
      },
      {
        attr: {
          position: '15 0.25 10',
          rotation: "0 0 90",
          src: "#arrow-right",
          width: "5",
          height: "5",
        },
        data: {
          next: 'room_2',
        }
      }
    ]
}
const ROOM_2 = {
    name: 'room_2',
    url: './img/view_2.jpeg',
    arrows: [
      {
        attr: {
          position: '1 5 5',
          rotation: "0 0 90",
          src: "#arrow-right",
          width: "5",
          height: "5",
        },
        data: {
          next: 'room_1',
        }
      },
    ]
}

export const APARTMENT_1 = {
  name: 'APARTMENT_1',
  rooms: [
    ROOM_1,
    ROOM_2
  ]
};
