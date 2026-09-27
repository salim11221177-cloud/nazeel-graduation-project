
const bookingForm = document.getElementById("bookingForm");
const bookingResult = document.getElementById("bookingResult");

const checkInInput = document.getElementById("checkIn");
const checkOutInput = document.getElementById("checkOut");

const today = new Date().toISOString().split("T")[0];

checkInInput.min = today;
checkOutInput.min = today;


// عند تغيير تاريخ الوصول
checkInInput.addEventListener("change", function () {

    checkOutInput.min = checkInInput.value;

    if (
        checkOutInput.value &&
        checkOutInput.value <= checkInInput.value
    ) {
        checkOutInput.value = "";
    }

});


// عند إرسال نموذج الحجز
bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

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
        !fullName ||
        !phone ||
        !email ||
        !checkIn ||
        !checkOut ||
        !guests
    ) {

        showMessage(
            "يرجى تعبئة جميع البيانات.",
            "error"
        );

        return;
    }


    // التحقق من التواريخ
    if (checkOut <= checkIn) {

        showMessage(
            "تاريخ المغادرة يجب أن يكون بعد تاريخ الوصول.",
            "error"
        );

        return;
    }


    // إنشاء رقم الحجز
    const bookingNumber =
        "NZL-" +
        Date.now().toString().slice(-8);


    // بيانات الحجز
    const booking = {

        bookingNumber: bookingNumber,

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


    // إضافة الحجز
    existingBookings.push(booking);


    // حفظ الحجز
    localStorage.setItem(
        "nazeelBookings",
        JSON.stringify(existingBookings)
    );


    // عرض رسالة النجاح
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


    // تفريغ النموذج
    bookingForm.reset();


    // إعادة ضبط التواريخ
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
