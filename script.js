document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const search = document.querySelector("input[type='text']").value;

    if (search.trim() === "") {
        alert("اكتب اسم الفندق أو المدينة أولاً");
        return;
    }

    alert("جارٍ البحث عن: " + search);
});
