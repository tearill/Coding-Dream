package main // 包

import (
	"github.com/jordan-wright/email"
	"net/smtp"
	"log"
)

func main() { // 入口函数
	// node -> node_mailer | Go 内置 mail 模块
	e := email.NewEmail() // := 定义并且赋值
	e.From = "<1105317666@qq.com>"
	// [] Array -> 多个用户发邮件 { } 集合的容器
	e.To = []string{"2546960856@qq.com"} // 数组类型[] 每个元素是string类型
	e.Subject = "Hello" // 标题
	e.Text = []byte("Hello, Golang!") // 内容
	e.HTML = []byte(`
		<ul>
			<li><a href="https://www.baidu.com">百度</a></li>
			<li><a href="https://www.Tmall.com">天猫</a></li>
		</ul>
	`)
	e.AttachFile("./vue.png") // 附件
	// 本地并没有搭建邮件服务器，由腾讯服务器进行转发
	err := e.Send("smtp.qq.com:25", smtp.PlainAuth("", "1105317666@qq.com", "qipusikdzmsobagf", "smtp.qq.com")) // qq的邮件代理服务器
	if err != nil {
		log.Fatal(err)
	}
}
