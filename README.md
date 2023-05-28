**README.md**

# Интерактивная платформа-сообщество для стажеров и участников молодежных карьерных проектов

Добро пожаловать в интерактивную платформу-сообщество, разработанную для поддержки стажеров и участников молодежных карьерных проектов. Этот проект предоставляет современное и инновационное решение для эффективного взаимодействия и развития молодежного кадрового потенциала.

## Описание проекта

Наша платформа-сообщество предназначена для обеспечения удобного онлайн-пространства, где стажеры и участники молодежных проектов могут найти интересные возможности для своего карьерного роста. Мы стремимся создать сильное сообщество, которое позволит участникам обмениваться знаниями, опытом и взаимодействовать друг с другом.

## Технологии

Наша платформа разработана с использованием современных технологий и инструментов:

- VPS-сервер Ubuntu 22.04
- Docker и Docker Compose для контейнеризации и развертывания приложений
- SDKman для установки и управления различными SDK
- Java и Spring Boot для бэкенд-разработки
- Maven для управления зависимостями и сборки проекта
- PostgreSQL для хранения данных
- Keycloak для авторизации пользователей
- Rabbit MQ в качестве брокера сообщений
- Nginx для обработки фронтэнда
- React для разработки фронтенд-интерфейса

## Установка и запуск

1. Установите операционную систему Ubuntu версии 22.04.
2. Установите Docker и Docker Compose на вашу систему.
3. Установите SDKman и используйте его для установки Java, Spring Boot и Maven.
4. Запустите [docker-compose.yml](https://github.com/LikeKugi/Tech-titan/blob/back/src/main/resources/docker-compose.yml) 
5. В папке, из которой запущен docker-compose будет развернута PostgreSQL (15) с базой данных titans.
6. Persistent data для Postgres хранится во вложенной папке (внутри рабочего каталога) - /database, порт 5432
7. Структура базы данных (система таблиц и связей) - [структура](https://github.com/LikeKugi/Tech-titan/blob/back/src/main/resources/titan.pgerd.png)
8. В этой же папке будет развернут pgadmin для управления базой данных, его данные хранятся в папке /pgadmin
9. Через веб-интерфейс pgadmin (порт 5050) запустите инициализирующий скрипт для создания структуры бд - [скрипт](https://github.com/LikeKugi/Tech-titan/blob/back/src/main/resources/titanInitialScript.sql) 
10. В этой же папке будет развернут брокер сообщений Rabbit MQ, его данные хранятся в папке /rabbitmq.
11. В этой же папке будет развернут Nginx, его данные хранятся в папке /nginx. Дополнительный конфигурационный файл к нему:
```
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

        server {
        listen 80;
        listen [::]:80;

                location / {
                        root /usr/share/nginx/html;
                        try_files $uri /index.html;
                }


                location  /api/news {
                proxy_set_header X-Forwarded_For $proxy_add_x_forwarded_for;
                proxy_set_header Host $http_post;
                proxy_redirect off;
                #rewrite ^/api(.*) $1 break;
                proxy_pass http://188.72.109.179:8084/news;
        }
                location  /api/internee {
                proxy_set_header X-Forwarded_For $proxy_add_x_forwarded_for;
                proxy_set_header Host $http_post;
                proxy_redirect off;
                #rewrite ^/api(.*) $1 break;
                proxy_pass http://188.72.109.179:8084/internee;
        }
        }


    include /etc/nginx/conf.d/*.conf;
}
```
13. После применения конфигурационного файла перезапутите nginx.
14. Скомпилируйте бэк через Maven - clean, packeage. Разместите в папе проекта полученный исполняемый дистрибутив (jar)
15. Запустите jar командой:
```
nohup java -jar titan-1.jar &
```
17. Откройте браузер, порт 8082 (nginx) для работы с проектом

## Функциональность

Наша платформа-сообщество предоставляет следующую функциональность:

- Авторизация и аутентификация пользователей с помощью Keycloak.
- Возможность стажерам и участникам молодежных проектов авторизовываться на сайте и просматривать свои данные.
- Отправка и получение тестовых заданий.
- Подача заявок на стажировки и отслеживание их статуса.
- Прохождение викторин и головоломок.
- Возможность перехода на платформу с онлайн-треком Карьерной школы Правительства Москвы.
- Интеграция с базой данных пользователей сайта Правительства Москвы.
- Возможность оценивать работу наставников и оставлять отзывы.
- Отправка уведомлений и сообщений через встроенную систему обратной связи.

## Масштабирование и поддержка

Наша платформа разработана с учетом возможности масштабирования и обработки большого количества запросов. Использование Docker Compose позволяет легко развернуть всю архитектуру на любом сервере.

## Команда разработчиков

- [Петр](https://github.com/Frenchfan)
- [Илья](https://github.com/LikeKugi)
- [Денис](https://github.com/frontsteron)
- [Эльвира](https://github.com/ElviraAsadullina)

**© Ваша команда разработчиков**
