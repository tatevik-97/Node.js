import * as http from "node:http"
import fs from "node:fs"

const PORT = 3000
const server = http.createServer((req, res) => {
    const path = req.url === "/" ? "index" : req.url
    fs.readFile(`pages/${path}.html`, "utf-8", (error, content) => {
        if (error) {

            fs.readFile("pages/404.html", "utf-8", (error, content) => {

                res.writeHead(404, {
                    'Content-Type':
                        'text/html'
                })
                res.end(content)

            })
            return
        }

        res.writeHead(200, {
            'Content-Type':
                'text/html'
        })
        res.end(content)
    })
})

server.listen(PORT, () => {
    console.log(`Server running at ${PORT} port`)
})