// จงเขียนฟังก์ชันในการคำนวณแต้มจากยอดซื้อขาย โดยทุกยอดซื้อ 100 บาท จะได้ 1 แต้ม หากคำนวณแล้วได้แต้มไม่เป็นจำนวนเต็มให้ปัดเศษลง

// const spend = 1540;

// const point = Math.floor(spend / 100);

// console.log(point);

function calcPoint(spend) {
    return Math.floor(spend / 100);
}

console.log(calcPoint(1540));
console.log(calcPoint(150));
console.log(calcPoint(199));
console.log(calcPoint(201));
