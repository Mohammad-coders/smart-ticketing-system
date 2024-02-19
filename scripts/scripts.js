let count = 0;
const seats = document.querySelectorAll(".seat");


for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];
    seat.addEventListener('click', function () {
        let element = seat.innerHTML;
        const selectingSeats = document.getElementById('selecting-seats');
        const p = document.createElement('p');
        p.innerText = element + "Economy" + 550;
        p.classList.add("ml-5");
        p.classList.add("p-3");
        selectingSeats.appendChild(p);

        const inputPhoneNumber = document.getElementById("phoneNumber");
        const inputPhoneNumberValue = inputPhoneNumber.value;
        // console.log(inputPhoneNumberValue);
        const inputPhoneNumberText = parseInt(inputPhoneNumberValue);
        console.log(inputPhoneNumberText);
        const seatCounting = document.getElementById("seat-counting");
        const seatCountingText = seatCounting.innerText;
        const seatNumber = parseInt(seatCountingText);
        const newSeatNumber = seatNumber + 1;

        const totalSeatLeft = document.getElementById("total-seat-left");
        const totalSeatLeftText = totalSeatLeft.innerText;
        const totalSeat = parseInt(totalSeatLeftText);
        const newSeatLeft = totalSeat - 1;

        if (newSeatNumber <= 4) {
            bgColor(element);
            seatCounting.innerText = newSeatNumber;
            totalSeatLeft.innerText = newSeatLeft;

        }

        // *********************************************************************************
        // *********************************************************************************
        // *********************************************************************************
        // *********************************************************************************
        if (newSeatNumber === 1 && inputPhoneNumberText !== null) {
            const nextBtn = document.getElementById("next-btn");
            nextBtn.classList.remove("hidden");
        }
        // *********************************************************************************
        // *********************************************************************************
        // *********************************************************************************
        // *********************************************************************************

        count++;
        if (count > 4) {
            selectingSeats.removeChild(p);
        }

        const totalPrice = document.getElementById("total-price");
        // const totalPriceText = totalPrice.innerText;
        const total = count * 550;
        if (count <= 4) {
            totalPrice.innerText = total;

            const btn = document.getElementById("apply-btn");

            btn.addEventListener('click', function () {
                const couponCode = document.getElementById("discount-tag").value;
                const couponCodeText = couponCode.split(" ").join(" ").toUpperCase();
                if (couponCodeText === "NEW15") {
                    const discountPrice = document.getElementById("discount-price");
                    const discountAmount = total * 0.15;
                    discountPrice.innerText = discountAmount;

                    const applyCoupon = document.getElementById("apply-coupon");
                    applyCoupon.classList.add("hidden");

                    const grandTotalPrice = document.getElementById("grand-total");
                    const grandTotal = total - discountAmount;
                    grandTotalPrice.innerText = grandTotal;
                }
                else if (couponCodeText === "COUPLE20") {
                    const discountPrice = document.getElementById("discount-price");
                    const discountAmount = total * 0.20;
                    discountPrice.innerText = discountAmount;

                    const applyCoupon = document.getElementById("apply-coupon");
                    applyCoupon.classList.add("hidden");

                    const grandTotalPrice = document.getElementById("grand-total");
                    const grandTotal = total - discountAmount;
                    grandTotalPrice.innerText = grandTotal;
                }
                else {
                    const discount = document.getElementById("discount-tag");
                    discount.value = " ";
                    alert("Invalid Coupon Code Try Again");

                }
            })

            const grandTotalPrice = document.getElementById("grand-total");
            grandTotalPrice.innerText = total;

        }



    })
}

const nextbtn = document.getElementById("next-btn");
nextbtn.addEventListener('click', function () {
    const body = document.getElementById('body');
    const success = document.getElementById('success');
    body.classList.add("hidden");
    success.classList.remove("hidden");
});

