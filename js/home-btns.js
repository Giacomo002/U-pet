const seebtnhm = document.getElementById("see-btn-hm");
const home_bot_sec_btn = document.getElementById("home_bot_sec_btn");
const home_top_sec = document.getElementById("home_top_sec");
const home_bot_sec = document.getElementById("home_bot_sec");
const page_title = document.getElementById("page_title");
const home_bot_title_sec = document.getElementById("home_bot_title_sec");
const home_bot_gallery_sec = document.getElementById("home_bot_gallery_sec");
const layaout_section = document.getElementById("layaout_section");

seebtnhm.addEventListener('click', e => {
    // home_bot_sec.style.height = "100%";
    // home_bot_gallery_sec.style.height = "100%";
    layaout_section.style.justifyContent = "flex-end";
    $("#home_bot_title_sec").fadeOut(10);
    $("#home_top_sec").fadeOut(10);

    $("#home_bot_sec").animate({
        height: "100%"
    }, 1000);
    $("#home_bot_gallery_sec").animate({
        height: "100%"
    }, 1000);
    home_bot_gallery_sec.style.marginTop = "5px";
    page_title.textContent = 'Nearby';
    home_bot_sec_btn.style.display = "flex";
});
// home_bot_gallery_sec.addEventListener('scroll', e => {
//     // home_bot_sec.style.height = "100%";
//     // home_bot_gallery_sec.style.height = "100%";
//     layaout_section.style.justifyContent = "flex-end";
//     $("#home_bot_title_sec").fadeOut(10);
//     $("#home_top_sec").fadeOut(10);

//     $("#home_bot_sec").animate({
//         height: "100%"
//     }, 1000);
//     $("#home_bot_gallery_sec").animate({
//         height: "100%"
//     }, 1000);
//     page_title.textContent = 'Nearby';
//     home_bot_sec_btn.style.display = "flex";
// });
home_bot_sec_btn.addEventListener('click', e => {
    home_top_sec.style.display = "flex";
    home_bot_title_sec.style.display = "flex";
    home_bot_sec.style.height = "70%";
    home_bot_gallery_sec.style.height = "100%";
    home_bot_sec_btn.style.display = "none";
    home_bot_gallery_sec.style.marginTop = "20px";
})