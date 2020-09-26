Таблица / база данных, представляющая информацию о пользователях, подгружаемую с сервера.

### `Стек`
Написано на React с использованием микса библиотеки [react-table](https://github.com/tannerlinsley/react-table) и [Material-UI](https://material-ui.com/).

### `Функционал`

- Приложение предлагает на выбор два варианта загрузки данных с сервера: 32 элемента либо 1000 элементов. 
- Представляет собой таблицу с персональной информацией пользователей. 
- Реализована возможность добавления и удаления строк с информацией о пользователях. 
- Информацию в ячейках можно редактировать.
- Реализована пагинация с возможностью выбора вариантов количества отображаемых строк
- Реализованы поиск и фильтрация по базе данных
- Данные подгружаются из json-файлов http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32} (32 элемента) и http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32} (1000 элементов)
