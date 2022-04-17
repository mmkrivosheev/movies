Приложение movies позволяет просматривать подробную информацию о фильмах полученных с веб-сервиса OMDb API.<br>
Ссылка на GitHub Pages: https://mmkrivosheev.github.io/movies

КАКИЕ ТЕХНОЛОГИИ ПРИМЕНИЛ?<br>
&#x2022; Приложение написано на React (на функциональных компонентах с использованием хуков useState, useEffect, useContext). В ближайшее время перепишу на Redux.<br>
&#x2022; React Router DOM для маршрутизации (использовал хуки useHistory, useParams).<br>
&#x2022; Axios для доступа к API.<br>
&#x2022; Отзывчивая верстка (использовал Flex, медиа-запросы на CSS, медиа-запросы на JavaScript).<br>

ОПИСАНИЕ<br>
При входе в приложение пользователь попадает на страницу авторизации. Для неавторизованных пользователей доступна только одна ссылка "О сайте" и кнопка "Логин". На данный момент авторизация в разработке, поэтому для входа необходимо просто нажать кнопку "Войти".

Далее авторизованный пользователь попадает на главную страницу со списком фильмов (ждем пока загрузится). Вверху страницы становятся доступными уже две ссылки "О сайте" и "Фильмы" а также кнопка "Выйти", при нажатии которой происходит выход из системы.  Для каждого фильма из списка выводится постер, название и год выпуска. Количество подгружаемых на страницу фильмов можно выбрать в выпадающем списке. Внизу страницы расположена панель с постраничной навигацией.

При клике на постер или название фильма из списка попадаем в раздел с полным описанием фильма. В этом разделе при клике на постер открывается модальное окно с отображением его в большем масштабе. Закрыть модальное окно можно кликнув по затемненной области либо Х. При нажатии кнопки "Назад" возвращаемся на главную страницу.
