const bcrypt = require('bcrypt');

// هش ذخیره شده در دیتابیس
const storedHashedPassword = "$2b$10$T3ofbP/icfUUhwuyGl3NR.8n.dTA0HItH3zpkSCUrLF689qRC7Vma";
// رمز عبور ورودی (که کاربر وارد کرده است)
const testPassword = "testname2123456";

(async () => {
    const isMatch = await bcrypt.compare(testPassword, storedHashedPassword);
    console.log("Password Comparison Result:", isMatch); // اگر رمز درست باشد، باید true برگرداند
})();
