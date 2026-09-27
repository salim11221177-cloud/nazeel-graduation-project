<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>حجز الفندق | نزيل</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <nav>
        <a href="index.html">الرئيسية</a>
        <a href="hotels.html">الفنادق</a>
        <a href="booking.html">الحجز</a>
        <a href="login.html">تسجيل الدخول</a>
        <a href="register.html">إنشاء حساب</a>
    </nav>

    <header>
        <h1>حجز الفندق</h1>
        <p>أدخل بياناتك لإتمام الحجز</p>
    </header>

    <main>

        <section>

            <h2>بيانات الحجز</h2>

            <form id="bookingForm">

                <!-- اختيار الفندق -->
                <label for="hotel">اختيار الفندق</label>

                <select id="hotel" name="hotel" required>
                    <option value="">اختر الفندق</option>
                    <option value="فندق نزيل">فندق نزيل</option>
                    <option value="فندق المكلا">فندق المكلا</option>
                    <option value="فندق حضرموت">فندق حضرموت</option>
                </select>


                <!-- اختيار الغرفة -->
                <label for="room">نوع الغرفة</label>

                <select id="room" name="room" required>
                    <option value="">اختر نوع الغرفة</option>
                    <option value="غرفة مفردة">غرفة مفردة</option>
                    <option value="غرفة مزدوجة">غرفة مزدوجة</option>
                    <option value="جناح">جناح</option>
                </select>


                <!-- اسم العميل -->
                <label for="fullName">الاسم الكامل</label>

                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="أدخل الاسم الكامل"
                    required
                >


                <!-- رقم الهاتف -->
                <label for="phone">رقم الهاتف</label>

                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="أدخل رقم الهاتف"
                    required
                >


                <!-- البريد الإلكتروني -->
                <label for="email">البريد الإلكتروني</label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@email.com"
                    required
                >


                <!-- تاريخ الوصول -->
                <label for="checkIn">تاريخ الوصول</label>

                <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    required
                >


                <!-- تاريخ المغادرة -->
                <label for="checkOut">تاريخ المغادرة</label>

                <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    required
                >


                <!-- عدد الأشخاص -->
                <label for="guests">عدد الأشخاص</label>

                <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    value="1"
                    required
                >


                <!-- زر الحجز -->
                <button type="submit">
                    تأكيد الحجز
                </button>

            </form>


            <!-- نتيجة الحجز -->
            <div id="bookingResult"></div>

        </section>

    </main>


    <footer>
        <p>
            الحجز الإلكتروني والخدمات الفندقية والسياحية
        </p>
    </footer>


    <script src="booking.js"></script>

</body>

</html>
