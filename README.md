# Вениамин Ли — сайт-визитка

Личная страница Вениамина Ли: управленец с 14-летним опытом в образовании, сервисе и гостеприимстве. Россия (администрация Охотского района) → Тель-Авив (Crowne Plaza, Shefa Teamim, Bishulon — The Cooking Studio) → Нячанг.

**Сайт:** https://veniamin-li.pages.dev/

## Стек

Чистый ванильный HTML, CSS и JavaScript — без фреймворков, сборщиков и зависимостей.

- `index.html` — разметка и контент (RU по умолчанию)
- `styles.css` — стили, тёмная тема «ember in an obsidian void» в духе Cron Calendar: near-black канва, единственный оранжевый акцент #ff4700, Helvetica Neue, острые карточки, hairline-границы (токены в `:root`)
- `main.js` — переключатель языка RU/EN (сохраняется в localStorage), scroll-reveal и scrollspy на IntersectionObserver
- `assets/` — фото, favicon, PDF-версия CV

## Как внести правки

1. Отредактируйте `index.html` (русский текст — прямо в разметке, английские переводы — в словаре `I18N` в `main.js`)
2. Закоммитьте и запушьте в `main`
3. Опубликуйте обновление: `wrangler pages deploy . --project-name=veniamin-li` — сайт обновится почти сразу

## Лицензия

MIT — код шаблона можно свободно переиспользовать. Контент страницы (текст, фото) принадлежит Вениамину Ли.