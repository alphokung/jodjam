# jodjam
JodJam.js
Version : 1.0.0
จดจำคือ Javascript Extension ที่จะช่วยจำค่าที่ผู้ใช้งานได้ทำการค้นหาไป โดยบันทึกเก็บไว้ใน Cookie ซึ่งรองรับการบันทึกข้อมูลแยกในแต่ละหน้า 
เมื่อมีการเปลี่ยนหน้า และกลับมาหน้าเดิมอีกครั้ง จะพบค่าที่ผู้ใช้งานค้นหาไว้ จะยังคงค่านั้นอยู่

// ตัวอย่างการใช้งาน
1. ประกาศ initial method โดยระบุชื่อหน้า และชื่อ Field ที่ต้องการให้จดจำไว้ (array ของ Id Field) 
JodJam.initial('RequestManage', ['SearchShipType', 'SearchFishingShipName', 'SearchRequestType', 'SearchStatus', 'SearchResponseStatus', 'startDate', 'endDate']);
2. เวลาที่มีการ Search หรือกดปุ่มค้นหาให้เรียก Method Remember เพื่อจำค่าของหน้านั้นๆไว้
JodJam.remember();
3. ในกรณีที่ต้องการล้างค่าสำหรับหน้านั้นๆ ก็ให้เรียก Method forgetMe เพื่อล้างค่าของหน้านั้นๆ
JodJam.forgetMe();

