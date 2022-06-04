const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'title1',
    description: 'fhjdskfuenhfuhfsdhf,fsdj ,f sdife fjef fdksf ',
    location: 'aaaaaa aaa aa',
    date: '2022-06-12',
    image: 'images/1.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'title2',
    description: '设院区党建恨死堪当俯冲反动哈,fsdj ,f sdife fjef fdksf ',
    location: 'aahfjsdfskj, fjsdkfjslk, fhjs',
    date: '2021-07-12',
    image: 'images/2.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'title3',
    description: 'fyuefjd警方赛发送开发森汉塞很晚, fsdj ,f sdife fjef fdksf ',
    location: 'aaaaaa, aaa aa',
    date: '2022-05-12',
    image: 'images/3.jpg',
    isFeatured: true,
  },
  {
    id: 'e4',
    title: 'title4',
    description: '分散扥宏观哦,fsdj ,f sdife fjef fdksf ',
    location: 'aaaaa, aaa aa',
    date: '2021-09-12',
    image: 'images/4.jpg',
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter(e => e.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(data) {
  const { year, month } = data;

  let filterEvents = DUMMY_EVENTS.filter(e => {
    const eventDate = new Date(e.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  })
  return filterEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find(e => e.id === id)
}