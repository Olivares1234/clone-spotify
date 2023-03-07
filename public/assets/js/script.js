const doc = document;
const elem = doc.documentElement;
function runOnScroll() {
    const header = doc.querySelector('.header');

if (elem.scrollTop > 40 && !header.classList.contains("bg-dark")) {
     header.classList.add("bg-dark");
     }

     if (elem.scrollTop < 40 && header.classList.contains("bg-dark")) {
         header.classList.remove("bg-dark");
     }
}	
window.addEventListener("scroll", runOnScroll);

//collapse
const collapseBtn = doc.querySelectorAll('#collapsebutton');
collapseBtn.forEach(btn => {
    btn.addEventListener("click", function(){
        const target = doc.querySelector(this.dataset.target);
        const img = this.querySelector('img');
        if(target.classList.contains("show")) {
            target.classList.remove("show");
            img.style.transform = 'rotate(90deg)';
        } else {
            target.classList.add("show");
            img.style.transform = 'rotate(270deg)';
        }
    })
})