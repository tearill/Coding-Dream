package main

import (
	"fmt"
	"net/http"
	"github.com/gin-gonic/gin"
	"text/template"
	"path/filepath"
	"os"
)

type Product struct { // 数据模型 schema
	Id int64 `json:"id"`
	Name string `json:"name"`
}
// 模拟数据库返回的数据
// 第一次查询数据库，之后用生成的 html 文件返回
var allProduct []*Product = []*Product {
	{1, "苹果手机"},
	{2, "小米手机"},
	{3, "OPPO手机"},
}
var (
	htmlOutPath = "./tem" // 生成的 html 保存目录
	templatePath = "./tem" // 静态文件模板目录
)

func GETGenerateHtml() {
	contentTmp, err := template.ParseFiles(filepath.Join(templatePath, "index.html"))
	if err != nil {
		fmt.Println("获取模板文件失败")
	}
	fileName := filepath.Join(htmlOutPath, "htmlindex.html")
	generateStaticHtml(contentTmp, fileName, gin.H {
		"allProduct": allProduct,
	}) // 生成静态文件
}

func generateStaticHtml(template *template.Template, fileName string, product map[string]interface{}) {
	file, err := os.OpenFile(fileName, os.O_CREATE|os.O_WRONLY, os.ModePerm) // 打开一个写入流
	if err != nil {
		fmt.Println("文件打开失败")
	}
	defer file.Close() // 等到操作完成之后关闭 -> defer 异步等待完成
	template.Execute(file, &product) // 模板编译
}

func main() {
	r := gin.Default()
	r.LoadHTMLGlob("tem/*") // 指定 views 视图
	
	r.GET("/index", func(c *gin.Context) {
		GETGenerateHtml()
		c.HTML(http.StatusOK, "index.html", gin.H {
			"allProduct": allProduct,
		})
	})

	r.GET("/index2", func(c *gin.Context) {
		c.HTML(http.StatusOK, "htmlindex.html", gin.H {})
	})
	r.Run()
}
