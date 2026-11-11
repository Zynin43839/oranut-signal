# Portfolio (AI Engineer)

พอร์ตโฟลิโอสาย AI Engineer แบบ static ไม่ต้อง build ใช้ HTML + CSS + JavaScript ล้วน

- ฉบับไทย: https://oranut-signal.vercel.app
- ฉบับอังกฤษ: https://oranut-signal.vercel.app/en/

## ขอบเขตของ repo นี้

repo นี้อธิบายงานวิศวกรรม AI ของโครงการ RAG-Diary ในมุมที่วัดผลได้ ได้แก่

- ไปป์ไลน์ RAG ห้าขั้น ตั้งแต่ embedding ถึงคำตอบ
- การเลือกใช้ pgvector + HNSW และการปรับเกณฑ์ความคล้ายจาก 0.7 เป็น 0.6
- การเลือกโมเดลสามบทบาทผ่าน adapter เดียว
- จุดตรวจความยินยอมและขอบเขตข้อมูลส่วนบุคคล
- สิ่งที่วัดแล้วและสิ่งที่ยังไม่ได้วัด

repo นี้ไม่มีไฟล์ PDF ของเอกสาร เพราะเอกสารวิเคราะห์อยู่ใน repo `oranut-blueprint`

## โครงสร้าง

```
oranut-signal/
├── index.html          หน้าภาษาไทย
├── en/index.html       หน้าภาษาอังกฤษ
├── styles.css          ธีม Signal (เข้ม ตัดด้วยสีเขียวมะนาว)
├── script.js           เมนูมือถือ, reveal on scroll, lightbox
├── vercel.json         cache และ clean URLs
└── assets/img/         แผนภาพ SEQ-04, ERD, DFD, C4 และภาพหน้าจอ
```

## ดูในเครื่อง

```powershell
cd oranut-signal
python -m http.server 8080
```
