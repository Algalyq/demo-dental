const { useEffect, useMemo, useState } = React;

const LANGS = ["kk", "ru"];
const ADMIN_CREDENTIALS = { login: "demo", password: "dental123" };

const translations = {
  kk: {
    langLabel: "Тіл",
    brandName: "DentalFlow Demo",
    brandTag: "Стоматологияға арналған онлайн жазылу демосы",
    navSite: "Пациент беті",
    navAdmin: "Әкімші панелі",
    heroBadge: "Тіс емханасына онлайн жазылу",
    heroTitle: "Пациенттер сайттан жазылады — сіз бәрін бақылайсыз",
    heroText:
      "Пациент телефоннан 2 минутта жазылады. Әкімші бір панельден барлығын көреді: кім, қашан, қай дәрігерге.",
    heroPrimary: "Қазір жазылу",
    heroSecondary: "Админ панелін көру",
    statFast: "Жазылу уақыты",
    statDoctors: "Дәрігер тізімде",
    statLang: "Тіл қолдауы",
    previewTitle: "Жазылу процесі",
    previewSubtitle: "Пациент осылай жазылады",
    previewSlots: "Бос уақыттар",
    previewStep1: "Қызметті таңдаңыз",
    previewStep2: "Дәрігерді таңдаңыз",
    previewStep3: "Уақытты таңдаңыз",
    previewStep4: "Деректерді жіберіңіз",
    previewService: "Тіс тазалау",
    previewDoctor: "Иванова А.А.",
    previewTime: "Бүгін, 10:30",
    previewContact: "Аты, телефон",
    summaryTitle: "Демоға кіретін нәрселер",
    summaryOne: "Көпқадамды модал терезе",
    summaryTwo: "Дәрігер, қызмет, күн және слот логикасы",
    summaryThree: "Қарапайым кіруі бар әкімші панелі",
    summaryFour: "Қазақша және орысша интерфейс",
    featuresTitle: "Не істей алады?",
    featuresText: "Пациентке жеңіл жазылу, әкімшіге ыңғайлы басқару.",
    feature1Badge: "Пациент",
    feature1Title: "Оңай жазылу",
    feature1Text: "4 қадам: қызмет → дәрігер → уақыт → жіберу. Бәрі бір терезеде.",
    feature2Badge: "Кесте",
    feature2Title: "Тек бос уақыт",
    feature2Text: "Пациент тек бос слоттарды көреді. Қателесу мүмкін емес.",
    feature3Badge: "Әкімші",
    feature3Title: "Бір басуда басқару",
    feature3Text: "Растау, өңдеу, жою — бәрі кестеден. Қоңырау жазбасын да қосуға болады.",
    feature4Badge: "Баптау",
    feature4Title: "Оңай баптау",
    feature4Text: "Қызметтер, дәрігерлер, жұмыс уақыты — бәрін осы жерден өзгертесіз.",
    flowTitle: "4 қадамда қалай жұмыс істейді",
    flowText: "Пациент пен клиника үшін қарапайым жол.",
    flow1Icon: "🦷",
    flow1Time: "1",
    flow1Title: "Қызмет таңдау",
    flow1Text: "Пациент тіс тазалау, емдеу немесе кеңес алуды таңдайды.",
    flow2Icon: "👨‍⚕️",
    flow2Time: "2",
    flow2Title: "Дәрігер таңдау",
    flow2Text: "Жүйе сол қызметке сай дәрігерлерді ғана көрсетеді.",
    flow3Icon: "📅",
    flow3Time: "3",
    flow3Title: "Күн мен уақыт",
    flow3Text: "Тек бос слоттар көрінеді. Бір басумен таңдалады.",
    flow4Icon: "✅",
    flow4Time: "4",
    flow4Title: "Өтінім жіберілді",
    flow4Text: "Өтінім бірден әкімші панеліне түседі.",
    ctaTitle: "Клиника жазылуын автоматтандырыңыз",
    ctaText: "Пациенттер сайттан жазылады, сіз бір панельден бақылайсыз. Қазір демоны көріңіз.",
    trustOnline: "24/7 онлайн",
    trustSecure: "Қауіпсіз",
    trustFast: "2 минутта жазылу",
    trustBilingual: "KK / RU",
    adminBadge: "Әкімші панелі",
    adminTitle: "Бір экранда толық бақылау",
    adminText:
      "Бүгінгі жазылулар, жаңа өтінімдер, статус сүзгілері — бәрі бір жерде.",
    adminPreviewToday: "Бүгін",
    adminPreviewNew: "Жаңа",
    adminPreviewDone: "Қабылданды",
    tabsDashboard: "Дашборд",
    tabsSettings: "Баптаулар",
    tabsInsights: "Шолу",
    loginTitle: "Әкімші кіруі",
    loginText: "Бұл демода тіркелу жоқ. Кіру үшін дайын логин мен пароль қолданылады.",
    loginHint: "Демо кіру деректері: demo / dental123",
    loginField: "Логин",
    passwordField: "Құпиясөз",
    loginError: "Логин немесе құпиясөз қате.",
    signIn: "Кіру",
    signOut: "Шығу",
    todayAppointments: "Бүгінгі жазылу",
    newRequests: "Жаңа өтінімдер",
    confirmed: "Расталған",
    noShows: "Келмегендер",
    ownerView: "Иесі көрінісі",
    addAppointment: "+ Жаңа жазылу",
    dateFilter: "Күн",
    statusFilter: "Статус",
    doctorFilter: "Дәрігер",
    all: "Барлығы",
    today: "Бүгін",
    tomorrow: "Ертең",
    week: "Апта",
    range: "Аралық",
    timeCol: "Уақыты",
    patientCol: "Пациент",
    phoneCol: "Телефон",
    serviceCol: "Қызмет",
    doctorCol: "Дәрігер",
    statusCol: "Статус",
    actionsCol: "Әрекеттер",
    emptyTable: "Сүзгілерге сәйкес жазылулар табылмады.",
    sectionServices: "Қызметтер",
    sectionDoctors: "Дәрігерлер",
    sectionHours: "Жұмыс уақыты",
    addService: "Қызмет қосу",
    addDoctor: "Дәрігер қосу",
    saveHours: "Уақытты сақтау",
    durationMin: "Ұзақтығы",
    specialty: "Мамандығы",
    workdays: "Жұмыс күндері",
    dayStart: "Күннің басы",
    dayEnd: "Күннің соңы",
    breakStart: "Үзіліс басы",
    breakEnd: "Үзіліс соңы",
    slotStep: "Слот қадамы",
    insightsTitle: "Күндік шолу",
    insightsText: "Кімнің жүктемесі жоғары екенін және қандай қызмет жиі таңдалатынын жылдам қарау.",
    loadByDoctor: "Дәрігер жүктемесі",
    popularServices: "Танымал қызметтер",
    liveQueue: "Бүгінгі статус ағыны",
    widgetTitle: "Стоматологқа жазылу",
    widgetSubtitle: "Бірнеше қадамнан өтіп, өтінім қалдырыңыз.",
    stepService: "Қызмет",
    stepDoctor: "Дәрігер",
    stepDate: "Күн және уақыт",
    stepContact: "Байланыс",
    chooseService: "Қызметті таңдаңыз",
    chooseDoctor: "Дәрігерді таңдаңыз",
    chooseDateTime: "Күн мен уақытты таңдаңыз",
    chooseSlot: "Бос слоттар",
    contactDetails: "Байланыс мәліметтері",
    patientName: "Аты",
    commentField: "Пікір",
    submitRequest: "Өтінім жіберу",
    continueLabel: "Жалғастыру",
    backLabel: "Артқа",
    closeLabel: "Жабу",
    confirmDelete: "Бұл жазбаны жою керек пе?",
    deleteLabel: "Жою",
    editLabel: "Өңдеу",
    confirmLabel: "Растау",
    cancelLabel: "Болдырмау",
    statusNew: "Жаңа",
    statusConfirmed: "Расталды",
    statusCancelled: "Бас тартылды",
    statusNoShow: "Келмеді",
    statusServed: "Қабылданды",
    successMessage:
      "Рақмет! Сіздің өтініміңіз қабылданды. Әкімші жақын арада хабарласады.",
    newAppointmentTitle: "Жаңа жазылу",
    editAppointmentTitle: "Жазылуды өңдеу",
    manualCreateHint: "Қоңыраумен келген пациент үшін де тез толтыруға болады.",
    saveLabel: "Сақтау",
    createConfirmedHint: "Қолмен жасалған жазба әдепкіде расталған статусымен сақталады.",
    adminDemoBlock: "Бұл демо болғандықтан, барлық өзгеріс тек ағымдағы сессияда сақталады.",
    floatingButton: "Онлайн жазылу",
    phonePlaceholder: "+7 777 123 45 67",
    commentPlaceholder: "Мысалы, тіс қатты ауырады немесе тек кешкі уақыт ыңғайлы.",
    serviceName: "Қызмет атауы",
    doctorName: "Дәрігер аты",
    rangeHint: "Демо нұсқада бұл сүзгі алдағы 7 күнді көрсетеді.",
    bookingChannel: "Канал",
    fromSite: "Сайт",
    manualEntry: "Қолмен",
    noSlotsMessage: "Таңдалған күнге бос слот табылмады.",
    serviceDeleteBlocked: "Бұл қызметке байланысқан жазылулар бар, сондықтан оны өшіруге болмайды.",
    doctorDeleteBlocked: "Бұл дәрігерге байланысқан жазылулар бар, сондықтан оны өшіруге болмайды.",
  },
  ru: {
    langLabel: "Язык",
    brandName: "DentalFlow Demo",
    brandTag: "Демо онлайн-записи для стоматологии",
    navSite: "Сайт для пациента",
    navAdmin: "Админ-панель",
    heroBadge: "Онлайн-запись в клинику",
    heroTitle: "Пациенты записываются с сайта — вы контролируете всё",
    heroText:
      "Пациент записывается с телефона за 2 минуты. Администратор видит всё в одной панели: кто, когда, к какому врачу.",
    heroPrimary: "Записаться сейчас",
    heroSecondary: "Посмотреть админку",
    statFast: "Время записи",
    statDoctors: "Врачей в списке",
    statLang: "Языки",
    previewTitle: "Процесс записи",
    previewSubtitle: "Так пациент записывается",
    previewSlots: "Свободное время",
    previewStep1: "Выберите услугу",
    previewStep2: "Выберите врача",
    previewStep3: "Выберите время",
    previewStep4: "Отправьте данные",
    previewService: "Чистка зубов",
    previewDoctor: "Иванова А.А.",
    previewTime: "Сегодня, 10:30",
    previewContact: "Имя, телефон",
    summaryTitle: "Что входит в демо",
    summaryOne: "Многошаговое модальное окно",
    summaryTwo: "Логика врача, услуги, даты и слотов",
    summaryThree: "Админ-панель с простым входом",
    summaryFour: "Интерфейс на казахском и русском",
    featuresTitle: "Что умеет система?",
    featuresText: "Простая запись для пациента, удобное управление для администратора.",
    feature1Badge: "Пациент",
    feature1Title: "Простая запись",
    feature1Text: "4 шага: услуга → врач → время → отправка. Всё в одном окне.",
    feature2Badge: "Расписание",
    feature2Title: "Только свободное время",
    feature2Text: "Пациент видит только свободные слоты. Ошибка исключена.",
    feature3Badge: "Администратор",
    feature3Title: "Управление в один клик",
    feature3Text: "Подтвердить, изменить, удалить — всё из таблицы. Можно добавить звонок.",
    feature4Badge: "Настройки",
    feature4Title: "Простая настройка",
    feature4Text: "Услуги, врачи, рабочие часы — меняйте прямо здесь.",
    flowTitle: "4 шага: как это работает",
    flowText: "Простой путь для пациента и клиники.",
    flow1Icon: "🦷",
    flow1Time: "1",
    flow1Title: "Выбор услуги",
    flow1Text: "Пациент выбирает чистку, лечение или консультацию.",
    flow2Icon: "👨‍⚕️",
    flow2Time: "2",
    flow2Title: "Выбор врача",
    flow2Text: "Система показывает только подходящих врачей.",
    flow3Icon: "📅",
    flow3Time: "3",
    flow3Title: "Дата и время",
    flow3Text: "Видны только свободные слоты. Выбор в один клик.",
    flow4Icon: "✅",
    flow4Time: "4",
    flow4Title: "Заявка отправлена",
    flow4Text: "Заявка мгновенно попадает в панель админа.",
    ctaTitle: "Автоматизируйте запись в клинику",
    ctaText: "Пациенты записываются с сайта, вы контролируете всё из одной панели. Попробуйте демо.",
    trustOnline: "24/7 онлайн",
    trustSecure: "Безопасно",
    trustFast: "Запись за 2 мин",
    trustBilingual: "KK / RU",
    adminBadge: "Админ-панель",
    adminTitle: "Полный контроль на одном экране",
    adminText:
      "Сегодняшние записи, новые заявки, фильтры по статусу — всё в одном месте.",
    adminPreviewToday: "Сегодня",
    adminPreviewNew: "Новые",
    adminPreviewDone: "Обслужено",
    tabsDashboard: "Дашборд",
    tabsSettings: "Настройки",
    tabsInsights: "Обзор",
    loginTitle: "Вход администратора",
    loginText: "В демо нет регистрации. Для входа используются готовые логин и пароль.",
    loginHint: "Демо-данные: demo / dental123",
    loginField: "Логин",
    passwordField: "Пароль",
    loginError: "Неверный логин или пароль.",
    signIn: "Войти",
    signOut: "Выйти",
    todayAppointments: "Записей сегодня",
    newRequests: "Новых заявок",
    confirmed: "Подтверждено",
    noShows: "Не пришли",
    ownerView: "Режим владельца",
    addAppointment: "+ Новая запись",
    dateFilter: "Дата",
    statusFilter: "Статус",
    doctorFilter: "Врач",
    all: "Все",
    today: "Сегодня",
    tomorrow: "Завтра",
    week: "Неделя",
    range: "Диапазон",
    timeCol: "Время",
    patientCol: "Пациент",
    phoneCol: "Телефон",
    serviceCol: "Услуга",
    doctorCol: "Врач",
    statusCol: "Статус",
    actionsCol: "Действия",
    emptyTable: "Записи по текущим фильтрам не найдены.",
    sectionServices: "Услуги",
    sectionDoctors: "Врачи",
    sectionHours: "Рабочие часы",
    addService: "Добавить услугу",
    addDoctor: "Добавить врача",
    saveHours: "Сохранить часы",
    durationMin: "Длительность",
    specialty: "Специальность",
    workdays: "Рабочие дни",
    dayStart: "Начало дня",
    dayEnd: "Конец дня",
    breakStart: "Начало перерыва",
    breakEnd: "Конец перерыва",
    slotStep: "Шаг слота",
    insightsTitle: "Обзор дня",
    insightsText: "Быстрый взгляд на загрузку врачей и популярные услуги.",
    loadByDoctor: "Нагрузка по врачам",
    popularServices: "Популярные услуги",
    liveQueue: "Поток статусов сегодня",
    widgetTitle: "Запись к стоматологу",
    widgetSubtitle: "Пройдите несколько шагов и отправьте заявку.",
    stepService: "Услуга",
    stepDoctor: "Врач",
    stepDate: "Дата и время",
    stepContact: "Контакты",
    chooseService: "Выберите услугу",
    chooseDoctor: "Выберите врача",
    chooseDateTime: "Выберите дату и время",
    chooseSlot: "Свободные слоты",
    contactDetails: "Контактные данные",
    patientName: "Имя",
    commentField: "Комментарий",
    submitRequest: "Отправить заявку",
    continueLabel: "Продолжить",
    backLabel: "Назад",
    closeLabel: "Закрыть",
    confirmDelete: "Удалить эту запись?",
    deleteLabel: "Удалить",
    editLabel: "Редактировать",
    confirmLabel: "Подтвердить",
    cancelLabel: "Отменить",
    statusNew: "Новая",
    statusConfirmed: "Подтверждена",
    statusCancelled: "Отменена",
    statusNoShow: "Не пришёл",
    statusServed: "Обслужен",
    successMessage:
      "Спасибо! Ваша заявка принята. Администратор свяжется с вами для подтверждения.",
    newAppointmentTitle: "Новая запись",
    editAppointmentTitle: "Редактирование записи",
    manualCreateHint: "Для пациента по телефону форма тоже подходит.",
    saveLabel: "Сохранить",
    createConfirmedHint: "Ручная запись по умолчанию сохраняется как подтверждённая.",
    adminDemoBlock: "Так как это демо, все изменения сохраняются только в рамках текущей сессии.",
    floatingButton: "Записаться онлайн",
    phonePlaceholder: "+7 777 123 45 67",
    commentPlaceholder: "Например, сильная боль или удобнее только вечернее время.",
    serviceName: "Название услуги",
    doctorName: "Имя врача",
    rangeHint: "В демо этот фильтр показывает ближайшие 7 дней.",
    bookingChannel: "Канал",
    fromSite: "Сайт",
    manualEntry: "Вручную",
    noSlotsMessage: "На выбранную дату свободных слотов не найдено.",
    serviceDeleteBlocked: "Эту услугу нельзя удалить, пока на неё есть записи.",
    doctorDeleteBlocked: "Этого врача нельзя удалить, пока на него есть записи.",
  },
};

const weekdays = [
  { key: "mon", kk: "Дс", ru: "Пн" },
  { key: "tue", kk: "Сс", ru: "Вт" },
  { key: "wed", kk: "Ср", ru: "Ср" },
  { key: "thu", kk: "Бс", ru: "Чт" },
  { key: "fri", kk: "Жм", ru: "Пт" },
  { key: "sat", kk: "Сб", ru: "Сб" },
  { key: "sun", kk: "Жс", ru: "Вс" },
];

const createInitialState = () => ({
  services: [
    { id: "srv-clean", name: { kk: "Профилактикалық тазалау", ru: "Профилактическая чистка" }, duration: 40 },
    { id: "srv-caries", name: { kk: "Кариес емдеу", ru: "Лечение кариеса" }, duration: 40 },
    { id: "srv-remove", name: { kk: "Тісті жұлу", ru: "Удаление зуба" }, duration: 40 },
    { id: "srv-implant", name: { kk: "Имплантация", ru: "Имплантация" }, duration: 40 },
    { id: "srv-consult", name: { kk: "Кеңес беру", ru: "Консультация" }, duration: 30 },
  ],
  doctors: [
    { id: "doc-ivanova", name: "Иванова А.А.", specialty: { kk: "Терапевт", ru: "Терапевт" }, serviceIds: ["srv-clean", "srv-caries", "srv-consult"] },
    { id: "doc-petrov", name: "Петров Б.В.", specialty: { kk: "Хирург", ru: "Хирург" }, serviceIds: ["srv-remove", "srv-implant", "srv-consult"] },
    { id: "doc-sidorova", name: "Сидорова Е.К.", specialty: { kk: "Ортопед", ru: "Ортопед" }, serviceIds: ["srv-implant", "srv-consult", "srv-clean"] },
  ],
  workingHours: {
    workdays: ["mon", "tue", "wed", "thu", "fri"],
    start: "09:00",
    end: "18:00",
    breakStart: "13:00",
    breakEnd: "14:00",
    slotStep: 30,
  },
  appointments: createSeedAppointments(),
});

function createSeedAppointments() {
  const base = new Date();
  const date = (offset, time) => {
    const d = new Date(base);
    d.setDate(base.getDate() + offset);
    const [hours, minutes] = time.split(":").map(Number);
    d.setHours(hours, minutes, 0, 0);
    return d.toISOString();
  };

  return [
    {
      id: "apt-1",
      serviceId: "srv-caries",
      doctorId: "doc-petrov",
      dateTime: date(0, "10:00"),
      patientName: "Алия С.",
      phone: "7771234567",
      comment: "Тіс ауруы",
      status: "new",
      source: "site",
    },
    {
      id: "apt-2",
      serviceId: "srv-clean",
      doctorId: "doc-ivanova",
      dateTime: date(0, "11:30"),
      patientName: "Мария К.",
      phone: "7777654321",
      comment: "",
      status: "confirmed",
      source: "manual",
    },
    {
      id: "apt-3",
      serviceId: "srv-consult",
      doctorId: "doc-sidorova",
      dateTime: date(0, "15:00"),
      patientName: "Нұрлан А.",
      phone: "7772223344",
      comment: "",
      status: "no_show",
      source: "site",
    },
    {
      id: "apt-4",
      serviceId: "srv-implant",
      doctorId: "doc-petrov",
      dateTime: date(1, "10:30"),
      patientName: "Елена Т.",
      phone: "7779876543",
      comment: "",
      status: "confirmed",
      source: "site",
    },
    {
      id: "apt-5",
      serviceId: "srv-consult",
      doctorId: "doc-ivanova",
      dateTime: date(2, "14:00"),
      patientName: "Данияр О.",
      phone: "7775551122",
      comment: "",
      status: "served",
      source: "manual",
    },
  ];
}

const formatDate = (date, lang, options) =>
  new Intl.DateTimeFormat(lang === "kk" ? "kk-KZ" : "ru-RU", options).format(date);

const formatDateTime = (iso, lang) =>
  formatDate(new Date(iso), lang, {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

const toDateInput = (iso) => new Date(iso).toISOString().slice(0, 10);
const toTimeInput = (iso) => new Date(iso).toTimeString().slice(0, 5);

function parseTimeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(minutes) {
  const hours = String(Math.floor(minutes / 60)).padStart(2, "0");
  const mins = String(minutes % 60).padStart(2, "0");
  return `${hours}:${mins}`;
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

function combineDateAndTime(dateString, timeString) {
  return new Date(`${dateString}T${timeString}:00`);
}

function startOfDay(date) {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

function isSameDay(dateA, dateB) {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate()
  );
}

function generateDates(days = 7) {
  return Array.from({ length: days }).map((_, index) => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + index);
    return date;
  });
}

function getWeekdayKey(date) {
  const mapping = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  return mapping[date.getDay()];
}

function getDoctorLabel(doctor, lang) {
  return `${doctor.name} • ${doctor.specialty[lang]}`;
}

function getServiceLabel(service, lang) {
  return service.name[lang];
}

function getStatusLabel(status, t) {
  const map = {
    new: t.statusNew,
    confirmed: t.statusConfirmed,
    cancelled: t.statusCancelled,
    no_show: t.statusNoShow,
    served: t.statusServed,
  };
  return map[status];
}

function getStatusClass(status) {
  const map = {
    new: "status-new",
    confirmed: "status-confirmed",
    cancelled: "status-cancelled",
    no_show: "status-noshow",
    served: "status-served",
  };
  return map[status] || "status-new";
}

function getAvailableDoctors(doctors, serviceId) {
  if (!serviceId) return doctors;
  const matched = doctors.filter((doctor) => doctor.serviceIds.includes(serviceId));
  return matched.length ? matched : doctors;
}

function getAvailableSlots({ date, serviceId, doctorId, services, appointments, workingHours, editingId }) {
  if (!date || !serviceId || !doctorId) return [];

  const selectedService = services.find((service) => service.id === serviceId);
  if (!selectedService) return [];

  const weekdayKey = getWeekdayKey(date);
  if (!workingHours.workdays.includes(weekdayKey)) {
    return [];
  }

  const startMinutes = parseTimeToMinutes(workingHours.start);
  const endMinutes = parseTimeToMinutes(workingHours.end);
  const breakStart = parseTimeToMinutes(workingHours.breakStart);
  const breakEnd = parseTimeToMinutes(workingHours.breakEnd);
  const now = new Date();
  const slots = [];

  for (let cursor = startMinutes; cursor + selectedService.duration <= endMinutes; cursor += workingHours.slotStep) {
    const slotStart = cursor;
    const slotEnd = cursor + selectedService.duration;
    const crossesBreak = slotStart < breakEnd && slotEnd > breakStart;
    if (crossesBreak) continue;

    const slotDate = new Date(date);
    slotDate.setHours(Math.floor(slotStart / 60), slotStart % 60, 0, 0);
    const isPast = slotDate < now;

    const hasConflict = appointments.some((appointment) => {
      if (appointment.id === editingId || appointment.doctorId !== doctorId || appointment.status === "cancelled") {
        return false;
      }
      const existingService = services.find((service) => service.id === appointment.serviceId);
      if (!existingService) return false;

      const existingStart = new Date(appointment.dateTime);
      if (!isSameDay(existingStart, date)) return false;

      const existingEnd = addMinutes(existingStart, existingService.duration);
      const currentEnd = addMinutes(slotDate, selectedService.duration);
      return slotDate < existingEnd && currentEnd > existingStart;
    });

    slots.push({
      time: minutesToTime(slotStart),
      dateTime: slotDate.toISOString(),
      disabled: isPast || hasConflict,
    });
  }

  return slots;
}

function Modal({ children, onClose, small = false }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className={`modal ${small ? "small" : ""}`} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

function PublicHome({ t, lang, onOpenWidget, onOpenAdmin, services, doctors, appointments }) {
  const todaysAppts = appointments.filter((a) => isSameDay(new Date(a.dateTime), new Date()));
  const newCount = appointments.filter((a) => a.status === "new").length;
  const servedCount = appointments.filter((a) => a.status === "served").length;

  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="section hero">
        <div className="hero-grid">
          <div className="glass-card hero-card anim-fade-left">
            <div className="eyebrow">🦷 {t.heroBadge}</div>
            <h1>{t.heroTitle}</h1>
            <p className="hero-tagline">{t.heroText}</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={onOpenWidget}>{t.heroPrimary}</button>
              <button className="ghost-button" onClick={onOpenAdmin}>{t.heroSecondary}</button>
            </div>
            <div className="hero-metrics">
              <div className="metric-box anim-fade-up anim-delay-1">
                <span className="metric-icon">⚡</span>
                <span className="metric-number">2 мин</span>
                <span className="metric-label">{t.statFast}</span>
              </div>
              <div className="metric-box anim-fade-up anim-delay-2">
                <span className="metric-icon">👨‍⚕️</span>
                <span className="metric-number">{doctors.length}</span>
                <span className="metric-label">{t.statDoctors}</span>
              </div>
              <div className="metric-box anim-fade-up anim-delay-3">
                <span className="metric-icon">🌐</span>
                <span className="metric-number">KK/RU</span>
                <span className="metric-label">{t.statLang}</span>
              </div>
            </div>
          </div>

          <div className="hero-side anim-fade-right">
            <div className="live-preview">
              <div className="preview-header">
                <span className="preview-dot red"></span>
                <span className="preview-dot yellow"></span>
                <span className="preview-dot green"></span>
                <span className="preview-title-bar">{t.previewTitle}</span>
              </div>
              <div className="kicker" style={{ marginBottom: 12 }}>{t.previewSubtitle}</div>
              <div className="preview-step-indicator">
                <div className="preview-step-dot done"></div>
                <div className="preview-step-dot done"></div>
                <div className="preview-step-dot active"></div>
                <div className="preview-step-dot"></div>
              </div>
              <div className="preview-mock">
                <div className="preview-mock-row">
                  <span className="preview-mock-icon">🦷</span>
                  <div className="preview-mock-text">
                    <strong>{t.previewStep1}</strong>
                    <span>{t.previewService}</span>
                  </div>
                  <span className="preview-mock-check">✓</span>
                </div>
                <div className="preview-mock-row">
                  <span className="preview-mock-icon">👨‍⚕️</span>
                  <div className="preview-mock-text">
                    <strong>{t.previewStep2}</strong>
                    <span>{t.previewDoctor}</span>
                  </div>
                  <span className="preview-mock-check">✓</span>
                </div>
                <div className="preview-mock-row" style={{ borderColor: "var(--primary)", borderWidth: 2 }}>
                  <span className="preview-mock-icon">📅</span>
                  <div className="preview-mock-text">
                    <strong>{t.previewStep3}</strong>
                    <span>{t.previewTime}</span>
                  </div>
                  <span className="preview-mock-check" style={{ background: "var(--primary-light)", color: "var(--primary-deep)" }}>→</span>
                </div>
                <div className="preview-mock-row" style={{ opacity: 0.5 }}>
                  <span className="preview-mock-icon">📝</span>
                  <div className="preview-mock-text">
                    <strong>{t.previewStep4}</strong>
                    <span>{t.previewContact}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Badges ─────────────────────────── */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="trust-row anim-fade-up">
          <div className="trust-item"><span className="trust-icon">🕐</span> {t.trustOnline}</div>
          <div className="trust-item"><span className="trust-icon">🔒</span> {t.trustSecure}</div>
          <div className="trust-item"><span className="trust-icon">⚡</span> {t.trustFast}</div>
          <div className="trust-item"><span className="trust-icon">🌐</span> {t.trustBilingual}</div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────── */}
      <section className="section">
        <div className="section-head">
          <div>
            <h2>{t.featuresTitle}</h2>
            <p>{t.featuresText}</p>
          </div>
        </div>
        <div className="cards-grid">
          <article className="panel feature-card anim-fade-up anim-delay-1">
            <div className="feature-icon patient">📋</div>
            <span className="badge">{t.feature1Badge}</span>
            <h3>{t.feature1Title}</h3>
            <p>{t.feature1Text}</p>
          </article>
          <article className="panel feature-card anim-fade-up anim-delay-2">
            <div className="feature-icon schedule">📅</div>
            <span className="badge">{t.feature2Badge}</span>
            <h3>{t.feature2Title}</h3>
            <p>{t.feature2Text}</p>
          </article>
          <article className="panel feature-card anim-fade-up anim-delay-3">
            <div className="feature-icon admin">⚡</div>
            <span className="badge">{t.feature3Badge}</span>
            <h3>{t.feature3Title}</h3>
            <p>{t.feature3Text}</p>
          </article>
          <article className="panel feature-card anim-fade-up anim-delay-4">
            <div className="feature-icon settings">⚙️</div>
            <span className="badge">{t.feature4Badge}</span>
            <h3>{t.feature4Title}</h3>
            <p>{t.feature4Text}</p>
          </article>
        </div>
      </section>

      {/* ── How It Works — Visual Flow ────────────── */}
      <section className="section flow-section">
        <div className="section-head" style={{ flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div>
            <h2>{t.flowTitle}</h2>
            <p>{t.flowText}</p>
          </div>
        </div>
        <div className="flow-grid">
          {[
            [t.flow1Icon, t.flow1Time, t.flow1Title, t.flow1Text],
            [t.flow2Icon, t.flow2Time, t.flow2Title, t.flow2Text],
            [t.flow3Icon, t.flow3Time, t.flow3Title, t.flow3Text],
            [t.flow4Icon, t.flow4Time, t.flow4Title, t.flow4Text],
          ].map(([icon, num, title, text], idx) => (
            <div className={`flow-step anim-fade-up anim-delay-${idx + 1}`} key={title}>
              <div className="flow-step-number">{num}</div>
              {idx < 3 && <div className="flow-connector"></div>}
              <div className="flow-step-content">
                <span className="flow-step-icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Admin Preview + CTA Split ────────────── */}
      <section className="section">
        <div className="split-showcase">
          <div className="admin-preview-visual anim-fade-left">
            <div className="kicker" style={{ marginBottom: 14 }}>{t.adminBadge}</div>
            <div className="admin-mini-stat-row">
              <div className="admin-mini-stat">
                <span className="stat-num">{todaysAppts.length}</span>
                <span className="stat-label">{t.adminPreviewToday}</span>
              </div>
              <div className="admin-mini-stat">
                <span className="stat-num">{newCount}</span>
                <span className="stat-label">{t.adminPreviewNew}</span>
              </div>
              <div className="admin-mini-stat">
                <span className="stat-num">{servedCount}</span>
                <span className="stat-label">{t.adminPreviewDone}</span>
              </div>
            </div>
            <table className="admin-mini-table">
              <thead>
                <tr>
                  <th>{t.timeCol}</th>
                  <th>{t.patientCol}</th>
                  <th>{t.statusCol}</th>
                </tr>
              </thead>
              <tbody>
                {appointments.slice(0, 3).map((apt) => (
                  <tr key={apt.id}>
                    <td>{formatDateTime(apt.dateTime, lang)}</td>
                    <td><strong>{apt.patientName}</strong></td>
                    <td><span className={`status-pill ${getStatusClass(apt.status)}`}>{getStatusLabel(apt.status, t)}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="panel anim-fade-right" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="kicker">{t.adminBadge}</div>
            <h3>{t.adminTitle}</h3>
            <p>{t.adminText}</p>
            <div className="quick-actions" style={{ marginTop: 18 }}>
              <button className="secondary-button" onClick={onOpenAdmin}>{t.heroSecondary}</button>
              <button className="ghost-button" onClick={onOpenWidget}>{t.floatingButton}</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────── */}
      <section className="section cta-section">
        <div className="cta-card anim-fade-up">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
          <div className="cta-actions">
            <button className="primary-button" onClick={onOpenWidget}>{t.heroPrimary}</button>
            <button className="ghost-button" onClick={onOpenAdmin}>{t.heroSecondary}</button>
          </div>
        </div>
      </section>
    </>
  );
}

function BookingWidgetModal({ lang, t, services, doctors, appointments, workingHours, onClose, onSubmit }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    serviceId: services[0]?.id || "",
    doctorId: "",
    date: generateDates(7)[0].toISOString().slice(0, 10),
    time: "",
    patientName: "",
    phone: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const availableDoctors = useMemo(
    () => getAvailableDoctors(doctors, form.serviceId),
    [doctors, form.serviceId]
  );

  useEffect(() => {
    if (!availableDoctors.some((doctor) => doctor.id === form.doctorId)) {
      setForm((current) => ({ ...current, doctorId: availableDoctors[0]?.id || "", time: "" }));
    }
  }, [availableDoctors, form.doctorId]);

  const dates = useMemo(() => generateDates(7), []);
  const selectedDate = useMemo(() => combineDateAndTime(form.date, "00:00"), [form.date]);
  const slots = useMemo(
    () =>
      getAvailableSlots({
        date: selectedDate,
        serviceId: form.serviceId,
        doctorId: form.doctorId,
        services,
        appointments,
        workingHours,
      }),
    [selectedDate, form.serviceId, form.doctorId, services, appointments, workingHours]
  );

  useEffect(() => {
    if (!slots.some((slot) => slot.time === form.time && !slot.disabled)) {
      const nextSlot = slots.find((slot) => !slot.disabled);
      setForm((current) => ({ ...current, time: nextSlot?.time || "" }));
    }
  }, [slots, form.time]);

  const progress = [t.stepService, t.stepDoctor, t.stepDate, t.stepContact];

  const canContinue =
    (step === 1 && form.serviceId) ||
    (step === 2 && form.doctorId) ||
    (step === 3 && form.date && form.time) ||
    (step === 4 && form.patientName.trim() && form.phone.trim());

  const submit = () => {
    onSubmit({
      id: `apt-${Date.now()}`,
      serviceId: form.serviceId,
      doctorId: form.doctorId,
      dateTime: combineDateAndTime(form.date, form.time).toISOString(),
      patientName: form.patientName.trim(),
      phone: form.phone.trim(),
      comment: form.comment.trim(),
      status: "new",
      source: "site",
    });
    setSubmitted(true);
  };

  return (
    <Modal onClose={onClose}>
      <div className="modal-header">
        <div>
          <div className="kicker">{t.widgetTitle}</div>
          <h3 style={{ margin: "10px 0 6px" }}>{t.widgetSubtitle}</h3>
        </div>
        <button className="icon-button" onClick={onClose}>✕</button>
      </div>

      <div className="modal-body">
        <div className="progress-row">
          {progress.map((label, index) => {
            const stepIndex = index + 1;
            const state = stepIndex === step ? "active" : stepIndex < step ? "done" : "";
            return (
              <div key={label} className={`progress-step ${state}`}>
                {stepIndex}. {label}
              </div>
            );
          })}
        </div>

        {submitted ? (
          <div className="success-note">{t.successMessage}</div>
        ) : (
          <>
            {step === 1 && (
              <div className="stack">
                <strong>{t.chooseService}</strong>
                <div className="cards-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
                  {services.map((service) => (
                    <button
                      key={service.id}
                      className={`tab-button ${form.serviceId === service.id ? "active" : ""}`}
                      onClick={() => setForm((current) => ({ ...current, serviceId: service.id, doctorId: "", time: "" }))}
                    >
                      {getServiceLabel(service, lang)} • {service.duration} мин
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="stack">
                <strong>{t.chooseDoctor}</strong>
                <div className="cards-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
                  {availableDoctors.map((doctor) => (
                    <button
                      key={doctor.id}
                      className={`tab-button ${form.doctorId === doctor.id ? "active" : ""}`}
                      onClick={() => setForm((current) => ({ ...current, doctorId: doctor.id, time: "" }))}
                    >
                      {getDoctorLabel(doctor, lang)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="stack">
                <strong>{t.chooseDateTime}</strong>
                <div className="date-grid">
                  {dates.map((date) => {
                    const dateValue = date.toISOString().slice(0, 10);
                    return (
                      <button
                        key={dateValue}
                        className={`date-card ${form.date === dateValue ? "active" : ""}`}
                        onClick={() => setForm((current) => ({ ...current, date: dateValue, time: "" }))}
                      >
                        <strong>{formatDate(date, lang, { day: "2-digit" })}</strong>
                        <small>{formatDate(date, lang, { month: "short", weekday: "short" })}</small>
                      </button>
                    );
                  })}
                </div>
                <div className="muted">{t.chooseSlot}</div>
                {slots.length ? (
                  <div className="slot-grid">
                    {slots.map((slot) => (
                      <button
                        key={slot.time}
                        className={`slot-button ${form.time === slot.time ? "selected" : ""} ${slot.disabled ? "disabled" : ""}`}
                        onClick={() => !slot.disabled && setForm((current) => ({ ...current, time: slot.time }))}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="empty-note">{t.noSlotsMessage}</div>
                )}
              </div>
            )}

            {step === 4 && (
              <div className="field-grid">
                <div className="field">
                  <label>{t.patientName}</label>
                  <input
                    value={form.patientName}
                    onChange={(event) => setForm((current) => ({ ...current, patientName: event.target.value }))}
                    placeholder={t.patientName}
                  />
                </div>
                <div className="field">
                  <label>{t.phoneCol}</label>
                  <input
                    value={form.phone}
                    onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                    placeholder={t.phonePlaceholder}
                  />
                </div>
                <div className="field-full">
                  <label>{t.commentField}</label>
                  <textarea
                    value={form.comment}
                    onChange={(event) => setForm((current) => ({ ...current, comment: event.target.value }))}
                    placeholder={t.commentPlaceholder}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="modal-footer">
        <div className="modal-actions">
          {!submitted && step > 1 && <button className="ghost-button" onClick={() => setStep((current) => current - 1)}>{t.backLabel}</button>}
          {!submitted && step < 4 && <button className="primary-button" disabled={!canContinue} onClick={() => canContinue && setStep((current) => current + 1)}>{t.continueLabel}</button>}
          {!submitted && step === 4 && <button className="primary-button" disabled={!canContinue} onClick={submit}>{t.submitRequest}</button>}
          {submitted && <button className="primary-button" onClick={onClose}>{t.closeLabel}</button>}
        </div>
      </div>
    </Modal>
  );
}

function AppointmentFormModal({
  lang,
  t,
  services,
  doctors,
  appointments,
  workingHours,
  mode,
  initialValue,
  onClose,
  onSave,
}) {
  const defaults = initialValue || {
    serviceId: services[0]?.id || "",
    doctorId: doctors[0]?.id || "",
    date: generateDates(7)[0].toISOString().slice(0, 10),
    time: "",
    patientName: "",
    phone: "",
    comment: "",
    status: mode === "create" ? "confirmed" : "new",
  };

  const [form, setForm] = useState(defaults);

  const availableDoctors = useMemo(
    () => getAvailableDoctors(doctors, form.serviceId),
    [doctors, form.serviceId]
  );

  const slots = useMemo(
    () =>
      getAvailableSlots({
        date: combineDateAndTime(form.date, "00:00"),
        serviceId: form.serviceId,
        doctorId: form.doctorId,
        services,
        appointments,
        workingHours,
        editingId: initialValue?.id,
      }),
    [form.date, form.serviceId, form.doctorId, services, appointments, workingHours, initialValue]
  );

  useEffect(() => {
    if (!availableDoctors.some((doctor) => doctor.id === form.doctorId)) {
      setForm((current) => ({ ...current, doctorId: availableDoctors[0]?.id || "", time: "" }));
    }
  }, [availableDoctors, form.doctorId]);

  useEffect(() => {
    if (!slots.some((slot) => slot.time === form.time && !slot.disabled)) {
      const nextSlot = slots.find((slot) => !slot.disabled);
      setForm((current) => ({ ...current, time: nextSlot?.time || "" }));
    }
  }, [slots, form.time]);

  const save = () => {
    onSave({
      ...initialValue,
      id: initialValue?.id || `apt-${Date.now()}`,
      serviceId: form.serviceId,
      doctorId: form.doctorId,
      dateTime: combineDateAndTime(form.date, form.time).toISOString(),
      patientName: form.patientName.trim(),
      phone: form.phone.trim(),
      comment: form.comment.trim(),
      status: form.status,
      source: initialValue?.source || "manual",
    });
  };

  return (
    <Modal onClose={onClose}>
      <div className="modal-header">
        <div>
          <div className="kicker">{mode === "create" ? t.newAppointmentTitle : t.editAppointmentTitle}</div>
          <p>{mode === "create" ? t.createConfirmedHint : t.adminDemoBlock}</p>
        </div>
        <button className="icon-button" onClick={onClose}>✕</button>
      </div>
      <div className="modal-body">
        <div className="field-grid">
          <div className="field">
            <label>{t.patientName}</label>
            <input value={form.patientName} onChange={(event) => setForm((current) => ({ ...current, patientName: event.target.value }))} />
          </div>
          <div className="field">
            <label>{t.phoneCol}</label>
            <input value={form.phone} onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))} />
          </div>
          <div className="field">
            <label>{t.serviceCol}</label>
            <select value={form.serviceId} onChange={(event) => setForm((current) => ({ ...current, serviceId: event.target.value, doctorId: "", time: "" }))}>
              {services.map((service) => (
                <option key={service.id} value={service.id}>{getServiceLabel(service, lang)}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>{t.doctorCol}</label>
            <select value={form.doctorId} onChange={(event) => setForm((current) => ({ ...current, doctorId: event.target.value, time: "" }))}>
              {availableDoctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>{getDoctorLabel(doctor, lang)}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>{t.dateFilter}</label>
            <input type="date" value={form.date} onChange={(event) => setForm((current) => ({ ...current, date: event.target.value, time: "" }))} />
          </div>
          <div className="field">
            <label>{t.statusCol}</label>
            <select value={form.status} onChange={(event) => setForm((current) => ({ ...current, status: event.target.value }))}>
              {["new", "confirmed", "cancelled", "no_show", "served"].map((status) => (
                <option key={status} value={status}>{getStatusLabel(status, t)}</option>
              ))}
            </select>
          </div>
          <div className="field-full">
            <label>{t.chooseSlot}</label>
            <div className="slot-grid">
              {slots.map((slot) => (
                <button
                  key={slot.time}
                  className={`slot-button ${form.time === slot.time ? "selected" : ""} ${slot.disabled ? "disabled" : ""}`}
                  onClick={() => !slot.disabled && setForm((current) => ({ ...current, time: slot.time }))}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
          <div className="field-full">
            <label>{t.commentField}</label>
            <textarea value={form.comment} onChange={(event) => setForm((current) => ({ ...current, comment: event.target.value }))} />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <div className="modal-actions">
          <button className="ghost-button" onClick={onClose}>{t.cancelLabel}</button>
          <button className="primary-button" onClick={save} disabled={!form.patientName || !form.phone || !form.time}>{t.saveLabel}</button>
        </div>
      </div>
    </Modal>
  );
}

function DictionaryForm({ t, type, onSubmit }) {
  const [form, setForm] = useState(
    type === "service"
      ? { kk: "", ru: "", duration: 30 }
      : { name: "", specialtyKk: "", specialtyRu: "" }
  );

  const submit = () => {
    onSubmit(form);
    setForm(type === "service" ? { kk: "", ru: "", duration: 30 } : { name: "", specialtyKk: "", specialtyRu: "" });
  };

  return (
    <div className="stack">
      {type === "service" ? (
        <>
          <div className="field">
            <label>{t.serviceName} KZ</label>
            <input value={form.kk} onChange={(event) => setForm((current) => ({ ...current, kk: event.target.value }))} />
          </div>
          <div className="field">
            <label>{t.serviceName} RU</label>
            <input value={form.ru} onChange={(event) => setForm((current) => ({ ...current, ru: event.target.value }))} />
          </div>
          <div className="field">
            <label>{t.durationMin}</label>
            <select value={form.duration} onChange={(event) => setForm((current) => ({ ...current, duration: Number(event.target.value) }))}>
              <option value={30}>30 мин</option>
              <option value={40}>40 мин</option>
            </select>
          </div>
        </>
      ) : (
        <>
          <div className="field">
            <label>{t.doctorName}</label>
            <input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} />
          </div>
          <div className="field">
            <label>{t.specialty} KZ</label>
            <input value={form.specialtyKk} onChange={(event) => setForm((current) => ({ ...current, specialtyKk: event.target.value }))} />
          </div>
          <div className="field">
            <label>{t.specialty} RU</label>
            <input value={form.specialtyRu} onChange={(event) => setForm((current) => ({ ...current, specialtyRu: event.target.value }))} />
          </div>
        </>
      )}
      <button className="primary-button" onClick={submit}>
        {type === "service" ? t.addService : t.addDoctor}
      </button>
    </div>
  );
}

function AdminPanel({
  lang,
  t,
  data,
  setData,
  isAuthenticated,
  setIsAuthenticated,
}) {
  const [tab, setTab] = useState("dashboard");
  const [loginForm, setLoginForm] = useState({ login: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [settingsMessage, setSettingsMessage] = useState("");
  const [filters, setFilters] = useState({ date: "today", status: "all", doctorId: "all" });
  const [editorState, setEditorState] = useState({ mode: null, appointment: null });

  const today = new Date();
  const appointmentsSorted = [...data.appointments].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
  const todaysAppointments = appointmentsSorted.filter((appointment) => isSameDay(new Date(appointment.dateTime), today));
  const metrics = {
    today: todaysAppointments.length,
    new: data.appointments.filter((appointment) => appointment.status === "new").length,
    confirmed: data.appointments.filter((appointment) => appointment.status === "confirmed").length,
    noShowToday: todaysAppointments.filter((appointment) => appointment.status === "no_show").length,
  };

  const filteredAppointments = appointmentsSorted.filter((appointment) => {
    const appointmentDate = new Date(appointment.dateTime);
    const offsetDays = Math.round((startOfDay(appointmentDate) - startOfDay(today)) / 86400000);
    const dateMatch =
      filters.date === "all" ||
      (filters.date === "today" && isSameDay(appointmentDate, today)) ||
      (filters.date === "tomorrow" && offsetDays === 1) ||
      (filters.date === "week" && offsetDays >= 0 && offsetDays < 7) ||
      (filters.date === "range" && offsetDays >= 0 && offsetDays < 7);
    const statusMatch = filters.status === "all" || appointment.status === filters.status;
    const doctorMatch = filters.doctorId === "all" || appointment.doctorId === filters.doctorId;
    return dateMatch && statusMatch && doctorMatch;
  });

  const doctorLoad = data.doctors.map((doctor) => ({
    doctor,
    count: data.appointments.filter((appointment) => appointment.doctorId === doctor.id).length,
  }));

  const serviceLoad = data.services.map((service) => ({
    service,
    count: data.appointments.filter((appointment) => appointment.serviceId === service.id).length,
  }));

  const upsertAppointment = (appointment) => {
    setData((current) => {
      const exists = current.appointments.some((item) => item.id === appointment.id);
      return {
        ...current,
        appointments: exists
          ? current.appointments.map((item) => (item.id === appointment.id ? appointment : item))
          : [...current.appointments, appointment],
      };
    });
    setEditorState({ mode: null, appointment: null });
  };

  const deleteAppointment = (id) => {
    if (!window.confirm(t.confirmDelete)) return;
    setData((current) => ({
      ...current,
      appointments: current.appointments.filter((appointment) => appointment.id !== id),
    }));
  };

  const updateStatus = (id, status) => {
    setData((current) => ({
      ...current,
      appointments: current.appointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status } : appointment
      ),
    }));
  };

  const addService = (form) => {
    if (!form.kk.trim() || !form.ru.trim()) return;
    setSettingsMessage("");
    setData((current) => ({
      ...current,
      services: [
        ...current.services,
        {
          id: `srv-${Date.now()}`,
          name: { kk: form.kk.trim(), ru: form.ru.trim() },
          duration: form.duration,
        },
      ],
    }));
  };

  const addDoctor = (form) => {
    if (!form.name.trim() || !form.specialtyKk.trim() || !form.specialtyRu.trim()) return;
    setSettingsMessage("");
    setData((current) => ({
      ...current,
      doctors: [
        ...current.doctors,
        {
          id: `doc-${Date.now()}`,
          name: form.name.trim(),
          specialty: { kk: form.specialtyKk.trim(), ru: form.specialtyRu.trim() },
          serviceIds: current.services.map((service) => service.id),
        },
      ],
    }));
  };

  const removeService = (id) => {
    const hasAppointments = data.appointments.some((appointment) => appointment.serviceId === id);
    if (hasAppointments) {
      setSettingsMessage(t.serviceDeleteBlocked);
      return;
    }
    setSettingsMessage("");
    setData((current) => ({
      ...current,
      services: current.services.filter((service) => service.id !== id),
    }));
  };

  const removeDoctor = (id) => {
    const hasAppointments = data.appointments.some((appointment) => appointment.doctorId === id);
    if (hasAppointments) {
      setSettingsMessage(t.doctorDeleteBlocked);
      return;
    }
    setSettingsMessage("");
    setData((current) => ({
      ...current,
      doctors: current.doctors.filter((doctor) => doctor.id !== id),
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-shell">
        <div className="login-wrap">
          <div className="login-card">
            <div className="kicker">{t.loginTitle}</div>
            <h3>{t.loginText}</h3>
            <p>{t.loginHint}</p>
            <div className="stack">
              <div className="field">
                <label>{t.loginField}</label>
                <input value={loginForm.login} onChange={(event) => setLoginForm((current) => ({ ...current, login: event.target.value }))} />
              </div>
              <div className="field">
                <label>{t.passwordField}</label>
                <input type="password" value={loginForm.password} onChange={(event) => setLoginForm((current) => ({ ...current, password: event.target.value }))} />
              </div>
              {loginError && <div className="empty-note">{loginError}</div>}
              <button
                className="primary-button"
                onClick={() => {
                  if (
                    loginForm.login === ADMIN_CREDENTIALS.login &&
                    loginForm.password === ADMIN_CREDENTIALS.password
                  ) {
                    setIsAuthenticated(true);
                    setLoginError("");
                  } else {
                    setLoginError(t.loginError);
                  }
                }}
              >
                {t.signIn}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-shell">
      <div className="admin-nav">
        <button className={`nav-pill ${tab === "dashboard" ? "active" : ""}`} onClick={() => setTab("dashboard")}>{t.tabsDashboard}</button>
        <button className={`nav-pill ${tab === "settings" ? "active" : ""}`} onClick={() => setTab("settings")}>{t.tabsSettings}</button>
        <button className={`nav-pill ${tab === "insights" ? "active" : ""}`} onClick={() => setTab("insights")}>{t.tabsInsights}</button>
      </div>

      <div className="admin-header">
        <div>
          <div className="kicker">{t.adminBadge}</div>
          <h2>{t.adminTitle}</h2>
          <p>{t.adminDemoBlock}</p>
        </div>
        <div className="quick-actions">
          <button className="secondary-button" onClick={() => setEditorState({ mode: "create", appointment: null })}>{t.addAppointment}</button>
          <button className="ghost-button" onClick={() => setIsAuthenticated(false)}>{t.signOut}</button>
        </div>
      </div>

      {tab === "dashboard" && (
        <>
          <div className="metrics-grid">
            <div className="stat-card highlight">
              <div className="muted">{t.todayAppointments}</div>
              <strong>{metrics.today}</strong>
            </div>
            <div className="stat-card">
              <div className="muted">{t.newRequests}</div>
              <strong>{metrics.new}</strong>
            </div>
            <div className="stat-card">
              <div className="muted">{t.confirmed}</div>
              <strong>{metrics.confirmed}</strong>
            </div>
            <div className="stat-card">
              <div className="muted">{t.noShows}</div>
              <strong>{metrics.noShowToday}</strong>
            </div>
          </div>

          <div className="table-card">
            <div className="toolbar">
              <div className="filters-row">
                <div className="filter-chip">
                  <span>{t.dateFilter}</span>
                  <select value={filters.date} onChange={(event) => setFilters((current) => ({ ...current, date: event.target.value }))}>
                    <option value="all">{t.all}</option>
                    <option value="today">{t.today}</option>
                    <option value="tomorrow">{t.tomorrow}</option>
                    <option value="week">{t.week}</option>
                    <option value="range">{t.range}</option>
                  </select>
                </div>
                <div className="filter-chip">
                  <span>{t.statusFilter}</span>
                  <select value={filters.status} onChange={(event) => setFilters((current) => ({ ...current, status: event.target.value }))}>
                    <option value="all">{t.all}</option>
                    <option value="new">{t.statusNew}</option>
                    <option value="confirmed">{t.statusConfirmed}</option>
                    <option value="cancelled">{t.statusCancelled}</option>
                    <option value="no_show">{t.statusNoShow}</option>
                    <option value="served">{t.statusServed}</option>
                  </select>
                </div>
                <div className="filter-chip">
                  <span>{t.doctorFilter}</span>
                  <select value={filters.doctorId} onChange={(event) => setFilters((current) => ({ ...current, doctorId: event.target.value }))}>
                    <option value="all">{t.all}</option>
                    {data.doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              {filters.date === "range" && <div className="tiny muted">{t.rangeHint}</div>}
            </div>

            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>{t.timeCol}</th>
                    <th>{t.patientCol}</th>
                    <th>{t.phoneCol}</th>
                    <th>{t.serviceCol}</th>
                    <th>{t.doctorCol}</th>
                    <th>{t.bookingChannel}</th>
                    <th>{t.statusCol}</th>
                    <th>{t.actionsCol}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments.length ? (
                    filteredAppointments.map((appointment) => {
                      const service = data.services.find((item) => item.id === appointment.serviceId);
                      const doctor = data.doctors.find((item) => item.id === appointment.doctorId);
                      return (
                        <tr key={appointment.id}>
                          <td><strong>{formatDateTime(appointment.dateTime, lang)}</strong></td>
                          <td><strong>{appointment.patientName}</strong></td>
                          <td>{appointment.phone}</td>
                          <td>{service ? getServiceLabel(service, lang) : "-"}</td>
                          <td>{doctor ? doctor.name : "-"}</td>
                          <td>{appointment.source === "site" ? t.fromSite : t.manualEntry}</td>
                          <td>
                            <span className={`status-pill ${getStatusClass(appointment.status)}`}>
                              {getStatusLabel(appointment.status, t)}
                            </span>
                          </td>
                          <td>
                            <div className="table-actions">
                              <button className="icon-button" title={t.editLabel} onClick={() => setEditorState({
                                mode: "edit",
                                appointment: {
                                  ...appointment,
                                  date: toDateInput(appointment.dateTime),
                                  time: toTimeInput(appointment.dateTime),
                                },
                              })}>✏️</button>
                              <button className="icon-button" title={t.deleteLabel} onClick={() => deleteAppointment(appointment.id)}>🗑️</button>
                              {appointment.status !== "confirmed" && (
                                <button className="icon-button" title={t.confirmLabel} onClick={() => updateStatus(appointment.id, "confirmed")}>✅</button>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="8">
                        <div className="table-empty">{t.emptyTable}</div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {tab === "settings" && (
        <div className="settings-grid">
          <div className="settings-card">
            <div className="row-between">
              <h3>{t.sectionServices}</h3>
            </div>
            <div className="stack">
              {data.services.map((service) => (
                <div className="list-card" key={service.id}>
                  <header>
                    <div>
                      <strong>{getServiceLabel(service, lang)}</strong>
                      <div className="muted">{service.duration} мин</div>
                    </div>
                    <button className="icon-button" onClick={() => removeService(service.id)} disabled={data.appointments.some((appointment) => appointment.serviceId === service.id)}>🗑️</button>
                  </header>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16 }}>
              <DictionaryForm t={t} type="service" onSubmit={addService} />
            </div>
            {settingsMessage && <div className="empty-note" style={{ marginTop: 16 }}>{settingsMessage}</div>}
          </div>

          <div className="settings-card">
            <h3>{t.sectionDoctors}</h3>
            <div className="stack">
              {data.doctors.map((doctor) => (
                <div className="list-card" key={doctor.id}>
                  <header>
                    <div>
                      <strong>{doctor.name}</strong>
                      <div className="muted">{doctor.specialty[lang]}</div>
                    </div>
                    <button className="icon-button" onClick={() => removeDoctor(doctor.id)}>🗑️</button>
                  </header>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16 }}>
              <DictionaryForm t={t} type="doctor" onSubmit={addDoctor} />
            </div>
          </div>

          <div className="settings-card">
            <h3>{t.sectionHours}</h3>
            <div className="stack">
              <div className="field">
                <label>{t.workdays}</label>
                <div className="toolbar">
                  {weekdays.map((day) => {
                    const active = data.workingHours.workdays.includes(day.key);
                    return (
                      <button
                        key={day.key}
                        className={`tab-button ${active ? "active" : ""}`}
                        onClick={() =>
                          setData((current) => {
                            const exists = current.workingHours.workdays.includes(day.key);
                            return {
                              ...current,
                              workingHours: {
                                ...current.workingHours,
                                workdays: exists
                                  ? current.workingHours.workdays.filter((item) => item !== day.key)
                                  : [...current.workingHours.workdays, day.key],
                              },
                            };
                          })
                        }
                      >
                        {day[lang]}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="field">
                <label>{t.dayStart}</label>
                <input type="time" value={data.workingHours.start} onChange={(event) => setData((current) => ({ ...current, workingHours: { ...current.workingHours, start: event.target.value } }))} />
              </div>
              <div className="field">
                <label>{t.dayEnd}</label>
                <input type="time" value={data.workingHours.end} onChange={(event) => setData((current) => ({ ...current, workingHours: { ...current.workingHours, end: event.target.value } }))} />
              </div>
              <div className="field">
                <label>{t.breakStart}</label>
                <input type="time" value={data.workingHours.breakStart} onChange={(event) => setData((current) => ({ ...current, workingHours: { ...current.workingHours, breakStart: event.target.value } }))} />
              </div>
              <div className="field">
                <label>{t.breakEnd}</label>
                <input type="time" value={data.workingHours.breakEnd} onChange={(event) => setData((current) => ({ ...current, workingHours: { ...current.workingHours, breakEnd: event.target.value } }))} />
              </div>
              <div className="field">
                <label>{t.slotStep}</label>
                <select value={data.workingHours.slotStep} onChange={(event) => setData((current) => ({ ...current, workingHours: { ...current.workingHours, slotStep: Number(event.target.value) } }))}>
                  <option value={30}>30 мин</option>
                  <option value={40}>40 мин</option>
                </select>
              </div>
              <button className="primary-button">{t.saveHours}</button>
            </div>
          </div>
        </div>
      )}

      {tab === "insights" && (
        <div className="split-showcase">
          <div className="settings-card">
            <div className="kicker">{t.loadByDoctor}</div>
            <div className="stack" style={{ marginTop: 16 }}>
              {doctorLoad.map((item) => (
                <div key={item.doctor.id} className="summary-item">
                  <span>{item.doctor.name}</span>
                  <strong>{item.count}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="settings-card">
            <div className="kicker">{t.popularServices}</div>
            <div className="stack" style={{ marginTop: 16 }}>
              {serviceLoad.map((item) => (
                <div key={item.service.id} className="summary-item">
                  <span>{getServiceLabel(item.service, lang)}</span>
                  <strong>{item.count}</strong>
                </div>
              ))}
            </div>
            <div className="empty-note" style={{ marginTop: 18 }}>{t.insightsText}</div>
          </div>
        </div>
      )}

      {editorState.mode && (
        <AppointmentFormModal
          lang={lang}
          t={t}
          services={data.services}
          doctors={data.doctors}
          appointments={data.appointments}
          workingHours={data.workingHours}
          mode={editorState.mode}
          initialValue={editorState.appointment}
          onClose={() => setEditorState({ mode: null, appointment: null })}
          onSave={upsertAppointment}
        />
      )}
    </div>
  );
}

function App() {
  const [lang, setLang] = useState("kk");
  const [view, setView] = useState(window.location.hash === "#/admin" ? "admin" : "site");
  const [data, setData] = useState(createInitialState);
  const [widgetOpen, setWidgetOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleHashChange = () => {
      setView(window.location.hash === "#/admin" ? "admin" : "site");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const openAdmin = () => {
    window.location.hash = "/admin";
    setView("admin");
  };

  const openSite = () => {
    window.location.hash = "/";
    setView("site");
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <button className="brand" onClick={openSite} style={{ background: "transparent", border: 0 }}>
            <div className="brand-mark">✦</div>
            <div className="brand-copy">
              <strong>{t.brandName}</strong>
              <span>{t.brandTag}</span>
            </div>
          </button>

          <div className="topbar-actions">
            <button className={`nav-pill ${view === "site" ? "active" : ""}`} onClick={openSite}>{t.navSite}</button>
            <button className={`nav-pill ${view === "admin" ? "active" : ""}`} onClick={openAdmin}>{t.navAdmin}</button>
            <div className="lang-toggle" aria-label={t.langLabel}>
              {LANGS.map((currentLang) => (
                <button
                  key={currentLang}
                  className={currentLang === lang ? "active" : ""}
                  onClick={() => setLang(currentLang)}
                >
                  {currentLang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {view === "site" ? (
        <>
          <PublicHome
            t={t}
            lang={lang}
            onOpenWidget={() => setWidgetOpen(true)}
            onOpenAdmin={openAdmin}
            services={data.services}
            doctors={data.doctors}
            appointments={data.appointments}
          />
          <button className="floating-booking" onClick={() => setWidgetOpen(true)}>{t.floatingButton}</button>
        </>
      ) : (
        <AdminPanel
          lang={lang}
          t={t}
          data={data}
          setData={setData}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      )}

      {widgetOpen && (
        <BookingWidgetModal
          lang={lang}
          t={t}
          services={data.services}
          doctors={data.doctors}
          appointments={data.appointments}
          workingHours={data.workingHours}
          onClose={() => setWidgetOpen(false)}
          onSubmit={(appointment) => {
            setData((current) => ({
              ...current,
              appointments: [...current.appointments, appointment],
            }));
          }}
        />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
