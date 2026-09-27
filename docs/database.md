# تصميم قاعدة البيانات

## الجداول الرئيسية

### Users
يحتوي على بيانات المستخدمين.

- UserID
- FullName
- Email
- Password
- Phone
- UserType

### Hotels
يحتوي على بيانات الفنادق.

- HotelID
- HotelName
- Description
- Location
- Phone
- Email
- Rating

### Rooms
يحتوي على بيانات غرف الفنادق.

- RoomID
- HotelID
- RoomType
- Price
- Capacity
- Status

### Bookings
يحتوي على بيانات الحجوزات.

- BookingID
- UserID
- RoomID
- CheckIn
- CheckOut
- TotalPrice
- BookingStatus

### Services
يحتوي على الخدمات السياحية والفندقية.

- ServiceID
- HotelID
- ServiceName
- Description
- Price

### Payments
يحتوي على بيانات عمليات الدفع.

- PaymentID
- BookingID
- Amount
- PaymentMethod
- PaymentStatus
- PaymentDate

## العلاقات

- المستخدم يمكن أن يمتلك عدة حجوزات.
- الفندق يمكن أن يحتوي على عدة غرف.
- الغرفة تنتمي إلى فندق واحد.
- الحجز يرتبط بمستخدم وغرفة.
- الفندق يمكن أن يقدم عدة خدمات.
- الحجز يمكن أن يرتبط بعملية دفع.

## ملاحظة

يمكن تطوير قاعدة البيانات مستقبلًا بإضافة جداول للتقييمات والإشعارات والعروض والمراجعات والصلاحيات.
