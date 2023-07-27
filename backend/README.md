# BACKEND

Разработка будет вестись на `windows` без использования `docker`

База данных `PostgreSQL` должна быть установлена в системе

https://www.postgresql.org/

## Nakama

v3.17.0

https://heroiclabs.com/nakama/
https://github.com/heroiclabs/nakama

при копировании nakama, удалил папку `vendor` и следующие файлы
`.github`
`go.sum`

Компилируем

```
go get
go build

// тестовый запуск
// сменить password на свой пароль к базе

./nakama.exe migrate up --database.address postgres:password@127.0.0.1:5432
./nakama.exe --database.address postgres:password@127.0.0.1:5432

```
http://127.0.0.1:7351/
admin:password

