
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".btn");
    const coupon = document.querySelector(".coupon");

    btn.addEventListener("click", function () {
        // เลือกข้อความใน input
        coupon.select();

        // สร้างเนื้อหาที่ต้องการคัดลอก
        const contentToCopy = coupon.value;

        // คัดลอกเนื้อหาไปยัง Clipboard
        navigator.clipboard.writeText(contentToCopy)
            .then(function () {
                // สำเร็จ
                console.log("คัดลอกคูปองแล้ว");
                btn.textContent = "คัดลอกคูปองแล้ว";

                // คืนค่าให้ปุ่มเป็นเดิมหลังจาก 3 วินาที
                setTimeout(function () {
                    btn.textContent = "คัดลอก";
                }, 3000);
            })
            .catch(function (error) {
                // เกิดข้อผิดพลาดในการคัดลอก
                console.error("เกิดข้อผิดพลาดในการคัดลอก:", error);
            });
    });
});