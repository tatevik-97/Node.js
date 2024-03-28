import * as http from "node:http"
import fs from "node:fs"

const updatedUrl = (url) => {
    const splitUrl = url.split('/')
    console.log(splitUrl)
    if(splitUrl.includes('page')){
        return `pages/${splitUrl[splitUrl.length - 1]}`;
    }
    return 
}
const PORT = 3000
const server = http.createServer((req, res) => {

    const path = req.url === "/page/home" ? "pages/index" : updatedUrl(req.url)
    fs.readFile(`${path}.html`, "utf-8", (error, content) => {
        if (error) {

            fs.readFile("pages/404.html", "utf-8", (error, content) => {

                res.writeHead(404, {
                    'Content-Type':
                        'text/html'
                })
                res.write(content  || "404 Not Found")

                res.end()

            })
            return
        }

        res.writeHead(200, {
            'Content-Type':
                'text/html'
        })
        res.write(content)

        res.end()
    })
})

server.listen(PORT, () => {
    console.log(`Server running at ${PORT} port`)
})