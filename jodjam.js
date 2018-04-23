// JodJam.js
// version : 1.0.0
// จดจำคือ Javascript Extension ที่จะช่วยจำค่าที่ผู้ใช้งานได้ทำการค้นหาไป โดยบันทึกเก็บไว้ใน Cookie ซึ่งรองรับการบันทึกข้อมูลแยกในแต่ละหน้า 
// เมื่อมีการเปลี่ยนหน้า และกลับมาหน้าเดิมอีกครั้ง จะพบค่าที่ผู้ใช้งานค้นหาไว้ จะยังคงค่านั้นอยู่

// ตัวอย่างการใช้งาน
// 1. ประกาศ initial method โดยระบุชื่อหน้า และชื่อ Field ที่ต้องการให้จดจำไว้ (array ของ Id Field) 
// JodJam.initial('RequestManage', ['SearchShipType', 'SearchFishingShipName', 'SearchRequestType', 'SearchStatus', 'SearchResponseStatus', 'startDate', 'endDate']);
// 2. เวลาที่มีการ Search หรือกดปุ่มค้นหาให้เรียก Method Remember เพื่อจำค่าของหน้านั้นๆไว้
// JodJam.remember();
// 3. ในกรณีที่ต้องการล้างค่าสำหรับหน้านั้นๆ ก็ให้เรียก Method forgetMe เพื่อล้างค่าของหน้านั้นๆ
// JodJam.forgetMe();




var JodJam = {
    variables: {
        elements: [],
        pageName: ''
    },    
    initial: function (pageName,elements) {
        JodJam.variables.elements = elements;
        JodJam.variables.pageName = pageName;
        JodJam.get();
    },
    createElement: function (elem) {
        var name = JodJam.variables.pageName + "_" + elem;
        Cookie.set(name, $("#" + elem).val());
    },
    deleteElement: function (elem) {
        var name = JodJam.variables.pageName + "_" + elem;
        Cookie.delete(name);
    },
    getElement: function (elem) {
        var name = JodJam.variables.pageName + "_" + elem;
        var data = Cookie.get(name)
        if (data != "" && data != null) {
            $("#" + elem).val(data).trigger('change');
        }
    },
    remember: function () {
        JodJam.variables.elements.forEach(function (entry) {
            JodJam.createElement(entry);
        });
    },
    get: function () {
        JodJam.variables.elements.forEach(function (entry) {
            JodJam.getElement(entry);
        });
    },
    forgetMe: function () {
        JodJam.variables.elements.forEach(function (entry) {
            JodJam.deleteElement(entry);
        });
    }
}

// js cookie 
var Cookie = {
    get: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    set: function (name, value) {
        this.setWithExpired(name, value, 1);
    },
    delete: function (name) {
        this.setWithExpired(name, "", -1);
    },
    setWithExpired: function setCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }
};