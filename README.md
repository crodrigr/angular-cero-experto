---

## 🧠 **Angular 19 Moderno: De Cero a Experto**

---

### 🟩 **Unidad 1: Fundamentos de Angular 19**  [🔗](https://www.notion.so/Unidad-1-Fundamentos-de-Angular-19-20721760a85f804fa4f8f8de11a075f0?pvs=21)

<aside>
💡

[Unidad 1: Fundamentos de Angular 19](https://www.notion.so/Unidad-1-Fundamentos-de-Angular-19-20721760a85f804fa4f8f8de11a075f0?pvs=21)

**Objetivo:** Comprender la arquitectura moderna y el nuevo enfoque standalone.

**Temas:**

1. ¿Qué es Angular? Principios y evolución hasta Angular 19
2. Características de Angular 19: Standalone APIs, Signals, Modern DI
3. Instalación de Angular CLI 19 y configuración del entorno
4. Creación y exploración de un proyecto con `standalone:true`
5. Archivos principales: `main.ts`, `app.config.ts`, `bootstrapApplication`
6. Componentes standalone y módulos legacy
</aside>

---

### 🟨 **Unidad 2: Componentes, Templates y Data Binding**

<aside>
💡

**Objetivo:** Manejar componentes y sus interacciones.

**Temas:**

1. Creación y estructura de componentes standalone (`@Component`)
2. Interpolación, binding unidireccional y bidireccional (`[(ngModel)]`)
3. Inputs y Outputs
4. Ciclo de vida de componentes
5. Pipes nativas y personalizadas
6. Directivas estructurales (`ngIf`, `ngFor`) y de atributo (`[ngClass]`, `[ngStyle]`)
</aside>

---

### 🟧 **Unidad 3: Formularios y Validaciones**

**Objetivo:** Crear formularios robustos con validaciones eficientes.

**Temas:**

1. Formularios Template-driven vs Reactivos
2. `FormGroup`, `FormControl`, `FormBuilder`
3. Validaciones síncronas y asíncronas
4. Validadores personalizados
5. Manejo de errores en formularios
6. Formularios dinámicos

---

### 🟥 **Unidad 4: Ruteo y Lazy Loading en Angular 19**

**Objetivo:** Navegación profesional con rutas y carga diferida.

**Temas:**

1. Configuración moderna con `provideRouter()`
2. Navegación con `routerLink`, `navigate()`, y `navigateByUrl()`
3. Rutas hijas (`children`) y parámetros (`:id`)
4. Lazy loading moderno con `loadComponent`, `loadChildren`
5. CanActivate, CanDeactivate, CanMatch y CanActivateChild
6. Redirecciones, rutas wildcard y manejo de errores 404
7. Estrategias de preloading (`PreloadAllModules`, personalizadas)

---

### 🟦 **Unidad 5: Servicios, HTTP y Almacenamiento**

**Objetivo:** Comunicar componentes y acceder a APIs.

**Temas:**

1. Servicios con `@Injectable({ providedIn: 'root' })`
2. Uso de `inject()` y patrón singleton
3. `HttpClient`: GET, POST, PUT, DELETE
4. Interceptores HTTP (`HttpInterceptor`)
    - Adjuntar tokens
    - Manejo global de errores
5. Almacenamiento:
    - LocalStorage vs SessionStorage
    - Servicio wrapper para persistencia
6. Manejo de tokens y headers

---

### 🟪 **Unidad 6: Guards, Autenticación y Control de Acceso**

**Objetivo:** Proteger rutas y controlar flujos según el estado del usuario.

**Temas:**

1. Creación de guards:
    - `CanActivate`
    - `CanDeactivate`
    - `CanActivateChild`
    - `CanMatch`
2. Guards con rutas standalone
3. Guards basados en roles/permisos
4. Ejemplo completo: ruta de administrador protegida
5. Logout automático en token expirado

---

### ⚫ **Unidad 7: Gestión de Estado con NgRx**

**Objetivo:** Escalar aplicaciones con flujo de datos centralizado.

**Temas:**

1. Introducción a Redux y `@ngrx/store`
2. Actions, Reducers y Selectors
3. NgRx Effects para lógica asíncrona
4. Uso de EntityAdapter
5. División por features/modules
6. Memoización con Selectors
7. NgRx DevTools

---

### 🟫 **Unidad 8: Programación Reactiva con RxJS**

**Objetivo:** Optimizar el flujo de datos con Observables.

**Temas:**

1. Observables vs Promesas
2. Subjects, BehaviorSubject, ReplaySubject
3. Operadores (`map`, `filter`, `switchMap`, `concatMap`, `mergeMap`)
4. Composición de flujos complejos
5. Unsubscribe automático (`takeUntil`, `async pipe`, `destroyRef`)
6. Patrones reactivos en servicios y componentes

---

### 🟨 **Unidad 9: Angular Material y Diseño UI Moderno**

**Objetivo:** Crear interfaces modernas y funcionales.

**Temas:**

1. Instalación y configuración de Angular Material
2. Componentes frecuentes:
    - Inputs, Buttons, Dialogs, Snackbars, Tables, Tabs, Sidenav
3. Paginación, ordenamiento y filtros
4. Theming: colores personalizados y dark mode
5. Accesibilidad y responsive con FlexLayout

---

### 🟦 **Unidad 10: Testing y Calidad de Código**

**Objetivo:** Garantizar confiabilidad y evitar regresiones.

**Temas:**

1. Testing unitario con Jest o Jasmine + Karma
2. Test de componentes con `TestBed`
3. Mocks y spies (`HttpTestingController`)
4. Testing de efectos y selectors de NgRx
5. Pruebas E2E con Cypress

---

### ⚙️ **Unidad 11: Buenas Prácticas y Arquitectura**

**Objetivo:** Escribir código limpio, mantenible y escalable.

**Temas:**

1. Principios SOLID y arquitectura limpia
2. Estructura modular y escalable por features
3. Patrón facade para manejar estado
4. Separación lógica de presentación y servicios
5. Change Detection y rendimiento (`OnPush`, Signals)

---

### 🚀 **Unidad 12: Despliegue y CI/CD**

**Objetivo:** Preparar y publicar aplicaciones Angular profesionalmente.

**Temas:**

1. `ng build --configuration production` y entornos (`environment.prod.ts`)
2. Deploy en:
    - Firebase Hosting
    - Docker + NGINX
    - Vercel / Netlify
3. CI/CD con GitHub Actions: pruebas + build + deploy
4. Uso de variables de entorno y secretos

---

### 🎓 **Unidad Final: Proyecto Integrador**

**Objetivo:** Construir una aplicación profesional con todo lo aprendido.

**Temas:**

1. App tipo dashboard con login, panel de administración y store
2. Consumo de API, NgRx completo, Material UI
3. Guards por rol
4. Interceptores con token
5. Testing unitario y E2E
6. Despliegue final