# Redux Basic User [EN version below] / Базовий Redux Проект з Користувачами
- Deploy link on Vercel: 

## 🇺🇦 Українська

### Мета проекту
Навчальний проект для демонстрації основ роботи з Redux у React-додатку з підтримкою асинхронної логіки. Проект реалізований у двох варіантах: з використанням Redux Thunk (початкова версія) та Redux Saga (оновлена версія в Git гілці Saga).

### Що робить проект
- **Лічильник з асинхронними операціями**: збільшення/зменшення значення з затримкою 1 секунда
- **Управління користувачем**: встановлення та відображення імені користувача
- **Демонстрація Redux-архітектури**: показує різні підходи до управління станом та асинхронними операціями

### Архітектура проекту
```
src/
├── components/
│   ├── Counter.tsx          # Компонент лічильника
│   └── User.tsx             # Компонент управління користувачем
├── redux/
│   ├── slices/
│   │   ├── counterSlice.ts  # Redux slice для лічильника
│   │   └── userSlice.ts     # Redux slice для користувача
│   ├── sagas/               # (тільки у Saga-версії)
│   │   └── counterSagas.ts  # Саги для асинхронних операцій
│   └── store.ts             # Конфігурація Redux store
├── App.tsx                  # Головний компонент з Provider
├── main.tsx                 # Точка входу
└── index.css                # Стилі
```

### Потік даних
**Redux Thunk версія**:
UI → dispatch(asyncAction) → Thunk middleware → API/delay → reducer → store → UI

**Redux Saga версія**:
UI → dispatch(action) → Saga middleware → saga (yield effects) → reducer → store → UI

### Cтарт
```bash
# Клонування та встановлення
git clone <repository-url>
cd redux-basic-user
npm install

# Запуск
npm run dev

# Перемикання між версіями
git checkout   # Redux Thunk версія
git checkout f619e93 # Redux Saga версія
```

---

## 🇬🇧 English

### Project Purpose
Educational project demonstrating Redux fundamentals in a React application with asynchronous logic support. The project is implemented in two variants: using Redux Thunk (initial version) and Redux Saga (updated version in Git branch Saga).

### What the project does
- **Counter with async operations**: increment/decrement with 1-second delay
- **User management**: setting and displaying username
- **Redux architecture demonstration**: showcases different approaches to state management and async operations

### Project Architecture
```
src/
├── components/
│   ├── Counter.tsx          # Counter component
│   └── User.tsx             # User management component
├── redux/
│   ├── slices/
│   │   ├── counterSlice.ts  # Redux slice for counter
│   │   └── userSlice.ts     # Redux slice for user
│   ├── sagas/               # (Saga version only)
│   │   └── counterSagas.ts  # Sagas for async operations
│   └── store.ts             # Redux store configuration
├── App.tsx                  # Main component with Provider
├── main.tsx                 # Entry point
└── index.css                # Styles
```

### Data Flow
**Redux Thunk version**:
UI → dispatch(asyncAction) → Thunk middleware → API/delay → reducer → store → UI

**Redux Saga version**:
UI → dispatch(action) → Saga middleware → saga (yield effects) → reducer → store → UI

### Quick Start
```bash
# Clone and install
git clone <repository-url>
cd redux-basic-user
npm install

# Run development server
npm run dev

# Switch between versions
git checkout 7749bc1  # Redux Thunk version
git checkout d1f3582  # Redux Saga version
```

### Version Comparison

| Feature           |              Redux Thunk | Redux Saga          |
|-------------------|--------------------------|---------------------|
| **Async handling**|         createAsyncThunk | generator functions |
| **Learning curve**|                   Easier | Steeper             |
| **Testing**       |   Standard async testing | Generator testing   |
| **Bundle size**   |                  Smaller | Larger              |
| **Complex flows** |                  Limited | Excellent           |
| **Cancellation**  |                   Manual | Built-in            |