$(document).ready(function () {
  const c1 = Math.floor(Math.random() * 10) + 1;
  const c2 = Math.floor(Math.random() * 10) + 1;
  const c3 = Math.floor(Math.random() * 10) + 1;

  const car1 = document.getElementById("car1");
  const car2 = document.getElementById("car2");
  const car3 = document.getElementById("car3");
  const st = document.getElementById("start");
  st.addEventListener("click", () => {
    var result = [];
    const WIDTH = "100%";

    $("#car1").animate(
      {
        width: WIDTH,
        paddingLeft: 785,
      },
      {
        duration: c1 * 1000,
        specialEasing: {
          width: "linear",
        },
        complete: function () {
          result.push("c1");
          return;
        },
      }
    );

    $("#car2").animate(
      {
        width: WIDTH,
        paddingLeft: 785,
      },
      {
        duration: c2 * 1000,
        specialEasing: {
          width: "linear",
        },
        complete: function () {
          result.push("c2");
          return;
        },
      }
    );

    $("#car3").animate(
      {
        width: WIDTH,
        paddingLeft: 785,
      },
      {
        duration: c3 * 1000,
        specialEasing: {
          width: "linear",
        },
        complete: function () {
          result.push("c3");
          return;
        },
      }
    );
    if(c1 > c2  && c1 > c3) {
        setTimeout(() => {
            $(".result").append(`Vi tri dan dau la <strong>${result[0]}</strong>, xe tiep theo la <strong>${result[1]}</strong> va cuoi cung la <strong>${result[2]}</strong>`);
        },c1*1000 + 1000)
    }else if (c2 > c1 && c2 > c3) {
        setTimeout(() => {
            $(".result").append(`Vi tri dan dau la <strong>${result[0]}</strong>, xe tiep theo la <strong>${result[1]}</strong> va cuoi cung la <strong>${result[2]}</strong>`);
        },c2*1000 + 1000)
    }else {
        setTimeout(() => {
            $(".result").append(`Vi tri dan dau la <strong>${result[0]}</strong>, xe tiep theo la <strong>${result[1]}</strong> va cuoi cung la <strong>${result[2]}</strong>`);
        },c3*1000 + 1000)
    }


  });
  
});

$('#restart').click(function(){
    location.reload();
})