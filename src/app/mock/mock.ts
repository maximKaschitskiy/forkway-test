import {PageType} from '../types';

const pages: PageType[] = [
    { id: 1, title: 'Главная', parent_id: null },
    { id: 2, title: 'O нас', parent_id: 7 },
    { id: 3, title: 'Контакты', parent_id: 9 },
    { id: 4, title: 'Телефоны', parent_id: null },
    { id: 5, title: 'Услуги', parent_id: 10 },
    { id: 6, title: 'Новости', parent_id: 4 },
    { id: 7, title: 'Портфолио', parent_id: 2 },
    { id: 8, title: 'Цены', parent_id: 11 },
    { id: 9, title: 'FAQ', parent_id: 15 },
    { id: 10, title: 'Отзывы', parent_id: 13 },
    { id: 11, title: 'Карта сайта', parent_id: null },
    { id: 12, title: 'Блог', parent_id: 14 },
    { id: 13, title: 'Партнеры', parent_id: 6 },
    { id: 14, title: 'Акции', parent_id: null },
    { id: 15, title: 'Галерея', parent_id: 3 },
    { id: 16, title: 'Вакансии', parent_id: 8 },
    { id: 17, title: 'Сертификаты', parent_id: 5 },
    { id: 18, title: 'Сотрудники', parent_id: 12 },
    { id: 19, title: 'Политика конфиденциальности скачать бесплатно без смс', parent_id: 1 },
    { id: 20, title: 'Ссылки', parent_id: null },
  ];

export {pages}