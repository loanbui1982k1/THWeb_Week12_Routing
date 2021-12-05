## Cài đặt các module
    $ npm i
## Khởi chạy server
    $ npm start
    Sau đó follow link để mở ứng dụng tại http://localhost:3000/
## Truy cập vào các file frontend theo các đường dẫn:
    /get.html
    /update.html
    /list.html
## Các thức hoạt động
   * Khi truy cập đường dẫn, nếu là một đường dẫn có trong folder views thì frontend tương ứng sẽ được hiển thị.
   * Nếu đường dẫn không có trong folder views, nó sẽ chuyển đến file index.js. Khi đó, route(app) sẽ chuyển đến phần định tuyến trong routes/index.js.
   * Với đường dẫn có dạng:
    + "/students/*" thì sẽ vào file routes/student.js để xử lý, nếu đường dẫn có đi kèm /:id thì sẽ in ra data với id tương ứng, nếu không sẽ in ra data mặc định
    + Các đường dẫn khác thì sẽ vào file routes/fallBack.js và in ra lỗi


