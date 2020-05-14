# 数组乱序和文件上传  
```html
<FORM ACTION="http://server.dom/cgi/handle" ENCTYPE="multipart/form-data" METHOD=POST>
  What is your name? <INPUT TYPE=TEXT NAME=submitter>
  What files are you sending? <INPUT TYPE=FILE NAME=pics>
</FORM>
<!-- 拿到内容之后按照分隔符隔开 -->
The client might send back the following data:
Content-type: multipart/form-data, boundary=AaB03x

--AaB03x
content-disposition: form-data; name="field1"

Joe Blow
--AaB03x
content-disposition: form-data; name="pics"; filename="file1.txt"
Content-Type: text/plain

... contents of file1.txt ...
--AaB03x--
```