document.addEventListener('DOMContentLoaded', () => {
	const showMoreButton = document.getElementById('show-more-dishes');
	const modal = document.getElementById('dish-modal');
	const closeButton = document.querySelector('.close-button');
	const dishList = document.getElementById('dish-list');
	const searchInput = document.getElementById('search-dish');

	const dishes = [
		'Борщ', 'Пельмени', 'Шашлык', 'Салат оливье', 'Блинчики',
		'Суши', 'Пицца', 'Стейк', 'Паста', 'Ризотто',
		'Чизкейк', 'Торт Наполеон', 'Бургер', 'Котлета по-киевски',
		'Солянка', 'Печеная картошка', 'Крабовые палочки',
		'Фасолевый салат', 'Гречка с грибами', 'Рыбные палочки',
		'Капустный салат', 'Творожная запеканка', 'Тушеная капуста',
		'Куриный суп', 'Лазанья', 'Шакшука', 'Тарталетки', 'Крем-брюле',
		'Морозиво', 'Пончик', 'Круассан', 'Мафин', 'Пирожок с яблоками',
		'Чебурек', 'Сырники', 'Капкейк', 'Пирог с вишней', 'Фрукты',
		'Салат Цезарь', 'Греческий салат', 'Капустный салат', 'Свекольный салат',
		'Паста с соусом', 'Курица терияки', 'Мидии', 'Фаршированные перцы',
		'Фунчоза', 'Том Ям', 'Гуляш', 'Курица по-итальянски', 'Лосось на гриле',
		'Творожный сыр', 'Омлет', 'Панна котта', 'Медовик', 'Тирамису',
		'Песочное тесто', 'Брауни', 'Пирожные эклер'
	];

	showMoreButton.addEventListener('click', () => {
		modal.style.display = 'block'; // Показываем модальное окно
		dishList.innerHTML = ''; // Очищаем предыдущий список

		dishes.forEach(dish => {
			const listItem = document.createElement('div');
			listItem.className = 'dish-item';

			const checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.className = 'dish-checkbox';

			const label = document.createElement('span');
			label.textContent = dish;

			listItem.appendChild(checkbox);
			listItem.appendChild(label);
			dishList.appendChild(listItem);

			// Обработчик клика на элемент
			listItem.addEventListener('click', () => {
				checkbox.checked = !checkbox.checked; // Переключаем состояние чекбокса
				listItem.classList.toggle('checked', checkbox.checked); // Меняем класс, если чекбокс отмечен
			});

			// Обработчик клика на чекбокс
			checkbox.addEventListener('click', (event) => {
				event.stopPropagation(); // Предотвращаем всплытие события
				checkbox.checked = !checkbox.checked; // Переключаем состояние чекбокса
				listItem.classList.toggle('checked', checkbox.checked); // Меняем класс, если чекбокс отмечен
			});
		});
	});

	searchInput.addEventListener('input', () => {
		const query = searchInput.value.toLowerCase();
		const items = dishList.getElementsByTagName('div');

		Array.from(items).forEach(item => {
			const dishName = item.textContent.toLowerCase();
			if (dishName.startsWith(query) || query === '') {
				item.style.display = ''; // Показываем элемент, если первая буква совпадает
			} else {
				item.style.display = 'none'; // Скрываем элемент, если первая буква не совпадает
			}
		});
	});

	closeButton.addEventListener('click', () => {
		modal.style.display = 'none'; // Закрываем модальное окно
	});

	window.addEventListener('click', (event) => {
		if (event.target === modal) {
			modal.style.display = 'none'; // Закрываем, если кликнули вне модального окна
		}
	});
});
function toggleDropdown(arrow) {
	const filterList = arrow.parentElement.nextElementSibling; // Находим соответствующий список
	if (filterList.style.display === "none" || filterList.style.display === "") {
		filterList.style.display = "block"; // Показываем список
		arrow.textContent = "▲"; // Меняем стрелочку на вверх
	} else {
		filterList.style.display = "none"; // Скрываем список
		arrow.textContent = "▼"; // Меняем стрелочку на вниз
	}
}
