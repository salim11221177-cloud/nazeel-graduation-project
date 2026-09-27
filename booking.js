const bookingForm = document.getElementById("bookingForm");
const bookingResult = document.getElementById("bookingResult");

const hotelInput = document.getElementById("hotel");
const roomInput = document.getElementById("room");

const checkInInput = document.getElementById("checkIn");
const checkOutInput = document.getElementById("checkOut");

const today = new Date().toISOString().split("T")[0];

checkInInput.min = today;
checkOutInput.min = today;


// تغيير تاريخ الوصول
checkInInput.addEventListener("change", function () {

    checkOutInput.min = checkInInput.value;

    if (
        checkOutInput.value &&
        checkOutInput.value <= checkInInput.value
    ) {
        checkOutInput.value = "";
    }

});


// إرسال الحجز
bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const hotel = hotelInput.value;

    const room = roomInput.value;

    const fullName =
        document.getElementById("fullName").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const checkIn =
        checkInInput.value;

    const checkOut =
        checkOutInput.value;

    const guests =
        document.getElementById("guests").value;


    // التحقق من البيانات
    if (
        !hotel ||
        !room ||
        !fullName ||
        !phone ||
        !email ||
        !checkIn ||
        !checkOut ||
        !guests
    ) {

        showMessage(
            "يرجى تعبئة جميع بيانات الحجز.",
            "error"
        );

        return;
    }


    // التحقق من التاريخ
    if (checkOut <= checkIn) {

        showMessage(
            "تاريخ المغادرة يجب أن يكون بعد تاريخ الوصول.",
            "error"
        );

        return;
    }


    // إنشاء رقم حجز
    const bookingNumber =
        "NZL-" +
        Date.now().toString().slice(-8);


    // إنشاء بيانات الحجز
    const booking = {

        bookingNumber: bookingNumber,

        hotel: hotel,

        room: room,

        fullName: fullName,

        phone: phone,

        email: email,

        checkIn: checkIn,

        checkOut: checkOut,

        guests: Number(guests),

        createdAt: new Date().toISOString(),

        status: "مؤكد"

    };


    // قراءة الحجوزات السابقة
    const existingBookings =
        JSON.parse(
            localStorage.getItem("nazeelBookings")
        ) || [];


    // إضافة الحجز الجديد
    existingBookings.push(booking);


    // حفظ الحجز
    localStorage.setItem(
        "nazeelBookings",
        JSON.stringify(existingBookings)
    );


    // عرض نتيجة الحجز
    bookingResult.innerHTML = `

        <div class="booking-success">

            <h3>
                تم تأكيد الحجز بنجاح ✅
            </h3>

            <p>
                رقم الحجز:
                <strong>${bookingNumber}</strong>
            </p>

            <p>
                الفندق:
                <strong>${hotel}</strong>
            </p>

            <p>
                الغرفة:
                <strong>${room}</strong>
            </p>

            <p>
                العميل:
                <strong>${fullName}</strong>
            </p>

            <p>
                تاريخ الوصول:
                <strong>${checkIn}</strong>
            </p>

            <p>
                تاريخ المغادرة:
                <strong>${checkOut}</strong>
            </p>

            <p>
                عدد الأشخاص:
                <strong>${guests}</strong>
            </p>

            <p>
                حالة الحجز:
                <strong>مؤكد</strong>
            </p>

        </div>

    `;


    // تنظيف النموذج
    bookingForm.reset();


    // إعادة إعداد التواريخ
    checkInInput.min = today;

    checkOutInput.min = today;

});


function showMessage(message, type) {

    bookingResult.innerHTML = `

        <div class="booking-${type}">

            <p>
                ${message}
            </p>

        </div>

    `;

}
