Aquí tienes el `README.md` completo, corregido, estructurado y listo para copiar y pegar:

---

```markdown
# 🧾 Proyecto Invoice - Sistema de Facturación

Este proyecto consiste en un sistema de facturación compuesto por:

- 🔹 **Frontend:** Angular 19  
- 🔹 **Backend:** Spring Boot 3.2.7 (Spring Boot 17 en semántica de versión)  
- 🔹 **Base de datos:** MySQL  
- 🔹 **Contenerización:** Docker y Docker Compose  

El backend está contenerizado y su imagen está publicada en Docker Hub:  
`crodrigr/backend-invoice:latest`

---

## 📦 Estructura del Proyecto

```

invoice/
├── frontend/                    # Proyecto Angular 19
│   └── backend/                # Contiene docker-compose.yml para levantar el backend
├── backend-invoice/            # Proyecto Spring Boot (si se desea usar local sin docker)

```

---

## ⚙️ Configuración del Backend (Spring Boot)

### 🐬 Base de Datos

Antes de ejecutar el `docker-compose`, **cree la base de datos en MySQL** con el nombre definido en el archivo `docker-compose.yml`.  
En este caso, el nombre debe ser:

```

db\_backend\_users

````

Una vez creada la base de datos, ejecute:

```bash
cd frontend/backend
docker compose up -d
````

Esto levantará el contenedor del backend y la base de datos.

---

## 🌐 Configuración del Frontend (Angular)

Para ejecutar el frontend:

```bash
cd frontend
npm install
ng serve
```

Esto levantará la aplicación en:

```
http://localhost:4200
```

---

## 🔐 Autenticación OAuth2

La autenticación se realiza mediante token (`grant_type=password`).

### 🔸 Credenciales del Cliente (Authorization)

```text
Authorization: Basic ZnJvbnRlbmRhcHA6MTIzNDU=
Username: frontendapp
Password: 12345
```

### 🔸 URL para Obtener el Token

```
http://localhost:8080/oauth/token
```

### 🔸 Usuarios Iniciales

| Rol           | Usuario | Contraseña |
| ------------- | ------- | ---------- |
| Usuario común | camilo  | 123456     |
| Administrador | admin   | 123456     |

---

### 🧪 Ejemplo `curl` para obtener el token

```bash
curl --location 'http://localhost:8080/oauth/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Authorization: Basic ZnJvbnRlbmRhcHA6MTIzNDU=' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'username=camilo' \
--data-urlencode 'password=12345'
```

---

## 📌 Notas Finales

* Asegúrese de tener **Docker** y **Docker Compose** instalados correctamente.
* Verifique que la base de datos `db_backend_users` exista antes de ejecutar el `docker-compose`.
* Para cambiar los usuarios o configuraciones, puede modificar el proyecto backend y regenerar la imagen de Docker si es necesario.

---

🛠 Proyecto desarrollado por [crodrigr](https://hub.docker.com/u/crodrigr) — Docker Hub

```
