// ---------- Тестовые данные ----------

const REGIONS = ['Екатеринбург', 'Челябинск', 'Санкт-Петербург', 'Тюмень', 'Нижний Тагил'];

let state = {
  mode: 'console', // 'console' — кабинет управления (ноутбук/десктоп); 'preview' — демо-просмотр телефонных экранов
  section: 'analytics', // текущий раздел левого меню кабинета управления
  previewRole: 'operator', // какая роль показана в демо-просмотре телефона
  editingTemplateId: null,
  adminAnalyticsType: 'Все',
  adminAnalyticsRegion: 'Все',
  adminAnalyticsPoint: 'Все',
  adminAnalyticsManager: 'Все',
  adminAnalyticsFrom: null, // произвольный период для тренда: дата "с" (null = не ограничено)
  adminAnalyticsTo: null,   // произвольный период для тренда: дата "по" (null = не ограничено)
  pointTypes: ['Конвейер', 'Робот', 'МСО'],
  points: [
    {id:1, name:'Конвейер на Восточной', type:'Конвейер', region:'Екатеринбург', status:'действующая', score:88},
    {id:2, name:'Конвейер на Таганской', type:'Конвейер', region:'Екатеринбург', status:'действующая', score:71},
    {id:3, name:'Конвейер на Бебеля-Халтурина', type:'Конвейер', region:'Екатеринбург', status:'действующая', score:94},
    {id:4, name:'Конвейер на Артиллерийской', type:'Конвейер', region:'Челябинск', status:'действующая', score:82},
    {id:5, name:'Конвейер на Мельникайте', type:'Конвейер', region:'Тюмень', status:'действующая', score:90},
    {id:6, name:'Конвейер на Ефимова', type:'Конвейер', region:'Санкт-Петербург', status:'действующая', score:76},
    {id:7, name:'Робот на Базовом', type:'Робот', region:'Екатеринбург', status:'действующая', score:85},
    {id:8, name:'Робот в Радуге №1', type:'Робот', region:'Екатеринбург', status:'действующая', score:93},
    {id:9, name:'Робот в Радуге №2', type:'Робот', region:'Екатеринбург', status:'действующая', score:68},
    {id:10, name:'Робот на Героев Танкограда', type:'Робот', region:'Челябинск', status:'действующая', score:79},
    {id:11, name:'Робот на Рощинской', type:'Робот', region:'Санкт-Петербург', status:'действующая', score:87},
    {id:12, name:'Робот на Свердловском проспекте №2', type:'Робот', region:'Челябинск', status:'действующая', score:61},
    {id:13, name:'Робот на Свердловском проспекте №1', type:'Робот', region:'Челябинск', status:'действующая', score:74},
    {id:14, name:'Робот на Победы', type:'Робот', region:'Челябинск', status:'действующая', score:90},
    {id:15, name:'МСО Ловина', type:'МСО', posts:6, region:'Челябинск', status:'действующая', score:58},
    {id:16, name:'МСО Дарвина', type:'МСО', posts:8, region:'Челябинск', status:'действующая', score:96},
    {id:17, name:'МСО Победы', type:'МСО', posts:5, region:'Челябинск', status:'действующая', score:83},
    {id:18, name:'МСО Академический', type:'МСО', posts:9, region:'Екатеринбург', status:'действующая', score:91},
    {id:19, name:'МСО БХ 2', type:'МСО', posts:4, region:'Екатеринбург', status:'действующая', score:77},
    {id:20, name:'МСО Солнечный', type:'МСО', posts:7, region:'Екатеринбург', status:'действующая', score:81},
    {id:21, name:'МСО Восточная', type:'МСО', posts:6, region:'Екатеринбург', status:'действующая', score:84},
    {id:22, name:'МСО Московская', type:'МСО', posts:9, region:'Екатеринбург', status:'действующая', score:95},
    {id:23, name:'МСО Цинковая', type:'МСО', posts:4, region:'Челябинск', status:'действующая', score:69},
    {id:24, name:'МСО Радуга Парк', type:'МСО', posts:8, region:'Екатеринбург', status:'действующая', score:92},
    {id:25, name:'МСО Умельцев', type:'МСО', posts:5, region:'Екатеринбург', status:'действующая', score:80},
    {id:26, name:'МСО Фронтовых Бригад', type:'МСО', posts:6, region:'Екатеринбург', status:'действующая', score:73},
    {id:27, name:'МСО Верхняя Пышма', type:'МСО', posts:7, region:'Екатеринбург', status:'действующая', score:88},
    {id:28, name:'МСО Вилонова', type:'МСО', posts:9, region:'Екатеринбург', status:'действующая', score:97},
    {id:29, name:'МСО Водительский', type:'МСО', posts:4, region:'Екатеринбург', status:'действующая', score:86},
    {id:30, name:'МСО Лейка', type:'МСО', posts:5, region:'Нижний Тагил', status:'действующая', score:65}
  ],
  templates: [
    {id:1, name:'Ежедневный чек-лист сотрудника МСО', type:'Плановая', pointType:'МСО', role:'Оператор', schedule:{freq:'daily', time:'08:00'},
      multiPost:true,
      // импортировано из действующего сервиса чек-листов (реальный ежедневный чек-лист сотрудника МСО).
      // Разделы «Чистота постов» и «Контроль работоспособности оборудования» относятся к каждому посту точки —
      // отсюда perPostItems. Остальные разделы («Обязанности сотрудников», «Здание», «Пылесос»,
      // «Прилегающая территория», «Касса») проверяются один раз на точку — siteItems.
      // Раздел «Сотрудник» (подпись ФИО, вес 0) в чек-лист не включён — это не критерий проверки, а подпись/аттестация.
      perPostItems:[
        // --- Чистота постов ---
        {text:'Чистота пола (моем сгонами, АВД)', critical:false, photo:false},
        {text:'Чистота стёкол и рам, стен, баннеров (убираем налёт, металлические элементы натираем силиконом)', critical:false, photo:false},
        {text:'Колчаны под АВД и активную пену (моем АВД, убираем налёт, натираем силиконом)', critical:false, photo:false},
        {text:'Пульты (протираем без АВД, убираем налёт, натираем силиконом; стекло только протираем, налёт не допускается)', critical:false, photo:true},
        {text:'Кнопки пультов — целостность колпачков', critical:true, photo:false},
        {text:'Листы и прищепки для крепления ковриков — чистота и работоспособность (если не закреплены/не работают — сообщить технику и в группу WhatsApp МСО)', critical:true, photo:false},
        {text:'Чистота шлангов АВД, активной пены и воздушных шлангов', critical:false, photo:false},
        {text:'Лампы освещения — чистота и работоспособность (если лампа не работает — сообщить технику и в группу WhatsApp МСО)', critical:true, photo:false},
        {text:'Камеры — чистота и работоспособность (если камера не работает — сообщить технику и в группу WhatsApp МСО)', critical:true, photo:false},
        {text:'Мусорные баки (моем, натираем силиконом, убираем излишки; ручки сухие на ощупь; мусор своевременно вынесен в большой бак)', critical:false, photo:false},
        // --- Контроль работоспособности оборудования (при неисправности — сообщить технику и в группу WhatsApp) ---
        {text:'АВД работает исправно', critical:true, photo:false},
        {text:'Форсунки — исправность и проточка', critical:true, photo:false},
        {text:'Пистолеты — исправность', critical:true, photo:false},
        {text:'Купюроприёмники — исправность', critical:true, photo:false},
        {text:'Монетоприёмники — исправность', critical:true, photo:false},
        {text:'Безналичная оплата — работает', critical:true, photo:false},
        {text:'Наличие воды в накопительных ёмкостях', critical:true, photo:false}
      ],
      siteItems:[
        // --- Обязанности сотрудников ---
        {text:'Работа с клиентами (объяснение работы МСО, помощь по размену денег, разрешение конфликтных ситуаций и пр.); сбор обратной связи от клиентов — что нравится, а что нет', critical:false, photo:false},
        // --- Здание ---
        {text:'Внешний вид: чистота фасада, двери, удалены наклейки и следы клея', critical:false, photo:false},
        {text:'Клиентская зона всегда чистая (это ваша визитка)', critical:false, photo:false},
        {text:'Порядок внутри: всё разобрано и на своих местах; место приёма пищи и бытовая техника — чистые', critical:false, photo:false},
        {text:'Тех. помещение — чистый пол и стены', critical:false, photo:false},
        {text:'Тех. помещение — чистота стойки АВД', critical:false, photo:false},
        {text:'Тех. помещение — чистота и организация места хранения химии', critical:false, photo:true},
        // --- Пылесос ---
        {text:'Пылесос: корпус протёрт от грязи, наклейки целы', critical:false, photo:false},
        {text:'Пылесос: промыты шланги, корзины и баки; пропылесосено внутри ящика (день мойки пылесоса — вторник)', critical:false, photo:false},
        // --- Прилегающая территория ---
        {text:'Прилегающая территория: летом выметена, трава скошена, поребрики покрашены, разметка нанесена; зимой снег вычищен', critical:false, photo:false},
        // --- Касса ---
        {text:'Касса в рабочем состоянии', critical:true, photo:false}
      ]
    },
    {id:2, name:'Еженедельный чек-лист управляющего', type:'Плановая', pointType:'МСО', role:'Управляющий', schedule:{freq:'weekly', label:'еженедельно'}, items:[
      {text:'Портальная установка / оборудование без протечек и поломок', critical:true, photo:true},
      {text:'Чистота по всем постам соответствует стандарту', critical:false, photo:false},
      {text:'Датчики уровня химии в норме', critical:true, photo:false},
      {text:'Прилегающая территория и зона ожидания в порядке', critical:false, photo:true}
    ]},
    {id:3, name:'Гостевая проверка', type:'Тайный покупатель', items:[
      {text:'Встретили и предложили услугу в течение 1 минуты', critical:false},
      {text:'Сотрудник предложил доп.услуги (полировка, химчистка)', critical:false},
      {text:'Итоговое качество мойки соответствует ожиданиям', critical:true, photo:true},
      {text:'Оплата прошла без проблем', critical:false}
    ]},
    // импортировано из реального чек-листа «Тайный агент AQUAGIZER» для конвейерных моек.
    // Часть исходных пунктов не переносится 1:1, т.к. наша модель поддерживает только простые
    // критерии да/нет (+критично/фото), без взвешенных разделов, многовариантных ответов,
    // числовых полей, шкал 1–5 и информационных экранов — см. пояснение в чате.
    {id:4, name:'Тайный агент — Конвейерная мойка', type:'Тайный покупатель', pointType:'Конвейер', items:[
      // --- Расположение, прилегающая территория ---
      {text:'Мойку легко найти с дороги (понятные указатели, вывески, логичный подъезд)', critical:false, photo:false},
      {text:'Прилегающая территория чистая, без мусора и грязи (зимой — расчищена и обработана противогололёдными средствами)', critical:false, photo:true},
      {text:'Подъезд к мойке удобный, ничего не мешает (нет столбов/транспорта, перекрывающего дорогу)', critical:false, photo:true},
      {text:'Освещение вокруг мойки в тёмное время суток достаточное', critical:false, photo:false},
      {text:'Касса/терминал оплаты расположены в логичном, хорошо просматриваемом месте', critical:false, photo:false},
      {text:'Прайс-лист виден, читаем, понятен, расположен логично', critical:false, photo:false},
      // --- Работа сотрудников: администратор ---
      {text:'Администратор поздоровался первым и инициировал общение', critical:false, photo:false},
      {text:'Внешний вид администратора опрятный (одежда, обувь, причёска)', critical:false, photo:false},
      {text:'Администратор приветлив и доброжелателен с первой фразы диалога', critical:false, photo:false},
      {text:'Администратор вежлив и дружелюбен, без фамильярности и грубости, отвечает по делу', critical:false, photo:false},
      {text:'Администратор компетентен: объяснил разницу программ мойки и порекомендовал доп.услугу', critical:true, photo:false},
      {text:'Администратор сам уточнил участие в программе лояльности, рассказал об условиях и предложил списать бонусы', critical:false, photo:false},
      {text:'Администратор уточнил знакомство с правилами конвейерной мойки и рассказал основные правила', critical:false, photo:false},
      // --- Работа сотрудников: мойщики ---
      {text:'Мойщики встретили автомобиль в разумный срок после оплаты (не более 5 минут ожидания)', critical:false, photo:false},
      {text:'Внешний вид мойщика опрятный, без посторонних запахов', critical:false, photo:false},
      {text:'Мойщик одет по корпоративной форме AQUAGIZER (куртка/штаны с логотипом, в чистом состоянии)', critical:false, photo:true},
      {text:'Мойщики чётко скоординировали въезд на конвейер (сказали, когда включить нейтральную передачу), не повышали голос', critical:true, photo:false},
      // --- Мойка ---
      {text:'Въезд на мойку без ям и наледи', critical:true, photo:false},
      {text:'Пена на арке пенной лавы наносится равномерно, в достаточном количестве', critical:false, photo:true},
      {text:'Проекция фирменного осьминога на стекле чёткая и яркая', critical:false, photo:true},
      {text:'Кузов автомобиля отмыт полностью — нет непромытых участков и остатков пены', critical:true, photo:true},
      {text:'Автомобиль качественно высушен — без потёков и капель', critical:true, photo:true},
      {text:'В процессе мойки нет постороннего запаха (канализация/сырость), ощущения комфортные', critical:false, photo:false},
      {text:'Выезд с мойки логичный и понятный, места достаточно', critical:false, photo:false},
      {text:'Светофор на выезде исправен, корректно показывает обратный отсчёт и разрешающую стрелку', critical:true, photo:false},
      // --- Фотофиксация ---
      {text:'Приложено фото автомобиля ДО мойки', critical:false, photo:true},
      {text:'Приложено фото автомобиля ПОСЛЕ мойки (на территории AQUAGIZER, после выезда из бокса)', critical:false, photo:true},
      {text:'Приложено фото кассового чека', critical:false, photo:true}
    ]}
  ],
  inspections: [
    {id:1, pointId:15, templateId:1, kind:'Плановая', date:'2026-07-06', score:58, inspector:'Оператор Иванов'},
    {id:2, pointId:12, templateId:2, kind:'Плановая', date:'2026-07-05', score:60, inspector:'Управляющий Смирнова'},
    {id:3, pointId:3, templateId:1, kind:'Плановая', date:'2026-07-04', score:100, inspector:'Оператор Петров'},
    {id:4, pointId:6, templateId:3, kind:'Тайный покупатель', date:'2026-07-03', score:90, inspector:'Гость #4471'},
    {id:5, pointId:9, templateId:1, kind:'Плановая', date:'2026-07-02', score:85, inspector:'Оператор Козлова'},
    // доп. история для демонстрации тренда по последним проверкам (раздел аналитики)
    {id:6, pointId:3, templateId:1, kind:'Плановая', date:'2026-06-17', score:72, inspector:'Оператор Петров'},
    {id:7, pointId:3, templateId:1, kind:'Плановая', date:'2026-06-24', score:78, inspector:'Оператор Петров'},
    {id:8, pointId:3, templateId:1, kind:'Плановая', date:'2026-07-01', score:85, inspector:'Оператор Петров'},
    {id:9, pointId:6, templateId:1, kind:'Плановая', date:'2026-06-16', score:92, inspector:'Оператор Белова'},
    {id:10, pointId:6, templateId:1, kind:'Плановая', date:'2026-06-23', score:88, inspector:'Оператор Белова'},
    {id:11, pointId:6, templateId:1, kind:'Плановая', date:'2026-06-30', score:80, inspector:'Оператор Белова'},
    {id:12, pointId:6, templateId:1, kind:'Плановая', date:'2026-07-05', score:76, inspector:'Оператор Белова'},
    {id:13, pointId:9, templateId:1, kind:'Плановая', date:'2026-06-15', score:70, inspector:'Оператор Козлова'},
    {id:14, pointId:9, templateId:1, kind:'Плановая', date:'2026-06-22', score:78, inspector:'Оператор Козлова'},
    {id:15, pointId:9, templateId:1, kind:'Плановая', date:'2026-06-29', score:82, inspector:'Оператор Козлова'},
    {id:16, pointId:14, templateId:1, kind:'Плановая', date:'2026-06-14', score:70, inspector:'Оператор Титов'},
    {id:17, pointId:14, templateId:1, kind:'Плановая', date:'2026-06-21', score:78, inspector:'Оператор Титов'},
    {id:18, pointId:14, templateId:1, kind:'Плановая', date:'2026-06-28', score:85, inspector:'Оператор Титов'},
    {id:19, pointId:14, templateId:1, kind:'Плановая', date:'2026-07-05', score:90, inspector:'Оператор Титов'},
    {id:20, pointId:15, templateId:1, kind:'Плановая', date:'2026-06-15', score:80, inspector:'Оператор Иванов'},
    {id:21, pointId:15, templateId:1, kind:'Плановая', date:'2026-06-22', score:70, inspector:'Оператор Иванов'},
    {id:22, pointId:15, templateId:1, kind:'Плановая', date:'2026-06-29', score:63, inspector:'Оператор Иванов'},
    {id:23, pointId:28, templateId:1, kind:'Плановая', date:'2026-06-16', score:93, inspector:'Оператор Волкова'},
    {id:24, pointId:28, templateId:1, kind:'Плановая', date:'2026-06-23', score:95, inspector:'Оператор Волкова'},
    {id:25, pointId:28, templateId:1, kind:'Плановая', date:'2026-06-30', score:96, inspector:'Оператор Волкова'},
    {id:26, pointId:28, templateId:1, kind:'Плановая', date:'2026-07-06', score:97, inspector:'Оператор Волкова'}
  ],
  violations: [
    {id:1, pointId:15, item:'Касса и терминал оплаты работают', critical:true, status:'просрочено', assignee:'Оператор Иванов', deadline:'2026-07-05'},
    {id:2, pointId:12, item:'Датчики уровня химии в норме', critical:true, status:'в работе', assignee:'Оператор Смирнова', deadline:'2026-07-09'},
    {id:3, pointId:9, item:'Зона ожидания клиентов чистая', critical:false, status:'новое', assignee:'—', deadline:'—'},
    {id:4, pointId:7, item:'Пылесосы исправны', critical:false, status:'устранено', assignee:'Оператор Петров', deadline:'2026-07-03'}
  ],
  users: [
    {id:1, name:'Иванов И.И.', role:'Оператор', point:'МСО Ловина', perms:{createChecklists:false, assignInspections:false, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    // у управляющих — портфель точек (pointIds), а не одна точка: у каждого могут быть объекты разных типов
    {id:2, name:'Соколова А.П.', role:'Управляющий', pointIds:[15,16,17,23,10,4], perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    // у терр. директора — подчинённые управляющие (directorManagerIds), а не город: его зона ответственности = объекты его управляющих
    {id:3, name:'Мартынов Д.С.', role:'Терр. директор', directorManagerIds:[2,5], perms:{createChecklists:true, assignInspections:true, deleteInspections:true, viewInspections:true, addPoints:true, addUsers:true}},
    {id:5, name:'Крылова О.И.', role:'Управляющий', pointIds:[12,13,14], perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:6, name:'Гаврилов К.С.', role:'Управляющий', pointIds:[1,2,3,7,8], perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:7, name:'Егорова Н.В.', role:'Управляющий', pointIds:[9,18,19,20,21], perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:8, name:'Панов Р.А.', role:'Управляющий', pointIds:[22,24,25,26], perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:9, name:'Дмитриева Е.С.', role:'Управляющий', pointIds:[5,6,11,27,28,29,30], perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    // --- импорт реального списка пользователей из стороннего сервиса (портфели управляющих/директоров ниже намеренно пустые — донастраиваются вручную) ---
    {id:10, name:'Байдина Дарья', email:'dashu-93@mail.ru', role:'Управляющий', pointIds:[], perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:11, name:'МСО Умельцев', email:'ymelcev10@gmail.com', role:'Оператор', point:'МСО Умельцев', perms:{createChecklists:false, assignInspections:false, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:12, name:'Стафеев Сергей Николаевич', email:'stafeevsn@gmail.com', role:'Управляющий', pointIds:[], perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:13, name:'Заболотских Владимир Юрьевич', email:'Wladimirix@mail.ru', role:'Управляющий', pointIds:[], perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:14, name:'Робот на базовом', email:'artem.konovalov2019@bk.ru', role:'Оператор', point:'Робот на Базовом', perms:{createChecklists:false, assignInspections:false, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:15, name:'Вилонова МСО', email:'Lena.trenixina@mail.ru', role:'Оператор', point:'МСО Вилонова', perms:{createChecklists:false, assignInspections:false, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:16, name:'Трубин Данил', email:'marketing@aquagizer.ru', role:'Маркетолог', perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:17, name:'Костецкий Алексей', email:'mr.norton1987@mail.ru', role:'Управляющий', pointIds:[], perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:18, name:'МСО Фронтовых Бригад', email:'aquagizerv5v@gmail.com', role:'Оператор', point:'МСО Фронтовых Бригад', perms:{createChecklists:false, assignInspections:false, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:19, name:'Чазов Артем Всеволодович', email:'Chazov21@yandex.ru', role:'Управляющий', pointIds:[], perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:20, name:'МСО Пышма', email:'verkhnyaya.pyshma@mail.ru', role:'Оператор', point:'МСО Верхняя Пышма', perms:{createChecklists:false, assignInspections:false, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:21, name:'Робот на Рощинской', email:'kr@mail.ru', role:'Оператор', point:'Робот на Рощинской', perms:{createChecklists:false, assignInspections:false, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:22, name:'Кролевец Вячеслав', email:'krolevec.v@mail.ru', role:'Управляющий', pointIds:[], perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:23, name:'Махнёв Юрий', email:'U_mahnev@mail.ru', role:'Управляющий', pointIds:[], perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:24, name:'МСО Радуга', email:'Msoradugapark@gmail.com', role:'Оператор', point:'МСО Радуга Парк', perms:{createChecklists:false, assignInspections:false, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:25, name:'МСО Лейка', email:'trachukfm88@mail.ru', role:'Оператор', point:'МСО Лейка', perms:{createChecklists:false, assignInspections:false, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:26, name:'МСО Водительский проезд', email:'aquagizer2021@gmail.com', role:'Оператор', point:'МСО Водительский', perms:{createChecklists:false, assignInspections:false, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:27, name:'Патрушев Сергей', email:'ser-patrus@yandex.ru', role:'Управляющий', pointIds:[], perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:28, name:'МСО Московская', email:'msomoskovskaa@gmail.com', role:'Оператор', point:'МСО Московская', perms:{createChecklists:false, assignInspections:false, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:29, name:'Бебеля', email:'aquagizer@outlook.com', role:'Оператор', point:'МСО БХ 2', perms:{createChecklists:false, assignInspections:false, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:30, name:'Подгорбунских Алёна Викторовна', email:'Mrs.podgorbunskikh@mail.ru', role:'Управляющий', pointIds:[], perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:31, name:'Вахрушев Анатолий', email:'anatoliy.vakhrushev@gmail.com', role:'Терр. директор', directorManagerIds:[], perms:{createChecklists:true, assignInspections:true, deleteInspections:true, viewInspections:true, addPoints:true, addUsers:true}},
    {id:32, name:'МСО Академическая', email:'Msoacadem@gmail.com', role:'Оператор', point:'МСО Академический', perms:{createChecklists:false, assignInspections:false, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:33, name:'МСО Солнечный', email:'Msosolnecnyi@gmail.com', role:'Оператор', point:'МСО Солнечный', perms:{createChecklists:false, assignInspections:false, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:34, name:'МСО Восточная', email:'vostochnaya5b@gmail.com', role:'Оператор', point:'МСО Восточная', perms:{createChecklists:false, assignInspections:false, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:35, name:'Тренихина Елена Олеговна', email:'Trenykhinalala@gmail.com', role:'Терр. директор', directorManagerIds:[], perms:{createChecklists:true, assignInspections:true, deleteInspections:true, viewInspections:true, addPoints:true, addUsers:true}},
    {id:36, name:'Чернышов Иван Владимирович', email:'chernyshov_ivan90@mail.ru', role:'Управляющий', pointIds:[], perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}},
    {id:37, name:'tagirovna@pskeverest.ru', email:'tagirovna@pskeverest.ru', role:'Аудитор', perms:{createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}}
  ],
  // текущий "рабочий контекст" для демо конкретных ролей
  myPointId: 15,
  operatorTasksDone: [], // {templateId, doneAt}
  demoNow: '09:15', // демо-имитация времени на рабочем телефоне (в реальном продукте — системные часы устройства)
  guestSubmitted: false,
  guestAnswers: {},
  // гостевая проверка (тайный покупатель): шаг 'intake' (выбор объекта + представиться) → 'checklist'
  guestStep: 'intake',
  guestPointId: null,
  guestPointSearch: '',
  guestPointOpen: false,
  guestName: '',
  guestContact: '',
  // подсказки по ранее указанным именам/контактам тайных покупателей — НЕ пользователи системы,
  // просто чтобы не вводить одно и то же заново при повторных визитах: {name, contact}
  knownGuests: [
    {name:'Гость #4471', contact:''}
  ],
  banner: null,
  // раздел «Проверки»
  inspFilterType: 'Все',
  inspFilterRegion: 'Все',
  inspFilterPoint: 'Все',
  inspFilterManager: 'Все',
  inspFilterFrom: null,
  inspFilterTo: null,
  expandedInspectionId: null,
  inspShowOnlyViolations: false,
  // форма добавления/редактирования объекта проверки
  showAddPointForm: false,
  editingPointId: null,      // null = создание нового объекта, id = редактирование существующего
  newPointName: '',
  newPointType: 'МСО',
  newPointRegion: 'Екатеринбург',
  newPointStatus: 'действующая',
  newPointPosts: 6, // число постов (моечных боксов) — только у типа «МСО», по факту 4–9 на точку
  // форма добавления/редактирования пользователя
  showAddUserForm: false,
  editingUserId: null,      // null = создание нового, id = редактирование существующего
  newUserName: '',
  newUserEmail: '',
  newUserRole: 'Оператор',
  newUserPointId: null,      // Оператор — одна точка
  newUserPointIds: [],       // Управляющий — несколько точек
  newUserPointSearch: '',    // поиск по мойкам в форме добавления
  newUserPointOpen: false,   // раскрыт ли список подсказок у комбобокса мойки (Оператор)
  newUserManagerIds: [],     // Терр. директор — подчинённые управляющие
  newUserManagerSearch: '',  // поиск по управляющим (фамилия) в форме добавления
  // поиск в фильтрах разделов «Аналитика» и «Проверки» — встроен прямо в поле выбора (комбобокс)
  adminAnalyticsPointSearch: '',
  adminAnalyticsPointOpen: false,
  adminAnalyticsManagerSearch: '',
  adminAnalyticsManagerOpen: false,
  inspFilterPointSearch: '',
  inspFilterPointOpen: false,
  // проверяющий — в журнале это текстовая подпись из самой проверки («Вахрушев Анатолий»,
  // «Оператор МСО Ловина»), а не ссылка на пользователя, поэтому фильтруем по значению
  inspFilterInspector: 'Все',
  inspFilterInspectorSearch: '',
  inspFilterInspectorOpen: false,
  inspFilterManagerSearch: '',
  inspFilterManagerOpen: false,
  // фильтры раздела «Объекты проверок»
  pointsFilterRegion: 'Все',
  pointsFilterPoint: 'Все',
  pointsFilterPointSearch: '',
  pointsFilterPointOpen: false,
  // раздел «Повторяющиеся нарушения» — какой объект сейчас раскрыт в списке
  repeatsExpandedPointId: null,
  // явно раскрытые/свёрнутые группы левого меню (если ключа нет — состояние авто-определяется по активному разделу)
  openNavGroups: {},
  // раскрыты ли блоки фильтров (по разделу). Значение не задано = по умолчанию: раскрыто на
  // ноутбуке, свёрнуто на телефоне (см. filtersOpen)
  filtersOpen: {},
  // свёрнутые блоки чек-листа («Пост 1», «Бокс 2») при заполнении
  collapsedGroups: {},
  highlightItem: null,   // пункт, к которому только что перешли по кнопке отправки
  // фильтры раздела «Пользователи»
  usersFilterSearch: '',
  usersFilterRole: 'Все',
  // id пользователей, удалённых вручную — чтобы дальнейшие правки MVP их не возвращали
  deletedUserIds: [],
  // раздел «Планирование проверок» — форма назначения новой проверки
  planningShowForm: false,
  planningPointId: null,
  planningPointSearch: '',
  planningPointOpen: false,
  planningTemplateId: null,
  planningTemplateSearch: '',
  planningTemplateOpen: false,
  planningAssigneeId: null,
  planningAssigneeSearch: '',
  planningAssigneeOpen: false,
  planningDueDate: null,
  planningNote: '',
  // повтор: если planningIsRecurring — planningDueDate трактуется как дата ПЕРВОЙ проверки серии,
  // а не как срок; срок каждой проверки = дата назначения + planningSlaDays
  planningIsRecurring: false,
  planningRecurFreq: 'daily', // 'daily' | 'weekly' | 'monthly'
  planningSlaDays: 1,
  // запланированные/назначенные проверки:
  // {id, pointId, templateId, assigneeId, note, status, recurrence, assignedAt, dueDate, history, resultInspectionId}
  // status: 'запланирована' | 'выполнена' | 'отменена' (просрочена вычисляется на лету по dueDate)
  // recurrence: null (одноразовая) | {freq:'daily'|'weekly'|'monthly', slaDays:N}
  // assignedAt — дата назначения ТЕКУЩЕЙ проверки цикла; dueDate = assignedAt + slaDays (для повторяющихся)
  // history — журнал выполненных проверок серии: [{date, score, inspectionId}]
  plannedInspections: [
    {id:1, pointId:24, templateId:3, assigneeId:16, note:'Плановая тайная проверка нового объекта', status:'запланирована', recurrence:null, assignedAt:'2026-07-09', dueDate:'2026-07-15', history:[]},
    {id:2, pointId:15, templateId:1, assigneeId:1, note:'Внеплановая проверка по жалобе клиента', status:'запланирована', recurrence:null, assignedAt:'2026-07-06', dueDate:'2026-07-08', history:[]},
    {id:3, pointId:3, templateId:3, assigneeId:37, note:'Ежемесячный аудит по сети (Аудитор, без подчинённых)', status:'запланирована', recurrence:{freq:'monthly', slaDays:7}, assignedAt:'2026-07-13', dueDate:'2026-07-20', history:[]},
    {id:4, pointId:6, templateId:3, assigneeId:16, note:'', status:'выполнена', recurrence:null, assignedAt:'2026-07-01', dueDate:'2026-07-03', resultInspectionId:4, history:[{date:'2026-07-03', score:90, inspectionId:4}]},
    {id:5, pointId:20, templateId:1, assigneeId:33, note:'Дополнительный контроль ежедневного чек-листа МСО', status:'запланирована', recurrence:{freq:'daily', slaDays:1}, assignedAt:'2026-07-09', dueDate:'2026-07-10', history:[]},
    {id:6, pointId:15, templateId:2, assigneeId:2, note:'Регулярный еженедельный контроль управляющего', status:'запланирована', recurrence:{freq:'weekly', slaDays:3}, assignedAt:'2026-07-06', dueDate:'2026-07-09', history:[]}
  ]
};

// ==================== Supabase (реальный бэкенд для рабочего пилота) ====================
// «Рабочий вход» (логин/пароль) и «Гостевая проверка — реальная» пишут в этот проект.
// Обычный демо-просмотр (кнопки в кабинете управления) работает полностью локально,
// в Supabase ничего не пишет и не читает.
const SUPABASE_URL = 'https://koctgpwqcmytungdgfdu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvY3RncHdxY215dHVuZ2RnZmR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxODgwMTYsImV4cCI6MjA5OTc2NDAxNn0.Lb02a3T2YXrKmoaWQ4vyAN5mgGrllCKaeZikmkeiRSk';
const sb = (window.supabase) ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

// снимок демо-данных (объекты/шаблоны) — чтобы вернуться к демо-показу после того, как
// рабочий вход или реальная гостевая проверка временно подменят state.points/state.templates
// настоящими данными из Supabase.
const DEMO_SEED_POINTS = JSON.parse(JSON.stringify(state.points));
const DEMO_SEED_TEMPLATES = JSON.parse(JSON.stringify(state.templates));

function restoreDemoData(){
  state.points = JSON.parse(JSON.stringify(DEMO_SEED_POINTS));
  state.templates = JSON.parse(JSON.stringify(DEMO_SEED_TEMPLATES));
  // users/violations/inspections/plannedInspections подменяются реальными данными на время
  // рабочего входа (см. finishLiveLogin) — возвращаем демо-снимок, иначе после выхода из
  // живого сеанса демо-показ остался бы засорён настоящими данными пилота.
  state.users = JSON.parse(JSON.stringify(DEMO_SEED_USERS));
  state.violations = JSON.parse(JSON.stringify(DEMO_SEED_VIOLATIONS));
  state.inspections = JSON.parse(JSON.stringify(DEMO_SEED_INSPECTIONS));
  state.plannedInspections = JSON.parse(JSON.stringify(DEMO_SEED_PLANNED_INSPECTIONS));
  state.live = false;
  state.guestLive = false;
}

// ---- разделение демо-показа и рабочего пилота по разным HTML-файлам ----
// index.html (data-entry="pilot") задаёт ENTRY='pilot' — грузится сразу на экран входа, без
// демо-кабинета и без ссылок на него; demo.html (data-entry="demo") задаёт ENTRY='demo' — не
// подключает Supabase SDK вовсе (см. отсутствие <script src=".../supabase-js"> в demo.html),
// поэтому sb ниже гарантированно null и живые sb.from(...)-ветки физически не могут сработать,
// а не просто скрыты в интерфейсе.
const ENTRY = document.documentElement.dataset.entry || 'demo';
const PILOT_ONLY = ENTRY === 'pilot';
const DEMO_ONLY = ENTRY === 'demo';
if(PILOT_ONLY) state.mode = 'login';

// ---------- Запоминание входа ----------
// Supabase хранит сессию в браузере сам, но приложение её не спрашивало при загрузке — поэтому
// каждое обновление страницы выбрасывало на экран входа, хотя сотрудник уже был авторизован.
// Плюс своё ограничение по бездействию: если сервисом не пользовались дольше 14 дней, сессия
// принудительно закрывается (телефон точки — общий, и «вечный» вход на нём нежелателен).
const SESSION_LAST_SEEN_KEY = 'checkoffice_last_seen_v1';
const SESSION_MAX_IDLE_DAYS = 14;

function touchSession(){
  try{ localStorage.setItem(SESSION_LAST_SEEN_KEY, new Date().toISOString()); }
  catch(e){ /* приватный режим — просто не запомним, вход останется на одну сессию */ }
}

function sessionIdleTooLong(){
  try{
    const raw = localStorage.getItem(SESSION_LAST_SEEN_KEY);
    if(!raw) return false;                       // метки нет — считаем вход свежим
    const days = (Date.now() - new Date(raw).getTime()) / 86400000;
    return !(days >= 0) ? false : days > SESSION_MAX_IDLE_DAYS;
  } catch(e){ return false; }
}

function forgetSession(){
  try{ localStorage.removeItem(SESSION_LAST_SEEN_KEY); } catch(e){}
}

// ---- состояние рабочего входа ----
state.live = false;        // true = сейчас показан реальный сеанс сотрудника (не демо)
state.guestLive = false;   // true = гостевая проверка сейчас идёт по реальным данным
state.authLogin = '';
state.authPassword = '';
state.authBusy = false;
state.authError = '';
state.appUser = null;      // строка app_users вошедшего сотрудника
state.checklistBusy = false; // идёт отправка чек-листа оператора — блокирует повторное нажатие «Отправить»
state.guestBusy = false;     // идёт отправка гостевой проверки — блокирует повторное нажатие «Отправить»

// ---- смена собственного пароля (доступна вошедшему сотруднику) ----
state.pwNew = '';
state.pwConfirm = '';
state.pwBusy = false;
state.pwError = '';
state.pwDone = false;
state.templateSaving = false; // идёт сохранение чек-листа в общую базу

// ---- состояние самостоятельной регистрации сотрудника ----
state.unclaimedUsers = [];   // сотрудники из app_users, у которых ещё нет логина (auth_user_id = null)
state.regPointsById = {};    // id объекта -> название (чтобы подписать пункты списка)
state.regUserId = null;
state.regUserSearch = '';
state.regUserOpen = false;
state.regLogin = '';
state.regPassword = '';
state.regPasswordConfirm = '';
state.regBusy = false;
state.regError = '';

function mapTemplateFromDb(row){
  return {
    id: row.id, name: row.name, type: row.type, pointType: row.point_type, role: row.role,
    schedule: row.schedule, multiPost: !!row.multi_post,
    items: row.items || [], perPostItems: row.per_post_items || [], siteItems: row.site_items || []
  };
}
function mapInspectionFromDb(row){
  return {
    id: row.id, pointId: row.point_id, templateId: row.template_id, kind: row.kind, date: row.date,
    score: row.score, inspector: row.inspector, guestName: row.guest_name, guestContact: row.guest_contact,
    items: row.items || []
  };
}
function mapViolationFromDb(row){
  return { id: row.id, pointId: row.point_id, item: row.item, critical: row.critical, status: row.status, assignee: row.assignee || '—', deadline: row.deadline || '—' };
}
// форма совпадает с тем, что уже читают startEditUser/renderAdminUsers/комбобоксы
// (см. index.html: state.users в демо-seed) — остальной код о живых данных не знает.
function mapAppUserFromDb(row){
  return {
    id: row.id, name: row.name, email: row.email || undefined, role: row.role,
    point: row.point_id ? (pointById(row.point_id)||{}).name : undefined,
    pointIds: row.point_ids || [], directorManagerIds: row.director_manager_ids || [],
    perms: row.perms || {}
  };
}
function mapPlanFromDb(row){
  return {
    id: row.id, pointId: row.point_id, templateId: row.template_id, assigneeId: row.assignee_id,
    note: row.note || '', status: row.status, recurrence: row.recurrence || null,
    assignedAt: row.assigned_at, dueDate: row.due_date, history: row.history || [],
    resultInspectionId: row.result_inspection_id || undefined
  };
}

async function fetchLivePointsAndTemplates(){
  const [{data: pts, error: ptsErr}, {data: tpls, error: tplErr}] = await Promise.all([
    sb.from('points').select('*'),
    sb.from('templates').select('*')
  ]);
  if(ptsErr) throw ptsErr;
  if(tplErr) throw tplErr;
  return { points: pts||[], templates: (tpls||[]).map(mapTemplateFromDb) };
}

// Повторяет запрос к Supabase при сетевой/временной ошибке — 2 дополнительные попытки с паузой,
// прежде чем показать пользователю «не удалось сохранить». Без этого один обрыв связи на мойке
// требовал бы вручную повторять каждое действие самому, а на слабом мобильном интернете это обычная ситуация.
async function sbRetry(queryFn, retries){
  retries = retries===undefined ? 2 : retries;
  let result;
  for(let attempt=0; attempt<=retries; attempt++){
    result = await queryFn();
    if(!result || !result.error) return result;
    if(attempt<retries) await new Promise(r=>setTimeout(r, 500*(attempt+1)));
  }
  return result;
}

function humanizeAuthError(msg){
  if(/Invalid login credentials/i.test(msg)) return 'Неверный логин или пароль.';
  return msg;
}

function enterDemo(role){
  restoreDemoData();
  openPreview(role);
}

function goLiveLogin(){
  state.mode = 'login';
  state.authLogin = '';
  state.authPassword = '';
  state.authError = '';
  render();
}

function backToConsoleFromLogin(){
  state.mode = PILOT_ONLY ? 'login' : 'console'; // в пилоте нет демо-кабинета, куда возвращаться
  render();
}

function setAuthField(field, value){
  // без render(): поле уже показывает введённый текст само (нативный input), а полная
  // перерисовка экрана на каждое нажатие клавиши на телефоне пересоздаёт этот <input> —
  // из-за этого виртуальная клавиатура сбрасывается и часть букв теряется/не печатается.
  state['auth'+field] = value;
}

// Общий шаг после успешной аутентификации (обычный вход ИЛИ только что созданная
// самостоятельная регистрация): находит строку app_users по auth_user_id и подгружает
// рабочие данные (объекты/шаблоны/проверки/нарушения в зоне ответственности сотрудника).
async function finishLiveLogin(uid){
  const { data: rows, error: rowsErr } = await sb.from('app_users').select('*').eq('auth_user_id', uid);
  if(rowsErr) throw rowsErr;
  if(!rows || rows.length===0){
    throw new Error('Профиль сотрудника не найден в базе — обратитесь к администратору.');
  }
  const appUser = rows[0];
  const { points, templates } = await fetchLivePointsAndTemplates();
  // Журнал проверок растёт бесконечно (ежедневные чек-листы по каждой точке), а рейтинг и тренд
  // используют только последние ~30 дней — поэтому при входе тянем не всю историю, а разумное
  // окно (180 дней, с запасом на «повторяющиеся нарушения»), а не всё, что накопилось за месяцы.
  const INSPECTIONS_FETCH_WINDOW_DAYS = 180;
  const inspectionsCutoff = addDays(new Date().toISOString().slice(0,10), -INSPECTIONS_FETCH_WINDOW_DAYS);
  const [{data: insRows, error: insErr}, {data: violRows, error: violErr}, {data: userRows, error: usersErr}, {data: planRows, error: plansErr}] = await Promise.all([
    sb.from('inspections').select('*').gte('date', inspectionsCutoff).order('id', {ascending:false}),
    sb.from('violations').select('*').order('id', {ascending:false}),
    sb.from('app_users').select('*'),
    sb.from('planned_inspections').select('*')
  ]);
  if(insErr) throw insErr;
  if(violErr) throw violErr;
  if(usersErr) throw usersErr;
  if(plansErr) throw plansErr;

  state.points = points;
  state.templates = templates;
  state.inspections = (insRows||[]).map(mapInspectionFromDb);
  state.violations = (violRows||[]).map(mapViolationFromDb);
  state.users = (userRows||[]).map(mapAppUserFromDb);
  state.plannedInspections = (planRows||[]).map(mapPlanFromDb);
  state.appUser = appUser;
  state.myPointId = appUser.point_id || (appUser.point_ids && appUser.point_ids[0]) || null;
  state.live = true;

  touchSession();   // отметка активности: от неё считаются 14 дней бездействия

  // незаконченные чек-листы этого сотрудника с других устройств
  mergeCloudDraftsIntoLocal();

  if(appUser.role==='Оператор'){
    // оператор работает с рабочего телефона на точке — мобильный киоск-экран
    state.previewRole = 'operator';
    state.mode = 'preview';
  } else {
    // Управляющий/Терр. директор/Маркетолог/Аудитор — офисные роли: полноценный кабинет
    // управления (тот же экран, что в демо-показе), только с настоящими данными сети.
    state.section = 'analytics';
    state.mode = 'console';
  }
}

async function doLogin(){
  if(!sb){ state.authError = 'Supabase не подключен.'; render(); return; }
  const loginValue = (state.authLogin||'').trim();
  const password = state.authPassword||'';
  if(!loginValue || !password){ state.authError = 'Укажите логин и пароль.'; render(); return; }
  state.authBusy = true; state.authError=''; render();
  const email = loginValue.includes('@') ? loginValue : (loginValue + '@aquagizer.internal');
  try{
    const { error: signInErr } = await sb.auth.signInWithPassword({ email, password });
    if(signInErr) throw signInErr;
    const { data: userData, error: userErr } = await sb.auth.getUser();
    if(userErr) throw userErr;
    await finishLiveLogin(userData.user.id);
    state.authBusy = false;
    render();
  } catch(e){
    state.authBusy = false;
    state.authError = (e && e.message) ? humanizeAuthError(e.message) : 'Не удалось войти.';
    render();
  }
}

// ---------- Самостоятельная регистрация сотрудника (со своего рабочего телефона) ----------
// Сотрудник ищет себя в списке ещё не зарегистрированных (заведённых администратором в
// app_users, но без логина), придумывает логин/пароль — и сам «занимает» свою строку.
// Роль/объект/права при этом не меняются — они уже заданы администратором заранее.

function regUserLabel(u){
  let scope = '';
  if(u.role==='Оператор' && u.point_id) scope = state.regPointsById[u.point_id] || '';
  else if(u.point_ids && u.point_ids.length) scope = u.point_ids.map(id=>state.regPointsById[id]).filter(Boolean).join(', ');
  return u.name + ' — ' + u.role + (scope ? ' (' + scope + ')' : '');
}

// Печать в это поле на телефоне пересекается с фоновой загрузкой unclaimed_app_users
// (см. goRegister) — общий render() тут слишком тяжёлый (список + этот запрос), поэтому
// вместо него точечно патчим только список подсказок (см. patchComboList/onInputOverride
// в renderCombo). Само поле ввода при этом никогда не пересоздаётся.
function refreshRegUserSearch(value){
  state.regUserSearch = value;
  const rows = [...state.unclaimedUsers]
    .filter(u=>matchesSearch(regUserLabel(u), state.regUserSearch))
    .sort((a,b)=>a.name.localeCompare(b.name))
    .map(u=>({value:String(u.id), label:regUserLabel(u), active: state.regUserId===u.id}));
  patchComboList('regUserCombo', rows, 'setRegField', 'UserSearch', 'UserOpen', 'UserId');
}

function setRegField(field, value){
  if(field==='UserId'){ value = value===''? null : Number(value); }
  state['reg'+field] = value;
  render();
}

// для логина/пароля render() не нужен (см. setAuthField) — эти поля ни на что в разметке
// не влияют, пока форма не отправлена, а полная перерисовка на каждую клавишу на телефоне
// пересоздаёт input и сбрасывает виртуальную клавиатуру (часть букв теряется).
function setRegFieldQuiet(field, value){
  state['reg'+field] = value;
}

async function goRegister(){
  state.mode = 'register';
  state.regUserId = null;
  state.regUserSearch = '';
  // список подсказок открыт СРАЗУ (не по фокусу) — иначе onfocus вызывает render() ровно
  // в момент, когда телефон ещё занят обработкой самого события фокуса/появления клавиатуры,
  // и первые же нажатия клавиш на этом поле теряются (см. onFocusOverride ниже).
  state.regUserOpen = true;
  state.regLogin = '';
  state.regPassword = '';
  state.regPasswordConfirm = '';
  state.regError = '';
  state.unclaimedUsers = [];
  state.regPointsById = {};
  render();
  if(!sb) return;
  try{
    // Читаем через view unclaimed_app_users (без колонки email), а не напрямую из app_users —
    // анониму (пока не вошёл в систему) больше не выдан select на саму таблицу, см.
    // supabase_migration_v1_patch3_hide_email_from_anon.sql. Раньше здесь читался email,
    // чтобы подставить его как готовый логин — теперь его не видно, и все проходят
    // регистрацию через ручной ввод логина (см. ветку без selected.email в renderRegisterScreen).
    const [{data: userRows, error: userErr}, {data: ptRows, error: ptErr}] = await Promise.all([
      sb.from('unclaimed_app_users').select('id,name,role,point_id,point_ids'),
      sb.from('points').select('id,name')
    ]);
    if(userErr) throw userErr;
    if(ptErr) throw ptErr;
    state.unclaimedUsers = userRows || [];
    (ptRows||[]).forEach(p=> state.regPointsById[p.id] = p.name);
  } catch(e){
    state.regError = 'Не удалось загрузить список сотрудников: ' + (e.message||e);
  }
  render();
}

async function doRegister(){
  if(!sb){ state.regError = 'Supabase не подключен.'; render(); return; }
  if(!state.regUserId){ state.regError = 'Найдите себя в списке.'; render(); return; }
  const chosen = state.unclaimedUsers.find(u=>u.id===state.regUserId);
  if(!chosen){ state.regError = 'Найдите себя в списке.'; render(); return; }
  const password = state.regPassword||'';
  if(password.length<6){ state.regError = 'Пароль должен быть не короче 6 символов.'; render(); return; }
  if(password!==state.regPasswordConfirm){ state.regError = 'Пароли не совпадают.'; render(); return; }
  const loginValue = (state.regLogin||'').trim();
  let email;
  if(chosen.email && chosen.email.includes('@')){
    email = chosen.email;
  } else if(!loginValue){
    state.regError = 'Придумайте логин.'; render(); return;
  } else if(loginValue.includes('@')){
    // ввели сразу полный email — проверяем его собственный формат
    if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(loginValue)){
      state.regError = 'Введите корректный email.'; render(); return;
    }
    email = loginValue;
  } else {
    // обычный логин (без @) превращается в email вида логин@aquagizer.internal —
    // такой адрес обязан состоять из латиницы: кириллица или пробелы Supabase Auth
    // отклоняет с непонятной для сотрудника ошибкой "invalid format"
    if(!/^[A-Za-z0-9._-]+$/.test(loginValue)){
      state.regError = 'Логин — только латинские буквы, цифры, точка, дефис или подчёркивание, без кириллицы и пробелов. Например: ivanov'; render(); return;
    }
    email = loginValue + '@aquagizer.internal';
  }

  state.regBusy = true; state.regError=''; render();
  try{
    const { data, error } = await sb.auth.signUp({ email, password });
    if(error) throw error;
    const uid = data.user ? data.user.id : (data.session ? data.session.user.id : null);
    if(!uid) throw new Error('Не удалось создать учётную запись.');
    const { error: claimErr } = await sb.from('app_users').update({ auth_user_id: uid, email }).eq('id', chosen.id).is('auth_user_id', null);
    if(claimErr) throw claimErr;
    if(!data.session){
      state.regBusy = false;
      state.regError = 'Учётная запись создана, но нужно подтверждение почты. Попросите администратора отключить "Confirm email" в настройках Supabase (Authentication → Providers → Email) и войдите через «Рабочий вход».';
      render();
      return;
    }
    await finishLiveLogin(uid);
    state.regBusy = false;
    render();
  } catch(e){
    state.regBusy = false;
    state.regError = (e && e.message) ? humanizeAuthError(e.message) : 'Не удалось зарегистрироваться.';
    render();
  }
}

function renderRegisterScreen(){
  const selected = state.regUserId ? state.unclaimedUsers.find(u=>u.id===state.regUserId) : null;
  const rows = [...state.unclaimedUsers]
    .filter(u=>matchesSearch(regUserLabel(u), state.regUserSearch))
    .sort((a,b)=>a.name.localeCompare(b.name))
    .map(u=>({value:String(u.id), label:regUserLabel(u), active: state.regUserId===u.id}));

  return `
    <div style="max-width:400px;margin:50px auto;padding:28px;border:1px solid var(--border);border-radius:12px;background:#fff;">
      <div class="brand-mark" style="justify-content:center;margin-bottom:4px;">
        <span class="brand-icon">💧</span>
        <span class="brand-word"><span class="brand-part-a">Aqua</span><span class="brand-part-b">CheckOffice</span></span>
      </div>
      <div style="text-align:center;font-size:12.5px;color:var(--text-muted);margin-bottom:20px;">Регистрация сотрудника</div>
      <label style="font-size:11px;color:var(--text-muted);">Найдите себя в списке</label>
      ${renderCombo({
        id:'regUserCombo', setterFn:'setRegField',
        searchField:'UserSearch', openField:'UserOpen', valueField:'UserId',
        isOpen: state.regUserOpen, searchValue: state.regUserSearch,
        selectedLabel: selected ? regUserLabel(selected) : '',
        placeholder:'Начните вводить фамилию…',
        rows,
        onInputOverride: 'refreshRegUserSearch(this.value)',
        onFocusOverride: ''
      })}
      ${state.unclaimedUsers.length===0 ? `<div style="font-size:11.5px;color:var(--text-muted);margin-top:6px;">Если список пуст — все уже зарегистрированы, либо ваш профиль ещё не добавлен администратором.</div>` : ''}
      ${selected ? `
        ${selected.email ? `
          <div style="margin-top:14px;font-size:12px;color:var(--text-muted);">Ваш логин: <b>${selected.email}</b></div>
        ` : `
          <div style="margin-top:14px;">
            <label style="font-size:11px;color:var(--text-muted);">Придумайте логин</label>
            <input id="regLoginInput" type="text" autocapitalize="off" autocorrect="off" spellcheck="false" style="width:100%;margin:2px 0;box-sizing:border-box;" placeholder="ivanov" value="${state.regLogin.replace(/"/g,'&quot;')}" oninput="setRegFieldQuiet('Login', this.value)">
          </div>
        `}
        <div style="margin-top:12px;">
          <label style="font-size:11px;color:var(--text-muted);">Пароль</label>
          <input id="regPasswordInput" type="password" style="width:100%;margin:2px 0;box-sizing:border-box;" value="${state.regPassword.replace(/"/g,'&quot;')}" oninput="setRegFieldQuiet('Password', this.value)">
        </div>
        <div style="margin-top:12px;">
          <label style="font-size:11px;color:var(--text-muted);">Повторите пароль</label>
          <input id="regPasswordConfirmInput" type="password" style="width:100%;margin:2px 0;box-sizing:border-box;" value="${state.regPasswordConfirm.replace(/"/g,'&quot;')}" oninput="setRegFieldQuiet('PasswordConfirm', this.value)">
        </div>
      ` : ''}
      ${state.regError ? `<div style="font-size:12px;color:var(--danger);margin:12px 0;">${state.regError}</div>` : ''}
      <button class="btn" style="width:100%;margin-top:16px;" ${(state.regBusy||!selected)?'disabled':''} onclick="doRegister()">${state.regBusy?'Регистрируем…':'Зарегистрироваться и войти'}</button>
      <div style="text-align:center;margin-top:14px;">
        <a onclick="goLiveLogin()" style="font-size:12px;">Уже есть логин? Войти</a><br>
        ${PILOT_ONLY ? `` : `<a onclick="backToConsoleFromLogin()" style="font-size:12px;">← Назад к демо-кабинету</a>`}
      </div>
    </div>
  `;
}

// ---------- Смена собственного пароля ----------
// Работает по активной сессии: старый пароль не требуется, потому что личность уже подтверждена
// входом. Это и есть штатный путь для «не помню пароль, но на одном устройстве ещё залогинен» —
// задал новый и заходишь с телефона. Сброс пароля ЧУЖОМУ сотруднику так сделать нельзя: для
// этого нужен сервисный ключ Supabase, которому нет места в коде страницы.
function goChangePassword(){
  state.mode = 'password';
  state.pwNew = '';
  state.pwConfirm = '';
  state.pwError = '';
  state.pwDone = false;
  render();
}

// без render() на каждую клавишу — иначе на телефоне пересоздаётся поле и сбрасывается
// клавиатура (та же причина, что у setAuthField)
function setPwField(field, value){ state['pw'+field] = value; }

function backFromPassword(){
  state.mode = (state.live && state.appUser && state.appUser.role==='Оператор') ? 'preview' : 'console';
  render();
}

async function doChangePassword(){
  if(!sb || !state.live){ state.pwError = 'Смена пароля доступна только в рабочем режиме.'; render(); return; }
  const pw = state.pwNew || '';
  if(pw.length < 6){ state.pwError = 'Пароль должен быть не короче 6 символов.'; render(); return; }
  if(pw !== state.pwConfirm){ state.pwError = 'Пароли не совпадают.'; render(); return; }
  state.pwBusy = true; state.pwError = ''; render();
  try{
    const { error } = await sb.auth.updateUser({ password: pw });
    if(error) throw error;
    state.pwBusy = false;
    state.pwDone = true;
    state.pwNew = ''; state.pwConfirm = '';
    render();
  } catch(e){
    state.pwBusy = false;
    state.pwError = (e && e.message) ? humanizeAuthError(e.message) : 'Не удалось сменить пароль.';
    render();
  }
}

function renderPasswordScreen(){
  const login = state.appUser ? (state.appUser.email || '') : '';
  return `
    <div style="max-width:380px;margin:50px auto;padding:28px;border:1px solid var(--border);border-radius:12px;background:#fff;">
      <div class="brand-mark" style="justify-content:center;margin-bottom:4px;">
        <span class="brand-icon">💧</span>
        <span class="brand-word"><span class="brand-part-a">Aqua</span><span class="brand-part-b">CheckOffice</span></span>
      </div>
      <div style="text-align:center;font-size:12.5px;color:var(--text-muted);margin-bottom:20px;">Смена пароля</div>
      ${state.pwDone ? `
        <div style="text-align:center;padding:10px 0 4px;">
          <div style="font-size:30px;margin-bottom:8px;">✅</div>
          <div style="font-weight:700;margin-bottom:6px;">Пароль изменён</div>
          <div style="font-size:12.5px;color:var(--text-muted);">Заходите с телефона: логин <b>${login}</b> и новый пароль.</div>
        </div>
        <button class="btn" style="width:100%;margin-top:16px;" onclick="backFromPassword()">Вернуться в сервис</button>
      ` : `
        ${login ? `<div style="font-size:12px;color:var(--text-muted);margin-bottom:12px;">Ваш логин: <b>${login}</b></div>` : ''}
        <label style="font-size:11px;color:var(--text-muted);">Новый пароль</label>
        <input id="pwNewInput" type="password" style="width:100%;margin:2px 0 12px;box-sizing:border-box;" oninput="setPwField('New', this.value)">
        <label style="font-size:11px;color:var(--text-muted);">Повторите новый пароль</label>
        <input id="pwConfirmInput" type="password" style="width:100%;margin:2px 0 16px;box-sizing:border-box;" oninput="setPwField('Confirm', this.value)">
        ${state.pwError ? `<div style="font-size:12px;color:var(--danger);margin-bottom:12px;">${state.pwError}</div>` : ''}
        <button class="btn" style="width:100%;" ${state.pwBusy?'disabled':''} onclick="doChangePassword()">${state.pwBusy?'Меняем…':'Сохранить новый пароль'}</button>
        <div style="text-align:center;margin-top:14px;">
          <a onclick="backFromPassword()" style="font-size:12px;">← Назад</a>
        </div>
      `}
    </div>
  `;
}

async function doLogout(){
  if(sb) { try{ await sb.auth.signOut(); }catch(e){} }
  forgetSession();   // вышли осознанно — следующий заход снова через логин
  restoreDemoData();
  state.appUser = null;
  state.mode = PILOT_ONLY ? 'login' : 'console'; // в пилоте после выхода — обратно на вход, не в демо-кабинет
  render();
}

async function openLiveGuestChecklist(){
  if(!sb){ showBanner('Supabase не подключен.'); render(); return; }
  showBanner('Загружаем реальный список объектов…');
  render();
  try{
    const { points, templates } = await fetchLivePointsAndTemplates();
    const { data: guestRows } = await sb.from('known_guests').select('*');
    state.points = points;
    state.templates = templates;
    state.knownGuests = guestRows || [];
    state.guestLive = true;
    openPreview('guest');
  } catch(e){
    state.guestLive = false;
    showBanner('Не удалось загрузить реальные данные: ' + (e.message||e));
    render();
  }
}

function renderLoginScreen(){
  return `
    <div style="max-width:360px;margin:60px auto;padding:28px;border:1px solid var(--border);border-radius:12px;background:#fff;">
      <div class="brand-mark" style="justify-content:center;margin-bottom:4px;">
        <span class="brand-icon">💧</span>
        <span class="brand-word"><span class="brand-part-a">Aqua</span><span class="brand-part-b">CheckOffice</span></span>
      </div>
      <div style="text-align:center;font-size:12.5px;color:var(--text-muted);margin-bottom:20px;">Рабочий вход сотрудника</div>
      <label style="font-size:11px;color:var(--text-muted);">Логин</label>
      <input id="authLoginInput" type="text" autocapitalize="off" autocorrect="off" spellcheck="false" style="width:100%;margin:2px 0 12px;box-sizing:border-box;" placeholder="ivanov" value="${state.authLogin.replace(/"/g,'&quot;')}" oninput="setAuthField('Login', this.value)">
      <label style="font-size:11px;color:var(--text-muted);">Пароль</label>
      <input id="authPasswordInput" type="password" style="width:100%;margin:2px 0 16px;box-sizing:border-box;" value="${state.authPassword.replace(/"/g,'&quot;')}" oninput="setAuthField('Password', this.value)">
      ${state.authError ? `<div style="font-size:12px;color:var(--danger);margin-bottom:12px;">${state.authError}</div>` : ''}
      <button class="btn" style="width:100%;" ${state.authBusy?'disabled':''} onclick="doLogin()">${state.authBusy?'Входим…':'Войти'}</button>
      <div style="text-align:center;margin-top:14px;">
        <a onclick="goRegister()" style="font-size:12px;">Ещё не зарегистрированы? Регистрация</a><br>
        ${PILOT_ONLY
          ? `<a onclick="openLiveGuestChecklist()" style="font-size:12px;">Я тайный покупатель — пройти проверку</a>`
          : `<a onclick="backToConsoleFromLogin()" style="font-size:12px;">← Назад к демо-кабинету</a>`}
      </div>
    </div>
  `;
}

// ---------- Сохранение ручных назначений пользователей между сессиями ----------
// Прототип открывается как локальный файл без сервера, поэтому единственное доступное
// хранилище — localStorage браузера для этого файла. Сохраняем состав/портфели/права
// пользователей и список удалённых id, и при каждой загрузке файла подмешиваем сохранённое
// поверх «заводских» seed-данных — так, что даже если этот HTML-файл потом обновляется
// (новые правки MVP), ручные назначения управляющих/директоров и удаления пользователей
// не сбрасываются. Работает, пока файл открывается по тому же пути и не чистится
// хранилище браузера.
const USERS_STORAGE_KEY = 'checkoffice_users_v1';
const DELETED_USERS_STORAGE_KEY = 'checkoffice_deleted_users_v1';

function persistUsersToStorage(){
  try{
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(state.users));
    localStorage.setItem(DELETED_USERS_STORAGE_KEY, JSON.stringify(state.deletedUserIds||[]));
  } catch(e){ /* localStorage недоступен (приватный режим и т.п.) — просто не сохраняем */ }
}

(function hydrateUsersFromStorage(){
  try{
    const savedDeleted = JSON.parse(localStorage.getItem(DELETED_USERS_STORAGE_KEY) || '[]');
    if(Array.isArray(savedDeleted)) state.deletedUserIds = savedDeleted;
  } catch(e){ /* игнорируем повреждённые данные */ }

  try{
    const savedUsers = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || 'null');
    if(Array.isArray(savedUsers)){
      const savedById = new Map(savedUsers.map(u=>[u.id, u]));
      // seed-пользователи: если по этому id есть сохранённая версия — берём её (сохраняет ручные
      // назначения pointIds/directorManagerIds/perms), иначе оставляем как в seed
      state.users = state.users.map(u=> savedById.has(u.id) ? savedById.get(u.id) : u);
      // пользователи, добавленные вручную через форму (их id нет в текущем seed) — тоже возвращаем
      savedUsers.forEach(su=>{
        if(!state.users.some(u=>u.id===su.id)) state.users.push(su);
      });
    }
  } catch(e){ /* игнорируем повреждённые данные */ }

  // применяем удаления в последнюю очередь — они приоритетнее и seed, и сохранённой копии
  if(state.deletedUserIds && state.deletedUserIds.length){
    state.users = state.users.filter(u=>!state.deletedUserIds.includes(u.id));
  }
})();

// То же самое — для «Планирования проверок»: запланированные/отменённые/выполненные проверки
// и порождённые ими записи в общем журнале (state.inspections) сохраняются между сессиями,
// чтобы дальнейшие правки MVP их не сбрасывали.
const PLANS_STORAGE_KEY = 'checkoffice_plans_v1';
const EXTRA_INSPECTIONS_STORAGE_KEY = 'checkoffice_extra_inspections_v1';
const SEED_MAX_INSPECTION_ID = Math.max(0, ...state.inspections.map(i=>i.id));

function persistPlansToStorage(){
  try{
    localStorage.setItem(PLANS_STORAGE_KEY, JSON.stringify(state.plannedInspections));
    const extra = state.inspections.filter(i=>i.id>SEED_MAX_INSPECTION_ID);
    localStorage.setItem(EXTRA_INSPECTIONS_STORAGE_KEY, JSON.stringify(extra));
  } catch(e){ /* localStorage недоступен — просто не сохраняем */ }
}

(function hydratePlanningFromStorage(){
  try{
    const savedPlans = JSON.parse(localStorage.getItem(PLANS_STORAGE_KEY) || 'null');
    if(Array.isArray(savedPlans)) state.plannedInspections = savedPlans;
  } catch(e){ /* игнорируем повреждённые данные */ }

  try{
    const savedExtra = JSON.parse(localStorage.getItem(EXTRA_INSPECTIONS_STORAGE_KEY) || '[]');
    if(Array.isArray(savedExtra) && savedExtra.length){
      const existingIds = new Set(state.inspections.map(i=>i.id));
      savedExtra.forEach(insp=>{ if(!existingIds.has(insp.id)) state.inspections.push(insp); });
    }
  } catch(e){ /* игнорируем повреждённые данные */ }
})();

// Подсказки по именам/контактам тайных покупателей (не пользователи системы — просто чтобы не
// вводить одно и то же заново при повторных визитах) — тоже сохраняются между сессиями.
const KNOWN_GUESTS_STORAGE_KEY = 'checkoffice_known_guests_v1';

function persistGuestsToStorage(){
  try{
    localStorage.setItem(KNOWN_GUESTS_STORAGE_KEY, JSON.stringify(state.knownGuests));
  } catch(e){ /* localStorage недоступен — просто не сохраняем */ }
}

(function hydrateGuestsFromStorage(){
  try{
    const savedGuests = JSON.parse(localStorage.getItem(KNOWN_GUESTS_STORAGE_KEY) || 'null');
    if(Array.isArray(savedGuests)) state.knownGuests = savedGuests;
  } catch(e){ /* игнорируем повреждённые данные */ }
})();

// ---------- Незаконченные чек-листы (черновики) ----------
// Заполнение большого чек-листа на объекте легко прервать: закрыл браузер, разрядился телефон,
// система выгрузила вкладку из памяти, нужно срочно переключиться в другой раздел. Поэтому
// ответы пишутся в localStorage после каждого нажатия и восстанавливаются при возврате.
// Черновики хранятся ПО ОДНОМУ НА ЗАДАЧУ (ключ по плану, либо по шаблону+объекту), а не один
// общий: за день проверяющий проезжает несколько точек и может прерваться на каждой.
const CHECKLIST_DRAFTS_STORAGE_KEY = 'checkoffice_checklist_drafts_v1';

// Черновик привязан к сотруднику: рабочий телефон точки один, а заходить под ним могут разные
// люди — чужой незаконченный чек-лист показывать нельзя.
function currentDraftUserKey(){
  if(!state.live) return 'demo';
  return (state.appUser && (state.appUser.auth_user_id || state.appUser.id)) ? String(state.appUser.auth_user_id || state.appUser.id) : 'unknown';
}

function draftKeyFor(templateId, pointId, planId){
  return planId ? ('plan:'+planId) : ('tpl:'+templateId+':pt:'+pointId);
}

function loadAllSavedDrafts(){
  try{
    const raw = JSON.parse(localStorage.getItem(CHECKLIST_DRAFTS_STORAGE_KEY) || '{}');
    return (raw && typeof raw === 'object') ? raw : {};
  } catch(e){ return {}; }
}

function writeAllSavedDrafts(map){
  try{ localStorage.setItem(CHECKLIST_DRAFTS_STORAGE_KEY, JSON.stringify(map)); }
  catch(e){ /* хранилище недоступно/переполнено — заполнение продолжится, просто без страховки */ }
}

// Возвращает сохранённый черновик для этой задачи, если он принадлежит текущему сотруднику
// и его состав совпадает с текущим шаблоном (шаблон могли отредактировать — тогда старые
// ответы уже не соответствуют пунктам, и черновик лучше не подсовывать).
function savedDraftFor(templateId, pointId, planId, expectedItems){
  const d = loadAllSavedDrafts()[draftKeyFor(templateId, pointId, planId)];
  if(!d) return null;
  if(d.userKey !== currentDraftUserKey()) return null;
  if(!Array.isArray(d.answers)) return null;
  if(expectedItems && d.answers.length !== expectedItems.length) return null;
  return d;
}

function saveChecklistDraft(){
  if(!checklistDraft) return;
  const key = draftKeyFor(checklistDraft.templateId, checklistDraft.pointId, checklistDraft.planId);
  const map = loadAllSavedDrafts();
  map[key] = {
    userKey: currentDraftUserKey(),
    savedAt: new Date().toISOString(),
    templateId: checklistDraft.templateId,
    pointId: checklistDraft.pointId,
    planId: checklistDraft.planId || null,
    // сохраняем только устойчивое: путь снимка в хранилище, но не blob-ссылку превью и не
    // временные флаги загрузки — после перезагрузки страницы blob-ссылка мертва, и картинка
    // выглядела бы «битой»; превью восстанавливается по photoPath (см. restorePhotoPreviews)
    answers: checklistDraft.answers.map(a=>({
      answer: a.answer, photo: !!a.photo, comment: a.comment || '',
      photos: (a.photos || []).filter(p=>p && p.path).map(p=>({ path: p.path }))
    }))
  };
  writeAllSavedDrafts(map);
  scheduleCloudDraftPush(key); // в общую базу — фоном, см. ниже
}

function clearSavedDraft(templateId, pointId, planId){
  const key = draftKeyFor(templateId, pointId, planId);
  const map = loadAllSavedDrafts();
  delete map[key];
  writeAllSavedDrafts(map);
  deleteCloudDraft(key);
}

// ---------- Синхронизация черновиков с общей базой (доступ с любого устройства) ----------
// Локальное хранилище остаётся первичным: на объекте связь бывает плохой, и заполнение не
// должно от неё зависеть. В базу черновик уходит фоном с задержкой — иначе каждое нажатие
// «Да/Нет» превращалось бы в сетевой запрос (на чек-листе из 74 пунктов это 74 запроса).
const CLOUD_DRAFT_PUSH_DELAY_MS = 4000;
let cloudDraftPushTimer = null;
let cloudDraftPushQueue = new Set();

function cloudDraftsAvailable(){
  return !!(state.live && sb && state.appUser && state.appUser.id);
}

function scheduleCloudDraftPush(key){
  if(!cloudDraftsAvailable()) return;
  cloudDraftPushQueue.add(key);
  clearTimeout(cloudDraftPushTimer);
  cloudDraftPushTimer = setTimeout(flushCloudDraftPush, CLOUD_DRAFT_PUSH_DELAY_MS);
}

// Отправка накопленных черновиков. Ошибки намеренно проглатываются: облако здесь —
// удобство (продолжить на другом устройстве), а не источник правды. Нет сети — заполнение
// продолжается по локальной копии, синхронизация случится при следующем сохранении или входе.
async function flushCloudDraftPush(){
  if(!cloudDraftsAvailable()){ cloudDraftPushQueue.clear(); return; }
  const keys = [...cloudDraftPushQueue];
  cloudDraftPushQueue.clear();
  const map = loadAllSavedDrafts();
  const rows = keys.map(k=>map[k]).filter(Boolean).map(d=>({
    app_user_id: state.appUser.id,
    draft_key: draftKeyFor(d.templateId, d.pointId, d.planId),
    template_id: d.templateId,
    point_id: d.pointId,
    plan_id: d.planId,
    answers: d.answers,
    updated_at: d.savedAt
  }));
  if(rows.length===0) return;
  try{ await sb.from('checklist_drafts').upsert(rows, { onConflict: 'app_user_id,draft_key' }); }
  catch(e){ /* останется в локальной копии, синхронизируется позже */ }
}

async function deleteCloudDraft(key){
  if(!cloudDraftsAvailable()) return;
  try{ await sb.from('checklist_drafts').delete().eq('app_user_id', state.appUser.id).eq('draft_key', key); }
  catch(e){ /* не критично: локально уже удалён, в базе подчистится при следующей отправке */ }
}

// Слияние облачных черновиков с локальными при входе. Конфликт (заполняли на двух устройствах)
// решается по времени последнего изменения — побеждает более свежая версия.
async function mergeCloudDraftsIntoLocal(){
  if(!cloudDraftsAvailable()) return;
  try{
    const { data, error } = await sb.from('checklist_drafts').select('*').eq('app_user_id', state.appUser.id);
    if(error || !data) return;
    const map = loadAllSavedDrafts();
    let changed = false;
    data.forEach(row=>{
      const local = map[row.draft_key];
      const cloudTime = row.updated_at || '';
      if(!local || String(local.savedAt||'') < String(cloudTime)){
        map[row.draft_key] = {
          userKey: currentDraftUserKey(),
          savedAt: cloudTime,
          templateId: row.template_id,
          pointId: row.point_id,
          planId: row.plan_id,
          answers: row.answers || []
        };
        changed = true;
      } else if(local && String(local.savedAt||'') > String(cloudTime)){
        scheduleCloudDraftPush(row.draft_key); // локальная свежее — вернём её в базу
      }
    });
    if(changed) writeAllSavedDrafts(map);
  } catch(e){ /* без сети просто работаем с локальными черновиками */ }
}

// Сколько уже отвечено в сохранённом черновике — для подписи кнопки «Продолжить заполнение».
function savedDraftProgress(templateId, pointId, planId){
  const d = savedDraftFor(templateId, pointId, planId, null);
  if(!d) return null;
  const answered = d.answers.filter(a=>a && a.answer!==null && a.answer!==undefined).length;
  if(answered === 0) return null;
  return { answered, total: d.answers.length, savedAt: d.savedAt };
}

// снимок демо-данных пользователей/нарушений/проверок/планирования — СНИМАЕТСЯ ПОСЛЕ
// применения localStorage-оверлея выше (сохраняет ручные демо-правки), но ДО того, как
// рабочий вход (finishLiveLogin) когда-либо подменит их реальными данными. См. restoreDemoData().
const DEMO_SEED_USERS = JSON.parse(JSON.stringify(state.users));
const DEMO_SEED_VIOLATIONS = JSON.parse(JSON.stringify(state.violations));
const DEMO_SEED_INSPECTIONS = JSON.parse(JSON.stringify(state.inspections));
const DEMO_SEED_PLANNED_INSPECTIONS = JSON.parse(JSON.stringify(state.plannedInspections));

function matchesSearch(text, search){
  if(!search) return true;
  return (text||'').toLowerCase().includes(search.trim().toLowerCase());
}

// Комбобокс «поиск + выбор одного значения»: сам текстовый поиск встроен прямо в поле фильтра —
// открывается список подсказок, фильтруется по буквам, выбор сразу закрывает список и подставляет значение.
// setterFn — имя уже существующей глобальной функции-сеттера вида setX(field, value), которая:
//   setX(searchField, text) — обновляет текст поиска
//   setX(openField, true/false) — раскрывает/закрывает список подсказок
//   setX(valueField, value) — применяет выбранное значение (и все положенные побочные эффекты)
// Разметка строк выпадающего списка — общая для полного рендера renderCombo() и для
// точечного патча (см. patchComboList) отдельных полей, которым этого мало (см. cfg.onInputOverride ниже).
function comboRowsHtml(rows, setterFn, searchField, openField, valueField){
  const q = (s) => `'${String(s).replace(/'/g,"\\'")}'`;
  // document.activeElement.blur() ПЕРЕД сеттерами — иначе для «тихих» полей (data-quiet-render,
  // см. render()) фокус в момент onmousedown ещё формально в самом поле ввода, и все три вызова
  // сеттера ниже были бы молча проигнорированы (экран не обновился бы после выбора из списка).
  const onPick = (val) => `document.activeElement&&document.activeElement.blur();${setterFn}(${q(searchField)}, '');${setterFn}(${q(openField)}, false);${setterFn}(${q(valueField)}, ${q(val)})`;
  return rows.length===0 ? `<div style="padding:8px 10px;font-size:12px;color:var(--text-muted);">Ничего не найдено</div>` : rows.map(r=>`
    <div style="padding:8px 10px;font-size:12.5px;cursor:pointer;${r.active?'background:var(--neutral-bg);font-weight:600;':''}" onmousedown="${onPick(r.value)}">${r.label}</div>
  `).join('');
}

// Точечно обновляет только список подсказок конкретного комбобокса по его id, без общего
// render() — т.е. без пересборки innerHTML всего экрана и, соответственно, без пересоздания
// самого поля ввода. Используется полями, которым мало отложенного render() из-за debounce
// (см. комментарий у render()) — там, где перерисовка при паузах в наборе текста всё ещё
// достаточно тяжёлая (открыт список + идёт фоновая загрузка данных), чтобы на телефоне
// клавиатура «спотыкалась» и буква не появлялась с первого нажатия.
function patchComboList(id, rows, setterFn, searchField, openField, valueField){
  const listEl = document.getElementById(id+'-list');
  if(!listEl) return; // список ещё не открыт в DOM — откроется обычным render() по фокусу
  listEl.innerHTML = comboRowsHtml(rows, setterFn, searchField, openField, valueField);
}

// ---------- «Тихий» набор текста в комбобоксах ----------
// Любой комбобокс с ручным вводом страдал одной и той же болезнью: набор буквы вызывал полную
// перерисовку экрана, которая пересоздавала <input> прямо во время нажатия, и часть символов
// пропадала (особенно заметно на телефоне и при быстром наборе). Раньше это лечили точечно на
// экране регистрации; теперь это поведение по умолчанию для всех комбобоксов.
//
// Как работает: renderCombo получает ПОЛНЫЙ список вариантов, фильтрацию по введённому тексту
// делает сам. Во время набора состояние приложения не меняется вообще — обновляется только
// список подсказок (patchComboList), поэтому перерисовки нет и поле ввода не пересоздаётся.
// Выбор варианта и уход из поля работают как раньше, через обычные сеттеры с render().
const COMBO_REGISTRY = {};

// Поиск над списком с галочками (мойки управляющего, управляющие в подчинении): прячем строки
// прямо в DOM, без перерисовки — по той же причине, что и в комбобоксах. Выбранные галочки
// при этом не сбрасываются, потому что элементы не пересоздаются.
function filterCheckboxList(containerId, value){
  const box = document.getElementById(containerId);
  if(!box) return;
  const q = (value||'').trim().toLowerCase();
  let shown = 0;
  box.querySelectorAll('[data-filter-label]').forEach(el=>{
    const hit = !q || (el.dataset.filterLabel||'').toLowerCase().includes(q);
    el.style.display = hit ? '' : 'none';
    if(hit) shown++;
  });
  const empty = box.querySelector('[data-filter-empty]');
  if(empty) empty.style.display = shown===0 ? '' : 'none';
}

function comboQuietInput(id, value){
  const c = COMBO_REGISTRY[id];
  if(!c) return;
  patchComboList(id, c.rows.filter(r=>matchesSearch(r.label, value)), c.setterFn, c.searchField, c.openField, c.valueField);
}

function renderCombo(cfg){
  const { id, setterFn, searchField, openField, valueField, isOpen, searchValue, selectedLabel, placeholder, onInputOverride, onFocusOverride } = cfg;
  // selfFilter: rows — полный список, фильтруем и патчим сами (см. комментарий выше)
  const selfFilter = cfg.selfFilter !== false && !onInputOverride;
  const allRows = cfg.rows || [];
  const rows = selfFilter ? allRows.filter(r=>matchesSearch(r.label, searchValue)) : allRows;
  if(selfFilter) COMBO_REGISTRY[id] = { rows: allRows, setterFn, searchField, openField, valueField };
  const q = (s) => `'${String(s).replace(/'/g,"\\'")}'`;
  // Важно: вызываем сеттер ОДИН раз за нажатие клавиши (не два). Список и так уже открыт —
  // его открывает onfocus при входе в поле, до начала набора текста. Второй вызов здесь
  // означал вторую полную перерисовку экрана за одно нажатие клавиши: пока шла эта вторая
  // перерисовка, поле пересоздавалось заново прямо во время того, как браузер ещё продолжал
  // обрабатывать нажатие клавиши — из-за этого курсор сбивался, и буквы вставлялись не в конец,
  // а в начало поля (получался обратный порядок).
  // onInputOverride — для полей, где даже отложенный (debounce) render() пересоздаёт поле
  // слишком часто на телефоне (тяжёлый экран + фоновая подгрузка данных): такие поля вместо
  // общего render() точечно патчат только список подсказок, см. patchComboList().
  const onInput = onInputOverride || (selfFilter
    ? `comboQuietInput(${q(id)}, this.value)`          // только список подсказок, без перерисовки
    : `${setterFn}(${q(searchField)}, this.value)`);
  // onFocusOverride: '' — для полей, у которых список подсказок и так уже открыт заранее
  // (см. goRegister()), так что вызывать по фокусу render() незачем — это лишь источник той же
  // самой гонки с первыми нажатиями клавиш, от которой защищает onInputOverride.
  const onFocus = onFocusOverride!==undefined ? onFocusOverride : `${setterFn}(${q(openField)}, true)`;
  // При каждой перерисовке поле физически удаляется и создаётся заново — в этот момент
  // браузер кратковременно снимает с него фокус (событие blur), даже если тут же после
  // пересборки мы возвращаем фокус на новое поле с тем же id. Поэтому нельзя слепо закрывать
  // список через 150мс после ЛЮБОГО blur — если к этому моменту поле (или его «преемник»
  // с тем же id) уже снова в фокусе, значит пользователь просто продолжает печатать, и
  // список закрывать не нужно.
  const onBlur = `setTimeout(function(){ var el=document.getElementById(${q(id)}); if(!el || document.activeElement!==el){ ${setterFn}(${q(openField)}, false); } }, 150)`;
  return `
    <div style="position:relative;width:100%;box-sizing:border-box;">
      <input type="text" id="${id}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" style="width:100%;box-sizing:border-box;"
        ${(onInputOverride || selfFilter) ? 'data-quiet-render="1"' : ''}
        value="${(isOpen ? searchValue : (selectedLabel||'')).replace(/"/g,'&quot;')}"
        placeholder="${placeholder}"
        oninput="${onInput}"
        onfocus="${onFocus}"
        onblur="${onBlur}">
      ${isOpen ? `
        <div id="${id}-list" style="position:absolute;left:0;right:0;top:100%;z-index:30;background:#fff;border:1px solid var(--border);border-radius:8px;max-height:220px;overflow-y:auto;box-shadow:0 8px 20px rgba(0,0,0,.14);margin-top:2px;">
          ${comboRowsHtml(rows, setterFn, searchField, openField, valueField)}
        </div>
      ` : ''}
    </div>
  `;
}

const ANALYTICS_TODAY = '2026-07-09'; // демо-«сегодня» для расчёта пресетов периода (7/30 дней)

// В живом режиме экраны показывают тем же кодом реальным сотрудникам — поэтому всё, что должно
// считаться "от сегодня" (рейтинг, пресеты периода, просрочка плана), не может брать зафиксированную
// демо-дату выше: иначе для настоящего пилота эти расчёты навсегда остались бы привязаны к 2026-07-09,
// даже когда календарь давно ушёл вперёд.
function todayStr(){ return state.live ? new Date().toISOString().slice(0,10) : ANALYTICS_TODAY; }

function addDays(dateStr, days){
  const [y, m, day] = dateStr.split('-').map(Number);
  const d = new Date(Date.UTC(y, m - 1, day + days));
  return d.toISOString().slice(0,10);
}

function seededRand(seed){ const x = Math.sin(seed)*10000; return x - Math.floor(x); }

// Автогенерация истории проверок для рейтинга/тренда там, где реальных данных мало —
// чтобы рейтинг и «Сравнение по последним проверкам» были информативны по всем точкам сети, а не только по демо-примерам.
// Важно: официальный рейтинг объекта считается ТОЛЬКО по проверкам управляющего/тер.директора —
// самооценка оператора (ежедневный чек-лист) в расчёт не идёт, поэтому и история подставляется
// на уровне управляющего (templateId:2, еженедельный чек-лист) — это же соответствует его реальной частоте.
(function seedTrendHistory(){
  const HIST_DATES = ['2026-06-15', '2026-06-22', '2026-06-29', '2026-07-06'];
  state.points.forEach(p=>{
    const existing = state.inspections.filter(i=>{
      if(i.pointId!==p.id || i.kind!=='Плановая') return false;
      const t = templateById(i.templateId);
      return t && t.role!=='Оператор';
    });
    if(existing.length>=2) return; // у точки уже есть содержательная история уровня управляющего/директора

    const scores = new Array(HIST_DATES.length);
    scores[HIST_DATES.length-1] = p.score;
    for(let i=HIST_DATES.length-2;i>=0;i--){
      const delta = Math.round((seededRand(p.id*31+i*7)-0.5)*14); // ±7
      scores[i] = Math.max(35, Math.min(99, scores[i+1] - delta));
    }
    HIST_DATES.forEach((d,idx)=>{
      const newId = state.inspections.reduce((m,i)=>Math.max(m,i.id),0)+1;
      state.inspections.push({id:newId, pointId:p.id, templateId:2, kind:'Плановая', date:d, score:scores[idx], inspector:'Управляющий (история, демо)'});
    });
  });
})();

// Чек-лист заполняется с рабочего телефона точки, а не конкретным человеком — поэтому
// «проверяющий» в записях оператора — это роль + точка («Оператор МСО Ловина»), а не фамилия сотрудника.
(function normalizeOperatorInspectorLabels(){
  state.inspections.forEach(insp=>{
    if(insp.kind !== 'Плановая') return; // гостевые проверки не трогаем
    const t = templateById(insp.templateId);
    if(!t || t.role !== 'Оператор') return;
    const p = pointById(insp.pointId);
    if(!p) return;
    insp.inspector = 'Оператор ' + p.name;
  });
})();

// Собирает псевдослучайный, но детерминированный набор ответов по пунктам чек-листа,
// согласованный с итоговым баллом проверки — чтобы у демо-проверок был открываемый состав чек-листа.
function synthesizeInspectionItems(template, point, score, seed){
  const items = buildChecklistItems(template, point) || [];
  const total = items.length;
  if(total===0) return [];
  let failCount = Math.round(total * (100-score) / 100);
  failCount = Math.max(0, Math.min(total, failCount));
  const order = items.map((it,idx)=>idx).sort((a,b)=> seededRand(seed+a*13) - seededRand(seed+b*13));
  const failSet = new Set(order.slice(0, failCount));
  return items.map((it,idx)=>({ text:it.text, critical:it.critical, photo:it.photo, answer: failSet.has(idx) ? 'no' : 'yes' }));
}

// Дозаполняет детальный состав чек-листа у проверок, где он ещё не сохранён
// (исторические/демо-записи — у «живых» проверок, отправленных через форму, состав уже есть).
(function attachSyntheticChecklistItems(){
  state.inspections.forEach(insp=>{
    if(insp.items) return;
    const t = templateById(insp.templateId);
    const p = pointById(insp.pointId);
    if(!t || !p) return;
    insp.items = synthesizeInspectionItems(t, p, insp.score, insp.id*47+11);
  });
})();

const DEMO_TIME_OPTIONS = ['08:30', '09:15', '10:30', '12:00', '20:45', '21:15', '22:30'];

function timeToMinutes(t){ const [h,m] = t.split(':').map(Number); return h*60+m; }
function minutesToTime(mins){
  mins = ((mins % 1440) + 1440) % 1440;
  const h = Math.floor(mins/60), m = mins%60;
  return String(h).padStart(2,'0')+':'+String(m).padStart(2,'0');
}
function doneRecord(templateId){ return state.operatorTasksDone.find(d=>d.templateId===templateId); }
function setDemoNow(val){ state.demoNow = val; render(); }

// В демо время «на телефоне» имитируется вручную (state.demoNow); в живом режиме статус
// due/overdue должен идти от настоящих часов устройства, а не от застывшего демо-значения —
// иначе у реального оператора чек-лист всегда выглядел бы просроченным или недоступным.
function currentClockMinutes(){
  if(state.live){ const d = new Date(); return d.getHours()*60 + d.getMinutes(); }
  return timeToMinutes(state.demoNow);
}

function computeScheduleStatus(template){
  const done = doneRecord(template.id);
  if(done) return {state:'done', label:'Выполнено сегодня в '+done.doneAt};
  if(!template.schedule || template.schedule.freq==='weekly'){
    return {state:'due', label:template.schedule ? 'Плановая проверка, '+template.schedule.label : ''};
  }
  const grace = 60;
  const nowMin = currentClockMinutes();
  const dueMin = timeToMinutes(template.schedule.time);
  if(nowMin < dueMin) return {state:'upcoming', label:'Появится в '+template.schedule.time};
  if(nowMin <= dueMin+grace) return {state:'due', label:'Нужно заполнить до '+minutesToTime(dueMin+grace)};
  return {state:'overdue', label:'Просрочено с '+template.schedule.time};
}

// Собирает фактический список пунктов чек-листа для точки: у попостовых шаблонов
// (сейчас — ежедневный чек-лист МСО) пункты повторяются по числу постов точки,
// плюс отдельные пункты на всю точку целиком.
function buildChecklistItems(template, point){
  if(!template.multiPost) return template.items;
  const items = [];
  const posts = point.posts || 1;
  for(let i=1;i<=posts;i++){
    template.perPostItems.forEach(pi=> items.push({text:'Пост '+i+' — '+pi.text, critical:pi.critical, photo:pi.photo, weight:pi.weight, type:pi.type}));
  }
  template.siteItems.forEach(si=> items.push(si));
  return items;
}

// ---------- Утилиты ----------

function pointById(id){ return state.points.find(p=>p.id===id); }
function templateById(id){ return state.templates.find(t=>t.id===id); }

// Вес пункта чек-листа (требование ТЗ п.3.2). Пункт без явного веса считается за 1, поэтому
// старые шаблоны, где веса не заданы, продолжают считаться как простой процент выполненных
// пунктов — их балл не меняется. Там, где веса заданы (импорт из действующего сервиса:
// например «Итоговая оценка мойки» весит 5 против 1 у обычного пункта), балл становится
// взвешенным и совпадает с привычным для проверяющих.
function itemWeight(it){
  const w = Number(it && it.weight);
  // Явный ноль сохраняем: в реальных чек-листах так помечают пункты, которые не влияют на балл
  // (например, «Комментарии проверяющего»). Отсутствующий/битый вес — это 1.
  return (isFinite(w) && w >= 0) ? w : 1;
}

// Пункт-комментарий: не оценивается «да/нет», а просто просит описать словами (в источнике —
// «Общие комментарии по проверке», вес 0). Требование ТЗ п.3.2 про текстовый тип ответа.
function isTextItem(it){ return !!it && it.type === 'text'; }

// Пункт со шкалой 0–5 (ТЗ п.3.2, «тип ответа: шкала»). Нужен там, где «да/нет» слишком грубо:
// качество помытых машин, чистота территории — это степень, а не факт. В балл идёт доля от
// максимума: оценка 4 из 5 даёт 80% веса пункта, 0 — ноль (полный провал, а не «минимум»).
function isScaleItem(it){ return !!it && it.type === 'scale'; }
const SCALE_MIN = 0;
const SCALE_MAX = 5;
const SCALE_STEPS = [0,1,2,3,4,5];
// Оценка, до которой включительно пункт считается замечанием: требует фото с комментарием и
// заводит нарушение, как ответ «Нет». Иначе низкая оценка осталась бы цифрой без объяснения
// и без работы по ней.
const SCALE_PROBLEM_AT = 2;

function scaleValue(answer){
  if(answer===null || answer===undefined || answer==='') return null;
  const n = Number(answer);
  return (isFinite(n) && n>=SCALE_MIN && n<=SCALE_MAX) ? n : null;
}

// Пункт считается заполненным. Для шкалы этого мало — нужна именно выставленная оценка:
// иначе оставшееся от прежних версий «Н/А» проскочило бы проверку полноты, а на экране
// показывался бы прочерк.
function isItemAnswered(it, a){
  if(isTextItem(it)) return true;                       // комментарий необязателен
  if(isScaleItem(it)) return scaleValue(a && a.answer) !== null;
  return !!a && a.answer !== null && a.answer !== undefined;
}

// Итоговый балл проверки: доля веса пройденных пунктов от веса всех отвеченных.
// answers — массив либо объектов {answer}, либо самих значений 'yes'/'no'.
function computeChecklistScore(items, answers){
  const answerOf = (idx)=>{
    const a = answers[idx];
    return (a && typeof a === 'object') ? a.answer : a;
  };
  let totalWeight = 0, passedWeight = 0;
  items.forEach((it, idx)=>{
    if(isTextItem(it)) return;             // текстовый пункт в балл не входит
    // «Н/А» (неактуально) — на этом объекте такого узла нет (например, ворот на части МСО). Пункт выпадает из
    // расчёта целиком, вместе со своим весом: иначе отсутствующее оборудование занижало бы балл,
    // и приходилось бы держать отдельный шаблон под каждую конфигурацию точки.
    if(answerOf(idx) === 'na') return;
    const w = itemWeight(it);
    totalWeight += w;
    if(isScaleItem(it)){
      // шкала даёт долю веса: оценка 4 из 5 — это 80% пункта, а не «сдано / не сдано»;
      // ноль осознанно даёт ноль веса, поэтому сравниваем с null, а не проверяем «истинность»
      const v = scaleValue(answerOf(idx));
      if(v!==null) passedWeight += w * (v / SCALE_MAX);
    } else if(answerOf(idx) === 'yes'){
      passedWeight += w;
    }
  });
  if(totalWeight === 0) return 0;
  return Math.round((passedWeight / totalWeight) * 100);
}

// Официальный рейтинг объекта = простое среднее по проверкам управляющего и тер.директора
// за последние 30 дней (самооценка оператора и гостевые проверки в расчёт не идут — см. обсуждение
// логики: оператор проверяет сам себя и почти всегда ставит близко к 100%, поэтому его чек-лист
// не показателен для официального рейтинга; вес управляющего/директора нигде не задаётся вручную —
// он получается сам за счёт разной частоты проверок).
const RATING_WINDOW_DAYS = 30;
function computeObjectRating(pointId, asOf){
  const to = asOf || todayStr();
  const from = addDays(to, -RATING_WINDOW_DAYS);
  const scores = state.inspections.filter(i=>{
    if(i.pointId!==pointId || i.kind!=='Плановая') return false;
    if(i.date<from || i.date>to) return false;
    const t = templateById(i.templateId);
    return t && t.role!=='Оператор';
  }).map(i=>i.score);
  if(scores.length===0) return null; // за период нет проверок управляющего/директора — данных недостаточно
  return Math.round(scores.reduce((a,b)=>a+b,0)/scores.length);
}

// Повторяющееся нарушение: один и тот же пункт чек-листа проваливается у одного и того же объекта
// N проверок подряд. Считаем от самой свежей проверки назад (без разрыва на «да») — так флажок
// показывает именно ТЕКУЩУЮ, ещё не устранённую проблему, а не разовый сбой в прошлом.
// Разные роли (оператор/управляющий/директор) используют разные формулировки пунктов, поэтому
// совпадение текста пункта само по себе уже означает «тот же пункт того же чек-листа».
function computeRepeatStreak(pointId, itemText, uptoDate){
  const hist = state.inspections
    .filter(i=>i.pointId===pointId && i.items && i.items.some(it=>it.text===itemText))
    .filter(i=> !uptoDate || i.date<=uptoDate)
    .sort((a,b)=> a.date.localeCompare(b.date) || a.id-b.id);
  let streak = 0;
  for(let k=hist.length-1;k>=0;k--){
    const it = hist[k].items.find(x=>x.text===itemText);
    if(it && it.answer==='na') continue; // узла на объекте нет — проверка эту серию не подтверждает и не обрывает
    if(it && it.answer==='no') streak++;
    else break;
  }
  return streak;
}

// Собирает по всей сети пункты чек-листов, которые сейчас «горят» minStreak и более проверок подряд —
// чтобы это было видно одним списком, а не только при открытии каждой проверки по отдельности.
function getRepeatingViolations(minStreak){
  minStreak = minStreak || 2;
  const result = [];
  state.points.forEach(p=>{
    const hist = state.inspections.filter(i=>i.pointId===p.id && i.items && i.items.length);
    const itemTexts = new Set();
    hist.forEach(i=> i.items.forEach(it=> itemTexts.add(it.text)));
    itemTexts.forEach(text=>{
      const streak = computeRepeatStreak(p.id, text);
      if(streak>=minStreak){
        const relevant = hist.filter(i=>i.items.some(it=>it.text===text)).sort((a,b)=>b.date.localeCompare(a.date));
        const last = relevant[0];
        const lastItem = last.items.find(it=>it.text===text);
        result.push({pointId:p.id, pointName:p.name, pointType:p.type, itemText:text, critical:!!lastItem.critical, streak, lastDate:last.date});
      }
    });
  });
  return result.sort((a,b)=> b.streak-a.streak || (b.critical - a.critical) || a.pointName.localeCompare(b.pointName));
}

function scoreBadge(score){
  if(score>95) return `<span class="badge badge-success">${score}</span>`;
  if(score>90) return `<span class="badge badge-warning">${score}</span>`;
  return `<span class="badge badge-danger">${score}</span>`;
}

function statusBadge(status){
  const map = {
    'новое':'badge-neutral',
    'в работе':'badge-warning',
    'устранено':'badge-success',
    'закрыто':'badge-success',
    'просрочено':'badge-danger'
  };
  return `<span class="badge ${map[status]||'badge-neutral'}">${status}</span>`;
}

function showBanner(text){
  state.banner = text;
  render();
  setTimeout(()=>{ state.banner = null; renderIfBannerStale(text); }, 2500);
}
function renderIfBannerStale(text){
  if(state.banner === null){ render(); }
}

// ---------- Рендер шапки/навигации ----------

const CONSOLE_SECTIONS = [
  {id:'analytics', label:'Аналитика', title:'Аналитика', subtitle:'Рейтинг точек и динамика — сравнение только внутри одного типа мойки'},
  {id:'inspections', label:'Проверки', title:'Проверки', subtitle:'Журнал плановых проверок по всей сети'},
  {id:'planning', label:'Планирование проверок', title:'Планирование проверок', subtitle:'Назначение внеплановых/дополнительных проверок объектам сети'},
  {id:'repeats', label:'Повторяющиеся нарушения', title:'Повторяющиеся нарушения', subtitle:'Пункты чек-листов, которые не устраняются 2 и более проверки подряд на одном объекте'},
  {id:'guest', label:'Гостевые проверки', title:'Гостевые проверки', subtitle:'Результаты тайного покупателя — видны директору и отделу качества'},
  {id:'users', label:'Пользователи', title:'Пользователи', subtitle:'Сотрудники и гибкие права доступа'},
  {id:'objects', label:'Объекты проверок', title:'Объекты проверок', subtitle:''},
  {id:'templates', label:'Шаблоны чек-листов', title:'Шаблоны чек-листов', subtitle:'Конструктор — состав и периодичность по типу точки и роли'}
];

// Группы левого меню с подпунктами. Подпункты всегда видны (с отступом), без сворачивания —
// «Проверки» включает «Повторяющиеся нарушения», «Администрирование» включает
// «Пользователи», «Объекты проверок», «Шаблоны чек-листов».
const NAV_GROUPS = {
  inspections: {ownSectionId:'inspections', children:['planning','repeats']},
  admin: {label:'Администрирование', ownSectionId:null, children:['users','objects','templates']}
};
const NAV_ORDER = ['analytics', {group:'inspections'}, 'guest', {group:'admin'}];

// Административные разделы требуют соответствующего права у вошедшего сотрудника — управляющему
// и оператору справочники сети не нужны, и показывать их бессмысленно: писать в них им всё равно
// не даст RLS (см. can_manage_users/can_manage_points в SQL-патчах). Проверяем именно perms-флаг,
// а не роль — права в проекте настраиваются индивидуально (см. togglePerm и DEFAULT_PERMS_BY_ROLE).
// «Видеть проверки» (viewInspections) закрывает доступ к самим разделам с проверками. КАКИЕ
// именно проверки видны — определяет не этот флаг, а распределение объектов (my_point_ids в базе
// и myScopePointIds здесь): иначе два механизма управляли бы одним и тем же, и настройка стала бы
// непредсказуемой. Раздел «Планирование» намеренно НЕ закрыт этим флагом — там исполнитель видит
// назначенные ему проверки и проходит их.
const SECTION_PERM = {
  users:'addUsers', objects:'addPoints', templates:'createChecklists',
  inspections:'viewInspections', repeats:'viewInspections'
};

function canSeeSection(sectionId){
  const need = SECTION_PERM[sectionId];
  if(!need) return true;                 // раздел без ограничений — виден всем вошедшим
  if(!state.live) return true;           // демо-показ демонстрирует кабинет целиком, без роли
  return !!(state.appUser && state.appUser.perms && state.appUser.perms[need]);
}

// Право назначать проверки. Оператор по умолчанию его не имеет (он заполняет то, что назначено
// ему, а не распределяет работу), у остальных ролей включено — см. DEFAULT_PERMS_BY_ROLE.
// Видеть раздел «Планирование» и проходить назначенное это право не запрещает.
function canAssignInspections(){
  if(!state.live) return true;           // демо-показ
  return !!(state.appUser && state.appUser.perms && state.appUser.perms.assignInspections);
}

// Точки «моей зоны ответственности» — для ДЕТАЛЬНЫХ разделов (журнал проверок, повторяющиеся
// нарушения). Аналитика их не использует: рейтинги и тренды считаются по всей сети, чтобы
// управляющий видел свои точки в сравнении с остальными (см. supabase-патч, открывающий чтение
// points/inspections всем сотрудникам). Здесь же — ограничение того, что показываем в деталях.
// Возвращает null, если ограничивать не нужно (демо-показ или сотрудник, видящий всю сеть).
function myScopePointIds(){
  if(!state.live || !state.appUser) return null;      // демо-показ — без ограничений
  const u = state.appUser;
  if(u.perms && u.perms.addUsers) return null;         // администратор видит всё
  if(u.role==='Маркетолог' || u.role==='Аудитор') return null;

  const ids = new Set();
  if(u.point_id) ids.add(u.point_id);
  (u.point_ids || []).forEach(id=>ids.add(id));
  if(u.role==='Терр. директор'){
    (u.director_manager_ids || []).forEach(mid=>{
      const m = state.users.find(x=>x.id===mid);
      ((m && m.pointIds) || []).forEach(id=>ids.add(id));
    });
  }
  // объекты назначенных мне проверок — их детали я тоже должен видеть (см. patch10 в базе)
  state.plannedInspections.filter(pl=>pl.assigneeId===u.id).forEach(pl=>ids.add(pl.pointId));
  return [...ids];
}

function isPointInMyScope(pointId){
  const scope = myScopePointIds();
  return scope===null || scope.includes(pointId);
}

function renderConsoleNav(){
  return NAV_ORDER.map(entry=>{
    if(typeof entry === 'string'){
      if(!canSeeSection(entry)) return '';
      const sec = CONSOLE_SECTIONS.find(s=>s.id===entry);
      return `<button class="nav-btn ${state.section===entry?'active':''}" onclick="setSection('${entry}')">${sec.label}</button>`;
    }
    const key = entry.group;
    const g = NAV_GROUPS[key];
    const visibleChildren = g.children.filter(canSeeSection);
    const ownVisible = !!g.ownSectionId && canSeeSection(g.ownSectionId);
    // группа без доступных пунктов вообще не рисуется — иначе остался бы висеть пустой заголовок
    if(!ownVisible && visibleChildren.length===0) return '';
    const ownSec = g.ownSectionId ? CONSOLE_SECTIONS.find(s=>s.id===g.ownSectionId) : null;
    const label = g.label || (ownSec ? ownSec.label : key);
    const isActiveOwn = ownVisible && state.section===g.ownSectionId;
    const header = ownVisible
      ? `<button class="nav-btn nav-group-toggle ${isActiveOwn?'active':''}" onclick="setSection('${g.ownSectionId}')">${label}</button>`
      : `<div class="nav-btn nav-group-toggle" style="cursor:default;">${label}</div>`;
    return `
      ${header}
      ${visibleChildren.map(childId=>{
        const cs = CONSOLE_SECTIONS.find(s=>s.id===childId);
        return `<button class="nav-btn nav-sub-btn ${state.section===childId?'active':''}" onclick="setSection('${childId}')">${cs.label}</button>`;
      }).join('')}
    `;
  }).join('');
}

function setSection(section){
  // из открытого чек-листа сайдбар должен работать — но не молча выбрасывать заполненное
  if(!abandonChecklist()) return;
  state.section = section;
  render();
}

function openPreview(role){
  state.mode = 'preview';
  state.previewRole = role;
  if(role==='guest'){
    // каждый заход в демо гостя начинается заново с шага «выбор объекта + представиться»
    state.guestSubmitted = false;
    state.guestStep = 'intake';
    state.guestPointId = null;
    state.guestPointSearch = '';
    state.guestPointOpen = false;
    state.guestName = '';
    state.guestContact = '';
    state.guestAnswers = {};
  }
  render();
}

function exitPreview(){
  restoreDemoData();
  state.mode = PILOT_ONLY ? 'login' : 'console'; // тот же случай для выхода из гостевой (реальной) проверки в пилоте
  render();
}

// ---------- ОПЕРАТОР ----------

let checklistDraft = null; // {templateId, answers: [{answer:null/'yes'/'no', photo:false}]}

function renderOperator(){
  const myViolations = state.violations.filter(v => v.pointId===state.myPointId && v.status!=='закрыто' && v.status!=='устранено');

  if(checklistDraft){
    return renderChecklistForm();
  }

  const point = pointById(state.myPointId);
  // На конвейере роли «оператор» нет — чек-листы там заполняют техник/управляющий/директор (другие разделы).
  const dailyTemplates = state.templates.filter(t=>t.role==='Оператор' && t.pointType===point.type && t.schedule && t.schedule.freq==='daily');

  const renderScheduleItem = (t)=>{
    const items = buildChecklistItems(t, point);
    const st = computeScheduleStatus(t);
    const cardCls = st.state==='due' ? 'is-due' : st.state==='overdue' ? 'is-overdue' : st.state==='done' ? 'is-done' : '';
    const badgeCls = st.state==='done' ? 'badge-success' : st.state==='overdue' ? 'badge-danger' : st.state==='due' ? 'badge-warning' : 'badge-neutral';
    const canFill = st.state==='due' || st.state==='overdue';
    return `
      <div class="schedule-item ${cardCls}">
        <div class="schedule-item-top">
          <div>
            <div class="schedule-item-title">${t.name}</div>
            <div class="schedule-item-sched">${items.length} пункт(ов)${t.multiPost ? ' · по '+(point.posts||1)+' постам + территория' : ''}${t.schedule.freq==='daily' ? ' · ежедневно к '+t.schedule.time : ' · '+t.schedule.label}</div>
          </div>
          <span class="badge ${badgeCls}">${st.label}</span>
        </div>
        <div style="margin-top:12px;">
          ${canFill
            ? (()=>{
                const progress = savedDraftProgress(t.id, state.myPointId, null);
                return `<button class="btn btn-sm" onclick="startChecklist(${t.id})">${progress
                  ? 'Продолжить заполнение ('+progress.answered+' из '+progress.total+')'
                  : (st.state==='overdue' ? 'Заполнить (с опозданием)' : 'Заполнить сейчас')}</button>`;
              })()
            : st.state==='upcoming'
              ? `<button class="btn btn-sm" disabled>Пока недоступно</button>`
              : ''}
        </div>
      </div>
    `;
  };

  return `
    ${state.live ? '' : `
    <div class="demo-clock-card">
      <div class="demo-label">Демо: не часть продукта</div>
      <label style="font-size:12.5px;">Симулировать время на телефоне: </label>
      <select onchange="setDemoNow(this.value)" style="margin-left:4px;">
        ${DEMO_TIME_OPTIONS.map(t=>`<option value="${t}" ${state.demoNow===t?'selected':''}>${t}</option>`).join('')}
      </select>
      <div style="font-size:11.5px;color:var(--text-muted);margin-top:6px;">В реальном продукте чек-лист сам появляется по расписанию — эту кнопку добавили только для теста на телефоне.</div>
    </div>
    `}

    ${bannerHtml()}

    <h3 style="margin:0 0 10px 0;font-size:14px;">Чек-лист на сегодня <span class="muted" style="font-weight:400">(${point.posts||1} пост(ов) на точке)</span></h3>
    ${dailyTemplates.map(renderScheduleItem).join('')}

    <h3 style="margin:20px 0 10px 0;font-size:14px;">Мои нарушения <span class="muted" style="font-weight:400">(назначены на меня)</span></h3>
    ${myViolations.length===0 ? `<div class="empty-state">Нарушений нет — отличная работа.</div>` : myViolations.map(v=>`
      <div class="schedule-item">
        <div class="schedule-item-title" style="font-size:13.5px;">${v.item}</div>
        <div style="margin:8px 0;display:flex;gap:6px;flex-wrap:wrap;">
          ${v.critical?'<span class="badge badge-danger">критично</span>':'<span class="badge badge-neutral">обычное</span>'}
          ${statusBadge(v.status)}
          <span class="badge badge-neutral">срок: ${v.deadline}</span>
        </div>
        <button class="btn btn-sm btn-secondary" style="width:100%;" onclick="fixViolation(${v.id})">Устранить</button>
      </div>
    `).join('')}
  `;
}

// Пустые ответы под состав чек-листа, либо восстановленные из незаконченного черновика.
function answersForChecklist(items, templateId, pointId, planId){
  const saved = savedDraftFor(templateId, pointId, planId, items);
  if(saved) return saved.answers.map(a=>{
    // photoPath — формат черновиков до появления нескольких фото на пункт; переносим в список,
    // чтобы уже начатые на объекте чек-листы не потеряли приложенный снимок
    const photos = Array.isArray(a.photos) ? a.photos.filter(p=>p && p.path).map(p=>({path:p.path, preview:null}))
      : (a.photoPath ? [{path:a.photoPath, preview:null}] : []);
    return { answer: a.answer===undefined?null:a.answer, photo: photos.length>0 || !!a.photo, comment: a.comment||'', photos };
  });
  return items.map(()=>({answer:null, photo:false, comment:'', photos:[]}));
}

// Превью для уже загруженных снимков после возврата к черновику: сама картинка лежит в
// хранилище, ссылку на неё нужно запросить заново (она подписанная и живёт ограниченное время).
async function restorePhotoPreviews(){
  if(!checklistDraft || !state.live || !sb) return;
  const pending = [];
  checklistDraft.answers.forEach(a=> (a.photos||[]).forEach(p=>{ if(p.path && !p.preview) pending.push(p); }));
  if(pending.length===0) return;
  for(const p of pending){
    try{
      const { data } = await sb.storage.from('inspection-photos').createSignedUrl(p.path, 3600);
      if(data && data.signedUrl) p.preview = data.signedUrl;
    } catch(e){ /* без превью снимок всё равно отмечен как приложенный */ }
  }
  render();
}

function startChecklist(templateId){
  const t = templateById(templateId);
  const items = buildChecklistItems(t, pointById(state.myPointId));
  checklistDraft = {
    templateId,
    pointId: state.myPointId,
    planId: null,
    items,
    answers: answersForChecklist(items, templateId, state.myPointId, null)
  };
  state.collapsedGroups = {};
  state.highlightItem = null;
  render();
  restorePhotoPreviews();
}

// Прохождение проверки, назначенной через «Планирование проверок»: тот же чек-лист и та же
// форма, что у оператора на телефоне, но объект берётся из плана (он может быть не «моим»
// по портфелю — проверку мне назначили), а по завершении план закрывается автоматически
// с фактическим баллом, вместо ручного ввода балла в prompt().
function startPlanChecklist(planId){
  const plan = state.plannedInspections.find(p=>p.id===planId);
  if(!plan) return;
  const t = templateById(plan.templateId);
  const p = pointById(plan.pointId);
  if(!t || !p){ showBanner('Не найден чек-лист или объект этой проверки.'); return; }
  const items = buildChecklistItems(t, p);
  checklistDraft = {
    templateId: t.id,
    pointId: p.id,
    planId: plan.id,
    items,
    answers: answersForChecklist(items, t.id, p.id, plan.id)
  };
  state.collapsedGroups = {};
  state.highlightItem = null;
  render();
  restorePhotoPreviews();
}

function draftPointId(){ return (checklistDraft && checklistDraft.pointId) || state.myPointId; }

function setAnswer(idx, val){
  checklistDraft.answers[idx].answer = val;
  if(state.highlightItem===idx) state.highlightItem = null; // ответили — подсветка больше не нужна
  saveChecklistDraft();
  render();
}

// Пока тянут ползунок — только обновляем цифру рядом, без перерисовки: иначе элемент
// пересоздавался бы на каждый шаг и бегунок «выпрыгивал» бы из-под пальца.
function previewScale(idx, val){
  const el = document.getElementById('scale-val-'+idx);
  if(el) el.textContent = val;
  const wrap = el && el.closest('.scale-wrap');
  if(wrap) wrap.classList.remove('scale-empty');
}

// Ползунок отпустили — фиксируем оценку. Слушаем и отпускание пальца, а не только изменение:
// иначе оценку «0» нельзя было бы поставить касанием, ведь бегунок и так стоит в этой позиции.
function commitScale(idx, val){
  const v = scaleValue(val);
  if(v===null) return;
  setAnswer(idx, String(v));
}

// ---------- Фото к пункту чек-листа ----------
// Снимок с телефона — это 3–5 МБ, а заполняют на объекте с мобильного интернета. Поэтому перед
// отправкой фото уменьшается до 1600px по большей стороне и пережимается в JPEG: качество для
// «видно ли грязь/поломку» сохраняется, размер падает до сотен килобайт.
const PHOTO_MAX_SIDE = 1600;
const PHOTO_JPEG_QUALITY = 0.82;

function shrinkImageFile(file){
  return new Promise((resolve, reject)=>{
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = ()=>{
      const scale = Math.min(1, PHOTO_MAX_SIDE / Math.max(img.width, img.height));
      const w = Math.round(img.width * scale), h = Math.round(img.height * scale);
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      URL.revokeObjectURL(url);
      canvas.toBlob(b=> b ? resolve(b) : reject(new Error('Не удалось обработать снимок')), 'image/jpeg', PHOTO_JPEG_QUALITY);
    };
    img.onerror = ()=>{ URL.revokeObjectURL(url); reject(new Error('Файл не похож на изображение')); };
    img.src = url;
  });
}

// Загрузка снимков в хранилище. К одному пункту можно приложить несколько фото — на объекте
// обычно нужен и общий вид, и деталь (крупно сам дефект). Путь включает объект и дату, чтобы
// файл можно было найти глазами в Storage, не поднимая базу.
async function uploadChecklistPhotos(idx, input){
  const files = (input && input.files) ? [...input.files] : [];
  if(files.length===0) return;
  const a = checklistDraft.answers[idx];
  a.photos = a.photos || [];
  a.photoError = '';
  a.photoUploading = true;
  render();
  const failures = [];
  for(let n=0; n<files.length; n++){
    try{
      const blob = await shrinkImageFile(files[n]);
      let path = null;
      if(state.live && sb){
        const pointId = draftPointId();
        const stamp = new Date().toISOString().replace(/[:.]/g,'-');
        path = `point-${pointId}/${todayStr()}/${stamp}-item${idx}-${a.photos.length+1}.jpg`;
        const { error } = await sbRetry(()=> sb.storage.from('inspection-photos').upload(path, blob, { contentType:'image/jpeg', upsert:false }));
        if(error) throw error;
      }
      // превью из локального файла — показывается сразу, без обращения к серверу
      a.photos.push({ path, preview: URL.createObjectURL(blob) });
      a.photo = true;
    } catch(e){
      failures.push((e && e.message) || String(e));
    }
  }
  a.photoUploading = false;
  if(failures.length){
    a.photoError = (failures.length===files.length ? 'Не удалось приложить фото: ' : 'Часть снимков не загрузилась: ') + failures[0] + '. Попробуйте ещё раз.';
  }
  if(input) input.value = ''; // иначе повторный выбор того же файла не вызовет onchange
  saveChecklistDraft();
  render();
}

function removeChecklistPhoto(idx, photoIdx){
  const a = checklistDraft.answers[idx];
  const list = a.photos || [];
  const gone = list[photoIdx];
  if(gone && gone.preview){ try{ URL.revokeObjectURL(gone.preview); }catch(e){} }
  a.photos = list.filter((_,i)=>i!==photoIdx);
  a.photo = a.photos.length>0;
  a.photoError = '';
  saveChecklistDraft();
  render();
}
// Комментарий печатают на телефоне, а экран чек-листа тяжёлый (десятки пунктов, миниатюры фото).
// Поэтому здесь НЕ вызываются ни render(), ни запись черновика на каждый символ: перерисовка
// пересоздаёт <textarea> прямо во время набора (часть нажатий теряется — та же беда, что была
// в поиске сотрудника на входе), а сериализация черновика на каждую букву добавляет задержку.
// Поле само показывает введённый текст; экран обновляется, когда из поля уходит фокус (onblur),
// а черновик сохраняется с задержкой после того, как перестали печатать.
let commentSaveTimer = null;
function setComment(idx, value){
  checklistDraft.answers[idx].comment = value;
  clearTimeout(commentSaveTimer);
  commentSaveTimer = setTimeout(()=>{ commentSaveTimer = null; saveChecklistDraft(); }, 700);
}

// Уход из поля комментария: досохраняем и перерисовываем — обновятся рамка поля, счётчик
// отвеченного и доступность кнопки «Отправить проверку».
function commitComment(){
  clearTimeout(commentSaveTimer);
  commentSaveTimer = null;
  saveChecklistDraft();
  render();
}
// Прерывание заполнения: ответы уже сохранены в localStorage (см. saveChecklistDraft), поэтому
// уход с экрана ничего не теряет — к чек-листу можно вернуться кнопкой «Продолжить заполнение».
// Спрашивать подтверждение незачем.
function abandonChecklist(){
  if(!checklistDraft) return true;
  saveChecklistDraft();
  checklistDraft = null;
  return true;
}

function cancelChecklist(){
  abandonChecklist();
  flushCloudDraftPush(); // уходим с экрана — не ждём таймер, отправляем сразу
  render();
}

// Закрытие вкладки/уход со страницы: досылаем то, что ещё не успело уйти по таймеру.
window.addEventListener('pagehide', ()=>{ try{ flushCloudDraftPush(); }catch(e){} });
document.addEventListener('visibilitychange', ()=>{
  if(document.visibilityState==='hidden'){ try{ flushCloudDraftPush(); }catch(e){} }
});

// Явный сброс: удаляет сохранённые ответы и начинает этот чек-лист с чистого листа.
function restartChecklist(){
  if(!checklistDraft) return;
  const answered = checklistDraft.answers.filter(a=>a.answer!==null).length;
  if(answered>0 && !confirm('Удалить '+answered+' уже отвеченных пунктов и начать чек-лист заново?')) return;
  clearSavedDraft(checklistDraft.templateId, checklistDraft.pointId, checklistDraft.planId);
  checklistDraft.answers = checklistDraft.items.map(()=>({answer:null, photo:false, comment:''}));
  render();
}

// Разбивка чек-листа на сворачиваемые блоки. Блок — это то, что стоит в тексте пункта перед
// тире: «Пост 3 — Стены», «Зал — Пол без сколов», «Территория — Урны чистые». Так раздел
// задаётся в самой формулировке пункта, без отдельной сущности в шаблоне: достаточно назвать
// пункты одинаковым началом, и они соберутся в блок. Пункты без такого начала идут как есть.
const GROUP_PREFIX_RE = /^(.{2,40}?)\s+—\s+/;

function checklistGroupTitle(text){
  const m = GROUP_PREFIX_RE.exec(text || '');
  return m ? m[1].trim() : null;
}

function checklistGroups(items){
  const groups = [];
  let current = null;
  items.forEach((it, idx)=>{
    const title = checklistGroupTitle(it.text);
    if(!current || current.title !== title){
      current = { title, indexes: [] };
      groups.push(current);
    }
    current.indexes.push(idx);
  });
  return groups;
}

function toggleChecklistGroup(title){
  state.collapsedGroups[title] = !state.collapsedGroups[title];
  render();
}

function setAllChecklistGroups(collapsed){
  const groups = checklistGroups(checklistDraft.items).filter(g=>g.title);
  state.collapsedGroups = {};
  if(collapsed) groups.forEach(g=>{ state.collapsedGroups[g.title] = true; });
  render();
}

// Переход к пункту, который не заполнен: раскрывает его блок, прокручивает к нему и подсвечивает.
// Иначе на чек-листе из сотни пунктов приходилось искать нужный глазами.
function focusChecklistItem(idx){
  const it = checklistDraft && checklistDraft.items[idx];
  if(!it) return;
  const title = checklistGroupTitle(it.text);
  if(title && state.collapsedGroups[title]) state.collapsedGroups[title] = false;
  state.highlightItem = idx;
  render();
  // прокрутка — после перерисовки, иначе элемента ещё нет в DOM
  setTimeout(()=>{
    const el = document.getElementById('chk-item-'+idx);
    if(el) el.scrollIntoView({behavior:'smooth', block:'center'});
  }, 60);
}

// Все замечания проверки одним списком: ответы «Нет» и низкие оценки шкалы вместе с их
// комментариями. Иначе, чтобы понять итог проверки на 130 пунктов, приходилось листать весь
// чек-лист и выискивать красные пункты. Используется и при заполнении, и при просмотре в журнале.
function checklistIssues(items, answers){
  const out = [];
  (items||[]).forEach((it, idx)=>{
    const a = answers[idx];
    if(!a) return;
    const answer = (a && typeof a === 'object') ? a.answer : a;
    const comment = (a && typeof a === 'object') ? (a.comment||'') : '';
    if(isTextItem(it)) return;
    const v = isScaleItem(it) ? scaleValue(answer) : null;
    const isNo = answer === 'no';
    const isLowScore = v !== null && v <= SCALE_PROBLEM_AT;
    if(!isNo && !isLowScore) return;
    out.push({
      idx,
      text: it.text,
      comment: comment.trim(),
      score: v,
      critical: !!it.critical,
      photos: (a.photos || []).filter(p=>p && p.path).length
    });
  });
  return out;
}

function renderIssuesSummary(issues, opts){
  const o = opts || {};
  if(issues.length===0){
    return `<div class="card"><h3>Замечания по проверке</h3><div class="empty-state">Замечаний нет — все пункты в порядке.</div></div>`;
  }
  return `
    <div class="card" style="border-color:var(--danger);">
      <h3>Замечания по проверке <span class="muted">(${issues.length})</span></h3>
      <div style="font-size:11.5px;color:var(--text-muted);margin-bottom:10px;">Собрано автоматически из пунктов с ответом «Нет» и низкой оценкой — можно переслать управляющему целиком.</div>
      ${issues.map(is=>`
        <div style="padding:8px 0;border-top:1px solid var(--border);">
          <div style="font-size:13px;font-weight:600;">
            ${is.text}
            ${is.score!==null ? `<span class="badge badge-danger" style="margin-left:6px;">оценка ${is.score}/${SCALE_MAX}</span>` : ''}
            ${is.critical ? `<span class="tag" style="color:var(--danger)">критический</span>` : ''}
          </div>
          <div style="font-size:12.5px;color:${is.comment?'var(--text)':'var(--text-muted)'};margin-top:3px;">
            ${is.comment ? '💬 '+is.comment.replace(/</g,'&lt;') : 'комментарий не заполнен'}
            ${is.photos ? ` · фото: ${is.photos}` : ''}
          </div>
          ${o.clickable ? `<a onclick="focusChecklistItem(${is.idx})" style="font-size:12px;cursor:pointer;">перейти к пункту №${is.idx+1}</a>` : ''}
        </div>
      `).join('')}
    </div>
  `;
}

function renderChecklistForm(){
  const t = templateById(checklistDraft.templateId);
  const items = checklistDraft.items;
  const scored = items.filter(it=>!isTextItem(it)).length; // пункты-комментарии в счётчик не идут
  const answeredCount = items.filter((it,idx)=>!isTextItem(it) && isItemAnswered(it, checklistDraft.answers[idx])).length;
  const photoUploading = checklistDraft.answers.some(a=>a.photoUploading); // не отправляем, пока снимок в пути
  const groups = checklistGroups(items);
  const hasGroups = groups.some(g=>g.title);

  const renderItem = (idx)=>{
        const it = items[idx];
        const a = checklistDraft.answers[idx];
        const highlighted = state.highlightItem===idx;
        // внутри блока не повторяем его название: в блоке «Пост 3» пункт читается как «Стены»
        const groupTitle = checklistGroupTitle(it.text);
        const shownText = groupTitle ? String(it.text).replace(GROUP_PREFIX_RE, '') : it.text;

        // Пункт-комментарий: только текстовое поле, без «Да/Нет», в балл не входит
        if(isTextItem(it)) return `
        <div class="checklist-item ${highlighted?'item-highlight':''}" id="chk-item-${idx}">
          <div class="qtext">${idx+1}. ${shownText}</div>
          <div style="margin-top:8px;">
            <textarea id="opComment${idx}" rows="3" data-quiet-render="1" style="width:100%;box-sizing:border-box;border:1px solid var(--border);border-radius:7px;padding:6px 9px;font-family:inherit;" placeholder="Опишите словами (необязательно)" oninput="setComment(${idx}, this.value)" onblur="commitComment()">${(a.comment||'').replace(/</g,'&lt;')}</textarea>
          </div>
        </div>`;

        // Низкая оценка по шкале — такое же замечание, как ответ «Нет»: нужны фото и объяснение,
        // иначе в журнале останется цифра «2» без указания, что именно не так.
        const scaleProblem = isScaleItem(it) && scaleValue(a.answer) !== null && scaleValue(a.answer) <= SCALE_PROBLEM_AT;
        // при «Н/А» проверять нечего — ни фото, ни комментарий не требуются
        const photoRequired = a.answer!=='na' && (it.photo || a.answer==='no' || scaleProblem);
        const commentRequired = a.answer==='no' || scaleProblem;
        return `
        <div class="checklist-item ${highlighted?'item-highlight':''}" id="chk-item-${idx}">
          <div class="row">
            <div>
              <div class="qtext">${idx+1}. ${shownText}</div>
              <div class="tags">
                ${it.critical?'<span class="tag" style="color:var(--danger)">критический пункт</span>':''}
                ${it.photo?'<span class="tag">фото обязательно</span>':''}
                ${itemWeight(it)>1?`<span class="tag" style="color:var(--primary)">вес ×${itemWeight(it)}</span>`:''}
                ${isScaleItem(it)?`<span class="tag">оценка ${SCALE_MIN}–${SCALE_MAX}</span>`:''}
              </div>
            </div>
            ${isScaleItem(it) ? '' : `
            <div class="answer-toggle">
              <button class="toggle-btn yes ${a.answer==='yes'?'active':''}" onclick="setAnswer(${idx},'yes')">Да</button>
              <button class="toggle-btn no ${a.answer==='no'?'active':''}" onclick="setAnswer(${idx},'no')">Нет</button>
              <button class="toggle-btn na ${a.answer==='na'?'active':''}" title="Неактуально: на этом объекте такого нет — пункт не влияет на балл" onclick="setAnswer(${idx},'na')">Н/А</button>
            </div>
            `}
          </div>
          ${isScaleItem(it) ? (()=>{
            // Ползунок, а не ряд кнопок: оценка здесь степень, и тянуть один бегунок по шкале
            // быстрее, чем целиться в мелкие кнопки на телефоне.
            // «Н/А» у шкалы нет: если пункт оценивают по степени, оценивать всегда есть что.
            // Старые ответы «na» (шкала успела побывать с этой кнопкой) читаются как
            // невыставленная оценка — ползунок активен, значение перезапишется при первом движении.
            const v = scaleValue(a.answer);
            const pos = v===null ? 0 : v;
            return `
            <div class="scale-wrap ${v===null?'scale-empty':''}">
              <div class="scale-head">
                <span class="scale-value" id="scale-val-${idx}">${v===null ? '—' : v}</span>
                <span style="font-size:11.5px;color:var(--text-muted);">0 — полный провал, ${SCALE_MAX} — без замечаний</span>
              </div>
              <input type="range" class="scale-range" data-quiet-render="1"
                min="${SCALE_MIN}" max="${SCALE_MAX}" step="1" value="${pos}"
                oninput="previewScale(${idx}, this.value)"
                onchange="commitScale(${idx}, this.value)"
                onpointerup="commitScale(${idx}, this.value)"
                onkeyup="commitScale(${idx}, this.value)">
              <div class="scale-ticks">${SCALE_STEPS.map(n=>`<span>${n}</span>`).join('')}</div>
              ${v===null ? `<div class="scale-hint">Оценка не выставлена — передвиньте ползунок</div>` : ''}
            </div>
            `;})() : ''}
          ${(()=>{
            // Блок фото показывается ВСЕГДА, а не появляется после выбора ответа: иначе при каждом
            // нажатии «Да/Нет» содержимое ниже сдвигалось, и следующий пункт уезжал из-под пальца.
            const photos = a.photos || [];
            return `
            <div style="margin-top:10px;">
              ${photos.length>0 ? `
                <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px;">
                  ${photos.map((ph,pi)=>`
                    <div style="position:relative;">
                      ${ph.preview
                        ? `<img src="${ph.preview}" alt="Фото ${pi+1}" style="width:96px;height:96px;object-fit:cover;border-radius:8px;border:1px solid var(--success);display:block;">`
                        : `<div style="width:96px;height:96px;border-radius:8px;border:1px solid var(--success);display:flex;align-items:center;justify-content:center;font-size:22px;background:var(--success-bg);">📷</div>`}
                      <button onclick="removeChecklistPhoto(${idx}, ${pi})" title="Убрать этот снимок"
                        style="position:absolute;top:-6px;right:-6px;width:22px;height:22px;border-radius:50%;border:none;background:var(--danger);color:#fff;font-size:13px;line-height:1;cursor:pointer;">×</button>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
              ${a.photoUploading ? `<div class="photo-btn">⏳ Загружаем снимки…</div>` : `
                <label class="photo-btn ${photos.length>0?'attached':''}" style="cursor:pointer;">
                  📷 ${photos.length>0
                      ? 'Добавить ещё фото ('+photos.length+' шт.)'
                      : (photoRequired ? 'Приложить фото — обязательно' : 'Приложить фото — по желанию')}
                  <input type="file" accept="image/*" multiple style="display:none;" onchange="uploadChecklistPhotos(${idx}, this)">
                </label>
              `}
              ${a.photoError ? `<div style="margin-top:6px;font-size:12px;color:var(--danger);">${a.photoError}</div>` : ''}
            </div>
          `;})()}
          ${commentRequired ? `
            <div style="margin-top:8px;">
              <textarea id="opComment${idx}" rows="2" data-quiet-render="1" style="width:100%;box-sizing:border-box;border:1px solid ${a.comment&&a.comment.trim()?'var(--border)':'var(--danger)'};border-radius:7px;padding:6px 9px;font-size:12.5px;font-family:inherit;" placeholder="Опишите, что не так (обязательно)" oninput="setComment(${idx}, this.value)" onblur="commitComment()">${a.comment.replace(/</g,'&lt;')}</textarea>
            </div>
          ` : ''}
        </div>`;
  };

  return `
    ${state.mode==='console' ? `<div style="margin-bottom:10px;"><a onclick="cancelChecklist()" style="font-size:12.5px;cursor:pointer;">← Прервать и вернуться в кабинет (ответы сохранятся)</a></div>` : ''}
    <div class="page-title">${t.name}</div>
    <div class="page-subtitle">
      ${(pointById(draftPointId())||{}).name||''} · заполняется на месте, с фото и геометкой<br>
      Отвечено ${answeredCount} из ${scored} · ответы сохраняются автоматически, можно прерваться и вернуться
    </div>
    <div class="card">
      <div style="font-size:11.5px;color:var(--text-muted);margin-bottom:14px;">
        Если отвечаете «Нет» — обязательно прикрепите фото и опишите проблему в комментарии. К ответу «Да» фото можно приложить по желанию.<br>
        «Н/А» (неактуально) — если на этом объекте такого узла нет (например, ворот): пункт не учитывается в балле.
        ${items.some(isScaleItem) ? `<br>Пункты с оценкой ${SCALE_MIN}–${SCALE_MAX}: ${SCALE_MAX} — без замечаний, ${SCALE_MIN} — полный провал. Оценка ${SCALE_PROBLEM_AT} и ниже требует фото и комментария, как ответ «Нет».` : ''}
      </div>
      ${hasGroups ? `
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">
          <button class="btn btn-secondary btn-sm" onclick="setAllChecklistGroups(true)">Свернуть все блоки</button>
          <button class="btn btn-secondary btn-sm" onclick="setAllChecklistGroups(false)">Развернуть все</button>
        </div>
      ` : ''}
      ${groups.map(g=>{
        if(!g.title) return g.indexes.map(renderItem).join('');
        // сводка по блоку видна и в свёрнутом виде — понятно, где ещё не закончено
        const scoredIn = g.indexes.filter(i=>!isTextItem(items[i]));
        const answeredIn = scoredIn.filter(i=>isItemAnswered(items[i], checklistDraft.answers[i])).length;
        // в счётчике нарушений блока учитываем и низкие оценки шкалы — это тоже замечания
        const failedIn = scoredIn.filter(i=>{
          const a = checklistDraft.answers[i];
          if(a.answer==='no') return true;
          const v = isScaleItem(items[i]) ? scaleValue(a.answer) : null;
          return v!==null && v<=SCALE_PROBLEM_AT;
        }).length;
        const done = answeredIn===scoredIn.length;
        const collapsed = !!state.collapsedGroups[g.title];
        return `
          <div class="group-head ${done?'group-done':''}" onclick="toggleChecklistGroup('${g.title}')">
            <div>
              <span style="font-weight:700;">${g.title}</span>
              <span class="muted" style="font-size:12px;"> · отвечено ${answeredIn} из ${scoredIn.length}${failedIn?` · нарушений: ${failedIn}`:''}</span>
            </div>
            <span style="font-size:12px;color:var(--text-muted);white-space:nowrap;">${collapsed?'развернуть ▾':'свернуть ▴'}</span>
          </div>
          ${collapsed ? '' : g.indexes.map(renderItem).join('')}
        `;
      }).join('')}
    </div>

    ${renderIssuesSummary(checklistIssues(items, checklistDraft.answers), {clickable:true})}

    <div class="card">
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn" ${(photoUploading||state.checklistBusy)?'disabled':''} onclick="submitChecklist()">${state.checklistBusy?'Сохраняем…':(photoUploading?'Ждём загрузку фото…':'Отправить проверку')}</button>
        <button class="btn btn-secondary" ${state.checklistBusy?'disabled':''} onclick="cancelChecklist()" title="Ответы сохранятся, можно вернуться позже">Прервать</button>
        <button class="btn btn-secondary" ${state.checklistBusy?'disabled':''} onclick="restartChecklist()" title="Удалить заполненное и начать этот чек-лист заново">Начать заново</button>
      </div>
      ${answeredCount < scored ? `<div style="margin-top:10px;font-size:12px;color:var(--text-muted)">Осталось ответить: ${scored-answeredCount}. Нажмите «Отправить проверку» — сервис сам перейдёт к первому незаполненному пункту.</div>` : ''}
    </div>
  `;
}

async function submitChecklist(){
  if(state.checklistBusy) return; // защита от повторного нажатия «Отправить» пока идёт сохранение

  // Проверяем полноту здесь, а не блокировкой кнопки: комментарий печатают «тихо», без
  // перерисовки экрана (см. setComment), поэтому заблокированная кнопка ожила бы только после
  // ухода из поля — и первый тап по ней пропадал бы впустую. Заодно можно назвать номер пункта.
  {
    const its = checklistDraft.items;
    const ans = checklistDraft.answers;
    if(ans.some(a=>a.photoUploading)){ showBanner('Дождитесь загрузки фото.'); return; }
    // пункты-комментарии заполнять не обязательно — они не оцениваются.
    // При нехватке чего-либо сразу переходим к этому пункту: искать его глазами среди сотни
    // строк (у попостовых чек-листов их бывает 130+) — то, чего делать не должен человек.
    const noAnswer = its.findIndex((it,idx)=> !isTextItem(it) && !isItemAnswered(it, ans[idx]));
    if(noAnswer>=0){
      const left = its.filter((it,idx)=> !isTextItem(it) && !isItemAnswered(it, ans[idx])).length;
      showBanner('Не отвечено пунктов: '+left+'. Открыт первый из них — №'+(noAnswer+1)+'.');
      focusChecklistItem(noAnswer);
      return;
    }
    // низкая оценка по шкале требует того же, что ответ «Нет» — фото и объяснения
    const isProblem = (it, a)=> a.answer==='no' || (isScaleItem(it) && scaleValue(a.answer)!==null && scaleValue(a.answer)<=SCALE_PROBLEM_AT);
    const noPhoto = its.findIndex((it,idx)=> !isTextItem(it) && ans[idx].answer!=='na' && (it.photo || isProblem(it, ans[idx])) && !(ans[idx].photos && ans[idx].photos.length));
    if(noPhoto>=0){ showBanner('Пункт №'+(noPhoto+1)+': нужно приложить фото.'); focusChecklistItem(noPhoto); return; }
    const noComment = its.findIndex((it,idx)=> !isTextItem(it) && isProblem(it, ans[idx]) && !(ans[idx].comment && ans[idx].comment.trim()));
    if(noComment>=0){ showBanner('Пункт №'+(noComment+1)+': опишите проблему в комментарии.'); focusChecklistItem(noComment); return; }
  }

  const t = templateById(checklistDraft.templateId);
  const pointId = draftPointId();          // у назначенной проверки объект берётся из плана, а не из «моей» точки
  const planId = checklistDraft.planId || null;
  const items = checklistDraft.items;
  // в подсчёт для баннера идут только оцениваемые пункты: ни текстовый комментарий, ни «Н/А»
  // (узла нет на объекте) не являются «непройденными»
  const total = items.filter((it,idx)=>!isTextItem(it) && checklistDraft.answers[idx].answer!=='na').length;
  const passed = items.filter((it,idx)=>!isTextItem(it) && checklistDraft.answers[idx].answer==='yes').length;
  const score = computeChecklistScore(items, checklistDraft.answers); // с учётом весов пунктов
  const itemsPayload = items.map((it,idx)=>({
    text:it.text, critical:it.critical, photo:it.photo, weight:itemWeight(it),
    type: it.type || undefined,          // 'text' — пункт-комментарий, в балл не входит
    answer:checklistDraft.answers[idx].answer,
    comment:checklistDraft.answers[idx].comment||'',
    photos: (checklistDraft.answers[idx].photos || []).filter(p=>p && p.path).map(p=>({ path: p.path }))
  }));

  if(state.live && sb){
    state.checklistBusy = true; render();
    const inspectorLabel = state.appUser ? (state.appUser.name || 'Оператор') : 'Оператор';
    const today = new Date().toISOString().slice(0,10);
    try{
      const { data, error } = await sbRetry(()=> sb.from('inspections').insert({
        point_id: pointId, template_id: t.id, kind: t.type, date: today, score,
        inspector: inspectorLabel, items: itemsPayload
      }).select().single());
      if(error) throw error;
      const inspection = mapInspectionFromDb(data);
      state.inspections.unshift(inspection);

      // Одним запросом на все проваленные пункты сразу, а не по одной вставке в цикле —
      // так на ошибку сети/сервера приходится один ретрай на всю проверку, а не риск того, что
      // часть нарушений тихо не сохранится, пока балл проверки уже показывает их как найденные.
      // нарушение заводится и по низкой оценке шкалы — иначе «2 из 5» осталась бы цифрой,
      // по которой никто не назначил работу
      const failedItems = items.filter((it,idx)=>{
        const a = checklistDraft.answers[idx];
        if(a.answer==='no') return true;
        const v = isScaleItem(it) ? scaleValue(a.answer) : null;
        return v!==null && v<=SCALE_PROBLEM_AT;
      });
      if(failedItems.length>0){
        const { data: vData, error: vErr } = await sbRetry(()=> sb.from('violations').insert(
          failedItems.map(it=>({ point_id: pointId, item: it.text, critical: it.critical, status:'новое' }))
        ).select());
        if(vErr) throw vErr;
        (vData||[]).forEach(row=> state.violations.unshift(mapViolationFromDb(row)));
      }

      if(planId) await closePlanAfterChecklist(planId, inspection, score);

      state.operatorTasksDone.push({templateId:t.id, doneAt: minutesToTime(currentClockMinutes())});
      clearSavedDraft(t.id, pointId, planId); // проверка ушла в базу — черновик больше не нужен
      checklistDraft = null;
      state.checklistBusy = false;
      showBanner(`Проверка сохранена в общей базе. Итоговый балл: ${score}%. ${total-passed>0 ? (total-passed)+' нарушение(й) зафиксировано автоматически.' : 'Нарушений нет.'}`);
    } catch(e){
      state.checklistBusy = false;
      showBanner('Не удалось сохранить в общую базу: ' + (e.message||e) + '. Попробуйте ещё раз.');
    }
    render();
    return;
  }

  const newId = Math.max(0,...state.inspections.map(i=>i.id))+1;
  const localInspection = {
    id:newId, pointId, templateId:t.id, kind:t.type,
    date: todayStr(), score, inspector:'Оператор ' + (pointById(pointId)||{}).name,
    items: itemsPayload
  };
  state.inspections.unshift(localInspection);

  items.forEach((it,idx)=>{
    if(checklistDraft.answers[idx].answer==='no'){
      const vid = Math.max(0,...state.violations.map(v=>v.id))+1;
      state.violations.unshift({
        id:vid, pointId, item:it.text, critical:it.critical,
        status:'новое', assignee:'—', deadline:'—'
      });
    }
  });

  if(planId) closePlanLocallyAfterChecklist(planId, localInspection, score);

  state.operatorTasksDone.push({templateId:t.id, doneAt: state.demoNow});
  clearSavedDraft(t.id, pointId, planId);
  checklistDraft = null;
  showBanner(`Проверка отправлена. Итоговый балл: ${score}%. ${total-passed>0 ? (total-passed)+' нарушение(й) зафиксировано автоматически.' : 'Нарушений нет.'}`);
}

// Закрытие плана после фактического прохождения чек-листа. Логика повтора серии — та же, что в
// completePlanInspection (каданс считается от плановой даты, а не от даты фактического выполнения,
// чтобы расписание не «плыло»), но балл здесь настоящий, посчитанный по ответам.
async function closePlanAfterChecklist(planId, inspection, score){
  const plan = state.plannedInspections.find(p=>p.id===planId);
  if(!plan) return;
  plan.history = plan.history || [];
  plan.history.push({date: inspection.date, score, inspectionId: inspection.id});
  let planUpdate;
  if(plan.recurrence){
    const cadence = RECUR_CADENCE_DAYS[plan.recurrence.freq] || 1;
    plan.assignedAt = addDays(plan.assignedAt, cadence);
    plan.dueDate = addDays(plan.assignedAt, plan.recurrence.slaDays);
    planUpdate = { history: plan.history, assigned_at: plan.assignedAt, due_date: plan.dueDate };
  } else {
    plan.status = 'выполнена';
    plan.resultInspectionId = inspection.id;
    planUpdate = { history: plan.history, status: 'выполнена', result_inspection_id: inspection.id };
  }
  const { error } = await sbRetry(()=> sb.from('planned_inspections').update(planUpdate).eq('id', planId));
  if(error) throw error;
}

function closePlanLocallyAfterChecklist(planId, inspection, score){
  const plan = state.plannedInspections.find(p=>p.id===planId);
  if(!plan) return;
  plan.history = plan.history || [];
  plan.history.push({date: inspection.date, score, inspectionId: inspection.id});
  if(plan.recurrence){
    const cadence = RECUR_CADENCE_DAYS[plan.recurrence.freq] || 1;
    plan.assignedAt = addDays(plan.assignedAt, cadence);
    plan.dueDate = addDays(plan.assignedAt, plan.recurrence.slaDays);
  } else {
    plan.status = 'выполнена';
    plan.resultInspectionId = inspection.id;
  }
  persistPlansToStorage();
}

function fixViolation(id){
  const v = state.violations.find(v=>v.id===id);
  v._fixing = !v._fixing;
  render();
}

async function confirmFix(id){
  const v = state.violations.find(v=>v.id===id);
  if(state.live && sb){
    try{
      const { error } = await sbRetry(()=> sb.from('violations').update({status:'устранено'}).eq('id', id));
      if(error) throw error;
    } catch(e){ showBanner('Не удалось сохранить: ' + (e.message||e)); return; }
  }
  v.status = 'устранено';
  v._fixing = false;
  showBanner('Нарушение отмечено устранённым — ожидает подтверждения управляющего.');
}

// ---------- УПРАВЛЯЮЩИЙ ----------

function renderManager(){
  const point = pointById(state.myPointId);
  const myInspections = state.inspections.filter(i=>i.pointId===state.myPointId);
  const myViolations = state.violations.filter(v=>v.pointId===state.myPointId);
  const openCount = myViolations.filter(v=>v.status!=='закрыто').length;
  const rating = computeObjectRating(point.id);

  return `
    <div class="page-title">Дашборд точки</div>
    <div class="page-subtitle">${point.name} (${point.region}) · роль: Управляющий мойки</div>
    ${bannerHtml()}
    <div class="grid-cols cols-3">
      <div class="stat"><div class="num">${rating===null?'—':rating+'%'}</div><div class="label">Текущий рейтинг точки</div></div>
      <div class="stat"><div class="num">${myInspections.length}</div><div class="label">Проверок за период</div></div>
      <div class="stat"><div class="num">${openCount}</div><div class="label">Открытых нарушений</div></div>
    </div>

    <div class="card">
      <h3>Нарушения по точке</h3>
      ${myViolations.length===0 ? `<div class="empty-state">Нарушений нет.</div>` : `
      <table>
        <tr><th>Пункт</th><th>Критичность</th><th>Ответственный</th><th>Срок</th><th>Статус</th><th></th></tr>
        ${myViolations.map(v=>`
          <tr>
            <td>${v.item}</td>
            <td>${v.critical?'<span class="badge badge-danger">критично</span>':'<span class="badge badge-neutral">обычное</span>'}</td>
            <td>${v.assignee}</td>
            <td>${v.deadline}</td>
            <td>${statusBadge(v.status)}</td>
            <td>${managerActionCell(v)}</td>
          </tr>
        `).join('')}
      </table>`}
    </div>

    <div class="card">
      <h3>История проверок точки</h3>
      <table>
        <tr><th>Дата</th><th>Тип</th><th>Проверяющий</th><th>Балл</th></tr>
        ${myInspections.map(i=>`
          <tr><td>${i.date}</td><td>${i.kind}</td><td>${i.inspector}</td><td>${scoreBadge(i.score)}</td></tr>
        `).join('')}
      </table>
      <div style="margin-top:14px;">
        <button class="btn btn-secondary" onclick="showBanner('В демо-версии экспорт не реализован — в MVP выгрузка в Excel/PDF.')">Скачать отчёт по точке</button>
      </div>
    </div>
  `;
}

function managerActionCell(v){
  if(v.status==='новое'){
    if(v._assigning){
      const sortedUsers = [...state.users].sort((a,b)=>a.name.localeCompare(b.name));
      return `
        <div style="display:flex;flex-direction:column;gap:4px;min-width:170px;">
          <select onchange="setViolationAssignField(${v.id},'UserId',this.value)">
            <option value="">Ответственный…</option>
            ${sortedUsers.map(u=>`<option value="${u.id}" ${v._assignUserId===u.id?'selected':''}>${u.name} (${u.role})</option>`).join('')}
          </select>
          <input type="date" data-quiet-render="1" value="${v._assignDeadline||''}" onchange="setViolationAssignField(${v.id},'Deadline',this.value)">
          <div style="display:flex;gap:4px;">
            <button class="btn btn-sm" onclick="submitAssignViolation(${v.id})">Назначить</button>
            <button class="btn btn-sm btn-secondary" onclick="assignViolation(${v.id})">Отмена</button>
          </div>
        </div>
      `;
    }
    return `<button class="btn btn-sm" onclick="assignViolation(${v.id})">Назначить</button>`;
  }
  if(v.status==='устранено'){
    return `<button class="btn btn-sm" onclick="closeViolation(${v.id})">Закрыть</button>`;
  }
  return '—';
}

function assignViolation(id){
  const v = state.violations.find(v=>v.id===id);
  v._assigning = !v._assigning;
  render();
}

function setViolationAssignField(id, field, value){
  const v = state.violations.find(v=>v.id===id);
  v['_assign'+field] = field==='UserId' ? (value===''?null:Number(value)) : value;
  render();
}

async function submitAssignViolation(id){
  const v = state.violations.find(v=>v.id===id);
  if(!v._assignUserId){ showBanner('Выберите ответственного.'); return; }
  if(!v._assignDeadline){ showBanner('Укажите срок устранения.'); return; }
  const assignee = state.users.find(u=>u.id===v._assignUserId);
  const assigneeName = assignee ? assignee.name : '—';
  const deadline = v._assignDeadline;

  if(state.live && sb){
    try{
      const { error } = await sbRetry(()=> sb.from('violations').update({assignee: assigneeName, deadline, status:'в работе'}).eq('id', id));
      if(error) throw error;
    } catch(e){ showBanner('Не удалось сохранить назначение: ' + (e.message||e)); return; }
  }
  v.assignee = assigneeName; v.deadline = deadline; v.status = 'в работе'; v._assigning = false;
  showBanner('Ответственный назначен, срок устранения — '+deadline+'.');
}

async function closeViolation(id){
  const v = state.violations.find(v=>v.id===id);
  if(state.live && sb){
    try{
      const { error } = await sbRetry(()=> sb.from('violations').update({status:'закрыто'}).eq('id', id));
      if(error) throw error;
    } catch(e){ showBanner('Не удалось сохранить: ' + (e.message||e)); return; }
  }
  v.status = 'закрыто';
  showBanner('Нарушение проверено и закрыто.');
}

// ---------- ТЕРРИТОРИАЛЬНЫЙ ДИРЕКТОР ----------

const TYPE_LABELS = {'Конвейер':'Конвейеры', 'Робот':'Роботы', 'МСО':'МСО'};

function renderRatingGroup(points, type){
  const group = points.filter(p=>p.type===type)
    .map(p=>({p, rating: computeObjectRating(p.id)}))
    .sort((a,b)=> (b.rating??-1) - (a.rating??-1));
  if(group.length===0) return '';
  return `
    <div style="margin-bottom:18px">
      <div class="type-label-bar">${TYPE_LABELS[type]} <span class="sub">— рейтинг только внутри своего типа · среднее по проверкам управляющего/тер.директора за 30 дней</span></div>
      ${group.map(({p,rating})=>`
        <div class="bar-row">
          <div class="bar-name">${p.name}</div>
          <div class="bar-track">${rating===null ? '' : `<div class="bar-fill" style="width:${rating}%; background:${rating>95?'var(--success)':rating>90?'var(--warning)':'var(--danger)'}"></div>`}</div>
          <div style="width:40px;text-align:right;font-weight:600">${rating===null ? '<span class="muted" style="font-weight:400;">нет данных</span>' : rating+'%'}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function trendArrow(scores){
  if(scores.length<2) return {label:'мало данных', cls:'badge-neutral'};
  const diff = scores[scores.length-1] - scores[0];
  if(diff>2) return {label:'↑ рост', cls:'badge-success'};
  if(diff<-2) return {label:'↓ снижение', cls:'badge-danger'};
  return {label:'→ стабильно', cls:'badge-neutral'};
}

function renderTrendSection(pts, from, to){
  const points = pts || state.points.filter(p=>p.status==='действующая');
  const hasPeriod = !!(from || to);

  function trendRow(p){
    // те же проверки, что участвуют в официальном рейтинге: управляющий/тер.директор,
    // без самооценки оператора и без гостевых проверок — чтобы тренд и рейтинг не расходились.
    let hist = state.inspections.filter(i=>{
      if(i.pointId!==p.id || i.kind!=='Плановая') return false;
      const t = templateById(i.templateId);
      return t && t.role!=='Оператор';
    });
    if(from) hist = hist.filter(i=>i.date>=from);
    if(to) hist = hist.filter(i=>i.date<=to);
    hist = hist.sort((a,b)=> a.date.localeCompare(b.date));
    if(!hasPeriod) hist = hist.slice(-4); // без периода — последние 4, чтобы не перегружать таблицу
    const scores = hist.map(h=>h.score);
    const trend = trendArrow(scores);
    return `
      <tr>
        <td>${p.name}</td>
        <td>${scores.length ? scores.map(s=>scoreBadge(s)).join(' → ') : '<span class="tag">нет проверок за период</span>'}</td>
        <td><span class="badge ${trend.cls}">${trend.label}</span></td>
      </tr>
    `;
  }

  function typeSection(type){
    const group = points.filter(p=>p.type===type);
    if(group.length===0) return '';
    return `
      <tr class="trend-type-row"><td colspan="3">${TYPE_LABELS[type]}</td></tr>
      ${group.map(trendRow).join('')}
    `;
  }

  const typesPresent = ['Конвейер','Робот','МСО'].filter(t=>points.some(p=>p.type===t));
  const periodLabel = hasPeriod ? ` · период: ${from||'…'} — ${to||'…'} (учитываются все проверки за этот период)` : '';

  return `
    <div class="card">
      <h3>Сравнение точки по последним проверкам <span class="muted">(по типам, как в рейтинге — конвейеры/роботы/МСО раздельно${periodLabel})</span></h3>
      ${typesPresent.length===0 ? '<div class="empty-state">Нет точек по заданным фильтрам.</div>' : `
      <table class="trend-table">
        <tr><th>Точка</th><th>${hasPeriod ? 'Баллы за период (по датам)' : 'Последние баллы (по датам)'}</th><th>Тренд</th></tr>
        ${typesPresent.map(typeSection).join('')}
      </table>`}
    </div>
  `;
}

function renderDirector(){
  const active = state.points.filter(p=>p.status==='действующая');
  const escalations = state.violations.filter(v=> v.critical || v.status==='просрочено');
  const guestInspections = state.inspections.filter(i=>i.kind==='Тайный покупатель');

  return `
    <div class="page-title">Сводный дашборд региона</div>
    <div class="page-subtitle">Роль: территориальный директор · видны все точки закреплённых регионов</div>
    ${bannerHtml()}
    <div class="card">
      <h3>Рейтинг точек <span class="muted">(конвейеры, роботы и МСО сравниваются раздельно — сравнивать их между собой некорректно)</span></h3>
      ${state.pointTypes.map(type=>renderRatingGroup(active, type)).join('')}
    </div>

    ${renderTrendSection()}

    <div class="card">
      <h3>Эскалации <span class="muted">(критические и просроченные нарушения по всем точкам)</span></h3>
      ${escalations.length===0 ? `<div class="empty-state">Эскалаций нет.</div>` : `
      <table>
        <tr><th>Точка</th><th>Нарушение</th><th>Статус</th><th>Ответственный</th><th>Срок</th></tr>
        ${escalations.map(v=>`
          <tr>
            <td>${pointById(v.pointId).name}</td>
            <td>${v.item}</td>
            <td>${statusBadge(v.status)}</td>
            <td>${v.assignee}</td>
            <td>${v.deadline}</td>
          </tr>
        `).join('')}
      </table>`}
    </div>

    <div class="card">
      <h3>Результаты гостевых проверок (тайный покупатель)</h3>
      <table>
        <tr><th>Точка</th><th>Дата</th><th>Балл</th></tr>
        ${guestInspections.map(i=>`
          <tr><td>${pointById(i.pointId).name}</td><td>${i.date}</td><td>${scoreBadge(i.score)}</td></tr>
        `).join('')}
      </table>
    </div>
  `;
}

// ---------- КАБИНЕТ УПРАВЛЕНИЯ (левое меню, ноутбук/десктоп) ----------

function renderConsoleSection(){
  // Исполнитель проходит назначенную ему проверку прямо в кабинете — пока черновик чек-листа
  // открыт, он занимает всю область контента (как на телефоне у оператора), чтобы заполняющий
  // видел только свою задачу и не переключался случайно в другой раздел.
  if(checklistDraft) return renderChecklistForm();

  // страховка от прямого перехода в раздел без права (например, состояние осталось с прошлой
  // сессии другого сотрудника) — молча возвращаем на «Аналитику», доступную всем
  if(!canSeeSection(state.section)) state.section = 'analytics';
  const sec = CONSOLE_SECTIONS.find(s=>s.id===state.section) || CONSOLE_SECTIONS[0];
  const bodyMap = {
    analytics: renderAdminAnalytics,
    inspections: renderAdminInspections,
    planning: renderAdminPlanning,
    repeats: renderAdminRepeats,
    guest: renderAdminGuestInspections,
    users: renderAdminUsers,
    objects: renderAdminPoints,
    templates: renderAdminChecklists
  };
  return `
    <div class="page-title">${sec.title}</div>
    ${sec.subtitle ? `<div class="page-subtitle">${sec.subtitle}</div>` : ''}
    ${bannerHtml()}
    ${bodyMap[sec.id]()}
  `;
}

function setAdminAnalyticsFilter(field, value){
  if((field==='From' || field==='To') && value===''){ value = null; }
  state['adminAnalytics'+field] = value;
  if(field==='Type' || field==='Region' || field==='Manager'){ state.adminAnalyticsPoint = 'Все'; } // смена типа/региона/управляющего сбрасывает выбранную точку
  render();
}

function managerById(id){ return state.users.find(u=>u.role==='Управляющий' && String(u.id)===String(id)); }

// ---------- Сворачиваемые фильтры ----------
// На телефоне блок фильтров занимал почти весь первый экран, и до самих данных приходилось
// пролистывать. Поэтому на узком экране фильтры по умолчанию свёрнуты в одну строку со сводкой
// («Все типы · 30 дней»), а на ноутбуке остаются раскрытыми, как раньше.
function isNarrowScreen(){
  try{ return window.matchMedia('(max-width: 760px)').matches; } catch(e){ return false; }
}

function filtersOpen(key){
  const explicit = state.filtersOpen[key];
  return explicit===undefined ? !isNarrowScreen() : explicit;
}

function toggleFilters(key){
  state.filtersOpen[key] = !filtersOpen(key);
  render();
}

// Короткая сводка того, что реально выбрано — чтобы в свёрнутом виде было ясно, на что смотрим.
function filtersSummary(parts){
  const shown = parts.filter(Boolean);
  return shown.length ? shown.join(' · ') : 'без фильтров';
}

function renderFiltersHeader(key, summary){
  const open = filtersOpen(key);
  return `
    <div onclick="toggleFilters('${key}')" style="display:flex;align-items:center;justify-content:space-between;gap:10px;cursor:pointer;">
      <h3 style="margin:0;">Фильтры ${open ? '' : `<span class="muted" style="font-weight:400;">${summary}</span>`}</h3>
      <span class="btn btn-secondary btn-sm" style="white-space:nowrap;">${open ? 'Свернуть' : 'Изменить'}</span>
    </div>
  `;
}

function setAnalyticsPeriodPreset(days){
  if(days==='all'){
    state.adminAnalyticsFrom = null;
    state.adminAnalyticsTo = null;
  } else {
    state.adminAnalyticsTo = todayStr();
    state.adminAnalyticsFrom = addDays(todayStr(), -days);
  }
  render();
}

function renderAdminAnalytics(){
  const typeFilter = state.adminAnalyticsType;
  const regionFilter = state.adminAnalyticsRegion;
  const managerFilter = state.adminAnalyticsManager;
  const pointFilter = state.adminAnalyticsPoint;
  const from = state.adminAnalyticsFrom;
  const to = state.adminAnalyticsTo;
  const managerCandidates = state.users.filter(u=>u.role==='Управляющий'); // фильтрует сам комбобокс
  const managerSelectedLabel = managerFilter==='Все' ? 'Все' : (managerById(managerFilter)||{}).name;

  let pts = state.points.filter(p=>p.status==='действующая');
  if(typeFilter!=='Все') pts = pts.filter(p=>p.type===typeFilter);
  if(regionFilter!=='Все') pts = pts.filter(p=>p.region===regionFilter);
  if(managerFilter!=='Все'){ const mgr = managerById(managerFilter); pts = mgr ? pts.filter(p=>mgr.pointIds.includes(p.id)) : pts; }
  // список точек для комбобокса «Точка» — учитывает уже выбранные тип/регион/управляющего, но не сам фильтр по точке
  const pointOptionsAll = [...pts].sort((a,b)=>a.name.localeCompare(b.name));
  const pointOptions = pointOptionsAll; // фильтрует сам комбобокс
  const pointSelectedLabel = pointFilter==='Все' ? 'Все' : (pointOptionsAll.find(p=>String(p.id)===pointFilter)||{}).name;
  if(pointFilter!=='Все') pts = pts.filter(p=>String(p.id)===pointFilter);

  const typesToShow = typeFilter==='Все' ? state.pointTypes : [typeFilter];
  const noPeriod = !from && !to;
  const filtersActive = typeFilter!=='Все' || regionFilter!=='Все' || managerFilter!=='Все' || pointFilter!=='Все';

  const periodLabel = noPeriod ? 'весь период' : ((from||'…')+' — '+(to||'…'));
  const summary = filtersSummary([
    typeFilter==='Все' ? 'все типы' : typeFilter,
    regionFilter==='Все' ? null : regionFilter,
    managerFilter==='Все' ? null : managerSelectedLabel,
    pointFilter==='Все' ? null : pointSelectedLabel,
    periodLabel
  ]);

  return `
    <div class="card">
      ${renderFiltersHeader('analytics', summary)}
      <div class="filters-grid" style="${filtersOpen('analytics') ? 'margin-top:14px;' : 'display:none;'}">
        <div>
          <div class="tag" style="margin-bottom:4px;">Тип мойки</div>
          <select onchange="setAdminAnalyticsFilter('Type', this.value)">
            <option ${typeFilter==='Все'?'selected':''}>Все</option>
            ${state.pointTypes.map(t=>`<option ${typeFilter===t?'selected':''}>${t}</option>`).join('')}
          </select>
        </div>
        <div>
          <div class="tag" style="margin-bottom:4px;">Регион</div>
          <select onchange="setAdminAnalyticsFilter('Region', this.value)">
            <option ${regionFilter==='Все'?'selected':''}>Все</option>
            ${REGIONS.map(r=>`<option ${regionFilter===r?'selected':''}>${r}</option>`).join('')}
          </select>
        </div>
        <div class="filters-wide">
          <div class="tag" style="margin-bottom:4px;">Управляющий <span class="filter-hint" style="font-weight:400;color:var(--text-muted);">(за ним закреплён свой портфель точек)</span></div>
          ${renderCombo({
            id:'analyticsManagerCombo', setterFn:'setAdminAnalyticsFilter',
            searchField:'ManagerSearch', openField:'ManagerOpen', valueField:'Manager',
            isOpen: state.adminAnalyticsManagerOpen, searchValue: state.adminAnalyticsManagerSearch, selectedLabel: managerSelectedLabel,
            placeholder:'Все — начните вводить фамилию…',
            rows: [{value:'Все', label:'Все', active:managerFilter==='Все'}, ...managerCandidates.map(m=>({value:String(m.id), label:m.name, active:managerFilter===String(m.id)}))]
          })}
        </div>
        <div class="filters-wide">
          <div class="tag" style="margin-bottom:4px;">Точка <span class="filter-hint" style="font-weight:400;color:var(--text-muted);">(с учётом фильтров выше)</span></div>
          ${renderCombo({
            id:'analyticsPointCombo', setterFn:'setAdminAnalyticsFilter',
            searchField:'PointSearch', openField:'PointOpen', valueField:'Point',
            isOpen: state.adminAnalyticsPointOpen, searchValue: state.adminAnalyticsPointSearch, selectedLabel: pointSelectedLabel,
            placeholder:'Все — начните вводить название…',
            rows: [{value:'Все', label:'Все', active:pointFilter==='Все'}, ...pointOptions.map(p=>({value:String(p.id), label:p.name, active:pointFilter===String(p.id)}))]
          })}
        </div>
        <div class="filters-period">
          <div class="tag" style="margin-bottom:4px;">Период <span class="filter-hint" style="font-weight:400;color:var(--text-muted);">(влияет на тренд по последним проверкам)</span></div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
            <button class="btn btn-sm ${noPeriod?'':'btn-secondary'}" onclick="setAnalyticsPeriodPreset('all')">Произвольный период</button>
            <button class="btn btn-sm btn-secondary" onclick="setAnalyticsPeriodPreset(7)">7 дней</button>
            <button class="btn btn-sm btn-secondary" onclick="setAnalyticsPeriodPreset(30)">30 дней</button>
          </div>
          <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
            <input type="date" data-quiet-render="1" value="${from||''}" onchange="setAdminAnalyticsFilter('From', this.value)">
            <span style="font-size:11px;color:var(--text-muted);">—</span>
            <input type="date" data-quiet-render="1" value="${to||''}" onchange="setAdminAnalyticsFilter('To', this.value)">
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <h3>Рейтинг точек <span class="muted">${filtersActive ? '(с учётом фильтров)' : '(конвейеры/роботы/МСО сравниваются раздельно)'}</span></h3>
      ${pts.length===0 ? '<div class="empty-state">Нет точек по заданным фильтрам.</div>' : typesToShow.map(type=>renderRatingGroup(pts, type)).join('')}
    </div>

    ${renderTrendSection(pts, from, to)}
  `;
}

function setInspFilter(field, value){
  if((field==='From' || field==='To') && value===''){ value = null; }
  state['inspFilter'+field] = value;
  if(field==='Type' || field==='Region' || field==='Manager'){
    // смена типа/региона/управляющего сбрасывает и точку, и проверяющего: выбранный ранее мог
    // просто не встречаться в новой выборке, и список выглядел бы пустым без объяснения
    state.inspFilterPoint = 'Все';
    state.inspFilterInspector = 'Все';
  }
  render();
}

function setInspPeriodPreset(days){
  if(days==='all'){
    state.inspFilterFrom = null;
    state.inspFilterTo = null;
  } else {
    state.inspFilterTo = todayStr();
    state.inspFilterFrom = addDays(todayStr(), -days);
  }
  render();
}

function toggleInspectionDetail(id){
  state.expandedInspectionId = state.expandedInspectionId===id ? null : id;
  state.inspShowOnlyViolations = false;
  render();
}

function toggleInspOnlyViolations(){
  state.inspShowOnlyViolations = !state.inspShowOnlyViolations;
  render();
}

// Фото проверки лежат в приватном хранилище, поэтому прямой ссылки на них нет — запрашиваем
// временную (час) и открываем в новой вкладке. Открытие в новом окне вместо превью в таблице
// сделано намеренно: в журнале проверки бывают десятки пунктов с фото, и подгружать их все
// сразу — лишний трафик на мобильном.
async function openInspectionPhoto(path){
  if(!sb){ showBanner('Просмотр фото доступен только в рабочем режиме.'); return; }
  try{
    const { data, error } = await sb.storage.from('inspection-photos').createSignedUrl(path, 3600);
    if(error) throw error;
    window.open(data.signedUrl, '_blank');
  } catch(e){
    showBanner('Не удалось открыть фото: ' + ((e && e.message) || e));
  }
}

function renderInspectionDetail(insp){
  const items = insp.items || [];
  const t = templateById(insp.templateId);
  const p = pointById(insp.pointId);
  // ответы уже лежат внутри самих items, поэтому передаём их же как источник ответов
  const issues = checklistIssues(items, items);
  const failedCount = issues.length;
  const isProblemItem = (it)=> it.answer==='no' || (isScaleItem(it) && scaleValue(it.answer)!==null && scaleValue(it.answer)<=SCALE_PROBLEM_AT);
  const visibleItems = state.inspShowOnlyViolations ? items.filter(isProblemItem) : items;

  return `
    <div style="padding:12px 4px;">
      ${issues.length ? renderIssuesSummary(issues, {clickable:false}) : ''}
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
        <div style="font-size:12px;color:var(--text-muted);">
          ${p ? p.name : ''} · ${t ? t.name : 'чек-лист не найден'} · пунктов: ${items.length}, нарушений: ${failedCount}
        </div>
        ${items.length>0 ? `
        <label style="font-size:12px;display:flex;align-items:center;gap:6px;cursor:pointer;white-space:nowrap;">
          <input type="checkbox" ${state.inspShowOnlyViolations?'checked':''} onchange="toggleInspOnlyViolations()">
          Только нарушения
        </label>` : ''}
      </div>
      ${items.length===0
        ? '<div class="empty-state">Детальный состав чек-листа для этой проверки не сохранён (демо-запись без шаблона).</div>'
        : visibleItems.length===0
          ? '<div class="empty-state">Нарушений нет — все пункты выполнены.</div>'
          : visibleItems.map(it=>{
              const streak = it.answer==='no' ? computeRepeatStreak(insp.pointId, it.text, insp.date) : 0;
              return `
            <div class="checklist-item" style="${it.answer==='no' ? 'border-color:var(--danger)' : ''}">
              <div class="row">
                <div>
                  <div class="qtext">${items.indexOf(it)+1}. ${it.text}</div>
                  <div class="tags">
                    ${it.critical?'<span class="tag" style="color:var(--danger)">критический пункт</span>':''}
                    ${it.photo?'<span class="tag">фото обязательно</span>':''}
                    ${streak>=2?`<span class="tag" style="color:var(--danger)">🔁 повторяется ${streak}-ю проверку подряд</span>`:''}
                  </div>
                </div>
                ${it.type==='text'
                  ? `<span class="badge badge-neutral">комментарий</span>`
                  : it.answer==='na'
                    ? `<span class="badge badge-neutral" title="Неактуально: на объекте такого узла нет — в балл не входит">Н/А</span>`
                    : isScaleItem(it)
                      ? (()=>{ const v = scaleValue(it.answer); const cls = v===null ? 'badge-neutral' : (v<=SCALE_PROBLEM_AT ? 'badge-danger' : (v>=4 ? 'badge-success' : 'badge-warning'));
                               return `<span class="badge ${cls}">${v===null?'—':v+'/'+SCALE_MAX}</span>`; })()
                      : `<span class="badge ${it.answer==='yes'?'badge-success':'badge-danger'}">${it.answer==='yes'?'Да':'Нет'}</span>`}
              </div>
              ${it.answer==='no' && it.comment ? `<div style="margin-top:8px;font-size:12px;color:var(--text-muted);background:var(--bg);border-radius:7px;padding:6px 9px;">💬 ${it.comment}</div>` : ''}
              ${(()=>{
                // photoPath — записи, сделанные до появления нескольких фото на пункт
                const shots = Array.isArray(it.photos) ? it.photos.filter(p=>p && p.path) : (it.photoPath ? [{path:it.photoPath}] : []);
                if(shots.length===0) return '';
                return `<div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap;">${shots.map((p,pi)=>
                  `<button class="btn btn-secondary btn-sm" onclick="openInspectionPhoto('${p.path.replace(/'/g,"\\'")}')">📷 Фото${shots.length>1?' '+(pi+1):''}</button>`
                ).join('')}</div>`;
              })()}
            </div>
          `;}).join('')
      }
    </div>
  `;
}

// Раздел «Повторяющиеся нарушения» — отдельный экран (не встроен в «Проверки», сами проверки
// из общего журнала при этом никуда не убираются). Группируем по объекту: список объектов,
// у каждого — сколько пунктов сейчас «горят»; клик по объекту раскрывает конкретные пункты.
function getRepeatingViolationsByPoint(minStreak){
  const flat = getRepeatingViolations(minStreak || 2);
  const map = new Map();
  flat.forEach(v=>{
    if(!map.has(v.pointId)) map.set(v.pointId, {pointId:v.pointId, pointName:v.pointName, pointType:v.pointType, items:[], maxStreak:0});
    const entry = map.get(v.pointId);
    entry.items.push(v);
    entry.maxStreak = Math.max(entry.maxStreak, v.streak);
  });
  return Array.from(map.values()).sort((a,b)=> b.maxStreak-a.maxStreak || a.pointName.localeCompare(b.pointName));
}

function toggleRepeatsDetail(pointId){
  state.repeatsExpandedPointId = state.repeatsExpandedPointId===pointId ? null : pointId;
  render();
}

function renderRepeatsPointDetail(g){
  const items = [...g.items].sort((a,b)=>b.streak-a.streak);
  return `
    <div style="padding:12px 4px;">
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px;">
        ${g.pointName} · ${items.length} повторяющ${items.length===1?'ийся пункт':'ихся пункта(-ов)'}
      </div>
      ${items.map(it=>`
        <div class="checklist-item" style="border-color:var(--danger)">
          <div class="row">
            <div>
              <div class="qtext">${it.itemText}</div>
              <div class="tags">
                ${it.critical?'<span class="tag" style="color:var(--danger)">критический пункт</span>':''}
                <span class="tag">последняя проверка: ${it.lastDate}</span>
              </div>
            </div>
            <span class="badge badge-danger">${it.streak}× подряд</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ---------- Планирование проверок (назначение внеплановых/дополнительных проверок) ----------

function planStatusInfo(plan){
  if(plan.status==='выполнена') return {label:'Выполнена', cls:'badge-success'};
  if(plan.status==='отменена') return {label:'Отменена', cls:'badge-neutral'};
  if(plan.dueDate < todayStr()) return {label:'Просрочена', cls:'badge-danger'};
  return {label:'Ожидает', cls:'badge-warning'};
}

const RECUR_FREQ_LABEL = {daily:'Ежедневно', weekly:'Еженедельно', monthly:'Ежемесячно'};
const RECUR_CADENCE_DAYS = {daily:1, weekly:7, monthly:30};
const RECUR_DEFAULT_SLA = {daily:1, weekly:3, monthly:7};

function toggleAddPlanForm(){
  state.planningShowForm = !state.planningShowForm;
  if(state.planningShowForm){
    state.planningPointId = null;
    state.planningPointSearch = '';
    state.planningPointOpen = false;
    state.planningTemplateId = null;
    state.planningTemplateSearch = '';
    state.planningTemplateOpen = false;
    state.planningAssigneeId = null;
    state.planningAssigneeSearch = '';
    state.planningAssigneeOpen = false;
    state.planningDueDate = null;
    state.planningNote = '';
    state.planningIsRecurring = false;
    state.planningRecurFreq = 'daily';
    state.planningSlaDays = 1;
  }
  render();
}

function setPlanningField(field, value){
  if(field==='PointId' || field==='TemplateId' || field==='AssigneeId'){ value = value==='' ? null : Number(value); }
  if(field==='SlaDays'){ value = Math.max(1, Math.round(Number(value))||1); }
  state['planning'+field] = value;
  if(field==='PointId'){ state.planningTemplateId = null; state.planningTemplateSearch = ''; } // список шаблонов зависит от типа выбранного объекта
  if(field==='RecurFreq'){ state.planningSlaDays = RECUR_DEFAULT_SLA[value] || 1; } // подставляем разумный срок по умолчанию под периодичность
  render();
}

function togglePlanningRecurring(checked){
  state.planningIsRecurring = checked;
  if(checked){
    const t = state.planningTemplateId ? templateById(state.planningTemplateId) : null;
    if(t && t.schedule && (t.schedule.freq==='daily' || t.schedule.freq==='weekly')){
      state.planningRecurFreq = t.schedule.freq; // подсказка по частоте исходя из выбранного шаблона (МСО — ежедневно, управляющий — еженедельно)
    }
    state.planningSlaDays = RECUR_DEFAULT_SLA[state.planningRecurFreq] || 1;
  }
  render();
}

async function submitNewPlan(){
  if(!canAssignInspections()){ showBanner('Назначать проверки может сотрудник с правом «Назначать проверки».'); return; }
  if(!state.planningPointId){ showBanner('Выберите объект проверки.'); return; }
  if(!state.planningTemplateId){ showBanner('Выберите чек-лист/шаблон проверки.'); return; }
  if(!state.planningAssigneeId){ showBanner('Выберите исполнителя.'); return; }
  if(!state.planningDueDate){ showBanner(state.planningIsRecurring ? 'Укажите дату первой проверки серии.' : 'Укажите дату проверки.'); return; }

  let recurrence = null, assignedAt, dueDate;
  if(state.planningIsRecurring){
    const slaDays = Math.max(1, Math.round(Number(state.planningSlaDays))||1);
    recurrence = {freq: state.planningRecurFreq, slaDays};
    assignedAt = state.planningDueDate;
    dueDate = addDays(assignedAt, slaDays);
  } else {
    assignedAt = todayStr();
    dueDate = state.planningDueDate;
  }

  if(state.live && sb){
    try{
      const { data, error } = await sbRetry(()=> sb.from('planned_inspections').insert({
        point_id: state.planningPointId, template_id: state.planningTemplateId,
        assignee_id: state.planningAssigneeId, note: state.planningNote.trim(), status:'запланирована',
        recurrence, assigned_at: assignedAt, due_date: dueDate, history: []
      }).select().single());
      if(error) throw error;
      state.plannedInspections.push(mapPlanFromDb(data));
      state.planningShowForm = false;
      showBanner(recurrence ? 'Повторяющаяся проверка назначена ('+RECUR_FREQ_LABEL[recurrence.freq].toLowerCase()+').' : 'Проверка запланирована.');
    } catch(e){
      showBanner('Не удалось сохранить план: ' + (e.message||e));
    }
    return;
  }

  const newId = Math.max(0, ...state.plannedInspections.map(p=>p.id))+1;
  state.plannedInspections.push({
    id:newId, pointId:state.planningPointId, templateId:state.planningTemplateId,
    assigneeId:state.planningAssigneeId, note: state.planningNote.trim(), status:'запланирована',
    recurrence, assignedAt, dueDate, history:[]
  });
  state.planningShowForm = false;
  persistPlansToStorage();
  showBanner(recurrence ? 'Повторяющаяся проверка назначена ('+RECUR_FREQ_LABEL[recurrence.freq].toLowerCase()+').' : 'Проверка запланирована.');
}

async function cancelPlan(planId){
  const plan = state.plannedInspections.find(p=>p.id===planId);
  if(!plan) return;
  if(!canAssignInspections()){ showBanner('Отменять проверки может сотрудник с правом «Назначать проверки».'); return; }
  if(!confirm('Отменить запланированную проверку?')) return;
  if(state.live && sb){
    try{
      const { error } = await sbRetry(()=> sb.from('planned_inspections').update({status:'отменена'}).eq('id', planId));
      if(error) throw error;
    } catch(e){ showBanner('Не удалось отменить: ' + (e.message||e)); return; }
    plan.status = 'отменена';
    render();
    return;
  }
  plan.status = 'отменена';
  persistPlansToStorage();
  render();
}

async function deletePlan(planId){
  if(!canAssignInspections()){ showBanner('Удалять записи планирования может сотрудник с правом «Назначать проверки».'); return; }
  if(!confirm('Удалить запись из планирования? Это действие нельзя отменить.')) return;
  if(state.live && sb){
    try{
      const { error } = await sbRetry(()=> sb.from('planned_inspections').delete().eq('id', planId));
      if(error) throw error;
    } catch(e){ showBanner('Не удалось удалить: ' + (e.message||e)); return; }
    state.plannedInspections = state.plannedInspections.filter(p=>p.id!==planId);
    render();
    return;
  }
  state.plannedInspections = state.plannedInspections.filter(p=>p.id!==planId);
  persistPlansToStorage();
  render();
}

// Отметка «выполнена» создаёт настоящую запись в общем журнале проверок (state.inspections) —
// с тем же составом чек-листа, что и остальные проверки, — поэтому она сразу учитывается
// в рейтинге объекта, тренде и повторяющихся нарушениях, а не живёт отдельно от остальной аналитики.
async function completePlanInspection(planId){
  const plan = state.plannedInspections.find(p=>p.id===planId);
  if(!plan) return;
  const t = templateById(plan.templateId);
  const p = pointById(plan.pointId);
  if(!t || !p) return;
  const scoreStr = prompt('Итоговый балл проверки (0–100):', '90');
  if(scoreStr===null) return; // отменили ввод
  let score = Math.round(Number(scoreStr));
  if(isNaN(score)) { showBanner('Балл должен быть числом от 0 до 100.'); return; }
  score = Math.max(0, Math.min(100, score));
  const assignee = state.users.find(u=>u.id===plan.assigneeId);
  let inspector;
  if(t.role==='Оператор') inspector = 'Оператор '+p.name;
  else if(t.type==='Тайный покупатель') inspector = assignee ? 'Гость (назначил '+assignee.name+')' : 'Гость';
  else inspector = assignee ? assignee.role+' '+assignee.name : '—';

  if(state.live && sb){
    try{
      const today = new Date().toISOString().slice(0,10);
      const { data: insData, error: insErr } = await sbRetry(()=> sb.from('inspections').insert({
        point_id: plan.pointId, template_id: plan.templateId, kind: t.type, date: today, score, inspector, items: []
      }).select().single());
      if(insErr) throw insErr;
      const inspection = mapInspectionFromDb(insData);
      state.inspections.unshift(inspection);
      plan.history = plan.history || [];
      plan.history.push({date: inspection.date, score, inspectionId: inspection.id});

      let planUpdate;
      if(plan.recurrence){
        const cadence = RECUR_CADENCE_DAYS[plan.recurrence.freq] || 1;
        plan.assignedAt = addDays(plan.assignedAt, cadence);
        plan.dueDate = addDays(plan.assignedAt, plan.recurrence.slaDays);
        planUpdate = { history: plan.history, assigned_at: plan.assignedAt, due_date: plan.dueDate };
      } else {
        plan.status = 'выполнена';
        plan.resultInspectionId = inspection.id;
        planUpdate = { history: plan.history, status: 'выполнена', result_inspection_id: inspection.id };
      }
      const { error: planErr } = await sbRetry(()=> sb.from('planned_inspections').update(planUpdate).eq('id', planId));
      if(planErr) throw planErr;
      showBanner(plan.recurrence
        ? 'Проверка «'+t.name+'» по объекту «'+p.name+'» выполнена (балл '+score+'). Следующая проверка серии назначена на '+plan.dueDate+'.'
        : 'Проверка «'+t.name+'» по объекту «'+p.name+'» отмечена выполненной (балл '+score+') и добавлена в журнал проверок.');
    } catch(e){
      showBanner('Не удалось сохранить выполнение: ' + (e.message||e));
    }
    return;
  }

  const newId = Math.max(0, ...state.inspections.map(i=>i.id))+1;
  const inspection = { id:newId, pointId:plan.pointId, templateId:plan.templateId, kind:t.type, date:ANALYTICS_TODAY, score, inspector };
  inspection.items = synthesizeInspectionItems(t, p, score, newId*47+11);
  state.inspections.push(inspection);
  plan.history = plan.history || [];
  plan.history.push({date:ANALYTICS_TODAY, score, inspectionId:newId});

  if(plan.recurrence){
    // повторяющаяся проверка: цикл продолжается — считаем срок СЛЕДУЮЩЕЙ проверки от плановой даты
    // назначения текущей (а не от даты фактического выполнения), чтобы каданс не «плыл»
    const cadence = RECUR_CADENCE_DAYS[plan.recurrence.freq] || 1;
    plan.assignedAt = addDays(plan.assignedAt, cadence);
    plan.dueDate = addDays(plan.assignedAt, plan.recurrence.slaDays);
    persistPlansToStorage();
    showBanner('Проверка «'+t.name+'» по объекту «'+p.name+'» выполнена (балл '+score+'). Следующая проверка серии назначена на '+plan.dueDate+'.');
  } else {
    plan.status = 'выполнена';
    plan.resultInspectionId = newId;
    persistPlansToStorage();
    showBanner('Проверка «'+t.name+'» по объекту «'+p.name+'» отмечена выполненной (балл '+score+') и добавлена в журнал проверок.');
  }
}

// «Внести балл вручную» — обходной путь для администратора (проверку провели вне сервиса, нужно
// просто зафиксировать результат). Обычный исполнитель должен проходить чек-лист по пунктам,
// иначе в журнале не будет ни состава ответов, ни автоматически заведённых нарушений.
function canCloseWithoutChecklist(){
  if(!state.live) return true;
  return !!(state.appUser && state.appUser.perms && state.appUser.perms.deleteInspections);
}

function renderAdminPlanning(){
  // Списки передаются в комбобоксы ПОЛНОСТЬЮ, без фильтра по введённому тексту: фильтрацию
  // делает сам комбобокс, иначе при удалении символа список не расширялся бы обратно
  // (см. comboQuietInput).
  const activePoints = [...state.points]
    .filter(p=>p.status==='действующая')
    .sort((a,b)=>a.name.localeCompare(b.name));
  const selectedPoint = state.planningPointId ? pointById(state.planningPointId) : null;
  const availableTemplates = selectedPoint ? state.templates.filter(t=> !t.pointType || t.pointType===selectedPoint.type) : [];
  const selectedTemplate = state.planningTemplateId ? templateById(state.planningTemplateId) : null;
  const assigneeCandidates = state.users;
  const rows = [...state.plannedInspections].sort((a,b)=> b.dueDate.localeCompare(a.dueDate) || b.id-a.id);

  return `
    ${canAssignInspections() ? `
    <div class="card">
      <button class="btn" onclick="toggleAddPlanForm()">${state.planningShowForm ? 'Свернуть форму' : '+ Запланировать проверку'}</button>
    </div>
    ` : `
    <div class="card">
      <div style="font-size:12.5px;color:var(--text-muted);">Здесь видны проверки, назначенные вам. Назначать проверки другим может сотрудник с правом «Назначать проверки».</div>
    </div>
    `}

    ${canAssignInspections() && state.planningShowForm ? `
      <div class="card" style="border-color:var(--primary);">
        <h3>Новая проверка</h3>
        <div class="grid-cols cols-2" style="margin-bottom:14px;">
          <div>
            <label style="font-size:11px;color:var(--text-muted);">Объект</label>
            ${renderCombo({
              id:'planningPointCombo', setterFn:'setPlanningField',
              searchField:'PointSearch', openField:'PointOpen', valueField:'PointId',
              isOpen: state.planningPointOpen, searchValue: state.planningPointSearch,
              selectedLabel: selectedPoint ? selectedPoint.name+' ('+selectedPoint.type+')' : '',
              placeholder:'Начните вводить название объекта…',
              rows: activePoints.map(p=>({value:String(p.id), label:p.name+' ('+p.type+')', active:state.planningPointId===p.id}))
            })}
          </div>
          <div>
            <label style="font-size:11px;color:var(--text-muted);">Чек-лист / шаблон</label>
            ${renderCombo({
              id:'planningTemplateCombo', setterFn:'setPlanningField',
              searchField:'TemplateSearch', openField:'TemplateOpen', valueField:'TemplateId',
              isOpen: state.planningTemplateOpen, searchValue: state.planningTemplateSearch,
              selectedLabel: selectedTemplate ? selectedTemplate.name : '',
              placeholder: selectedPoint ? 'Начните вводить название шаблона…' : 'Сначала выберите объект',
              rows: availableTemplates.map(t=>({value:String(t.id), label:t.name, active:state.planningTemplateId===t.id}))
            })}
            ${selectedPoint && availableTemplates.length===0 ? `<div style="font-size:11px;color:var(--text-muted);margin-top:4px;">Для типа «${selectedPoint.type}» подходящих шаблонов пока нет.</div>` : ''}
          </div>
        </div>
        <div class="grid-cols cols-2" style="margin-bottom:14px;">
          <div>
            <label style="font-size:11px;color:var(--text-muted);">Исполнитель</label>
            ${renderCombo({
              id:'planningAssigneeCombo', setterFn:'setPlanningField',
              searchField:'AssigneeSearch', openField:'AssigneeOpen', valueField:'AssigneeId',
              isOpen: state.planningAssigneeOpen, searchValue: state.planningAssigneeSearch,
              selectedLabel: state.planningAssigneeId ? ((state.users.find(u=>u.id===state.planningAssigneeId)||{}).name||'') : '',
              placeholder:'Начните вводить имя сотрудника…',
              rows: assigneeCandidates.map(u=>({value:String(u.id), label:u.name+' ('+u.role+')', active:state.planningAssigneeId===u.id}))
            })}
          </div>
          <div>
            <label style="font-size:11px;color:var(--text-muted);">${state.planningIsRecurring ? 'Дата первой проверки' : 'Дата проверки'}</label>
            <!-- data-quiet-render: пока календарь открыт, экран не должен перерисовываться.
                 Иначе посторонняя перерисовка (например, по таймеру исчезающего уведомления)
                 пересоздаёт поле, и браузер применяет подсвеченную в календаре дату — сегодняшнюю,
                 хотя пользователь ничего не выбирал. -->
            <input type="date" data-quiet-render="1" style="width:100%;margin-top:2px;" value="${state.planningDueDate||''}" onchange="setPlanningField('DueDate', this.value)">
          </div>
        </div>

        <div style="margin-bottom:14px;padding:10px;background:var(--bg);border-radius:8px;">
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:12.5px;font-weight:600;">
            <input type="checkbox" ${state.planningIsRecurring?'checked':''} onchange="togglePlanningRecurring(this.checked)">
            🔁 Повторяющаяся проверка
          </label>
          ${state.planningIsRecurring ? `
            <div class="grid-cols cols-2" style="margin-top:10px;">
              <div>
                <label style="font-size:11px;color:var(--text-muted);">Периодичность</label><br>
                <select onchange="setPlanningField('RecurFreq', this.value)">
                  <option value="daily" ${state.planningRecurFreq==='daily'?'selected':''}>Ежедневно (например, для МСО)</option>
                  <option value="weekly" ${state.planningRecurFreq==='weekly'?'selected':''}>Еженедельно (например, для управляющего)</option>
                  <option value="monthly" ${state.planningRecurFreq==='monthly'?'selected':''}>Ежемесячно</option>
                </select>
              </div>
              <div>
                <label style="font-size:11px;color:var(--text-muted);">Срок на выполнение каждой проверки, дней <span style="font-weight:400;">(от момента назначения)</span></label>
                <input type="number" min="1" step="1" style="width:100%;margin-top:2px;" value="${state.planningSlaDays}" onchange="setPlanningField('SlaDays', this.value)">
              </div>
            </div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:8px;">
              После выполнения очередной проверки серия продолжится автоматически: следующая проверка будет назначена через
              ${RECUR_CADENCE_DAYS[state.planningRecurFreq]} дн., со сроком выполнения ${state.planningSlaDays} дн. от момента назначения.
            </div>
          ` : ''}
        </div>

        <div style="margin-bottom:14px;">
          <label style="font-size:11px;color:var(--text-muted);">Комментарий <span style="font-weight:400;">(необязательно)</span></label>
          <input type="text" id="planningNoteInput" style="width:100%;margin-top:2px;" value="${state.planningNote.replace(/"/g,'&quot;')}" placeholder="Например, повод внеплановой проверки" onchange="setPlanningField('Note', this.value)" oninput="setPlanningField('Note', this.value)">
        </div>
        <div style="display:flex;gap:8px;">
          <button class="btn" onclick="submitNewPlan()">Запланировать</button>
          <button class="btn btn-secondary" onclick="toggleAddPlanForm()">Отмена</button>
        </div>
      </div>
    ` : ''}

    <div class="card">
      <h3>Запланированные проверки <span class="muted">(${rows.length})</span></h3>
      ${rows.length===0 ? '<div class="empty-state">Пока ничего не запланировано.</div>' : rows.map(plan=>{
        const p = pointById(plan.pointId);
        const t = templateById(plan.templateId);
        const assignee = state.users.find(u=>u.id===plan.assigneeId);
        const info = planStatusInfo(plan);
        return `
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:10px 0;border-top:1px solid var(--border);">
            <div style="flex:1;min-width:260px;">
              <div style="font-weight:600;">${p ? p.name : '—'} <span class="tag">${p?p.type:''}</span>${plan.recurrence ? ` <span class="tag" style="color:var(--primary);">🔁 ${RECUR_FREQ_LABEL[plan.recurrence.freq]}</span>` : ''}</div>
              <div style="font-size:12px;color:var(--text-muted);">${t ? t.name : '—'} · исполнитель: ${assignee?assignee.name:'—'}</div>
              <div style="font-size:12px;color:var(--text-muted);">
                ${plan.recurrence ? `назначена: ${plan.assignedAt} · срок: ${plan.dueDate} (${plan.recurrence.slaDays} дн. на выполнение)` : `срок: ${plan.dueDate}`}
                ${plan.history && plan.history.length ? ` · выполнено проверок серии: ${plan.history.length}` : ''}
              </div>
              ${plan.note ? `<div style="font-size:11.5px;color:var(--text-muted);margin-top:2px;">«${plan.note}»</div>` : ''}
            </div>
            <span class="badge ${info.cls}">${info.label}</span>
            ${plan.status==='запланирована' ? (()=>{
              const progress = savedDraftProgress(plan.templateId, plan.pointId, plan.id);
              return `
              <button class="btn" style="padding:4px 10px;font-size:12px;" onclick="startPlanChecklist(${plan.id})">${progress ? 'Продолжить заполнение ('+progress.answered+' из '+progress.total+')' : 'Пройти чек-лист'}</button>`;
            })() + `
              ${canCloseWithoutChecklist() ? `<button class="btn btn-secondary" style="padding:4px 10px;font-size:12px;" title="Внести только итоговый балл, без прохождения пунктов" onclick="completePlanInspection(${plan.id})">Внести балл вручную</button>` : ''}
              ${canAssignInspections() ? `<button class="btn btn-secondary" style="padding:4px 10px;font-size:12px;" onclick="cancelPlan(${plan.id})">Отменить</button>` : ''}
            ` : `
              ${canAssignInspections() ? `<button class="btn btn-secondary" style="padding:4px 10px;font-size:12px;" onclick="deletePlan(${plan.id})">Удалить</button>` : ''}
            `}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderAdminRepeats(){
  // тоже детальный раздел — ограничиваем своей зоной (см. комментарий в renderAdminInspections)
  const groups = getRepeatingViolationsByPoint(2).filter(g=>isPointInMyScope(g.pointId));
  if(groups.length===0){
    return `<div class="card"><div class="empty-state">Сейчас нет пунктов, которые проваливаются 2 и более проверки подряд на одном объекте.</div></div>`;
  }
  return `
    <div class="card">
      <h3>Объекты с повторяющимися нарушениями <span class="muted">(нажмите на объект, чтобы увидеть, какие именно пункты не устраняются)</span></h3>
      <div class="table-scroll">
      <table>
        <tr><th>Объект</th><th>Тип</th><th>Повторяющихся пунктов</th><th>Макс. проверок подряд</th><th></th></tr>
        ${groups.map(g=>{
          const isOpen = state.repeatsExpandedPointId===g.pointId;
          return `
          <tr style="cursor:pointer;" onclick="toggleRepeatsDetail(${g.pointId})">
            <td>${g.pointName}</td>
            <td><span class="tag">${g.pointType}</span></td>
            <td>${g.items.length}</td>
            <td><span class="badge badge-danger">${g.maxStreak}×</span></td>
            <td style="text-align:right;white-space:nowrap;"><button class="btn btn-sm" onclick="event.stopPropagation(); toggleRepeatsDetail(${g.pointId})">${isOpen?'Свернуть':'Открыть'}</button></td>
          </tr>
          ${isOpen ? `<tr><td colspan="5" style="cursor:default;" onclick="event.stopPropagation()">${renderRepeatsPointDetail(g)}</td></tr>` : ''}`;
        }).join('')}
      </table>
      </div>
    </div>
  `;
}

function renderAdminInspections(){
  const typeFilter = state.inspFilterType;
  const regionFilter = state.inspFilterRegion;
  const managerFilter = state.inspFilterManager;
  const pointFilter = state.inspFilterPoint;
  const inspectorFilter = state.inspFilterInspector;
  const from = state.inspFilterFrom;
  const to = state.inspFilterTo;
  const noPeriod = !from && !to;
  const managerCandidates = state.users.filter(u=>u.role==='Управляющий'); // фильтрует сам комбобокс
  const managerSelectedLabel = managerFilter==='Все' ? 'Все' : (managerById(managerFilter)||{}).name;

  // список точек для комбобокса «Точка» — учитывает тип/регион/управляющего, но не сам фильтр по точке
  let candidatePts = state.points.filter(p=>p.status==='действующая');
  if(typeFilter!=='Все') candidatePts = candidatePts.filter(p=>p.type===typeFilter);
  if(regionFilter!=='Все') candidatePts = candidatePts.filter(p=>p.region===regionFilter);
  if(managerFilter!=='Все'){ const mgr = managerById(managerFilter); candidatePts = mgr ? candidatePts.filter(p=>mgr.pointIds.includes(p.id)) : candidatePts; }
  const pointOptionsAll = [...candidatePts].sort((a,b)=>a.name.localeCompare(b.name));
  const pointOptions = pointOptionsAll; // фильтрует сам комбобокс
  const pointSelectedLabel = pointFilter==='Все' ? 'Все' : (pointOptionsAll.find(p=>String(p.id)===pointFilter)||{}).name;

  // журнал проверок — детальный раздел: показываем только свою зону, даже если база отдаёт больше
  // (чтение проверок открыто всем сотрудникам ради сетевой аналитики — см. myScopePointIds)
  let rows = [...state.inspections].filter(i=>i.kind!=='Тайный покупатель' && isPointInMyScope(i.pointId));
  if(typeFilter!=='Все') rows = rows.filter(i=>{ const p = pointById(i.pointId); return p && p.type===typeFilter; });
  if(regionFilter!=='Все') rows = rows.filter(i=>{ const p = pointById(i.pointId); return p && p.region===regionFilter; });
  if(managerFilter!=='Все'){ const mgr = managerById(managerFilter); rows = mgr ? rows.filter(i=>mgr.pointIds.includes(i.pointId)) : rows; }
  if(pointFilter!=='Все') rows = rows.filter(i=>String(i.pointId)===pointFilter);
  if(from) rows = rows.filter(i=>i.date>=from);
  if(to) rows = rows.filter(i=>i.date<=to);

  // Список проверяющих собираем ДО применения фильтра по проверяющему (иначе после выбора в нём
  // остался бы один вариант), но ПОСЛЕ остальных фильтров — как у комбобокса «Точка».
  const inspectorOptions = [...new Set(rows.map(i=>(i.inspector||'').trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
  if(inspectorFilter!=='Все') rows = rows.filter(i=>(i.inspector||'').trim()===inspectorFilter);

  rows.sort((a,b)=> b.date.localeCompare(a.date));

  const periodLabel = noPeriod ? 'весь период' : ((from||'…')+' — '+(to||'…'));
  const summary = filtersSummary([
    typeFilter==='Все' ? 'все типы' : typeFilter,
    regionFilter==='Все' ? null : regionFilter,
    managerFilter==='Все' ? null : managerSelectedLabel,
    pointFilter==='Все' ? null : pointSelectedLabel,
    inspectorFilter==='Все' ? null : inspectorFilter,
    periodLabel,
    'найдено: '+rows.length
  ]);

  return `
    <div class="card">
      ${renderFiltersHeader('inspections', summary)}
      <div class="filters-grid" style="${filtersOpen('inspections') ? 'margin-top:14px;' : 'display:none;'}">
        <div>
          <div class="tag" style="margin-bottom:4px;">Тип мойки</div>
          <select onchange="setInspFilter('Type', this.value)">
            <option ${typeFilter==='Все'?'selected':''}>Все</option>
            ${state.pointTypes.map(t=>`<option ${typeFilter===t?'selected':''}>${t}</option>`).join('')}
          </select>
        </div>
        <div>
          <div class="tag" style="margin-bottom:4px;">Регион</div>
          <select onchange="setInspFilter('Region', this.value)">
            <option ${regionFilter==='Все'?'selected':''}>Все</option>
            ${REGIONS.map(r=>`<option ${regionFilter===r?'selected':''}>${r}</option>`).join('')}
          </select>
        </div>
        <div class="filters-wide">
          <div class="tag" style="margin-bottom:4px;">Управляющий <span class="filter-hint" style="font-weight:400;color:var(--text-muted);">(за ним закреплён свой портфель точек)</span></div>
          ${renderCombo({
            id:'inspManagerCombo', setterFn:'setInspFilter',
            searchField:'ManagerSearch', openField:'ManagerOpen', valueField:'Manager',
            isOpen: state.inspFilterManagerOpen, searchValue: state.inspFilterManagerSearch, selectedLabel: managerSelectedLabel,
            placeholder:'Все — начните вводить фамилию…',
            rows: [{value:'Все', label:'Все', active:managerFilter==='Все'}, ...managerCandidates.map(m=>({value:String(m.id), label:m.name, active:managerFilter===String(m.id)}))]
          })}
        </div>
        <div class="filters-wide">
          <div class="tag" style="margin-bottom:4px;">Точка <span class="filter-hint" style="font-weight:400;color:var(--text-muted);">(с учётом фильтров выше)</span></div>
          ${renderCombo({
            id:'inspPointCombo', setterFn:'setInspFilter',
            searchField:'PointSearch', openField:'PointOpen', valueField:'Point',
            isOpen: state.inspFilterPointOpen, searchValue: state.inspFilterPointSearch, selectedLabel: pointSelectedLabel,
            placeholder:'Все — начните вводить название…',
            rows: [{value:'Все', label:'Все', active:pointFilter==='Все'}, ...pointOptions.map(p=>({value:String(p.id), label:p.name, active:pointFilter===String(p.id)}))]
          })}
        </div>
        <div class="filters-wide filters-span2">
          <div class="tag" style="margin-bottom:4px;">Проверяющий <span class="filter-hint" style="font-weight:400;color:var(--text-muted);">(кто проводил проверку)</span></div>
          ${renderCombo({
            id:'inspInspectorCombo', setterFn:'setInspFilter',
            searchField:'InspectorSearch', openField:'InspectorOpen', valueField:'Inspector',
            isOpen: state.inspFilterInspectorOpen, searchValue: state.inspFilterInspectorSearch,
            selectedLabel: inspectorFilter==='Все' ? 'Все' : inspectorFilter,
            placeholder:'Все — начните вводить имя…',
            rows: [{value:'Все', label:'Все', active:inspectorFilter==='Все'}, ...inspectorOptions.map(name=>({value:name, label:name, active:inspectorFilter===name}))]
          })}
          ${inspectorOptions.length===0 ? `<div style="font-size:11px;color:var(--text-muted);margin-top:4px;">Проверок за выбранный период пока нет.</div>` : ''}
        </div>
        <div class="filters-period">
          <div class="tag" style="margin-bottom:4px;">Период</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
            <button class="btn btn-sm ${noPeriod?'':'btn-secondary'}" onclick="setInspPeriodPreset('all')">Произвольный период</button>
            <button class="btn btn-sm btn-secondary" onclick="setInspPeriodPreset(7)">7 дней</button>
            <button class="btn btn-sm btn-secondary" onclick="setInspPeriodPreset(30)">30 дней</button>
          </div>
          <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
            <input type="date" data-quiet-render="1" value="${from||''}" onchange="setInspFilter('From', this.value)">
            <span style="font-size:11px;color:var(--text-muted);">—</span>
            <input type="date" data-quiet-render="1" value="${to||''}" onchange="setInspFilter('To', this.value)">
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <h3>Проверки <span class="muted">(журнал плановых проверок по всей сети · нажмите на строку, чтобы открыть чек-лист)</span></h3>
      ${rows.length===0 ? '<div class="empty-state">Нет проверок по заданным фильтрам.</div>' : (isNarrowScreen() ? `
        ${rows.map(i=>{
          // На телефоне таблица из семи колонок требует горизонтальной прокрутки, а раскрытая
          // проверка внутри неё уезжает за экран — поэтому здесь карточки на всю ширину.
          const p = pointById(i.pointId);
          const t = templateById(i.templateId);
          const isOpen = state.expandedInspectionId===i.id;
          return `
            <div class="insp-card">
              <div onclick="toggleInspectionDetail(${i.id})" style="cursor:pointer;">
                <div style="display:flex;justify-content:space-between;gap:8px;align-items:flex-start;">
                  <div style="font-weight:600;">${p ? p.name : '—'} ${p ? `<span class="tag">${p.type}</span>` : ''}</div>
                  ${scoreBadge(i.score)}
                </div>
                <div style="font-size:12px;color:var(--text-muted);margin-top:3px;">${i.date} · ${t ? t.name : '—'}</div>
                <div style="font-size:12px;color:var(--text-muted);">Проверяющий: ${i.inspector}</div>
              </div>
              <button class="btn btn-sm btn-secondary" style="margin-top:8px;width:100%;" onclick="toggleInspectionDetail(${i.id})">${isOpen ? 'Свернуть' : 'Открыть состав проверки'}</button>
              ${isOpen ? renderInspectionDetail(i) : ''}
            </div>
          `;
        }).join('')}
      ` : `
      <div class="table-scroll">
      <table>
        <tr><th>Дата</th><th>Точка</th><th>Тип</th><th>Чек-лист</th><th>Проверяющий</th><th>Балл</th><th></th></tr>
        ${rows.map(i=>{
          const p = pointById(i.pointId);
          const t = templateById(i.templateId);
          const isOpen = state.expandedInspectionId===i.id;
          return `
            <tr style="cursor:pointer;" onclick="toggleInspectionDetail(${i.id})">
              <td style="white-space:nowrap;">${i.date}</td>
              <td>${p ? p.name : '—'}</td>
              <td>${p ? `<span class="tag">${p.type}</span>` : '—'}</td>
              <td>${t ? t.name : '—'}</td>
              <td>${i.inspector}</td>
              <td>${scoreBadge(i.score)}</td>
              <td style="text-align:right;white-space:nowrap;"><button class="btn btn-sm" style="white-space:nowrap;" onclick="event.stopPropagation(); toggleInspectionDetail(${i.id})">${isOpen ? 'Свернуть' : 'Открыть'}</button></td>
            </tr>
            ${isOpen ? `<tr><td colspan="7" style="cursor:default;" onclick="event.stopPropagation()">${renderInspectionDetail(i)}</td></tr>` : ''}
          `;
        }).join('')}
      </table>
      </div>
      `)}
    </div>
  `;
}

function renderAdminGuestInspections(){
  const rows = state.inspections.filter(i=>i.kind==='Тайный покупатель').sort((a,b)=> b.date.localeCompare(a.date));
  return `
    <div class="card">
      <h3>Гостевые проверки <span class="muted">(тайный покупатель — результаты видны только директору и отделу качества)</span></h3>
      <div style="font-size:11.5px;color:var(--text-muted);margin-bottom:12px;">
        Тайные покупатели не заводятся как пользователи системы — при прохождении проверки они просто указывают имя и контакт,
        чтобы можно было связаться по итогам. Чек-лист подбирается автоматически по типу выбранного объекта
        (свой набор пунктов на каждый тип точки настраивается в «Шаблонах чек-листов»).
      </div>
      ${rows.length===0 ? '<div class="empty-state">Гостевых проверок пока нет.</div>' : `
      <table>
        <tr><th>Дата</th><th>Точка</th><th>Тайный покупатель</th><th>Балл</th></tr>
        ${rows.map(i=>{
          const p = pointById(i.pointId);
          return `<tr><td>${i.date}</td><td>${p?p.name:'—'}</td><td>${i.guestName||i.inspector||'—'}${i.guestContact ? `<br><span style="font-size:11px;color:var(--text-muted);">${i.guestContact}</span>` : ''}</td><td>${scoreBadge(i.score)}</td></tr>`;
        }).join('')}
      </table>`}
    </div>
  `;
}

const POINT_TYPES_ALL = ['МСО', 'Робот', 'Конвейер'];
const TEMPLATE_ROLES = ['Оператор', 'Управляющий', 'Терр. директор', 'Техник'];
const FREQ_OPTIONS = [
  {value:'daily', label:'Ежедневно'},
  {value:'weekly', label:'Еженедельно'},
  {value:'monthly', label:'Ежемесячно'},
  {value:'quarterly', label:'Ежеквартально'}
];
const FREQ_DEFAULT_LABEL = {weekly:'еженедельно', monthly:'ежемесячно', quarterly:'ежеквартально'};

function renderAdminChecklists(){
  return `
    <div class="card">
      <h3>Шаблоны чек-листов <span class="muted">(набор и периодичность различаются по типу точки — см. ТЗ)</span></h3>
      <div style="margin-bottom:14px;">
        <button class="btn" onclick="createTemplate()">+ Создать чек-лист</button>
      </div>
      ${state.templates.map(t=> state.editingTemplateId===t.id ? renderTemplateEditor(t) : renderTemplateSummary(t)).join('')}
    </div>
  `;
}

function renderTemplateSummary(t){
  const isGuest = t.type==='Тайный покупатель';
  const count = t.multiPost ? (t.perPostItems.length+t.siteItems.length)+' на пост-шаблон' : t.items.length;
  return `
    <div class="checklist-item">
      <div class="row">
        <div>
          <div class="qtext">${t.name}</div>
          <div class="tags">
            <span class="tag">${t.type}</span>
            ${t.pointType ? `<span class="tag">${t.pointType}</span>` : (isGuest ? `<span class="tag" style="color:var(--text-muted);">универсальный (все типы)</span>` : '')}
            ${t.role ? `<span class="tag">роль: ${t.role}</span>` : ''}
            ${t.schedule ? `<span class="tag">${t.schedule.freq==='daily' ? 'ежедневно к '+t.schedule.time : t.schedule.label}</span>` : ''}
            <span class="tag">${count} пункт(ов)</span>
            ${t.multiPost ? '<span class="tag">попостовой</span>' : ''}
          </div>
        </div>
        <button class="btn btn-sm btn-secondary" onclick="toggleEditTemplate(${t.id})">Изменить</button>
      </div>
    </div>
  `;
}

function renderItemRow(templateId, key, idx, it){
  return `
    <div style="display:flex;gap:6px;align-items:center;margin-bottom:6px;">
      <input type="text" value="${(it.text||'').replace(/"/g,'&quot;')}" placeholder="Впишите формулировку пункта. «Раздел — пункт» соберёт блок" style="flex:1;min-width:180px;" onchange="updateItemText(${templateId},'${key}',${idx},this.value)">
      <select title="Тип ответа" onchange="updateItemType(${templateId},'${key}',${idx},this.value)">
        <option value="yesno" ${!it.type?'selected':''}>Да/Нет</option>
        <option value="scale" ${it.type==='scale'?'selected':''}>Оценка 0–5</option>
        <option value="text" ${it.type==='text'?'selected':''}>Только комментарий</option>
      </select>
      <label style="font-size:11px;display:flex;align-items:center;gap:3px;white-space:nowrap;" title="Вес пункта в итоговом балле: 2 значит «весит как два обычных пункта»">
        вес
        <input type="number" min="0" max="20" step="1" value="${itemWeight(it)}" style="width:52px;" onchange="updateItemWeight(${templateId},'${key}',${idx},this.value)">
      </label>
      <label style="font-size:11px;display:flex;align-items:center;gap:3px;white-space:nowrap;"><input type="checkbox" ${it.critical?'checked':''} onchange="toggleItemFlag(${templateId},'${key}',${idx},'critical')"> критично</label>
      <label style="font-size:11px;display:flex;align-items:center;gap:3px;white-space:nowrap;"><input type="checkbox" ${it.photo?'checked':''} onchange="toggleItemFlag(${templateId},'${key}',${idx},'photo')"> фото</label>
      <button class="btn btn-sm btn-secondary" onclick="removeItem(${templateId},'${key}',${idx})" title="Удалить пункт">✕</button>
    </div>
  `;
}

function renderItemsEditor(t, key, title){
  return `
    <div style="margin-top:12px;">
      <div style="font-size:11px;color:var(--text-muted);font-weight:700;text-transform:uppercase;margin-bottom:6px;">${title}</div>
      ${t[key].map((it,idx)=>renderItemRow(t.id, key, idx, it)).join('')}
      <button class="btn btn-sm btn-secondary" onclick="addItem(${t.id},'${key}')">+ Добавить пункт</button>
    </div>
  `;
}

function renderTemplateEditor(t){
  const isGuest = t.type==='Тайный покупатель';
  return `
    <div class="checklist-item" style="border-color:var(--primary)">
      <div style="margin-bottom:10px;">
        <label style="font-size:11px;color:var(--text-muted);">Название чек-листа</label>
        <input type="text" value="${t.name.replace(/"/g,'&quot;')}" style="width:100%;margin-top:2px;" onchange="updateTemplateField(${t.id},'name',this.value)">
      </div>

      <div style="margin-bottom:10px;">
        <label style="font-size:11px;color:var(--text-muted);">Категория</label><br>
        <select onchange="updateTemplateCategory(${t.id},this.value)">
          <option value="plan" ${!isGuest?'selected':''}>Плановая (по матрице ролей)</option>
          <option value="guest" ${isGuest?'selected':''}>Гостевая (тайный покупатель)</option>
        </select>
      </div>

      ${isGuest ? `
        <div style="margin-bottom:10px;max-width:260px;">
          <label style="font-size:11px;color:var(--text-muted);">Тип точки <span style="font-weight:400;">(свой гостевой чек-лист на каждый тип)</span></label><br>
          <select onchange="updateTemplateField(${t.id},'pointType',this.value)">
            <option value="" ${!t.pointType?'selected':''}>Универсальный (все типы)</option>
            ${POINT_TYPES_ALL.map(pt=>`<option value="${pt}" ${t.pointType===pt?'selected':''}>${pt}</option>`).join('')}
          </select>
          <div style="font-size:11px;color:var(--text-muted);margin-top:4px;">Если для типа точки нет своего гостевого чек-листа, используется универсальный.</div>
        </div>
      ` : `
        <div class="grid-cols cols-3" style="margin-bottom:10px;">
          <div>
            <label style="font-size:11px;color:var(--text-muted);">Тип точки</label><br>
            <select onchange="updateTemplateField(${t.id},'pointType',this.value)">
              ${POINT_TYPES_ALL.map(pt=>`<option value="${pt}" ${t.pointType===pt?'selected':''}>${pt}</option>`).join('')}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:var(--text-muted);">Роль-исполнитель</label><br>
            <select onchange="updateTemplateField(${t.id},'role',this.value)">
              ${TEMPLATE_ROLES.map(r=>`<option value="${r}" ${t.role===r?'selected':''}>${r}</option>`).join('')}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:var(--text-muted);">Периодичность</label><br>
            <select onchange="updateTemplateFreq(${t.id},this.value)">
              ${FREQ_OPTIONS.map(f=>`<option value="${f.value}" ${t.schedule && t.schedule.freq===f.value?'selected':''}>${f.label}</option>`).join('')}
            </select>
          </div>
        </div>
        ${t.schedule && t.schedule.freq==='daily' ? `
          <div style="margin-bottom:10px;">
            <label style="font-size:11px;color:var(--text-muted);">Время (к какому часу должен быть заполнен)</label><br>
            <input type="time" value="${t.schedule.time}" onchange="updateTemplateField(${t.id},'time',this.value)">
          </div>
        ` : ''}
        <div style="margin-bottom:14px;">
          <label style="font-size:12px;display:flex;align-items:center;gap:6px;">
            <input type="checkbox" ${t.multiPost?'checked':''} onchange="updateTemplateMultiPost(${t.id},this.checked)">
            Попостовой (пункты повторяются по числу постов точки — актуально для МСО)
          </label>
        </div>
      `}

      ${t.multiPost ? `
        ${renderItemsEditor(t, 'perPostItems', 'Пункты на каждый пост')}
        ${renderItemsEditor(t, 'siteItems', 'Пункты на точку целиком')}
      ` : renderItemsEditor(t, 'items', 'Пункты чек-листа')}

      <div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap;">
        ${state.live ? `<button class="btn" ${state.templateSaving?'disabled':''} onclick="saveTemplate(${t.id})">${state.templateSaving?'Сохраняем…':'Сохранить в общую базу'}</button>` : ''}
        <button class="btn btn-secondary" onclick="toggleEditTemplate(${t.id})">${state.live ? 'Свернуть' : 'Готово'}</button>
        <button class="btn btn-secondary" style="color:var(--danger)" onclick="deleteTemplate(${t.id})">Удалить чек-лист</button>
      </div>
      ${state.live ? `<div style="margin-top:8px;font-size:11.5px;color:var(--text-muted);">Правки видны сразу, но в общую базу попадут только после «Сохранить» — иначе исчезнут при следующем входе.</div>` : ''}
    </div>
  `;
}

function toggleEditTemplate(id){
  state.editingTemplateId = state.editingTemplateId===id ? null : id;
  render();
}

function createTemplate(){
  // отрицательный id — признак «ещё не сохранён в базе»: у сохранённых id выдаёт сама база,
  // и придуманный здесь номер мог бы совпасть с чужим настоящим
  const newId = state.live ? -Date.now() : Math.max(0,...state.templates.map(t=>t.id))+1;
  state.templates.push({
    id:newId, name:'Новый чек-лист', type:'Плановая', pointType:'МСО', role:'Оператор',
    schedule:{freq:'weekly', label:'еженедельно'}, multiPost:false, items:[]
  });
  state.editingTemplateId = newId;
  render();
}

// Сохранение чек-листа в общую базу. Отдельной кнопкой, а не на каждое изменение: в редакторе
// правится название, галочки и десятки пунктов — писать в базу на каждое нажатие означало бы
// шквал запросов и риск сохранить полузаполненный пункт.
async function saveTemplate(id){
  const t = templateById(id);
  if(!t) return;
  if(!state.live || !sb){ showBanner('Сохранение в общую базу доступно только в рабочем режиме.'); return; }

  const name = (t.name||'').trim();
  if(!name){ showBanner('Укажите название чек-листа.'); return; }
  const keys = t.multiPost ? ['perPostItems','siteItems'] : ['items'];
  const blank = keys.some(k=> (t[k]||[]).some(it=>!(it.text||'').trim()));
  if(blank){ showBanner('Есть пункты без формулировки — заполните или удалите их.'); return; }
  const totalItems = keys.reduce((n,k)=>n+(t[k]||[]).length, 0);
  if(totalItems===0){ showBanner('Добавьте хотя бы один пункт.'); return; }

  const payload = {
    name,
    type: t.type,
    point_type: t.pointType || null,
    role: t.role || null,
    schedule: t.schedule || null,
    multi_post: !!t.multiPost,
    items: t.multiPost ? [] : (t.items || []),
    per_post_items: t.multiPost ? (t.perPostItems || []) : [],
    site_items: t.multiPost ? (t.siteItems || []) : []
  };

  state.templateSaving = true; render();
  try{
    const isNew = id < 0;   // см. createTemplate
    const { data, error } = isNew
      ? await sbRetry(()=> sb.from('templates').insert(payload).select().single())
      : await sbRetry(()=> sb.from('templates').update(payload).eq('id', id).select().single());
    if(error) throw error;
    const saved = mapTemplateFromDb(data);
    const idx = state.templates.findIndex(x=>x.id===id);
    state.templates[idx] = saved;
    if(state.editingTemplateId===id) state.editingTemplateId = saved.id;
    state.templateSaving = false;
    showBanner('Чек-лист «'+saved.name+'» сохранён в общей базе.');
  } catch(e){
    state.templateSaving = false;
    showBanner('Не удалось сохранить чек-лист: ' + ((e && e.message) || e));
  }
  render();
}

async function deleteTemplate(id){
  const t = templateById(id);
  if(!confirm('Удалить чек-лист «'+t.name+'»? Это действие нельзя отменить.')) return;

  if(state.live && sb && id > 0){   // отрицательный id — черновик, в базе его ещё нет
    try{
      const { error } = await sbRetry(()=> sb.from('templates').delete().eq('id', id));
      if(error) throw error;
    } catch(e){
      // типичная причина — на чек-лист уже ссылаются проведённые проверки или планы
      showBanner('Не удалось удалить чек-лист: ' + ((e && e.message) || e) + '. Если по нему уже проводили проверки, удалить его нельзя.');
      render();
      return;
    }
  }
  state.templates = state.templates.filter(x=>x.id!==id);
  state.editingTemplateId = null;
  showBanner('Чек-лист удалён.');
}

function updateTemplateCategory(id, val){
  const t = templateById(id);
  if(val==='guest'){
    t.type = 'Тайный покупатель';
    // тип точки у гостевого чек-листа сохраняем (или ставим по умолчанию) — так можно завести
    // отдельный гостевой чек-лист на каждый тип точки; шаблон без типа точки работает как
    // универсальный fallback, если для конкретного типа своего чек-листа ещё не завели
    if(!t.pointType) t.pointType = 'МСО';
    delete t.role; delete t.schedule;
    t.multiPost = false;
    if(!t.items) t.items = t.perPostItems ? [...t.perPostItems] : [];
  } else {
    t.type = 'Плановая';
    if(!t.pointType) t.pointType = 'МСО';
    if(!t.role) t.role = 'Оператор';
    if(!t.schedule) t.schedule = {freq:'weekly', label:'еженедельно'};
  }
  render();
}

function updateTemplateField(id, field, value){
  const t = templateById(id);
  if(field==='time'){ t.schedule.time = value; }
  else { t[field] = value; }
  render();
}

function updateTemplateFreq(id, val){
  const t = templateById(id);
  if(val==='daily'){ t.schedule = {freq:'daily', time:'09:00'}; }
  else { t.schedule = {freq:val, label: FREQ_DEFAULT_LABEL[val]}; }
  render();
}

function updateTemplateMultiPost(id, checked){
  const t = templateById(id);
  t.multiPost = checked;
  if(checked){
    t.perPostItems = t.perPostItems || [];
    t.siteItems = t.siteItems || [];
    delete t.items;
  } else {
    t.items = t.items || [];
    delete t.perPostItems; delete t.siteItems;
  }
  showBanner('Переключение режима очищает пункты — заполните их заново.');
}

function updateItemText(templateId, key, idx, value){
  templateById(templateId)[key][idx].text = value;
}

function updateItemType(templateId, key, idx, value){
  const it = templateById(templateId)[key][idx];
  if(value==='yesno') delete it.type; else it.type = value;
  // пункт-комментарий не оценивается, поэтому и вес ему не нужен
  if(value==='text') it.weight = 0;
  else if(!(Number(it.weight)>0)) it.weight = 1;
  render();
}

// Вес пункта раньше можно было задать только через SQL: в конструкторе поля не было, и шаблоны,
// собранные в интерфейсе, считались как «все пункты равны» — балл расходился с привычным.
function updateItemWeight(templateId, key, idx, value){
  const n = Math.max(0, Math.min(20, Math.round(Number(value)||0)));
  templateById(templateId)[key][idx].weight = n;
  render();
}
function toggleItemFlag(templateId, key, idx, flag){
  const it = templateById(templateId)[key][idx];
  it[flag] = !it[flag];
  render();
}
function removeItem(templateId, key, idx){
  templateById(templateId)[key].splice(idx,1);
  render();
}
function addItem(templateId, key){
  // текст пустой, а подсказка живёт в placeholder — иначе она попадала в поле как настоящее
  // значение, и формулировка впечатывалась внутрь этой подсказки
  templateById(templateId)[key].push({text:'', critical:false, photo:false, weight:1});
  render();
}

function renderPointsTable(type, list){
  const group = (list || state.points).filter(p=>p.type===type);
  if(group.length===0) return '';
  return `
    <div class="card">
      <h3>${TYPE_LABELS[type]} <span class="muted">(${group.length} точ${group.length===1?'ка':'ек'} · рейтинг — среднее по проверкам управляющего/тер.директора за 30 дней)</span></h3>
      ${type==='МСО' ? `<div style="font-size:11.5px;color:var(--text-muted);margin-bottom:10px;">Число постов задаётся у объекта и определяет, сколько блоков «Пост N» появится в попостовом чек-листе. Нажмите на строку, чтобы изменить.</div>` : ''}
      <table class="points-table">
        <tr><th>Точка</th><th>Регион</th><th>Статус</th><th>Рейтинг</th></tr>
        ${group.map(p=>{
          const rating = computeObjectRating(p.id);
          // число постов показываем прямо в списке — иначе, чтобы сверить его по всем МСО,
          // приходилось бы открывать карточку каждой точки по очереди
          const postsTag = type==='МСО'
            ? (p.posts ? ` <span class="tag" style="color:var(--primary);">${p.posts} пост.</span>` : ` <span class="tag" style="color:var(--danger);">постов не указано</span>`)
            : '';
          return `
          <tr style="cursor:pointer;" onclick="startEditPoint(${p.id})" title="Нажмите, чтобы изменить">
            <td>${p.name}${postsTag} <span style="color:var(--primary);font-size:11px;">✎</span></td>
            <td>${p.region}</td>
            <td>${p.status==='действующая'?'<span class="badge badge-success">действующая</span>':'<span class="badge badge-neutral">недействующая</span>'}</td>
            <td>${p.status!=='действующая' ? '—' : (rating===null ? '<span class="tag">нет данных</span>' : scoreBadge(rating))}</td>
          </tr>
          ${state.editingPointId===p.id ? `<tr><td colspan="4" style="cursor:default;" onclick="event.stopPropagation()">${renderAddPointForm()}</td></tr>` : ''}`;
        }).join('')}
      </table>
    </div>
  `;
}

function setPointsFilter(field, value){
  state['pointsFilter'+field] = value;
  if(field==='Region'){ state.pointsFilterPoint = 'Все'; } // смена региона сбрасывает выбранный объект
  render();
}

function renderAdminPoints(){
  const regionFilter = state.pointsFilterRegion;
  const pointFilter = state.pointsFilterPoint;

  let filtered = [...state.points];
  if(regionFilter!=='Все') filtered = filtered.filter(p=>p.region===regionFilter);
  // список для комбобокса «Объект» — учитывает уже выбранный регион, но не сам фильтр по объекту
  const pointOptionsAll = filtered.slice().sort((a,b)=>a.name.localeCompare(b.name));
  const pointOptions = pointOptionsAll; // фильтрует сам комбобокс
  const pointSelectedLabel = pointFilter==='Все' ? 'Все' : (pointOptionsAll.find(p=>String(p.id)===pointFilter)||{}).name;
  if(pointFilter!=='Все') filtered = filtered.filter(p=>String(p.id)===pointFilter);

  return `
    <div class="card">
      <button class="btn" onclick="toggleAddPointForm()">${state.showAddPointForm ? 'Свернуть форму' : '+ Добавить объект'}</button>
    </div>

    ${state.showAddPointForm && state.editingPointId===null ? renderAddPointForm() : ''}

    <div class="card">
      ${renderFiltersHeader('objects', filtersSummary([
        regionFilter==='Все' ? 'все регионы' : regionFilter,
        pointFilter==='Все' ? null : pointSelectedLabel
      ]))}
      <div class="filters-grid" style="${filtersOpen('objects') ? 'margin-top:14px;' : 'display:none;'}">
        <div>
          <div class="tag" style="margin-bottom:4px;">Регион</div>
          <select onchange="setPointsFilter('Region', this.value)">
            <option ${regionFilter==='Все'?'selected':''}>Все</option>
            ${REGIONS.map(r=>`<option ${regionFilter===r?'selected':''}>${r}</option>`).join('')}
          </select>
        </div>
        <div class="filters-wide">
          <div class="tag" style="margin-bottom:4px;">Объект <span class="filter-hint" style="font-weight:400;color:var(--text-muted);">(с учётом региона выше)</span></div>
          ${renderCombo({
            id:'pointsFilterCombo', setterFn:'setPointsFilter',
            searchField:'PointSearch', openField:'PointOpen', valueField:'Point',
            isOpen: state.pointsFilterPointOpen, searchValue: state.pointsFilterPointSearch, selectedLabel: pointSelectedLabel,
            placeholder:'Все — начните вводить название…',
            rows: [{value:'Все', label:'Все', active:pointFilter==='Все'}, ...pointOptions.map(p=>({value:String(p.id), label:p.name, active:pointFilter===String(p.id)}))]
          })}
        </div>
      </div>
    </div>

    <div class="page-subtitle" style="margin-top:-8px">Реестр точек сети — сгруппирован по типу мойки, т.к. рейтинг и сравнение считаются только внутри одного типа. Показано ${filtered.length} из ${state.points.length} точек в демо. Нажмите на строку, чтобы изменить объект.</div>
    ${state.pointTypes.map(type=>renderPointsTable(type, filtered)).join('')}
  `;
}

function toggleAddPointForm(){
  state.showAddPointForm = !state.showAddPointForm;
  if(state.showAddPointForm){
    state.editingPointId = null;
    state.newPointName = '';
    state.newPointType = 'МСО';
    state.newPointRegion = REGIONS[0];
    state.newPointStatus = 'действующая';
    state.newPointPosts = 6;
  }
  render();
}

function startEditPoint(pointId){
  const p = state.points.find(x=>x.id===pointId);
  if(!p) return;
  state.showAddPointForm = true;
  state.editingPointId = pointId;
  state.newPointName = p.name;
  state.newPointType = p.type;
  state.newPointRegion = p.region;
  state.newPointStatus = p.status;
  state.newPointPosts = p.posts || 6;
  render();
}

function setNewPointField(field, value){
  state['newPoint'+field] = value;
  render();
}

async function submitNewPoint(){
  const name = state.newPointName.trim();
  if(!name){ showBanner('Укажите название объекта.'); return; }
  const isEdit = state.editingPointId !== null;
  const existing = isEdit ? state.points.find(p=>p.id===state.editingPointId) : null;
  if(isEdit && !existing){ showBanner('Объект не найден.'); state.showAddPointForm = false; state.editingPointId = null; render(); return; }

  const type = state.newPointType;
  const posts = type==='МСО' ? Math.max(1, Math.round(Number(state.newPointPosts))||6) : null;

  if(state.live && sb){
    const dbPayload = { name, type, posts, region: state.newPointRegion, status: state.newPointStatus };
    try{
      const { data, error } = isEdit
        ? await sbRetry(()=> sb.from('points').update(dbPayload).eq('id', existing.id).select().single())
        : await sbRetry(()=> sb.from('points').insert(dbPayload).select().single());
      if(error) throw error;
      if(isEdit){
        const idx = state.points.findIndex(p=>p.id===existing.id);
        state.points[idx] = data;
      } else {
        state.points.push(data);
      }
      state.showAddPointForm = false;
      state.editingPointId = null;
      showBanner(isEdit ? 'Изменения по объекту «'+name+'» сохранены в общей базе.' : 'Объект «'+name+'» добавлен в общую базу.');
    } catch(e){
      showBanner('Не удалось сохранить в общую базу: ' + (e.message||e));
    }
    render();
    return;
  }

  if(isEdit){
    existing.name = name;
    existing.type = type;
    existing.posts = posts;
    existing.region = state.newPointRegion;
    existing.status = state.newPointStatus;
  } else {
    const id = Math.max(0,...state.points.map(p=>p.id))+1;
    state.points.push({id, name, type, posts, region:state.newPointRegion, status:state.newPointStatus, score:0});
  }

  state.showAddPointForm = false;
  state.editingPointId = null;
  showBanner(isEdit ? 'Изменения по объекту «'+name+'» сохранены.' : 'Объект «'+name+'» добавлен в реестр.');
}

async function deletePoint(pointId){
  const p = state.points.find(x=>x.id===pointId);
  if(!p) return;
  if(!confirm('Удалить объект «'+p.name+'»? Это действие нельзя отменить.')) return;

  if(state.live && sb){
    try{
      // сначала чистим ссылки на объект у операторов/управляющих в общей базе, чтобы удаление
      // самой точки не оставляло "битые" point_id/point_ids у других сотрудников
      const { data: holders, error: holdersErr } = await sb.from('app_users').select('id,point_id,point_ids').or('point_id.eq.'+pointId+',point_ids.cs.{'+pointId+'}');
      if(holdersErr) throw holdersErr;
      for(const h of (holders||[])){
        const patch = {};
        if(h.point_id===pointId) patch.point_id = null;
        if(h.point_ids && h.point_ids.includes(pointId)) patch.point_ids = h.point_ids.filter(id=>id!==pointId);
        if(Object.keys(patch).length){
          const { error: cleanErr } = await sb.from('app_users').update(patch).eq('id', h.id);
          if(cleanErr) throw cleanErr;
        }
      }
      const { error: delErr } = await sbRetry(()=> sb.from('points').delete().eq('id', pointId));
      if(delErr) throw delErr;
      state.users.forEach(u=>{
        if(u.pointIds) u.pointIds = u.pointIds.filter(id=>id!==pointId);
        if(u.point===p.name) u.point = '—';
      });
      state.points = state.points.filter(x=>x.id!==pointId);
      state.showAddPointForm = false;
      state.editingPointId = null;
      showBanner('Объект «'+p.name+'» удалён из общей базы.');
    } catch(e){
      // типичная причина отказа — у объекта уже есть проверки/нарушения/план (внешний ключ не даёт
      // удалить строку); в этом случае в реестре есть статус «недействующая» — используйте его вместо удаления
      showBanner('Не удалось удалить объект: ' + (e.message||e) + '. Если у объекта уже есть проверки/нарушения — поставьте статус «недействующая» вместо удаления.');
    }
    render();
    return;
  }

  state.points = state.points.filter(x=>x.id!==pointId);
  // очищаем ссылки на удалённую точку у операторов и управляющих
  state.users.forEach(u=>{
    if(u.pointIds) u.pointIds = u.pointIds.filter(id=>id!==pointId);
    if(u.point===p.name) u.point = '—';
  });
  state.showAddPointForm = false;
  state.editingPointId = null;
  showBanner('Объект «'+p.name+'» удалён из реестра.');
}

function addNewRegion(){
  const name = (prompt('Название нового региона (города):')||'').trim();
  if(!name) return;
  if(REGIONS.some(r=>r.toLowerCase()===name.toLowerCase())){ showBanner('Такой регион уже есть в справочнике.'); return; }
  REGIONS.push(name);
  state.newPointRegion = name;
  showBanner('Регион «'+name+'» добавлен в справочник.');
}

function renderAddPointForm(){
  const isEdit = state.editingPointId !== null;
  return `
    <div class="card" style="border-color:var(--primary);">
      <h3>${isEdit ? 'Редактирование объекта проверки' : 'Новый объект проверки'}</h3>
      <div class="grid-cols cols-2" style="margin-bottom:14px;">
        <div>
          <label style="font-size:11px;color:var(--text-muted);">Название</label>
          <input type="text" id="newPointNameInput" style="width:100%;margin-top:2px;" value="${state.newPointName.replace(/"/g,'&quot;')}" placeholder="Например, МСО Заречная" onchange="setNewPointField('Name', this.value)" oninput="setNewPointField('Name', this.value)">
        </div>
        <div>
          <label style="font-size:11px;color:var(--text-muted);">Тип мойки</label><br>
          <select onchange="setNewPointField('Type', this.value)">
            ${state.pointTypes.map(t=>`<option ${state.newPointType===t?'selected':''}>${t}</option>`).join('')}
          </select>
        </div>
        ${state.newPointType==='МСО' ? `
        <div>
          <label style="font-size:11px;color:var(--text-muted);">Число постов (боксов)</label>
          <input type="number" min="1" max="20" style="width:100%;margin-top:2px;" value="${state.newPointPosts}" onchange="setNewPointField('Posts', this.value)" oninput="setNewPointField('Posts', this.value)">
        </div>
        ` : ''}
        <div>
          <label style="font-size:11px;color:var(--text-muted);">Город размещения</label><br>
          <div style="display:flex;gap:6px;align-items:center;">
            <select style="flex:1;" onchange="setNewPointField('Region', this.value)">
              ${REGIONS.map(r=>`<option ${state.newPointRegion===r?'selected':''}>${r}</option>`).join('')}
            </select>
            <button type="button" class="btn btn-secondary btn-sm" onclick="addNewRegion()">+ регион</button>
          </div>
        </div>
        <div>
          <label style="font-size:11px;color:var(--text-muted);">Статус</label><br>
          <select onchange="setNewPointField('Status', this.value)">
            <option value="действующая" ${state.newPointStatus==='действующая'?'selected':''}>Действующая</option>
            <option value="недействующая" ${state.newPointStatus==='недействующая'?'selected':''}>Недействующая</option>
          </select>
        </div>
      </div>

      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn" onclick="submitNewPoint()">${isEdit ? 'Сохранить изменения' : 'Добавить объект'}</button>
        <button class="btn btn-secondary" onclick="toggleAddPointForm()">Отмена</button>
        ${isEdit ? `<button class="btn" style="background:var(--danger);margin-left:auto;" onclick="deletePoint(${state.editingPointId})">Удалить объект</button>` : ''}
      </div>
    </div>
  `;
}

// Подпись портфеля пользователя: у управляющих — несколько точек (возможно разных типов), у остальных — одна точка/регион.
function userScopeLabel(u){
  if(u.role==='Аудитор') return 'Вся сеть — без подчинённых, доступ к любому объекту';
  if(u.role==='Маркетолог') return 'Не привязан к точке — запуск тайных проверок по сети';
  if(u.directorManagerIds){
    if(u.directorManagerIds.length===0) return '0 управляющих — подчинение не назначено';
    const mgrs = u.directorManagerIds.map(id=>state.users.find(x=>x.id===id)).filter(Boolean);
    const allPointIds = new Set();
    mgrs.forEach(m=>(m.pointIds||[]).forEach(pid=>allPointIds.add(pid)));
    return `${mgrs.length} управля${mgrs.length===1?'ющий':'ющих'} · ${allPointIds.size} точ${allPointIds.size===1?'ка':'ек'}`;
  }
  if(!u.pointIds) return u.point;
  if(u.pointIds.length===0) return '0 точек — портфель не назначен';
  const byType = {};
  u.pointIds.forEach(id=>{ const p = pointById(id); if(p) byType[p.type] = (byType[p.type]||0)+1; });
  const parts = Object.keys(byType).map(t=>`${t}×${byType[t]}`);
  return `${u.pointIds.length} точ${u.pointIds.length===1?'ка':'ек'} (${parts.join(', ')})`;
}

const DEFAULT_PERMS_BY_ROLE = {
  'Оператор': {createChecklists:false, assignInspections:false, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false},
  'Управляющий': {createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false},
  'Терр. директор': {createChecklists:true, assignInspections:true, deleteInspections:true, viewInspections:true, addPoints:true, addUsers:true},
  'Маркетолог': {createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false},
  'Аудитор': {createChecklists:false, assignInspections:true, deleteInspections:false, viewInspections:true, addPoints:false, addUsers:false}
};

function toggleAddUserForm(){
  state.showAddUserForm = !state.showAddUserForm;
  if(state.showAddUserForm){
    state.editingUserId = null;
    state.newUserName = '';
    state.newUserEmail = '';
    state.newUserRole = 'Оператор';
    state.newUserPointId = null;
    state.newUserPointIds = [];
    state.newUserPointSearch = '';
    state.newUserPointOpen = false;
    state.newUserManagerIds = [];
    state.newUserManagerSearch = '';
  }
  render();
}

function startEditUser(userId){
  const u = state.users.find(x=>x.id===userId);
  if(!u) return;
  state.showAddUserForm = true;
  state.editingUserId = userId;
  state.newUserName = u.name;
  state.newUserEmail = u.email || '';
  state.newUserRole = u.role;
  state.newUserPointSearch = '';
  state.newUserPointOpen = false;
  state.newUserManagerSearch = '';
  state.newUserPointId = null;
  state.newUserPointIds = [];
  state.newUserManagerIds = [];
  if(u.role==='Оператор'){
    const p = state.points.find(pt=>pt.name===u.point);
    state.newUserPointId = p ? p.id : null;
  } else if(u.role==='Управляющий'){
    state.newUserPointIds = u.pointIds ? [...u.pointIds] : [];
  } else if(u.role==='Терр. директор'){
    state.newUserManagerIds = u.directorManagerIds ? [...u.directorManagerIds] : [];
  }
  render();
}

function setNewUserField(field, value){
  if(field==='PointId'){ value = value==='' ? null : Number(value); }
  state['newUser'+field] = value;
  if(field==='Role'){ state.newUserPointId = null; state.newUserPointIds = []; state.newUserPointSearch = ''; state.newUserPointOpen = false; state.newUserManagerIds = []; state.newUserManagerSearch = ''; }
  render();
}

function toggleNewUserPoint(pointId){
  const idx = state.newUserPointIds.indexOf(pointId);
  if(idx===-1) state.newUserPointIds.push(pointId);
  else state.newUserPointIds.splice(idx,1);
  render();
}

function toggleNewUserManager(managerId){
  const idx = state.newUserManagerIds.indexOf(managerId);
  if(idx===-1) state.newUserManagerIds.push(managerId);
  else state.newUserManagerIds.splice(idx,1);
  render();
}

async function submitNewUser(){
  const name = state.newUserName.trim();
  if(!name){ showBanner('Укажите имя сотрудника.'); return; }
  const role = state.newUserRole;
  const isEdit = state.editingUserId !== null;
  const existing = isEdit ? state.users.find(u=>u.id===state.editingUserId) : null;
  if(isEdit && !existing){ showBanner('Пользователь не найден.'); state.showAddUserForm = false; state.editingUserId = null; render(); return; }

  const email = state.newUserEmail.trim();
  const userData = isEdit
    ? { id: existing.id, name, email: email || undefined, role, perms: existing.role===role ? existing.perms : {...DEFAULT_PERMS_BY_ROLE[role]} }
    : { id: Math.max(0,...state.users.map(u=>u.id))+1, name, email: email || undefined, role, perms: {...DEFAULT_PERMS_BY_ROLE[role]} };

  if(role==='Оператор'){
    if(!state.newUserPointId){ showBanner('Выберите мойку для оператора.'); return; }
    const p = pointById(state.newUserPointId);
    userData.point = p ? p.name : '—';
  } else if(role==='Управляющий'){
    if(state.newUserPointIds.length===0){ showBanner('Выберите хотя бы одну мойку для управляющего.'); return; }
    // защитная проверка: мойка не может быть закреплена сразу за двумя управляющими
    const takenElsewhere = state.newUserPointIds.filter(pid=>
      state.users.some(u=>u.role==='Управляющий' && u.id!==state.editingUserId && (u.pointIds||[]).includes(pid))
    );
    if(takenElsewhere.length>0){
      const names = takenElsewhere.map(pid=>(pointById(pid)||{}).name).filter(Boolean).join(', ');
      showBanner('Эти мойки уже закреплены за другим управляющим: '+names+'. Уберите их из выбора.');
      return;
    }
    userData.pointIds = [...state.newUserPointIds];
  } else if(role==='Терр. директор'){
    if(state.newUserManagerIds.length===0){ showBanner('Выберите хотя бы одного управляющего в подчинение.'); return; }
    userData.directorManagerIds = [...state.newUserManagerIds];
  }

  if(state.live && sb){
    const dbPayload = {
      name, email: email || null, role,
      point_id: role==='Оператор' ? state.newUserPointId : null,
      point_ids: role==='Управляющий' ? [...state.newUserPointIds] : [],
      director_manager_ids: role==='Терр. директор' ? [...state.newUserManagerIds] : [],
      perms: userData.perms
    };
    try{
      const { data, error } = isEdit
        ? await sb.from('app_users').update(dbPayload).eq('id', existing.id).select().single()
        : await sb.from('app_users').insert(dbPayload).select().single();
      if(error) throw error;
      const mapped = mapAppUserFromDb(data);
      if(isEdit){
        const idx = state.users.findIndex(u=>u.id===existing.id);
        state.users[idx] = mapped;
      } else {
        state.users.push(mapped);
      }
      state.showAddUserForm = false;
      state.editingUserId = null;
      showBanner(isEdit ? 'Изменения по пользователю «'+name+'» сохранены.' : 'Пользователь «'+name+'» добавлен в общую базу. Права доступа выставлены по умолчанию для роли — донастройте их точечно в таблице ниже.');
    } catch(e){
      showBanner('Не удалось сохранить в общую базу: ' + (e.message||e));
    }
    render();
    return;
  }

  if(isEdit){
    const idx = state.users.findIndex(u=>u.id===existing.id);
    state.users[idx] = userData;
  } else {
    state.users.push(userData);
  }

  state.showAddUserForm = false;
  state.editingUserId = null;
  persistUsersToStorage();
  showBanner(isEdit ? 'Изменения по пользователю «'+name+'» сохранены.' : 'Пользователь «'+name+'» добавлен. Права доступа выставлены по умолчанию для роли — донастройте их точечно в таблице ниже.');
}

async function deleteUser(userId){
  const u = state.users.find(x=>x.id===userId);
  if(!u) return;
  if(!confirm('Удалить пользователя «'+u.name+'»? Это действие нельзя отменить.')) return;

  if(state.live && sb){
    try{
      const { data: holders, error: holdersErr } = await sb.from('app_users').select('id,director_manager_ids').contains('director_manager_ids',[userId]);
      if(holdersErr) throw holdersErr;
      for(const h of (holders||[])){
        const cleaned = (h.director_manager_ids||[]).filter(id=>id!==userId);
        const { error: cleanErr } = await sb.from('app_users').update({director_manager_ids: cleaned}).eq('id', h.id);
        if(cleanErr) throw cleanErr;
      }
      const { error: delErr } = await sb.from('app_users').delete().eq('id', userId);
      if(delErr) throw delErr;
      state.users.forEach(x=>{ if(x.directorManagerIds) x.directorManagerIds = x.directorManagerIds.filter(id=>id!==userId); });
      state.users = state.users.filter(x=>x.id!==userId);
      state.showAddUserForm = false;
      state.editingUserId = null;
      showBanner('Пользователь «'+u.name+'» удалён из общей базы.');
    } catch(e){
      showBanner('Не удалось удалить пользователя: ' + (e.message||e));
    }
    render();
    return;
  }

  // очищаем ссылки на удаляемого пользователя у директоров, которым он был назначен как подчинённый управляющий
  state.users.forEach(x=>{ if(x.directorManagerIds) x.directorManagerIds = x.directorManagerIds.filter(id=>id!==userId); });
  state.users = state.users.filter(x=>x.id!==userId);
  // запоминаем id удалённого — чтобы дальнейшие правки MVP (обновления seed-данных) его не вернули
  state.deletedUserIds = state.deletedUserIds || [];
  if(!state.deletedUserIds.includes(userId)) state.deletedUserIds.push(userId);
  state.showAddUserForm = false;
  state.editingUserId = null;
  persistUsersToStorage();
  showBanner('Пользователь «'+u.name+'» удалён.');
}

function renderAddUserForm(){
  const role = state.newUserRole;
  // полный список — фильтрует сам комбобокс, см. comboQuietInput
  const activePoints = [...state.points]
    .filter(p=>p.status==='действующая')
    .sort((a,b)=>a.name.localeCompare(b.name));
  const managerCandidates = state.users.filter(u=>u.role==='Управляющий'); // фильтрует поле поиска, без перерисовки

  // мойка может быть закреплена только за одним управляющим — собираем, кому уже принадлежит
  // каждая точка (кроме самого редактируемого пользователя), чтобы заблокировать выбор занятых точек
  const pointOwnerName = {};
  state.users.forEach(u=>{
    if(u.role==='Управляющий' && u.id!==state.editingUserId && u.pointIds){
      u.pointIds.forEach(pid=>{ pointOwnerName[pid] = u.name; });
    }
  });

  const isEdit = state.editingUserId !== null;
  return `
    <div class="card" style="border-color:var(--primary);">
      <h3>${isEdit ? 'Редактирование пользователя' : 'Новый пользователь'}</h3>
      <div class="grid-cols cols-2" style="margin-bottom:14px;">
        <div>
          <label style="font-size:11px;color:var(--text-muted);">Имя сотрудника</label>
          <input type="text" id="newUserNameInput" style="width:100%;margin-top:2px;" value="${state.newUserName.replace(/"/g,'&quot;')}" placeholder="Например, Петрова А.В." onchange="setNewUserField('Name', this.value)" oninput="setNewUserField('Name', this.value)">
        </div>
        <div>
          <label style="font-size:11px;color:var(--text-muted);">Роль</label><br>
          <select onchange="setNewUserField('Role', this.value)">
            <option ${role==='Оператор'?'selected':''}>Оператор</option>
            <option ${role==='Управляющий'?'selected':''}>Управляющий</option>
            <option ${role==='Терр. директор'?'selected':''}>Терр. директор</option>
            <option ${role==='Маркетолог'?'selected':''}>Маркетолог</option>
            <option ${role==='Аудитор'?'selected':''}>Аудитор</option>
          </select>
        </div>
        <div>
          <label style="font-size:11px;color:var(--text-muted);">Email <span style="font-weight:400;">(необязательно)</span></label>
          <input type="text" id="newUserEmailInput" style="width:100%;margin-top:2px;" value="${state.newUserEmail.replace(/"/g,'&quot;')}" placeholder="name@company.ru" onchange="setNewUserField('Email', this.value)" oninput="setNewUserField('Email', this.value)">
        </div>
      </div>

      ${(role==='Маркетолог' || role==='Аудитор') ? `
        <div style="font-size:11.5px;color:var(--text-muted);margin-bottom:14px;padding:8px 10px;background:var(--bg);border-radius:8px;">
          Эта роль не привязана к конкретным точкам сети${role==='Аудитор' ? ' — доступ распространяется на все объекты' : ' — используется для запуска гостевых/тайных проверок'}.
        </div>
      ` : ''}

      ${role==='Оператор' ? `
        <div style="margin-bottom:14px;">
          <label style="font-size:11px;color:var(--text-muted);">Мойка <span style="font-weight:400;">(у оператора — одна точка)</span></label>
          ${renderCombo({
            id:'newUserPointCombo', setterFn:'setNewUserField',
            searchField:'PointSearch', openField:'PointOpen', valueField:'PointId',
            isOpen: state.newUserPointOpen, searchValue: state.newUserPointSearch,
            selectedLabel: state.newUserPointId ? ((pointById(state.newUserPointId)||{}).name||'') : '',
            placeholder:'Начните вводить название мойки…',
            rows: activePoints.map(p=>({value:String(p.id), label:p.name+' ('+p.type+')', active:state.newUserPointId===p.id}))
          })}
        </div>
      ` : ''}

      ${role==='Управляющий' ? `
        <div style="margin-bottom:14px;">
          <label style="font-size:11px;color:var(--text-muted);">Мойки, закреплённые за управляющим <span style="font-weight:400;">(можно выбрать несколько, в том числе разных типов)</span></label>
          <div id="newUserPointList" data-preserve-scroll style="max-height:260px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;padding:8px;margin-top:6px;">
            <input type="text" id="newUserPointSearch" data-quiet-render="1" style="width:100%;margin-bottom:6px;" placeholder="Поиск по названию мойки…" value="${state.newUserPointSearch.replace(/"/g,'&quot;')}" oninput="filterCheckboxList('newUserPointList', this.value)">
            ${activePoints.length===0 ? '<div class="empty-state" style="padding:6px 0;">Ничего не найдено.</div>' : activePoints.map(p=>{
              const takenBy = pointOwnerName[p.id];
              return `
              <label data-filter-label="${(p.name+' '+p.type).replace(/"/g,'&quot;')}" style="display:flex;align-items:center;gap:8px;padding:4px 2px;font-size:12.5px;${takenBy ? 'opacity:.5;cursor:not-allowed;' : 'cursor:pointer;'}" ${takenBy ? `title="Уже закреплено за ${takenBy.replace(/"/g,'&quot;')}"` : ''}>
                <input type="checkbox" ${state.newUserPointIds.includes(p.id)?'checked':''} ${takenBy?'disabled':''} onchange="toggleNewUserPoint(${p.id})">
                ${p.name} <span class="tag">${p.type}</span>${takenBy ? `<span class="tag" style="color:var(--text-muted);">занято: ${takenBy}</span>` : ''}
              </label>
            `;}).join('')}
            <div data-filter-empty class="empty-state" style="padding:6px 0;display:none;">Ничего не найдено.</div>
          </div>
          <div style="font-size:11px;color:var(--text-muted);margin-top:6px;">Выбрано: ${state.newUserPointIds.length}</div>
        </div>
      ` : ''}

      ${role==='Терр. директор' ? `
        <div style="margin-bottom:14px;">
          <label style="font-size:11px;color:var(--text-muted);">Управляющие в подчинении <span style="font-weight:400;">(зона ответственности директора = объекты этих управляющих)</span></label>
          <div id="newUserManagerList" data-preserve-scroll style="max-height:260px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;padding:8px;margin-top:6px;">
            <input type="text" id="newUserManagerSearch" data-quiet-render="1" style="width:100%;margin-bottom:6px;" placeholder="Поиск по фамилии управляющего…" value="${state.newUserManagerSearch.replace(/"/g,'&quot;')}" oninput="filterCheckboxList('newUserManagerList', this.value)">
            ${managerCandidates.length===0 ? '<div class="empty-state" style="padding:6px 0;">Ничего не найдено.</div>' : managerCandidates.map(m=>`
              <label data-filter-label="${m.name.replace(/"/g,'&quot;')}" style="display:flex;align-items:center;gap:8px;padding:4px 2px;font-size:12.5px;cursor:pointer;">
                <input type="checkbox" ${state.newUserManagerIds.includes(m.id)?'checked':''} onchange="toggleNewUserManager(${m.id})">
                ${m.name} <span class="tag">${userScopeLabel(m)}</span>
              </label>
            `).join('')}
            <div data-filter-empty class="empty-state" style="padding:6px 0;display:none;">Ничего не найдено.</div>
          </div>
          <div style="font-size:11px;color:var(--text-muted);margin-top:6px;">Выбрано: ${state.newUserManagerIds.length}</div>
        </div>
      ` : ''}

      <div style="font-size:11px;color:var(--text-muted);margin-bottom:14px;">Права доступа выставятся по умолчанию для роли — донастроить их точечно можно будет в таблице ниже.</div>

      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn" onclick="submitNewUser()">${isEdit ? 'Сохранить изменения' : 'Добавить пользователя'}</button>
        <button class="btn btn-secondary" onclick="toggleAddUserForm()">Отмена</button>
        ${isEdit ? `<button class="btn" style="background:var(--danger);margin-left:auto;" onclick="deleteUser(${state.editingUserId})">Удалить пользователя</button>` : ''}
      </div>
    </div>
  `;
}

const USER_ROLES = ['Оператор', 'Управляющий', 'Терр. директор', 'Маркетолог', 'Аудитор'];

function setUsersFilter(field, value){
  state['usersFilter'+field] = value;
  render();
}

function renderAdminUsers(){
  const permLabels = [
    ['createChecklists','Создание чек-листов'],
    ['assignInspections','Назначение проверок'],
    ['deleteInspections','Удаление проверок'],
    ['viewInspections','Просмотр проверок'],
    ['addPoints','Добавление объекта'],
    ['addUsers','Добавление пользователя']
  ];
  const searchFilter = state.usersFilterSearch;
  const roleFilter = state.usersFilterRole;
  const filteredUsers = state.users.filter(u=>
    matchesSearch(u.name, searchFilter) && (roleFilter==='Все' || u.role===roleFilter)
  );
  return `
    <div class="card">
      <button class="btn" onclick="toggleAddUserForm()">${state.showAddUserForm ? 'Свернуть форму' : '+ Добавить пользователя'}</button>
    </div>

    ${state.showAddUserForm && state.editingUserId===null ? renderAddUserForm() : ''}

    <div class="card">
      <h3>Фильтры</h3>
      <div class="grid-cols cols-2">
        <div>
          <div class="tag" style="margin-bottom:4px;">Фамилия</div>
          <input type="text" id="usersFilterSearchInput" style="width:100%;" placeholder="Начните вводить фамилию…" value="${searchFilter.replace(/"/g,'&quot;')}" oninput="setUsersFilter('Search', this.value)">
        </div>
        <div>
          <div class="tag" style="margin-bottom:4px;">Роль</div>
          <select onchange="setUsersFilter('Role', this.value)">
            <option ${roleFilter==='Все'?'selected':''}>Все</option>
            ${USER_ROLES.map(r=>`<option ${roleFilter===r?'selected':''}>${r}</option>`).join('')}
          </select>
        </div>
      </div>
    </div>

    <div class="card">
      <h3>Пользователи и гибкие права доступа <span class="muted">(права настраиваются по пользователю, а не жёстко привязаны к роли · нажмите на пользователя, чтобы изменить)</span></h3>
      ${filteredUsers.length===0 ? '<div class="empty-state">Нет пользователей по заданным фильтрам.</div>' : `
      <div class="perm-grid" style="margin-bottom:8px;">
        <div class="head" style="text-align:left">Пользователь</div>
        ${permLabels.map(p=>`<div class="head">${p[1]}</div>`).join('')}
      </div>
      ${filteredUsers.map(u=>`
        <div class="perm-grid" style="padding:8px 0;border-top:1px solid var(--border)">
          <div style="cursor:pointer;" onclick="startEditUser(${u.id})" title="Нажмите, чтобы изменить">${u.name}${u.email ? `<br><span style="font-size:11px;color:var(--text-muted);">${u.email}</span>` : ''}<br><span class="tag">${u.role} · ${userScopeLabel(u)}</span> <span style="color:var(--primary);font-size:11px;">✎ изменить</span></div>
          ${permLabels.map(p=>`
            <div class="perm-cell">
              <input type="checkbox" ${u.perms[p[0]]?'checked':''} onchange="togglePerm(${u.id},'${p[0]}')">
            </div>
          `).join('')}
        </div>
        ${state.editingUserId===u.id ? `<div style="margin:4px 0 10px;">${renderAddUserForm()}</div>` : ''}
      `).join('')}`}
    </div>
  `;
}

async function togglePerm(userId, perm){
  const u = state.users.find(u=>u.id===userId);
  u.perms[perm] = !u.perms[perm];
  render();
  if(state.live && sb){
    const { error } = await sb.from('app_users').update({perms: u.perms}).eq('id', userId);
    if(error){ u.perms[perm] = !u.perms[perm]; showBanner('Не удалось сохранить право: ' + (error.message||error)); render(); }
    return;
  }
  persistUsersToStorage();
}

// ---------- ГОСТЬ (ТАЙНЫЙ ПОКУПАТЕЛЬ) ----------

// Подбирает гостевой чек-лист под тип точки: сначала ищем чек-лист, заведённый именно под этот
// тип (МСО/Робот/Конвейер), и только если такого нет — берём универсальный (без указанного типа).
function guestTemplateForPoint(point){
  if(!point) return null;
  const guestTemplates = state.templates.filter(t=>t.type==='Тайный покупатель');
  return guestTemplates.find(t=>t.pointType===point.type) || guestTemplates.find(t=>!t.pointType) || null;
}

function setGuestField(field, value){
  if(field==='PointId'){ value = value==='' ? null : Number(value); }
  state['guest'+field] = value;
  if(field==='Name' && !state.guestContact.trim()){
    // если имя совпадает с уже знакомым гостем — подставляем его контакт (можно поправить вручную)
    const match = state.knownGuests.find(g=>g.name.trim().toLowerCase()===String(value).trim().toLowerCase());
    if(match && match.contact) state.guestContact = match.contact;
  }
  render();
}

function startGuestChecklist(){
  const point = state.guestPointId ? pointById(state.guestPointId) : null;
  if(!point) { showBanner('Выберите объект проверки.'); return; }
  if(!guestTemplateForPoint(point)) { showBanner('Для этого типа точки пока нет гостевого чек-листа.'); return; }
  if(!state.guestName.trim() || !state.guestContact.trim()) { showBanner('Укажите имя и контакт.'); return; }
  state.guestStep = 'checklist';
  state.guestAnswers = {};
  render();
}

// Экран «представиться» — выбор объекта + лёгкая идентификация тайного покупателя.
// Это НЕ создание пользователя системы: имя/контакт хранятся только при конкретной проверке,
// без роли, без прав доступа, без входа в систему — только чтобы знать, кто проверял, и как связаться.
function renderGuestIntake(){
  // полный список — фильтрует сам комбобокс, см. comboQuietInput
  const activePoints = [...state.points]
    .filter(p=>p.status==='действующая')
    .sort((a,b)=>a.name.localeCompare(b.name));
  const selectedPoint = state.guestPointId ? pointById(state.guestPointId) : null;
  const matchedTemplate = selectedPoint ? guestTemplateForPoint(selectedPoint) : null;
  const canContinue = !!(selectedPoint && matchedTemplate && state.guestName.trim() && state.guestContact.trim());

  return `
    <div class="guest-shell">
      <div class="guest-header">
        <h2 style="margin:0">Гостевая проверка</h2>
        <div style="opacity:.85;font-size:13px;margin-top:4px">Доступ по одноразовой ссылке</div>
      </div>
      <div class="guest-body">
        <div style="font-size:12.5px;color:var(--text-muted);margin-bottom:16px">
          Перед началом укажите объект и представьтесь. Это не создаёт вам учётную запись в системе —
          имя и контакт нужны только для этой проверки, чтобы с вами могли связаться по её итогам.
        </div>
        <div style="margin-bottom:14px;">
          <label style="font-size:11px;color:var(--text-muted);">Объект проверки</label>
          ${renderCombo({
            id:'guestPointCombo', setterFn:'setGuestField',
            searchField:'PointSearch', openField:'PointOpen', valueField:'PointId',
            isOpen: state.guestPointOpen, searchValue: state.guestPointSearch,
            selectedLabel: selectedPoint ? selectedPoint.name+' ('+selectedPoint.type+')' : '',
            placeholder:'Начните вводить название объекта…',
            rows: activePoints.map(p=>({value:String(p.id), label:p.name+' ('+p.type+')', active:state.guestPointId===p.id}))
          })}
          ${selectedPoint && !matchedTemplate ? `<div style="font-size:11.5px;color:var(--danger);margin-top:6px;">Для типа «${selectedPoint.type}» пока нет гостевого чек-листа — обратитесь к администратору.</div>` : ''}
        </div>
        <div style="margin-bottom:14px;">
          <label style="font-size:11px;color:var(--text-muted);">Ваше имя</label>
          <input id="guestNameInput" list="knownGuestNames" type="text" autocapitalize="words" autocorrect="off" spellcheck="false" style="width:100%;margin-top:2px;" value="${state.guestName.replace(/"/g,'&quot;')}" placeholder="Например, Иван Петров" oninput="setGuestField('Name', this.value)">
          <datalist id="knownGuestNames">
            ${state.knownGuests.map(g=>`<option value="${g.name.replace(/"/g,'&quot;')}">`).join('')}
          </datalist>
        </div>
        <div style="margin-bottom:16px;">
          <label style="font-size:11px;color:var(--text-muted);">Контакт (телефон или email) <span style="font-weight:400;">— для связи по итогам проверки</span></label>
          <input id="guestContactInput" type="text" autocapitalize="off" autocorrect="off" spellcheck="false" style="width:100%;margin-top:2px;" value="${state.guestContact.replace(/"/g,'&quot;')}" placeholder="+7 900 000-00-00" oninput="setGuestField('Contact', this.value)">
        </div>
        <button class="btn" ${!canContinue?'disabled':''} onclick="startGuestChecklist()">Начать проверку</button>
      </div>
    </div>
  `;
}

function renderGuest(){
  if(state.guestSubmitted){
    const point = state.guestPointId ? pointById(state.guestPointId) : null;
    return `
      <div class="guest-shell">
        <div class="guest-header"><h2 style="margin:0">Гостевая проверка</h2><div style="opacity:.85;font-size:13px;margin-top:4px">${point?point.name:''}</div></div>
        <div class="guest-body">
          <div class="locked-overlay">
            <div style="font-size:34px;margin-bottom:10px">✅</div>
            <div style="font-weight:700;margin-bottom:6px">Спасибо, проверка отправлена</div>
            <div style="font-size:13px;color:var(--text-muted)">Эта ссылка одноразовая и больше не активна. Результаты увидят только территориальный директор и отдел качества.</div>
          </div>
        </div>
      </div>
    `;
  }

  if(state.guestStep!=='checklist'){
    return renderGuestIntake();
  }

  const point = pointById(state.guestPointId);
  const t = guestTemplateForPoint(point);
  if(!point || !t){
    // защитный случай (например, шаблон удалили прямо во время прохождения) — возвращаем к выбору объекта
    state.guestStep = 'intake';
    return renderGuestIntake();
  }
  const items = buildChecklistItems(t, point) || t.items || [];
  const allAnswered = items.every((it,idx)=> state.guestAnswers[idx]!==undefined);
  // фото обязательно, если так задано в пункте ИЛИ если ответили «Нет»; комментарий обязателен при «Нет»
  const missingPhotos = items.some((it,idx)=>{ const ans=state.guestAnswers[idx]; return ans!==undefined && ans!=='na' && (it.photo || ans==='no') && !state.guestAnswers['photo'+idx]; });
  const missingComments = items.some((it,idx)=> state.guestAnswers[idx]==='no' && !(state.guestAnswers['comment'+idx] && state.guestAnswers['comment'+idx].trim()));

  return `
    <div class="guest-shell">
      <div class="guest-header">
        <h2 style="margin:0">Гостевая проверка</h2>
        <div style="opacity:.85;font-size:13px;margin-top:4px">${point.name} · доступ по одноразовой ссылке</div>
      </div>
      <div class="guest-body">
        <div style="font-size:12.5px;color:var(--text-muted);margin-bottom:16px">Вы не видите внутреннюю структуру сети — только эту форму. Ссылка станет неактивной сразу после отправки.</div>
        <div style="font-size:11.5px;color:var(--text-muted);margin-bottom:16px">
          Если отвечаете «Нет» — обязательно прикрепите фото и опишите проблему в комментарии.<br>
          «Н/А» (неактуально) — если на этом объекте такого нет: пункт не учитывается в оценке.
        </div>
        ${items.map((it,idx)=>{
          const ans = state.guestAnswers[idx];
          const photoRequired = ans!=='na' && (it.photo || ans==='no');
          const commentRequired = ans==='no';
          const comment = state.guestAnswers['comment'+idx] || '';
          return `
          <div class="checklist-item">
            <div class="row">
              <div class="qtext">${idx+1}. ${it.text}</div>
              <div class="answer-toggle">
                <button class="toggle-btn yes ${ans==='yes'?'active':''}" onclick="setGuestAnswer(${idx},'yes')">Да</button>
                <button class="toggle-btn no ${ans==='no'?'active':''}" onclick="setGuestAnswer(${idx},'no')">Нет</button>
                <button class="toggle-btn na ${ans==='na'?'active':''}" title="Неактуально: на этом объекте такого нет" onclick="setGuestAnswer(${idx},'na')">Н/А</button>
              </div>
            </div>
            ${photoRequired ? `<div class="photo-btn ${state.guestAnswers['photo'+idx]?'attached':''}" onclick="toggleGuestPhoto(${idx})">📷 ${state.guestAnswers['photo'+idx]?'Фото прикреплено':'Прикрепить фото'}${ans==='no' && !it.photo ? ' (обязательно при ответе «Нет»)' : ''}</div>` : ''}
            ${commentRequired ? `
              <div style="margin-top:8px;">
                <textarea id="guestComment${idx}" rows="2" data-quiet-render="1" style="width:100%;box-sizing:border-box;border:1px solid ${comment.trim()?'var(--border)':'var(--danger)'};border-radius:7px;padding:6px 9px;font-size:12.5px;font-family:inherit;" placeholder="Опишите, что не так (обязательно)" oninput="setGuestComment(${idx}, this.value)" onblur="commitGuestComment()">${comment.replace(/</g,'&lt;')}</textarea>
              </div>
            ` : ''}
          </div>
        `;}).join('')}
        <button class="btn" ${(!allAnswered||missingPhotos||missingComments||state.guestBusy)?'disabled':''} onclick="submitGuest()">${state.guestBusy?'Сохраняем…':'Отправить проверку'}</button>
        ${missingPhotos ? `<div style="margin-top:10px;font-size:12px;color:var(--danger)">Прикрепите фото там, где оно обязательно.</div>` : ''}
        ${missingComments ? `<div style="margin-top:6px;font-size:12px;color:var(--danger)">Опишите комментарием каждый пункт с ответом «Нет».</div>` : ''}
      </div>
    </div>
  `;
}

function setGuestAnswer(idx, val){
  state.guestAnswers[idx] = val;
  render();
}
function toggleGuestPhoto(idx){
  state.guestAnswers['photo'+idx] = !state.guestAnswers['photo'+idx];
  render();
}
// см. setComment: на телефоне полная перерисовка во время набора съедает нажатия
function setGuestComment(idx, value){
  state.guestAnswers['comment'+idx] = value;
}
function commitGuestComment(){ render(); }

async function submitGuest(){
  if(state.guestBusy) return; // защита от повторного нажатия «Отправить» пока идёт сохранение
  const point = pointById(state.guestPointId);
  const t = guestTemplateForPoint(point);
  if(!point || !t) return;
  const items = buildChecklistItems(t, point) || t.items || [];
  const passed = items.filter((it,idx)=>state.guestAnswers[idx]==='yes').length;
  const score = computeChecklistScore(items, items.map((it,idx)=>state.guestAnswers[idx])); // с учётом весов
  const name = state.guestName.trim();
  const contact = state.guestContact.trim();
  const itemsPayload = items.map((it,idx)=>({ text:it.text, critical:it.critical, photo:it.photo, weight:itemWeight(it), answer:state.guestAnswers[idx], comment: state.guestAnswers['comment'+idx] || '' }));

  if(state.guestLive && sb){
    state.guestBusy = true; render();
    const today = new Date().toISOString().slice(0,10);
    try{
      // Сама проверка важнее подсказки по имени/контакту — если основная вставка прошла, а
      // обновление known_guests не удалось, это не должно откатывать уже сохранённый результат.
      const { error: insErr } = await sbRetry(()=> sb.from('inspections').insert({
        point_id: point.id, template_id: t.id, kind:'Тайный покупатель', date: today,
        score, inspector:'Гость: '+name, guest_name:name, guest_contact:contact, items: itemsPayload
      }));
      if(insErr) throw insErr;
      state.guestSubmitted = true;
      try{
        const { data: existing } = await sb.from('known_guests').select('*').ilike('name', name);
        if(existing && existing.length>0) await sb.from('known_guests').update({ contact }).eq('id', existing[0].id);
        else await sb.from('known_guests').insert({ name, contact });
      } catch(e){ /* подсказка на следующий визит — не критично, если не сохранилась */ }
    } catch(e){
      showBanner('Не удалось отправить проверку в общую базу: ' + (e.message||e));
    }
    state.guestBusy = false;
    render();
    return;
  }

  const newId = Math.max(0,...state.inspections.map(i=>i.id))+1;
  state.inspections.unshift({
    id:newId, pointId:point.id, templateId:t.id, kind:'Тайный покупатель', date:ANALYTICS_TODAY,
    score, inspector:'Гость: '+name, guestName:name, guestContact:contact,
    items: itemsPayload
  });
  // запоминаем имя/контакт для подсказки при следующем визите — это НЕ пользователь системы,
  // просто чтобы не вводить одно и то же заново (без роли, без прав, без входа в систему)
  const existingIdx = state.knownGuests.findIndex(g=>g.name.trim().toLowerCase()===name.toLowerCase());
  if(existingIdx>=0) state.knownGuests[existingIdx] = {name, contact};
  else state.knownGuests.push({name, contact});
  persistGuestsToStorage();
  state.guestSubmitted = true;
  render();
}
// ---------- Общие вспомогательные ----------

function bannerHtml(){
  return state.banner ? `<div class="banner">${state.banner}</div>` : '';
}

// доп. рендер формы устранения нарушения оператором (инлайн после таблицы)
function renderFixPanels(){
  const fixing = state.violations.filter(v=>v._fixing);
  if(fixing.length===0) return '';
  return fixing.map(v=>`
    <div class="card" style="border-color:var(--warning)">
      <h3>Устранение: ${v.item}</h3>
      <div class="photo-btn attached" style="margin-bottom:12px">📷 Фото «после» прикреплено (демо)</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn" onclick="confirmFix(${v.id})">Подтвердить устранение</button>
        <button class="btn btn-secondary" onclick="fixViolation(${v.id})">Отмена</button>
      </div>
    </div>
  `).join('');
}

// ---------- Главный рендер ----------

function renderPreviewShell(inner, role){
  const exitLink = state.live
    ? `<a onclick="goChangePassword()">Сменить пароль</a> · <a onclick="doLogout()">← Выйти из рабочего режима</a>`
    : state.guestLive
      ? `<a onclick="exitPreview()">← Завершить (это была реальная проверка)</a>`
      : `<a onclick="exitPreview()">← Выйти из демо-просмотра (в кабинет управления)</a>`;

  if(role==='operator'){
    return `
      <div class="kiosk-header">
        <div class="kiosk-point">🚿 ${pointById(state.myPointId).name}</div>
        <div class="kiosk-sub">Рабочий телефон точки · чек-листы приходят по расписанию</div>
      </div>
      <div class="kiosk-content">${inner}</div>
      <div class="kiosk-demo-toggle">${exitLink}</div>
    `;
  }

  if(role==='guest'){
    return `
      <div style="max-width:560px;margin:0 auto;padding:16px 16px 4px;">
        <div style="text-align:center;margin-bottom:10px;font-size:11px;color:var(--text-muted);">${exitLink}</div>
        ${inner}
      </div>
    `;
  }

  // Управляющий / территориальный директор — черновые экраны, ещё не переведённые на телефон
  const roleLabel = role==='manager' ? 'Управляющий мойки' : 'Терр. директор';
  return `
    <div class="app">
      <aside class="sidebar" style="width:220px;">
        <h1 style="font-size:14px;color:#fff;margin:0 0 4px 0;">${roleLabel}</h1>
        <div class="nav-note" style="display:block;margin-top:12px;">${exitLink}<br><br>Черновой десктоп-дашборд — по плану будет переведён на телефон, как у оператора.</div>
      </aside>
      <main class="content">${inner}</main>
    </div>
  `;
}

// ---------- Меню сотрудника (кружок в правом верхнем углу) ----------
// Раньше «Вошли как… / Сменить пароль / Выйти» жили в сайдбаре. На телефоне сайдбар
// разворачивается сверху, и этот блок занимал половину экрана до того, как начнётся содержимое.
// Теперь это кружок с инициалами: занимает угол, раскрывается по нажатию.
function userInitials(name){
  const parts = String(name||'').trim().split(/\s+/).filter(Boolean);
  if(parts.length===0) return '?';
  return (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
}

function toggleUserMenu(){ state.userMenuOpen = !state.userMenuOpen; render(); }
function closeUserMenu(){ if(state.userMenuOpen){ state.userMenuOpen = false; render(); } }

function renderUserMenu(){
  if(!state.live || !state.appUser) return '';
  const u = state.appUser;
  const safeName = (u.name||'').replace(/"/g,'&quot;');
  return `
    ${state.userMenuOpen ? `<div class="user-menu-backdrop" onclick="closeUserMenu()"></div>` : ''}
    <div class="user-menu">
      <button class="user-avatar" onclick="toggleUserMenu()" title="${safeName}" aria-label="Меню сотрудника">${userInitials(u.name)}</button>
      ${state.userMenuOpen ? `
        <div class="user-menu-panel">
          <div class="user-menu-name">${u.name||''}</div>
          <div class="user-menu-role">${u.role||''}</div>
          <button class="user-menu-item" onclick="goChangePassword()">Сменить пароль</button>
          <button class="user-menu-item" onclick="doLogout()">Выйти из рабочего режима</button>
        </div>
      ` : ''}
    </div>
  `;
}

// Логотип работает как «домой» — на телефоне это самый крупный и очевидный элемент шапки,
// и тянуться к пункту «Аналитика» в горизонтальном списке разделов неудобно.
function goHome(){
  if(!abandonChecklist()) return;   // открытый чек-лист сохраняется, а не теряется
  state.userMenuOpen = false;
  state.mode = 'console';
  state.section = 'analytics';
  render();
}

function renderShellFull(inner){
  return `
    ${renderUserMenu()}
    <div class="app">
      <aside class="sidebar">
        <div class="brand-mark brand-home" onclick="goHome()" title="На главный экран — аналитика">
          <span class="brand-icon">💧</span>
          <span class="brand-word"><span class="brand-part-a">Aqua</span><span class="brand-part-b">CheckOffice</span></span>
        </div>
        <div class="subtitle">Сервис управления проверками</div>
        <nav id="roleNav">${renderConsoleNav()}</nav>
        ${state.live ? `` : PILOT_ONLY ? `` : `
        <div class="nav-note">Кликабельный демо-макет на тестовых данных — без реальной базы и сервера.</div>
        <div class="console-demo-links">
          <b style="color:#f0f0f0;">Демо-просмотр телефонных экранов:</b><br>
          <a onclick="enterDemo('operator')">Оператор мойки</a> ·
          <a onclick="enterDemo('guest')">Гостевая проверка</a>
          <br><br>
          <span style="opacity:.7;">Черновые экраны (пока не на телефоне):</span><br>
          <a onclick="enterDemo('manager')">Управляющий</a> ·
          <a onclick="enterDemo('director')">Терр. директор</a>
          ${DEMO_ONLY ? `` : `
          <br><br>
          <b style="color:#f0f0f0;">Реальный пилот (пишет в общую базу):</b><br>
          <a onclick="goLiveLogin()">Рабочий вход (логин/пароль)</a><br>
          <a onclick="goRegister()">Регистрация сотрудника (первый вход)</a><br>
          <a onclick="openLiveGuestChecklist()">Гостевая проверка — реальная</a>
          `}
        </div>
        `}
      </aside>
      <main class="content">${inner}</main>
    </div>
  `;
}

// render() ТОЛЬКО планирует перерисовку (см. ниже) — реальная работа в performRender().
// Это принципиально: если пересоздавать innerHTML СИНХРОННО прямо во время обработки события
// клавиатуры (oninput), браузер на части устройств ещё не до конца завершил обработку самого
// нажатия клавиши (обновление value/позиции курсора) — из-за гонки состояний курсор мог сбрасываться
// в начало поля, и тогда каждая следующая буква вставлялась перед предыдущими («задом наперёд»),
// а клавиатура на телефоне трактовала каждый символ как первый в поле (отсюда и ЗАГЛАВНЫЕ буквы).
//
// Одного requestAnimationFrame для этого НЕДОСТАТОЧНО: он защищает только от гонки с самим
// нажатием клавиши, но не от постороннего вызова render() (например, когда прямо во время
// набора текста «прилетает» фоновая загрузка данных из Supabase — список сотрудников на экране
// регистрации, объекты и т.п.). Такой посторонний render() может пересоздать поле ввода ровно
// в промежутке между нажатием клавиши и моментом, когда браузер успел доставить событие oninput —
// тогда это конкретное нажатие клавиши теряется, а следующая буква вставляется по сбившейся
// позиции курсора (эффект «буквы стираются» или «печатаются не в том порядке», который иначе
// не объяснить). Поэтому, пока в фокусе активное текстовое поле — реальную перерисовку
// откладываем на короткую паузу (150мс), перезапуская её при каждом новом нажатии клавиши.
// Так все перерисовки, вызванные хоть напечатанным символом, хоть посторонним событием,
// гарантированно происходят только между нажатиями, а не посреди них.
let renderScheduled = false;
let liveEditDebounce = null;
// id поля, которое было в фокусе на момент ПРЕДЫДУЩЕЙ завершённой перерисовки (см. performRender).
let lastRenderedFocusId = null;
function render(){
  const root = document.getElementById('app');
  const active = document.activeElement;
  const isLiveTextEdit = !!(active && root && root.contains(active) && active.id &&
    (active.tagName==='INPUT' || active.tagName==='TEXTAREA'));

  // Если поле ТОЛЬКО ЧТО получило фокус (на прошлой перерисовке в фокусе было что-то другое
  // или не было ничего) — печатать в него ещё не успели, поэтому откладывать перерисовку
  // незачем: рисуем сразу же. Иначе, например, открытие списка подсказок комбобокса (onfocus)
  // откладывается на 150мс и сталкивается с первыми же нажатиями клавиш — именно так на
  // iPhone/Safari терялись первые буквы в поле «Найдите себя в списке».
  if(isLiveTextEdit && active.id!==lastRenderedFocusId){
    scheduleRenderFrame();
    return;
  }

  if(isLiveTextEdit){
    // Поля с data-quiet-render (см. renderCombo/onInputOverride) сами следят за собой во время
    // набора текста через точечный patchComboList() — им общий render() вообще не нужен, пока
    // фокус не уйдёт из поля (тогда сработает обычный onblur → setterFn(...,false) → обычный
    // render(), уже без debounce, т.к. фокуса в поле больше не будет). Поэтому посторонний
    // render() (например, от фоновой подгрузки данных с сервера), прилетевший прямо во время
    // набора в такое поле, просто отбрасываем — даже отложенная на 150мс перерисовка иногда
    // успевала пересоздать поле прямо во время набора кириллицы и сбить курсор (стабильно
    // ловилось на iOS Safari в поле «Найдите себя в списке»).
    if(active.dataset && active.dataset.quietRender==='1') return;

    clearTimeout(liveEditDebounce);
    liveEditDebounce = setTimeout(()=>{ liveEditDebounce = null; scheduleRenderFrame(); }, 150);
    return;
  }
  scheduleRenderFrame();
}
function scheduleRenderFrame(){
  if(renderScheduled) return;
  renderScheduled = true;
  requestAnimationFrame(()=>{
    renderScheduled = false;
    performRender();
  });
}

// Полный ре-рендер (innerHTML целиком) на каждое изменение — иначе он бы сбрасывал фокус/курсор
// в текстовых полях (например, поиск по буквам) и позицию скролла в списках с чекбоксами.
// Поэтому перед перерисовкой запоминаем активный инпут (id + позицию курсора) и scrollTop
// у контейнеров с data-preserve-scroll, а после перерисовки — восстанавливаем.
function performRender(){
  const root = document.getElementById('app');

  const active = document.activeElement;
  const activeId = (active && active.id && root.contains(active)) ? active.id : null;
  const selStart = (active && typeof active.selectionStart === 'number') ? active.selectionStart : null;
  const selEnd = (active && typeof active.selectionEnd === 'number') ? active.selectionEnd : null;

  const scrollMap = {};
  root.querySelectorAll('[data-preserve-scroll]').forEach(el=>{ if(el.id) scrollMap[el.id] = el.scrollTop; });

  if(state.authRestoring){
    root.innerHTML = `
      <div style="max-width:360px;margin:80px auto;text-align:center;color:var(--text-muted);font-size:13px;">
        <div class="brand-mark" style="justify-content:center;margin-bottom:10px;">
          <span class="brand-icon">💧</span>
          <span class="brand-word"><span class="brand-part-a">Aqua</span><span class="brand-part-b">CheckOffice</span></span>
        </div>
        Проверяем вход…
      </div>`;
  } else if(state.mode==='login'){
    root.innerHTML = renderLoginScreen();
  } else if(state.mode==='password'){
    root.innerHTML = renderPasswordScreen();
  } else if(state.mode==='register'){
    root.innerHTML = renderRegisterScreen();
  } else if(state.mode==='preview'){
    let inner = '';
    if(state.previewRole==='operator') inner = renderOperator() + renderFixPanels();
    else if(state.previewRole==='guest') inner = renderGuest();
    else if(state.previewRole==='manager') inner = renderManager();
    else if(state.previewRole==='director') inner = renderDirector();
    root.innerHTML = renderPreviewShell(inner, state.previewRole);
  } else {
    root.innerHTML = renderShellFull(renderConsoleSection());
  }

  if(activeId){
    const el = document.getElementById(activeId);
    if(el){
      el.focus();
      if(selStart!==null && el.setSelectionRange){
        try{ el.setSelectionRange(selStart, selEnd); }catch(e){}
      }
    }
  }
  Object.keys(scrollMap).forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.scrollTop = scrollMap[id];
  });

  // запоминаем, что именно сейчас в фокусе — см. lastRenderedFocusId в render()
  const focusedNow = document.activeElement;
  lastRenderedFocusId = (focusedNow && focusedNow.id && root.contains(focusedNow)) ? focusedNow.id : null;
}

// Восстановление ранее выполненного входа при загрузке страницы. Пока идёт проверка, вместо формы
// входа показывается заглушка — иначе у уже авторизованного сотрудника экран логина мелькал бы.
async function restoreSessionOnStart(){
  if(!PILOT_ONLY || !sb){ state.authRestoring = false; return; }
  try{
    const { data } = await sb.auth.getSession();
    const session = data && data.session;
    if(session && session.user){
      if(sessionIdleTooLong()){
        try{ await sb.auth.signOut(); } catch(e){}
        forgetSession();
      } else {
        await finishLiveLogin(session.user.id);
        touchSession();
      }
    }
  } catch(e){
    // профиль не найден, нет сети и т.п. — просто остаёмся на обычном экране входа
    state.live = false;
    state.appUser = null;
    state.authError = (e && e.message) ? humanizeAuthError(e.message) : '';
  }
  state.authRestoring = false;
  render();
}

state.authRestoring = PILOT_ONLY && !!sb;   // до окончания проверки форму входа не показываем
render();
restoreSessionOnStart();
