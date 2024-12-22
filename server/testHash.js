const bcrypt = require('bcrypt');

const testPassword = 'testname2123456';

(async () => {
    const hashedPassword = await bcrypt.hash(testPassword, 10);
    console.log("Manually Hashed Password:", hashedPassword);
})();
