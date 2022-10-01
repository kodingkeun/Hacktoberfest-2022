// import modul
const http = require("http");
const url = require('url');
const mysql = require("mysql");

// host server dan port
const host = 'localhost';
const port = 5000;

// setup db
var mydb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "msib"
});

// koneksi ke db
mydb.connect(function (error) {
    if (error) throw error;
});


const requestListener = function (req, res) {
    const path_name = url.parse(req.url, true).pathname;

    switch (path_name) {
        case "/":
            console.log("Akses halaman /");
            res.writeHead(200);
            res.end("Backend contact app");
            break

        // get data contact
        case "/get_contact":
            console.log("Akses halaman /get_contact");
            var query_get = "select * from tb_contact where 1 = 1";
            const param_get = url.parse(req.url, true).query;

            if ("nama" in param_get) {
                query_get += " AND nama = " + mysql.escape(param_get["nama"]);
            };

            // ambil data dr db
            mydb.query(query_get, function (err, result, fields) {
                if (err) throw err;

                if (result == !result) {
                    var response_payload = {
                        "description": "Tidak ada contact dengan nama tersebut"
                    }
                } else {
                    var response_payload = {
                        "description": "Berhasil mendapatkan data contact",
                        "data": result
                    }
                }
                // membuat respon ke format json

                // mengembalikan response
                res.setHeader("Content-Type", "application/json");
                res.writeHead(200);
                res.end(JSON.stringify(response_payload));
            });
            break

        // insert data contact
        case "/insert_contact":
            console.log("Akses halaman /insert_siswa");

            var body_insert = [];
            req.on('data', (chunk) => {
                body_insert.push(chunk);
            }).on('end', () => {
                body_insert = JSON.parse(Buffer.concat(body_insert).toString());

                // memecah data
                var nama = body_insert["nama"]
                var email = body_insert["email"]
                var noHp = body_insert["noHp"]

                var query_insert = "insert into tb_contact (nama, email, noHp) values (?,?,?)";
                var values_insert = [nama, email, noHp];

                // ekse query
                mydb.query(query_insert, values_insert, function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);

                    // membuat respon kedlm json
                    var response_payload = {
                        "description": "Berhasil memasukkan data contact",
                        "data": result
                    }

                    // mengembalikan respon
                    res.setHeader("Content-Type", "application/json");
                    res.writeHead(200);
                    res.end(JSON.stringify(response_payload));
                });
            });
            break

        // update data contact
        case "/update_contact":
            console.log("Akses halaman /update_contact");

            var body_update = [];
            req.on('data', (chunk) => {
                body_update.push(chunk);
            }).on('end', () => {
                body_update = JSON.parse(Buffer.concat(body_update).toString());

                var nama = body_update["nama"]

                var query_update = "UPDATE tb_contact SET nama = nama";

                if ("email" in body_update) {
                    query_update += " , email = " + mysql.escape(body_update["email"])
                };

                if ("noHp" in body_update) {
                    query_update += " , noHp = " + mysql.escape(body_update["noHp"])
                };

                query_update += " WHERE nama = " + mysql.escape(nama)

                // ekse query
                mydb.query(query_update, function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);

                    // membuat respon kedlm json
                    var response_payload = {
                        "description": "Berhasil mengupdate data contact",
                        "data": result
                    }

                    // mengembalikan respon
                    res.setHeader("Content-Type", "application/json");
                    res.writeHead(200);
                    res.end(JSON.stringify(response_payload));
                });
            });
            break

        // menghapus data siswa
        case "/delete_contact":
            console.log("Akses halaman /delete_contact");

            const param_delete = url.parse(req.url, true).query;

            var query_delete = "DELETE FROM tb_contact WHERE nama = " + mysql.escape(param_delete["nama"]);

            // eksekusi query delete
            mydb.query(query_delete, function(err,result, fields){
                if(err) throw err;

                var response_payload = {
                    "description" : "Berhasil menghapus data contact",
                    "data" : result
                }

                res.setHeader("Content-Type", "application/json");
                res.writeHead(200);
                res.end(JSON.stringify(response_payload));

            });

            break
        
        default:
            console.log(req.url);
            res.writeHead(404);
            res.end(JSON.stringify({error: "API tidak ditemukan"}));
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Base url server');
});